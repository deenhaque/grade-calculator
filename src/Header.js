import logo from './logo.svg';
import styled from 'styled-components';

function Header() {
  const StyledHeader = styled.div`
    background-color: #0D1821;
    color: white;
    padding: 50px;
  `;
  const StyledFloatLeft = styled.span`
    float: left;
  `;
  const StyledFloatRight = styled.span`
    float: right;
  `;
  return (
    <StyledHeader>
      <header className="Header-header">
          <StyledFloatLeft>
            <img src={logo} className="Header-logo" alt="logo" width="50" height="50"  />
          </StyledFloatLeft>
          <h1>
            <StyledFloatLeft>
              Grades Calculator
            </StyledFloatLeft>
          </h1>
          <p>
            <StyledFloatRight>
              By Deen and Eric
            </StyledFloatRight>
          </p>
      </header>
    </StyledHeader>
  );
}

export default Header;
