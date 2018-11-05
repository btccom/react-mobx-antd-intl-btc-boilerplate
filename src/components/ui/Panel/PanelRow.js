import React from 'react';
import './index.scss';
const PanelRow = props => {
  const { label, value, style, isEqSpace, children, weights = [] } = props;
  return (
    <div className="panel-row" style={style}>
      <div
        className="panel-row-label"
        style={weights.length > 1 ? { flex: weights[0] } : {}}
      >
        {label && <label>{label}:</label>}
      </div>
      <div
        className={`panel-row-value ${isEqSpace ? 'eq-space' : ''}`}
        style={weights.length > 1 ? { flex: weights[1] } : {}}
      >
        {value}
        {children}
      </div>
    </div>
  );
};
export default PanelRow;
