import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.scss';
const basicOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
};
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOption = () => {
    return basicOption;
  };

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        className="chart-container"
        style={{ height: 70 }}
      />
    );
  }
}

export default Chart;
