import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: green;
  padding: 1.2rem 4.8rem;
  bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
