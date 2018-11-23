import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Ts from 'Trans';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

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
          <FormattedMessage
            id="pages.demo.multText"
            values={{ react: <b style={{ color: '#0CC' }}>Eric</b> }}
          />

          <hr style={{ marginTop: 15, marginBottom: 15 }} />

          <FormattedHTMLMessage
            id="pages.demo.multText"
            values={{ react: 'Eric' }}
          />
        </h2>
      </div>
    );
  }
}
