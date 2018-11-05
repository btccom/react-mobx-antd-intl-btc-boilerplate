import React from 'react';
import { Skeleton } from 'antd';
import './index.scss';
const Card = props => {
  const { style, title, extra, children, cardBodyStyle, loading } = props;
  return (
    <div className="card" style={style}>
      <div className="card-header">
        <div className="card-title">{title}</div>
        {extra && <div className="card-extra link">{extra}</div>}
      </div>
      <div className="card-body" style={cardBodyStyle}>
        <Skeleton loading={loading ? loading : false} active>
          {children}
        </Skeleton>
      </div>
    </div>
  );
};
export default Card;
