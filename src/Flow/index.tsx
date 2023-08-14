import ReactFlow, {
  Controls,
  Background,
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