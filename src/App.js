import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import routes from './pages';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/Warning/NotFound';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
const { Content } = Layout;

@inject('store', 'routing')
@withRouter
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appStore;
  }

  handleLocalChange = lang => {
    this.store.setLocaleLang(lang);
  };
  render() {
    const { lang, appTheme } = this.store;

    return (
      <ErrorBoundary>
        <LocaleProvider locale={lang === 'zh-CN' ? zhCN : enUS}>
          <div className={`theme-${appTheme}`}>
            <Layout>
              <Layout className="full-height">
                <Header />
                <Content>
                  <div className="content-container" style={{ minHeight: 360 }}>
                    <Switch>
                      {routes.map((route, index) => (
                        <Route key={`${route.name}-${index}`} {...route} />
                      ))}
                      <Route key="404" component={NotFound} />
                    </Switch>
                  </div>
                </Content>
                <Footer
                  style={{ textAlign: 'center' }}
                  onLocaleChange={this.handleLocalChange}
                />
              </Layout>
            </Layout>
          </div>
        </LocaleProvider>
      </ErrorBoundary>
    );
  }
}
