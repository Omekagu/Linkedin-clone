import React from 'react';
import { Avatar } from '@mui/material';

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3>{title}</h3>
    </div>
  );
};

export default HeaderOption;
