import { Node } from 'reactflow';

export type Values = {
  calories: string;
  cost: string;
  protein: string;
  taste: string;
  score: string;
};

export type Attributes = 'calories' | 'cost' | 'protein' | 'taste'

export type InputNode = Node<{ label: string, value: number }, 'customInput'>

export type ChoiceNode = Node<{ label: string, values: Values }, 'customChoice'>

export type OutputNode = Node<Record<string, never>, 'customOutput'>
