
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogProvider from './context/BlogContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

const App: React.FC = () => (
  <BlogProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  </BlogProvider>
);

export default App;
