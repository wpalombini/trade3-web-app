import * as React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ paddingTop: '25px' }}>
        {/* <Routes /> */}
      </Container>
    </>
  );
};
export default Layout;
