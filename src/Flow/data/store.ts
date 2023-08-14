import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

import { initialNodes } from './nodes';
import { initialEdges } from './edges';
import { Attributes, ChoiceNode, InputNode, OutputNode, Values } from '../types';

export type RFState = {
  nodes: Array<InputNode | OutputNode | ChoiceNode>;
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeValues: (nodeId: string, value: string, attribute: Attributes) => void;
  winner: string;
  updateWeightValues: (nodeId: string, value: string) => void;
};


const getScore = (values: Values, weighting: string[]): string => {
  const { score, ...rest } = values;
  const weighted = Object.values(rest).map((value, i) => +value * +weighting[i])
  return String(weighted.reduce((sum, curr) => sum + curr))
};

const getWeighting = (nodes: Array<InputNode | OutputNode | ChoiceNode>): string[] => {
  const InputNodes = nodes.filter((node): node is InputNode => node.type === "customInput")
  return InputNodes.map(node => String(node.data.value))
}

const getWinner = (nodes: Array<InputNode | OutputNode | ChoiceNode>): string => {
  const ChoiceNodes = nodes.filter((node): node is ChoiceNode => node.type === "customChoice")

  const inOrder = ChoiceNodes.map(node => { return { score: node.data.values.score, choice: node.data.label } }).sort((a, b) => +b.score - +a.score)

  if (inOrder[0].score === '0') {
    return 'N/A'
  }

  const winningScore = inOrder[0].score
  let winningChoice: string[] = []

  inOrder.forEach((item) => {
    if (item.score === winningScore) winningChoice.push(item.choice)
  })

  return winningChoice.join(', ')
}

const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes as Node[]) as Array<InputNode | OutputNode | ChoiceNode>,
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  updateNodeValues: (nodeId: string, value: string, attribute: Attributes) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId && node.type === "customChoice") {
          node.data = {
            ...node.data, values: {
              ...node.data.values,
              [attribute]: String(value),
              score: getScore({ ...node.data.values, [attribute]: value }, getWeighting(get().nodes))
            }
          };
        }

        return node;
      }),
    });

    set({
      winner: getWinner(get().nodes)
    })
  },
  updateWeightValues: (nodeId: string, value: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId && node.type === "customInput") {
          node.data = { ...node.data, value: +value };
        }

        return node;
      }),
    });

    set({
      nodes: get().nodes.map((node) => {
        if (node.type === "customChoice") {
          node.data = {
            ...node.data, values: {
              ...node.data.values, score
                : getScore(node.data.values, getWeighting(get().nodes))
            }
          };
        }

        return node;
      }),
    });

    set({
      winner: getWinner(get().nodes)
    })
  },
  winner: 'N/A',
}));

export default useStore;
