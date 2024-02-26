import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';
import Button from './ui/Button';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>App</H1>
        <Button>Click me</Button>
        <Input type="text" placeholder="Start typing here..." />
      </StyledApp>
    </>
  );
}

export default App;
