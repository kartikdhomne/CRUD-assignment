import React, { useState } from "react";
import StudentGrid from "../components/StudentGrid";
import TileView from "../components/TileView";

const HomePage = () => {
  const [view, setView] = useState("grid");
  const [showHorizontalMenu, setShowHorizontalMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleHorizontalMenu = () => {
    setShowHorizontalMenu(!showHorizontalMenu);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (menuItem) => {
    setOpenSubMenu(openSubMenu === menuItem ? null : menuItem);
  };

  return (
    <div>
      <div className="homepage">
        {/* Main Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">CRUD TODO APP</div>
          <button onClick={toggleHorizontalMenu} className="menu-toggle-button">
            ☰ Menu
          </button>
        </nav>

        {/* Horizontal Menu */}
        {showHorizontalMenu && (
          <div className="horizontal-menu">
            <div className="menu-item" onClick={() => toggleSubMenu("item1")}>
              Menu Item 1
              {openSubMenu === "item1" && (
                <div className="submenu">
                  <div className="submenu-item">Submenu 1.1</div>
                  <div className="submenu-item">Submenu 1.2</div>
                </div>
              )}
            </div>

            <div className="menu-item" onClick={() => toggleSubMenu("item2")}>
              Menu Item 2
              {openSubMenu === "item2" && (
                <div className="submenu">
                  <div className="submenu-item">Submenu 2.1</div>
                  <div className="submenu-item">Submenu 2.2</div>
                </div>
              )}
            </div>

            <div className="menu-item" onClick={() => toggleSubMenu("item3")}>
              Menu Item 3
              {openSubMenu === "item3" && (
                <div className="submenu">
                  <div className="submenu-item">Submenu 3.1</div>
                  <div className="submenu-item">Submenu 3.2</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        className="toggle-menu"
        onClick={() => setView(view === "grid" ? "tile" : "grid")}
      >
        Toggle View
      </button>
      {view === "grid" ? <StudentGrid /> : <TileView />}
    </div>
  );
};

export default HomePage;
