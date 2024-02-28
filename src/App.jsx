import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';
import Button from './ui/Button';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">App</Heading>
            <div>
              <Button variation="primary" size="medium">
                Click me
              </Button>
              <Button variation="secondary" size="small">
                Special button
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h2">Something</Heading>
            <form>
              <Input type="text" placeholder="Start typing here..." />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
