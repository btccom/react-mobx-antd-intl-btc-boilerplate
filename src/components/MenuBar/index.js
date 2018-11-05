import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Switch } from 'antd';
import Ts from 'Trans';
import './index.scss';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
@withRouter
class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [location.pathname === '/' ? '/home' : location.pathname]
    };
  }

  handleThemeChange = checked => {
    this.props.onThemeChange(checked ? 'light' : 'dark');
  };

  handleMenuClick = ({ item, key, keyPath }) => {
    this.setState({ selectedKeys: keyPath });
  };

  static pathMapping(path) {
    const menuDisplayPaths = {
      '/': '/',
      '/home': '/home',
      '/blockchain': '/blockchain',
      '/blocks': '/blocks',
      '/txns': '/txns',
      '/accounts': '/accounts',
      '/tokens': '/tokens',
      '/blockinfo': '/blocks',
      '/txinfo': '/txns',
      '/accountinfo': '/accounts',
      '/tokeninfo': '/tokens'
    };
    let find = menuDisplayPaths[path];
    if (find) {
      return find;
    } else {
      return '/';
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let pathname = nextProps.location.pathname;
    if (pathname.lastIndexOf('/') > 1) {
      pathname = pathname.substring(0, pathname.lastIndexOf('/'));
    }
    let mappedPath = MenuBar.pathMapping(pathname);
    return {
      selectedKeys: [mappedPath === '/' ? '/home' : mappedPath]
    };
  }

  render() {
    return (
      <div className="menubar-container">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={this.state.selectedKeys}
          selectedKeys={this.state.selectedKeys}
          onClick={this.handleMenuClick}
        >
          <Menu.Item key="/home">
            <Link to="/home">
              <div>
                <Ts transKey="pages.root.menu.home" />
              </div>
            </Link>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Ts transKey="pages.root.menu.blockchain" />
                <span className="menu-arrow" />
              </span>
            }
            popupOffset={[0, 0]}
            key="/blockchain"
          >
            <Menu.Item key="/blocks">
              <Link to="/blocks">
                <div>
                  <Ts transKey="pages.root.menu.blocks" />
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="/txns">
              <Link to="/txns">
                <div>
                  <Ts transKey="pages.root.menu.transactions" />
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="/accounts">
              <Link to="/accounts">
                <div>
                  <Ts transKey="pages.root.menu.accounts" />
                </div>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/tokens">
            <Link to="/tokens">
              <div>
                <Ts transKey="pages.root.menu.token" />
              </div>
            </Link>
          </Menu.Item>
        </Menu>
        {/* <div className="theme-switch">
          <Switch defaultChecked onChange={this.handleThemeChange} />
        </div> */}
      </div>

      // </Sider>
    );
  }
}

export default MenuBar;
