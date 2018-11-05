import React from 'react';
import { Skeleton } from 'antd';
import './index.scss';
const TextCard = props => {
  const { title, content, bgType, loading } = props;

  return title.length < 2 ? (
    <div
      className={`card small-card text-card ${
        bgType ? 'card-bg-' + bgType : ''
      }`}
    >
      <Skeleton loading={loading} active>
        <span className="card-title">{title[0]}</span>
        <p style={{ marginTop: 12 }}>
          <span className="card-content">{content[0].main}</span>
          <span className="">{content[0].aside}</span>
        </p>
        <p>
          <span className="card-content">{content[1].main}</span>
          <span className="">{content[1].aside}</span>
        </p>
      </Skeleton>
    </div>
  ) : (
    <div
      className={`card small-card text-card ${
        bgType ? 'card-bg-' + bgType : ''
      }`}
    >
      <Skeleton loading={loading} active>
        <span className="card-title">{title[0]}</span>
        <p>
          <span className="card-content">{content[0].main}</span>
          <span className="">{content[0].aside}</span>
        </p>
        <span className="card-title">{title[1]}</span>
        <p>
          <span className="card-content">{content[1].main}</span>
          <span className="">{content[1].aside}</span>
        </p>
      </Skeleton>
    </div>
  );
};

export default TextCard;
