import { Edge, type Node } from 'reactflow';
import { initialChoiceNodes, initialInputNodes, initialOutputNode } from './nodes';

export default [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
] as Edge[];

const generateInitialEdges = (initialSourceNodes: Node[], initialTargetNodes: Node[], initialOutputNode: Node): Edge[] => {
  const initialEdges = initialTargetNodes.map((targetNode) => {
    const targetNodes = initialSourceNodes.map((sourceNode) => {
      return {
        id: `e-${sourceNode.id}-${targetNode.id}`,
        source: sourceNode.id,
        target: targetNode.id,
      };
    });
    targetNodes.push({
      id: `e-${targetNode.id}-${initialOutputNode.id}`,
      source: targetNode.id,
      target: initialOutputNode.id,
    });
    return targetNodes
  }).flat();
  return initialEdges;
};

export const initialEdges = generateInitialEdges(initialInputNodes, initialChoiceNodes, initialOutputNode);