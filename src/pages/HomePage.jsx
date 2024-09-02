// src/pages/HomePage.js
import React, { useState } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import HorizontalMenu from '../components/HorizontalMenu';
import StudentGrid from '../components/StudentGrid';
import TileView from '../components/TileView';

const HomePage = () => {
  const [view, setView] = useState('grid'); 

  return (
    <div>
      <HamburgerMenu />
      <HorizontalMenu />
      <button className="toggle-menu" onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}>
        Toggle View
      </button>
      {view === 'grid' ? <StudentGrid /> : <TileView />}
    </div>
  );
};

export default HomePage;
