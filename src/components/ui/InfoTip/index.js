import React from 'react';
import { Tooltip } from 'antd';
const InfoTip = ({ title }) => {
  return (
    <Tooltip title={title}>
      <i className="cell-icon info-icon-black" />
    </Tooltip>
  );
};
export default InfoTip;
