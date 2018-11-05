import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { debounce } from 'lodash';
import MenuBar from '../MenuBar';
import Ts from 'Trans';
import { FormattedMessage } from 'react-intl';
import SearchInput from '../ui/SearchInput';
import './index.scss';

@withRouter //必须放在最前面
@inject('store')
@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appStore;
    this.handleSearchInputChange = debounce(this.handleSearchInputChange, 500);
  }

  handleThemeChange = appTheme => {
    // this.store.setAppTheme(appTheme);
  };

  handleSearchInputChange = value => {
    if (value) {
      //this.store.setSearchClickable(false);
      this.store.getSearchSuggestionList(value);
    }
  };

  handleSearch = (keyword, isToken) => {
    if (isToken) {
      this.props.history.push({
        pathname: `/tokeninfo/${keyword}`,
        state: 'changetoken'
      });
    } else {
      this.props.history.push({
        pathname: `/search/${encodeURIComponent(keyword)}`
      });
    }
  };

  render() {
    const { searchSuggestionList } = this.store;
    return (
      <div className="header">
        <div className="view-width">
          <a href="https://btc.com/" target="_blank" className="logo" />
          <Link to="/">
            <div className="app-name">
              <Ts transKey="pages.root.header.appName" />
            </div>
          </Link>

          <MenuBar onThemeChange={this.handleThemeChange} />
          <div className="header-pull-right">
            <FormattedMessage
              id="pages.root.header.searchPlaceholder"
              defaultMessage="Address/TxHash/Block/Token"
            >
              {msg => (
                <SearchInput
                  onChange={this.handleSearchInputChange}
                  matchItems={searchSuggestionList}
                  onSearch={this.handleSearch}
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
