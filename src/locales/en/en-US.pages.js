import flatten from 'flat';
const pageMessage = {
  pages: {
    root: {
      header: {
        appName: 'BTC FE Boilerplate(React)',
        searchPlaceholder: 'Search word'
      },
      menu: {
        home: 'Home',
        blockchain: 'Blockchain',
        blocks: 'Blocks',
        transactions: 'Transactions',
        accounts: 'Accounts',
        token: 'Tokens'
      },
      footer: {}
    },
    demo: {
      title: 'This is React-Mobx-Antd-Intl FE boilerplate'
    }
  }
};
const pageMessageFlatten = flatten(pageMessage);
export default pageMessageFlatten;
