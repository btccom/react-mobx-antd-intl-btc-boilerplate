import React from 'react';
import './index.scss';
const PanelGroup = props => {
  const { children, style } = props;
  return (
    <div className="panel-group" style={style}>
      {children}
    </div>
  );
};
export default PanelGroup;
