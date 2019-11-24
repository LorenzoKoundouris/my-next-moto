import styled from 'styled-components';

interface IStylesConfig {
  margin?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
}

interface IButtonProps {
  type?: 'seamless' | 'primary';
  onClick: () => void;
  children: string | JSX.Element;
  stylesConfig?: IStylesConfig;
}

const Button = ({
  type = 'seamless',
  onClick,
  children,
  stylesConfig,
}: IButtonProps) => {
  const ButtonWrapper = buttonMap[type];
  return (
    <ButtonWrapper onClick={onClick} {...stylesConfig}>
      {children}
    </ButtonWrapper>
  );
};

const StyledButton = styled.button<IStylesConfig>`
  /* props styles */
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};

  /* theme styles */
  color: ${({ theme }) => theme.fontColour};

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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
