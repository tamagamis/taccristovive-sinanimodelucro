import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MinistryPage from './pages/MinistryPage';
import Blog from './pages/Blog';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ministry/:id" element={<MinistryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;