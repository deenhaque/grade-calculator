import styled from 'styled-components';

function Header() {
  const StyledHeader = styled.header`
    color: white;
    padding: 0px 50px 0px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const StyledCreatorText = styled.p`
    padding: 0px;
    margin: 0px;
  `;
  const StyledCreatorLink = styled.a`
    padding: 0px;
    margin: 0px;
    color: white;
  `;
  return (
    <StyledHeader>
      <h1>
          Grade Calculator
      </h1>
      <div>

      <StyledCreatorText>Created By:</StyledCreatorText>
      <StyledCreatorText>Deen Haque</StyledCreatorText>
      <StyledCreatorLink href="https://ericphamep.github.io/">Eric Pham</StyledCreatorLink>
      </div>
    </StyledHeader>
  );
}

export default Header;
