import { ChoiceNode, InputNode, OutputNode } from '../types';

export const initialInputNodes: InputNode[] = [
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

export const initialChoiceNodes: ChoiceNode[] = [
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

export const initialOutputNode: OutputNode = {
  id: 'o1',
  type: 'customOutput',
  data: {},
  position: { x: 300, y: 600 },
};

export const initialNodes = [...initialInputNodes, ...initialChoiceNodes, initialOutputNode];