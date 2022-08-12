import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../../components/ui/layout/Layout';
import Blog from '../../pages/blog';
import Home from '../../pages/home';
import NotFound from '../../pages/not-found';
import Pricing from '../../pages/pricing';
import Products from '../../pages/products';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
