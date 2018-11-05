import flatten from 'flat';
const paginationMessage = {
  pagination: {
    first: 'First',
    last: 'Last',
    pageSize: '{pageSize}/page',
    currentPage: 'Page {current} of {total}',
    totalInfo: 'Total {total} items',
    goto: 'Goto'
  }
};
const paginationMessageFlatten = flatten(paginationMessage);
export default paginationMessageFlatten;
