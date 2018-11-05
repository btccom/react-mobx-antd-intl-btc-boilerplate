import flatten from 'flat';
const paginationMessage = {
  pagination: {
    first: '首页',
    last: '尾页',
    pageSize: '{pageSize}条/页',
    currentPage: '第{current}页，共{total}页',
    totalInfo: '共{total}个',
    goto: '跳转至'
  }
};
const paginationMessageFlatten = flatten(paginationMessage);
export default paginationMessageFlatten;
