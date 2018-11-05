import flatten from 'flat';
const commonMessage = {
  common: {
    notFoundTip: '对不起，您当前访问的页面不存在',
    goHome: '首页',
    goBack: '回退'
  }
};
const commonMessageFlatten = flatten(commonMessage);
export default commonMessageFlatten;
