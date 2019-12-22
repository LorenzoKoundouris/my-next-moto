// libs
import styled from 'styled-components';
import Link from 'next/link';

interface ILinkProps {
  href: string;
  children: string | JSX.Element;
}

function LinkItem({ children, href }: ILinkProps) {
  return (
    <Link href={href}>
      <StyledAnchorTag>{children}</StyledAnchorTag>
    </Link>
  );
}

// styles
const StyledAnchorTag = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default LinkItem;
