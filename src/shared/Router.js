import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ListPage from '../pages/ListPage';
import RollingPage from '../pages/RollingPage';
import RollingToBgPage from '../pages/RollingToBgPage';
import RollingToMsgPage from '../pages/RollingToMsgPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/rolling" element={<RollingPage />} />
        <Route path="/rollingbg" element={<RollingToBgPage />} />
        <Route path="/rollingmsg" element={<RollingToMsgPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
