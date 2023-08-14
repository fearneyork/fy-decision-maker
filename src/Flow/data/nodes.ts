import { Node } from 'reactflow';

// export default [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Input' },
//     position: { x: 250, y: 25 },
//   },

//   {
//     id: '2',
//     data: { label: 'Default' },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Output' },
//     position: { x: 250, y: 250 },
//   },
// ] as Node[];

export const initialInputNodes: Node[] = [
  {
    id: 'i1',
    type: 'customInput',
    data: { label: 'Calories', value: 1 },
    position: { x: 0, y: 100 },
  },
  {
    id: 'i2',
    type: 'customInput',
    data: { label: 'Cost', value: 1 },
    position: { x: 200, y: 100 },
  },
  {
    id: 'i3',
    type: 'customInput',
    data: { label: 'Protein', value: 1 },
    position: { x: 400, y: 100 },
  },
  {
    id: 'i4',
    type: 'customInput',
    data: { label: 'Taste', value: 1 },
    position: { x: 600, y: 100 },
  },
];

export const initialChoiceNodes: Node[] = [
  {
    id: 'c1',
    type: 'customChoice',
    data: { label: 'Lasagne', values: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' } },
    position: { x: 0, y: 300 },
  },
  {
    id: 'c2',
    type: 'customChoice',
    data: { label: 'Ham and Cheese Toastie', values: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' } },
    position: { x: 200, y: 300 },
  },
  {
    id: 'c3',
    type: 'customChoice',
    data: { label: 'Fried Chicken', values: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' } },
    position: { x: 400, y: 300 },
  },
  {
    id: 'c4',
    type: 'customChoice',
    data: { label: 'Qunioa Salad', values: { calories: '0', cost: '0', protein: '0', taste: '0', score: '0' } },
    position: { x: 600, y: 300 },
  },
];

export const initialOutputNode: Node = {
  id: 'o1',
  type: 'customOutput',
  data: { choiceNodes: [...initialChoiceNodes] },
  position: { x: 300, y: 600 },
};

export const initialNodes = [...initialInputNodes, ...initialChoiceNodes, initialOutputNode];