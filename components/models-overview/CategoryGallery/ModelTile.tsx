import IModel from '../../../interfaces/IModel';

// libs
import styled from 'styled-components';

interface IModelTileProps {
  model: IModel;
}

function ModelTile({ model }: IModelTileProps) {
  return (
    <StyledModelTile>
      <Thumbnail
        alt='model-thumbnail'
        src={`/static/img/models/${model.thumbnail}`}
      />

      <Details>
        <ModelName>{model.name}</ModelName>
        <Description>{model.shortDescription}</Description>
        <Bar />
      </Details>
    </StyledModelTile>
  );
}

const StyledModelTile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: 300px;
  background: ${props => props.theme.primaryColour};
  overflow: hidden;
  margin: 10px 0;

  @media screen and (min-width: 300px) {
    height: 350px;
  }

  @media screen and (min-width: 350px) {
    margin: 10px;
  }

  @media screen and (min-width: 450px) {
    max-width: 200px;
    height: 300px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 300px;
    height: 400px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  transition: transform 0.5s ease;

  ${StyledModelTile}:hover & {
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  position: relative;
  flex-grow: 1;
  padding: 20px;
`;

const ModelName = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const Bar = styled.div`
  position: absolute;
  height: 5px;
  bottom: 20px;
  right: 20px;
  left: 20px;
  background: #919191;

  ${StyledModelTile}:hover & {
    background: ${props => props.theme.highlightColour};
  }
`;

export default ModelTile;
