import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
const BreadcrumbBar = props => {
  const { title, crumbs } = props;

  return (
    <div className="breadcrumbbar">
      <div className="view-width">
        <div className="breadcrumbbar-title">{title}</div>
        <div className="breadcrumb">
          <Breadcrumb>
            {crumbs.map(item => {
              if (item.link) {
                return (
                  <Breadcrumb.Item key={item.text}>
                    <Link to={`${item.link}`}>{item.text}</Link>
                  </Breadcrumb.Item>
                );
              } else {
                return (
                  <Breadcrumb.Item key={item.text}>{item.text}</Breadcrumb.Item>
                );
              }
            })}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};
export default BreadcrumbBar;
