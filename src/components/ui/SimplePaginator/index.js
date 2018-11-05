import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { debounce } from 'lodash';
import Ts from 'Trans';
import './index.scss';

const pageSizeConfig = [10, 25, 50, 100, 150];

class SimplePaginator extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   pageSize: this.props.defaultPageSize,
    //   current: 1
    // };
    this.state = {
      selectedPageSize: this.props.defaultPageSize,
      selectedCurrent: this.props.defaultCurrent,
      clickType: 'next' //当前点击键的类型
    };
    this.notifyPageChange = debounce(this.notifyPageChange, 300);
  }

  getPageSizeMenu = () => {
    return (
      <Menu
        onClick={this.handlePageSizeChange}
        selectedKeys={[this.state.selectedPageSize.toString()]}
      >
        {pageSizeConfig.map(item => {
          return <Menu.Item key={item}>{item}</Menu.Item>;
        })}
      </Menu>
    );
  };

  notifyPageChange = (current, pageSize) => {
    const { total, maxPageLimit, onChange } = this.props;
    const { selectedCurrent, selectedPageSize, clickType } = this.state;
    const maxPageCountLimit = this.getMaxPageCount(
      total,
      maxPageLimit,
      selectedPageSize
    );
    let maxCurrent =
      selectedCurrent > maxPageCountLimit ? maxPageCountLimit : selectedCurrent;
    onChange(maxCurrent, selectedPageSize, clickType);
  };

  handlePageSizeChange = e => {
    this.setState({ selectedPageSize: e.key - 0, selectedCurrent: 1 }, () => {
      this.notifyPageChange();
    });
  };

  handlePageChange = type => {
    //let { currentPage, pageSize } = this.state;
    let { total, current, pageSize, maxPageLimit } = this.props;
    let totalPage = Math.ceil(total / pageSize);
    switch (type) {
      case 'first':
        current = 1;
        break;
      case 'last':
        current = this.getMaxPageCount(
          this.props.total,
          maxPageLimit,
          pageSize
        ); //totalPage;
        break;
      case 'previous':
        current = current - 1;
        break;
      case 'next':
        current = current + 1;
        break;
      default:
        current = 1;
    }

    this.setState({ selectedCurrent: current, clickType: type }, () => {
      this.notifyPageChange();
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedPageSize: nextProps.pageSize,
      selectedCurrent: nextProps.current
    });
  }

  getMaxPageCount = (total, maxPageLimit, pageSize) => {
    if (!maxPageLimit || total <= maxPageLimit) {
      return Math.ceil(total / pageSize);
    }
    return Math.ceil(maxPageLimit / pageSize);
  };

  render() {
    const { total, current, pageSize, maxPageLimit } = this.props;
    let totalPage = Math.ceil(total / pageSize);
    let maxPageCount = this.getMaxPageCount(total, maxPageLimit, pageSize);
    const isDisablePrevious = current === 1;
    const isDisableNext = current === maxPageCount;
    return (
      <ul className="simple-pagination">
        <li
          className={`page-first ${isDisablePrevious ? 'disabled' : ''}`}
          onClick={() => {
            this.handlePageChange('first');
          }}
        >
          <Ts transKey="pagination.first" />
        </li>
        <li className="page-display">
          <div
            className={`page-previous ${isDisablePrevious ? 'disabled' : ''}`}
            onClick={() => {
              if (!isDisablePrevious) this.handlePageChange('previous');
            }}
          >
            <i>&lt;</i>
          </div>
          <div className="page-num">
            <Ts
              transKey="pagination.currentPage"
              values={{
                current: current,
                total: maxPageCount
              }}
            />
          </div>
          <div
            className={`page-next ${isDisableNext ? 'disabled' : ''}`}
            onClick={() => {
              if (!isDisableNext) this.handlePageChange('next');
            }}
          >
            <i>&gt;</i>
          </div>
        </li>
        <li
          className={`page-last ${isDisableNext ? 'disabled' : ''}`}
          onClick={() => {
            this.handlePageChange('last');
          }}
        >
          <Ts transKey="pagination.last" />
        </li>
        <li className="page-size-control">
          <Dropdown overlay={this.getPageSizeMenu()}>
            <Button style={{ marginLeft: 8 }}>
              <Ts
                transKey="pagination.pageSize"
                values={{ pageSize: this.state.selectedPageSize }}
              />{' '}
              <Icon type="down" />
            </Button>
          </Dropdown>
        </li>
      </ul>
    );
  }
}

export default SimplePaginator;
