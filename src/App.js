import Grades from './Grades';
import Header from './Header';
import styled from 'styled-components';

function App() {
  const StyledBody = styled.div`
    background-color: #A0C1D1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;
  return (
    <StyledBody>
      <Header />
      <Grades />
    </StyledBody>
  );
}

export default App;
