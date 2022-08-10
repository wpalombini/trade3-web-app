import * as React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ paddingTop: '25px' }}>
        {/* <Routes /> */}
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
