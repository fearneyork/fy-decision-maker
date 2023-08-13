import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  type Connection,
  type Edge,
  type Node,
} from 'reactflow';
import {CustomNodes} from './CustomNode';
import 'reactflow/dist/style.css';
import './Flow.css';

// const generateInitialEdges = (initialInputNodes: Node[], initialChoiceNodes: Node[]): Edge[] => {
// const initialEdges = initialInputNodes.map((inputNode) => {
//   console.log('NODE', inputNode);
// // { id: `e-i1-c1`, source: `i1`, target: `c1`, animated: false, label: `I'm a label`, type: `smooth-step` },
// });
// console.log(initialEdges);
// return [
//   { id: `e-i1-c1`, source: `1`, target: `c1`, animated: false, label: `I'm a label`, type: `smooth-step` },
//   // { id: `e-i1-c2`, source: `i1`, target: `c2`, animated: false, label: `I'm a label`, type: `smooth-step` },
//   // { id: `e-i1-c3`, source: `i1`, target: `c2`, animated: false, label: `I'm a label`, type: `smooth-step` },
//   // { id: `e-i1-c4`, source: `i1`, target: `c2`, animated: false, label: `I'm a label`, type: `smooth-step` },
// ]
// };

const nodeTypes = {
  customInput: CustomNodes.Input,
  customChoice: CustomNodes.Choice,
  customOutput: CustomNodes.Output,
};

const initialInputNodes: Node[] = [
  {
    id: '1',
    type: 'customInput',
    data: { label: 'Calories' },
    position: { x: 0, y: 150 },
  },
  {
    id: '2',
    type: 'customInput',
    data: { label: 'Cost' },
    position: { x: 200, y: 150 },
  },
    {
    id: '3',
    type: 'customInput',
    data: { label: 'Protein' },
    position: { x: 400, y: 150 },
  },
  {
    id: '4',
    type: 'customInput',
    data: { label: 'Taste' },
    position: { x: 600, y: 150 },
  },
];

const initialChoiceNodes: Node[] = [
  {
    id: '11',
    type: 'customChoice',
    data: { label: 'Lasagne' },
    position: { x: 0, y: 300 },
  },
    {
    id: '12',
    type: 'customChoice',
    data: { label: 'Ham and Cheese Toastie' },
    position: { x: 200, y: 300 },
  },
    {
    id: '13',
    type: 'customChoice',
    data: { label: 'Fried Chicken' },
    position: { x: 400, y: 300 },
  },
    {
    id: '14',
    type: 'customChoice',
    data: { label: 'Qunioa Salad' },
    position: { x: 600, y: 300 },
  },
];

const initialOutputNode: Node =   {
    id: '21',
    type: 'customOutput',
    data: { label: 'Output' },
    position: { x: 300, y: 550 },
  }

const initialEdges: Edge[] = [
  { id: `e-1-11`, source: `1`, target: `11`, animated: false, label: `I'm a label`, type: `smooth-step` },
  { id: `e-1-12`, source: `1`, target: `12`, animated: false, label: `I'm a label`, type: `smooth-step` },
  { id: `e-1-13`, source: `1`, target: `13`, animated: false, label: `I'm a label`, type: `smooth-step` },
  { id: `e-1-14`, source: `1`, target: `14`, animated: false, label: `I'm a label`, type: `smooth-step` },
];

export const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([...initialInputNodes, ...initialChoiceNodes, initialOutputNode]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
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