import React from 'react';
import './index.scss';
import PanelRow from './PanelRow';
import PanelGroup from './PanelGroup';
const Panel = props => {
  const { style, title, isShowHeader = true, children, ...others } = props;
  return (
    <div className="panel" style={style} {...others}>
      {isShowHeader && <div className="panel-header">{title}</div>}
      <div className="panel-body">{children}</div>
    </div>
  );
};
export { Panel, PanelRow, PanelGroup };
