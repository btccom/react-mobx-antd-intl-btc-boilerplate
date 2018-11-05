import React from 'react';
import Ts from 'Trans';
const currencySymbolMap = {
  'en-US': '$',
  'zh-CN': '￥',
  eth: 'ETH'
};
const IntlCurrency = props => {
  const {
    lang = 'en-US',
    currencyList = [{ lang: 'en-US', value: '' }],
    style
  } = props;

  function getValue() {
    let value = currencyList.filter(item => item.lang === lang)[0].value;
    return value;
  }

  let value = getValue();
  return lang === 'eth' ? (
    <span style={style}>{`${value ? value : '--'} ETH`}</span>
  ) : (
    <span style={style}>{`${currencySymbolMap[lang]} ${
      value ? value : '--'
    }`}</span>
  );
};
export default IntlCurrency;
