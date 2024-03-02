import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  background-color: orangered;
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
