import { Avatar } from '@mui/material';
import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
          alt="backgroung img"
          className="sidebar__img"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Omekagu Chukwuebuka</h2>
        <h4>OmekaguJ@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <h5>Who viewed you</h5>
          <p className="sidebar__statNumber">2,673</p>
        </div>
        <div className="sidebar__stat">
          <h5>Views on post</h5>
          <p className="sidebar__statNumber">7,000</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        <SidebarItem topic="reactjs" />
        <SidebarItem topic="programming" />
        <SidebarItem topic="computer enginneering" />
        <SidebarItem topic="design" />
        <SidebarItem topic="developer" />
      </div>
    </div>
  );
};

export default Sidebar;
