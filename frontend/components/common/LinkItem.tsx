import styled from 'styled-components';

import Link from 'next/link';

interface ILinkProps {
  href: string;
  children: string | JSX.Element;
}

const LinkItem = ({ children, href }: ILinkProps) => (
  <Link href={href}>
    <StyledAnchorTag>{children}</StyledAnchorTag>
  </Link>
);

const StyledAnchorTag = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export default LinkItem;
