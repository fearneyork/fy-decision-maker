import { ChangeEvent, useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  type Connection,
  type Edge,
  type Node,
  applyNodeChanges,
} from 'reactflow';
import { CustomNodes } from './CustomNode';
import 'reactflow/dist/style.css';
import './Flow.css';

import useStore, { RFState } from './data/store';
import { shallow } from 'zustand/shallow';

const nodeTypes = {
  customInput: CustomNodes.Input,
  customChoice: CustomNodes.Choice,
  customOutput: CustomNodes.Output,
};

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});


export const Flow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);

  // const [choices, setChoices] = useState({
  //   lasagne: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' },
  //   toastie: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' },
  //   chicken: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' },
  //   salad: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' }
  // })

  // const [weight, setWeight] = useState({ calories: '10', cost: '10', protein: '10', taste: '10' })

  // const weightChangeHandler = (name: string) => {
  //   return (event: ChangeEvent<HTMLInputElement>) => {
  //     setWeight({ ...weight, [name]: event.target.value });
  //   };
  // };

  // const [nodes, setNodes, onNodesChange] = useNodesState([...initialInputNodes, ...initialChoiceNodes, initialOutputNode]);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(generateInitialEdges(initialInputNodes, initialChoiceNodes, initialOutputNode));


  // const choicesChangeHandler = (name: string, value: string,) => {
  //   console.log('choices', name, value);

  //   return (event: ChangeEvent<HTMLInputElement>) => {
  //     console.log('in return', event.target.value);

  //     // setChoices({
  //     //   ...choices,
  //     //   'toastie': {
  //     //     ...choices.toastie,
  //     //     'calories': '3'
  //     //   }

  //     // }
  //     setChoices({
  //       ...choices,
  //       'toastie': {
  //         ...choices.toastie,
  //         'calories': event.target.value
  //       }

  //     }
  //     );
  //     applyNodeChanges(changes, nodes)
  //   };
  // };

  // const onConnect = useCallback(
  //   (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges]
  // );

  return (
    <div className="Flow">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}

      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}