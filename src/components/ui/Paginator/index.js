import React, { Component } from 'react';
import { Pagination } from 'antd';
import { defaultPageSizeOptions } from 'config';
import Ts from 'Trans';
import './index.scss';

const Paginator = ({
  current,
  total,
  pageSize,
  onChange,
  isShowTotal = true,
  maxLimitTip,
  pageSizeOptions,
  isSimple, //only display prev/next
  hideOnSinglePage = false
}) => {
  return (
    <div className="pagination">
      <p className="max-limit-tip">{maxLimitTip}</p>
      <Pagination
        style={{ marginTop: 5 }}
        defaultCurrent={1}
        defaultPageSize={10}
        current={current}
        showQuickJumper
        showSizeChanger
        total={total}
        pageSize={pageSize}
        showTotal={(total, range) => {
          return !maxLimitTip || isShowTotal ? (
            <Ts transKey="pagination.totalInfo" values={{ total }} />
          ) : null;
        }}
        pageSizeOptions={
          pageSizeOptions ? pageSizeOptions : defaultPageSizeOptions
        }
        onChange={onChange}
        onShowSizeChange={(current, size) => {
          onChange(1, size);
        }}
        simple={isSimple}
        hideOnSinglePage={hideOnSinglePage}
      />
    </div>
  );
};

export default Paginator;
