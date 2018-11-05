import React from 'react';
import './index.scss';
import { Tooltip } from 'antd';
const DoughnuLengendItem = props => {
  const {
    seq,
    name,
    hash,
    value,
    symbolColor,
    icon,
    isLargeSizeValue,
    tooltipContainerId
  } = props;
  let isHaveName = !!name;
  let name_str = isHaveName ? name : hash.substr(0, 8) + '...';
  return (
    <div className="doughnulegend-item">
      <span style={{ width: 24, textAlign: 'right' }}>{seq}</span>
      <span
        className="legend-icon"
        style={icon ? { backgroundImage: `url(${icon})` } : null}
      />
      <Tooltip
        title={name_str}
        getPopupContainer={() => document.getElementById(tooltipContainerId)}
      >
        <span className={`legend-name ${isHaveName ? 'trunckstr' : ''}`}>
          <i className="symbol" style={{ backgroundColor: symbolColor }} />{' '}
          {name_str}
        </span>
      </Tooltip>
      <span
        className={`lengend-value ${
          isLargeSizeValue ? 'large-size-value' : ''
        }`}
      >
        {value}
      </span>
    </div>
  );
};
export default DoughnuLengendItem;
