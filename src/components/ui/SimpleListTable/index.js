import React, { Component } from 'react';
import { Table } from 'antd';
import Ts from 'Trans';
import './index.scss';

const SimpleListTable = props => {
  return (
    <div className="simple-list-table">
      <Table pagination={false} size="small" showHeader={false} {...props} />
    </div>
  );
};

export default SimpleListTable;
