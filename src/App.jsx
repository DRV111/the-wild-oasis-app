import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';
import Button from './ui/Button';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">App</Heading>
        <Button>Click me</Button>
        <Heading as="h2">Something</Heading>
        <Input type="text" placeholder="Start typing here..." />
      </StyledApp>
    </>
  );
}

export default App;
