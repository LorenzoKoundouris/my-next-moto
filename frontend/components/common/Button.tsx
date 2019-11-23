import styled from 'styled-components';

interface IButtonProps {
  type?: 'seamless' | 'primary';
  onClick: () => void;
  children: string | JSX.Element;
  margin?: string;
  padding?: string;
}
const Button = ({
  type = 'seamless',
  onClick,
  children,
  margin,
  padding,
}: IButtonProps) => {
  const ButtonWrapper = buttonMap[type];
  return (
    <ButtonWrapper onClick={onClick} margin={margin} padding={padding}>
      {children}
    </ButtonWrapper>
  );
};

const StyledButton = styled.button<IButtonProps>`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  color: ${props => props.theme.fontColour};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

export const SeamlessButton = styled(StyledButton)`
  background-color: transparent;
  outline: 0;
  border: 0;
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.primaryColour};
  border-color: ${props => props.theme.secondaryColour};
`;

const buttonMap = {
  seamless: SeamlessButton,
  primary: PrimaryButton,
};

export default Button;
