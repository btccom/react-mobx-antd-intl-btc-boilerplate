import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.scss';
class DoughnuChart extends Component {
  constructor(props) {
    super(props);
  }
  getOption = () => {
    const { chartName, color, seriesData } = this.props;
    let option = {
      grid: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      },
      tooltip: {
        trigger: 'item',
        position: 'right',
        //formatter: '{b}: {d}%',
        formatter: function(params) {
          var result = `${params.marker}   ${
            params.name
          }  <span style="display:inline-block;margin-right:10px"></span>  ${
            params.data.value
          }% </br>`;
          return result;
        },
        extraCssText:
          'background-color: rgba(0,0,0,0.75);box-shadow:0px 2px 8px 0px rgba(0,0,0,0.15);border-radius:4px'
      },
      series: [
        {
          name: chartName,
          data: seriesData,
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          type: 'pie',
          radius: ['70%', '90%']
        }
      ]
    };
    if (color) {
      option.color = color;
    }
    return option;
  };

  render() {
    const { seriesData } = this.props;

    return (
      <div>
        {seriesData && (
          <ReactEcharts
            option={this.getOption()}
            className={this.props.className}
            style={this.props.style}
            notMerge={true}
            lazyUpdate={false}
          />
        )}
      </div>
    );
  }
}

export default DoughnuChart;
