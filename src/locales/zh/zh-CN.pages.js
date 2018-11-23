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
      title: '结合React、Mobx、Antd、React Intl 的前端开发模板',
      multText: `使用CSS动画为<p>页面添加</p>一<ul><li>些动作的简单方</li></ul>法。 <br>在向下滚动时为延迟计时添加一些JavaScript，您可以获得一些不错的用户交互。 同时提供这两个库的两个库是Animate.css和Wow.js. 让我们开始将它们添加到{react}应用程序中（如果需要创建一个，请尝试使用create-react-app）。`
    }
  }
};
const pageMesageFlatten = flatten(pageMesage);
export default pageMesageFlatten;
