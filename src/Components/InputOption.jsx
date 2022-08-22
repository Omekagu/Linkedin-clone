import React from 'react';

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      {title}
    </div>
  );
};

export default InputOption;
