import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { abbreviateNumber, numberWithCommas, formatNumber } from 'utils';
import './index.scss';

const chartDefaultColor = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    {
      offset: 0,
      color: '#6BC9FF' // 0% 处的颜色
    },
    {
      offset: 1,
      color: '#7A74FF' // 100% 处的颜色
    }
  ],
  globalCoord: true // 缺省为 false
};

class TinyChart extends Component {
  constructor(props) {
    super(props);
  }

  getOption = () => {
    const {
      chartType,
      yUnit,
      abbreviateFunc,
      chartColor,
      xAxisData,
      seriesData
    } = this.props;
    let option = {
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
        data: xAxisData
      },
      yAxis: {
        show: false,
        min: function(value) {
          return value.min - value.min / 100;
        }
      },
      grid: {
        top: 3,
        right: 7,
        bottom: 0,
        left: 7
      },
      tooltip: {
        //confine: true,
        trigger: 'axis',
        show: true,
        axisPointer: {
          type: 'none'
        },
        position: (pos, params, dom, rect, size) => {
          var obj = { top: -60 };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        },
        formatter: function(params, index) {
          var result = `${params[0].marker}   ${params[0].name}
          <br>
          <span style="display:inline-block;"></span>${yUnit ? yUnit : ''}${
            abbreviateFunc
              ? numberWithCommas(abbreviateFunc(params[0].value, 3))
              : formatNumber(params[0].value, 2)
          } </br>`;
          return result;
        },
        extraCssText:
          'background-color: rgba(0,0,0,0.75);box-shadow:0px 2px 8px 0px rgba(0,0,0,0.15);border-radius:4px'
      },
      series: [
        {
          data: seriesData,
          type: chartType,
          showSymbol: false,
          lineStyle: {
            color: 'transparent'
          },
          areaStyle: {
            // 线性渐变，前四个参数分别是 x0, y0, x2, y2,
            // 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            color: chartDefaultColor
          },
          itemStyle: {
            color: chartDefaultColor,
            opacity: 1
          },
          areaStyle: {
            opacity: 1
          }
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        className={this.props.className}
        style={this.props.style}
      />
    );
  }
}

export default TinyChart;
