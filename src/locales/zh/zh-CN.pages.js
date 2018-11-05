import flatten from 'flat';
const pageMesage = {
  pages: {
    root: {
      header: {
        appName: 'BTC 前端模板（React）',
        searchPlaceholder: '输入关键字'
      },
      menu: {
        home: '首页',
        blockchain: '菜单A',
        blocks: '菜单A-a',
        transactions: '菜单A-b',
        accounts: '菜单A-c',
        token: '菜单B'
      },
      footer: {}
    },
    demo: {
      title: '结合React、Mobx、Antd、React Intl 的前端开发模板'
    }
  }
};
const pageMesageFlatten = flatten(pageMesage);
export default pageMesageFlatten;
