import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Ts from 'Trans';

import './index.scss';

@withRouter //必须放在最前面
@inject('store')
@observer
export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.demoStore;
    this.appStore = this.props.store.appStore;
  }

  render() {
    const { lang } = this.appStore;

    return (
      <div className="view-width page-container">
        <h2>
          <Ts transKey="pages.demo.title" />
        </h2>
      </div>
    );
  }
}
