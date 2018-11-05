import React from 'react';
import { Skeleton } from 'antd';
import './index.scss';
const ChartCard = props => {
  const {
    title,
    content,
    children,
    footer,
    aside,
    bgType,
    isShowRateColor,
    loading
  } = props;
  let textColorCls = '';
  let asideStr = aside;
  if (isShowRateColor) {
    if (aside.indexOf('-') >= 0) {
      textColorCls = 'decline-text';
      asideStr = ` (${aside})`;
    } else {
      textColorCls = 'increase-text';
      asideStr = ` (+${aside})`;
    }
  }

  return (
    <div
      className={`card small-card chart-card ${
        bgType ? 'card-bg-' + bgType : ''
      }`}
    >
      <Skeleton loading={loading} active>
        <span className="card-title">{title}</span>
        <div className="card-body">
          <span className="card-content">{content}</span>
          <span className="aside">
            <span className={textColorCls}>{asideStr}</span>
          </span>
          <div>{props.children}</div>
        </div>
        <div className="card-footer">
          <span>{footer.left}</span>
          <span>{footer.right}</span>
        </div>
      </Skeleton>
    </div>
  );
};

export default ChartCard;
