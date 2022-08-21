import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../../components/ui/layout/Layout';
import BlogPage from '../../pages/blog';
import HomePage from '../../pages/home';
import NotFoundPage from '../../pages/not-found';
import PricingPage from '../../pages/pricing';
import ProductsPage from '../../pages/products';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
