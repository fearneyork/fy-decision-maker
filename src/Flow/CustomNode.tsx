import { memo, type FC } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';
import useStore from './data/store';

const SOURCEFUL_GREY = `#404044`;
const SOURCEFUL_BLUE = `#005AE1`;

const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 175px;
  background: #FFF;
  border: 2px solid ${SOURCEFUL_BLUE};
  border-radius: 8px;
  padding: 5px;
  box-shadow: rgba(64, 64, 68, 0.3) 0px 1px 8px 0px;
`;

const InputHandle = styled(Handle)`
  left: 50%;
`;

const NodeTitle = styled.h2`
  font-size: 20px;
  color: ${SOURCEFUL_GREY};
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 10px;
  `;

const BodyText = styled.p`
  font-size: 16px;
  color: ${SOURCEFUL_GREY};
  margin: 0px;
  padding: 0px;
  text-align: center;
  `;

const Input = styled.input`
  width: 20px;
  height 25px;
  background: #d3d3d3; 
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
`;

const InputNode: FC<NodeProps> = ({ id, data }) => {
  const updateWeightValues = useStore((state) => state.updateWeightValues);
  const { label, value } = data;
  return (
    <NodeContainer>
      <NodeTitle>{label}</NodeTitle>
      <InputFieldContainer>
        <BodyText>Weighting:</BodyText>
        <Input type="number" defaultValue={value} onChange={(evt) => updateWeightValues(id, evt.target.value)} min={0.1} max={1} maxLength={2} placeholder='1' step={0.1} />
        <BodyText>/ 1</BodyText>
      </InputFieldContainer>
      <InputHandle
        type="source"
        position={Position.Bottom}
      />
    </NodeContainer>
  );
};

const ChoiceNode: FC<NodeProps> = ({ id, data }) => {
  const updateNodeValues = useStore((state) => state.updateNodeValues);
  const { label, values } = data;

  return (
    <NodeContainer>
      <InputHandle
        type="target"
        position={Position.Top}
      />
      <NodeTitle>{label}</NodeTitle>
      <InputFieldContainer>
        <BodyText>Calories:</BodyText>
        <Input type="number" defaultValue={values.calories} onChange={(evt) => updateNodeValues(id, evt.target.value, 'calories')} min={0} max={10} maxLength={2} placeholder='10' />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Cost:</BodyText>
        <Input type="number" value={values.cost} onChange={(evt) => updateNodeValues(id, evt.target.value, 'cost')} min={0} max={10} maxLength={2} placeholder='10' />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Protein:</BodyText>
        <Input type="number" value={values.protein} onChange={(evt) => updateNodeValues(id, evt.target.value, 'protein')} min={0} max={10} maxLength={2} placeholder='10' />

        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Taste:</BodyText>
        <Input type="number" value={values.taste} onChange={(evt) => updateNodeValues(id, evt.target.value, 'taste')} min={0} max={10} maxLength={2} placeholder='10' />

        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <BodyText >{`Score: ${values.score}`}</BodyText>
      <InputHandle
        type="source"
        position={Position.Bottom}
      />
    </NodeContainer>
  );
};

const OutputNode: FC<NodeProps> = ({ data }) => {
  const winner = useStore((state) => state.winner)
  return (
    <NodeContainer>
      <InputHandle
        type="target"
        position={Position.Top}
      />
      <NodeTitle>🥇 Winner 🥇</NodeTitle>
      <BodyText>{`${winner}`}</BodyText>
    </NodeContainer>
  );
};

export const CustomNodes = {
  Input: memo(InputNode),
  Choice: memo(ChoiceNode),
  Output: memo(OutputNode),
};