import { keyframes } from 'styled-components';

export const moveUpAnimation = (from: string, to: string) => keyframes`
  from {
    transform: translateY(${from});
  }
  to {
    transform: translateY(${to});
  }
`;
