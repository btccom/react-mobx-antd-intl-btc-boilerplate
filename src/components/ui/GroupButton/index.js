import React from 'react';
import { Button, Radio } from 'antd';
import './index.scss';
const GroupButton = props => {
  const { buttonOptions } = props;

  return (
    <div className="group-button">
      <Radio.Group defaultValue="" value="xxx">
        {buttonOptions.map((item, index) => {
          const { text, onClick, disabled } = item;
          return (
            <Radio.Button
              key={index}
              onClick={() => {
                onClick();
              }}
              disabled={disabled}
            >
              {text}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};
export default GroupButton;
