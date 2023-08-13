import { memo, type FC } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import styled from 'styled-components';

const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 175px;
  background: #FFF;
  border: 2px solid #303030;
  border-radius: 5px;
  padding: 5px;
`;

const InputHandle = styled(Handle)`
  left: 50%;
`;

const NodeTitle = styled.h2`
  font-size: 18px;
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
  font-size: 14px;
  margin: 0px;
  padding: 0px;
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

interface IInputFieldProps {
  inputId: string;
}

const InputField: FC<IInputFieldProps> = ({ inputId }) => <Input type="text" min="1" max="10" maxLength={1} name={`${inputId}`} id={`${inputId}`}/>;

const InputNode: FC<NodeProps> = ({ data }) => {
  const { label } = data;
  return (
    <NodeContainer>
      <NodeTitle>{label}</NodeTitle>
      <InputFieldContainer>
        <BodyText>Weighting:</BodyText>
        <InputField inputId={`${label}-weighting-input`} />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputHandle
        type="source"
        position={Position.Bottom}
        id={`${label}-handle`}
      />
    </NodeContainer>
  );
};

const ChoiceNode: FC<NodeProps> = ( { data }) => {
  const { label } = data;
  return (
    <NodeContainer>
      <InputHandle
        type="source"
        position={Position.Top}
        id={`${label}-top-handle`}
      />
      <NodeTitle>{label}</NodeTitle>
      <InputFieldContainer>
        <BodyText>Calories:</BodyText>
        <InputField inputId={`${label}-calories-input`} />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Cost:</BodyText>
        <InputField inputId={`${label}-cost-input`} />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Protein:</BodyText>
        <InputField inputId={`${label}-protein-input`} />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputFieldContainer>
        <BodyText>Taste:</BodyText>
        <InputField inputId={`${label}-taste-input`} />
        <BodyText>/ 10</BodyText>
      </InputFieldContainer>
      <InputHandle
        type="source"
        position={Position.Bottom}
        id={`${label}-bottom-handle`}
      />
    </NodeContainer>
  );
};

const OutputNode: FC<NodeProps> = ({ data }) => {
  const { label, result } = data;
  return (
    <NodeContainer>
      <InputHandle
        type="source"
        position={Position.Top}
        id={`${label}-top-handle`}
      />
      <NodeTitle>Winner</NodeTitle>
      <BodyText>{`${result}`}</BodyText>
    </NodeContainer>
  );
};

export const CustomNodes = {
  Input: memo(InputNode),
  Choice: memo(ChoiceNode),
  Output: memo(OutputNode),
};