import styled from 'styled-components';

interface IButtonProps {
  type?: 'seamless' | 'primary';
  onClick: () => void;
  children: string | JSX.Element;
}

const Button = ({ type = 'seamless', onClick, children }: IButtonProps) => {
  const ButtonWrapper = buttonMap[type];
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

const StyledButton = styled.button`
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
