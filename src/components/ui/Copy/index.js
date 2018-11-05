import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'antd';

const Copy = props => {
  const { text = '', handleCopy, containerId } = props;
  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Tooltip
        title="Copied"
        trigger="click"
        getPopupContainer={() => document.getElementById(containerId)}
      >
        <i className="cell-icon copy-icon" />
      </Tooltip>
    </CopyToClipboard>
  );
};
export default Copy;
