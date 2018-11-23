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
      title: 'This is React-Mobx-Antd-Intl FE boilerplate',
      multText:
        'A simple way to add some movement to your <strong>pages</strong> are <i>with</i> <span style="color:#c00">CSS animations</span>.<br> Add some JavaScript for delayed timing on scroll down and you’ve got some <em>nice user </em>interaction. Two libraries that provide both of these in synch are Animate.css and Wow.js. Let’s get started adding these into a {react} application (try create-react-app if you need to create one).'
    }
  }
};
const pageMessageFlatten = flatten(pageMessage);
export default pageMessageFlatten;
