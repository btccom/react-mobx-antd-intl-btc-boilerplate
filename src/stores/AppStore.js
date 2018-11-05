import { observable, action, computed, runInAction } from 'mobx';
import ajax from 'ajax';

export default class AppStore {
  @observable
  lang;

  @observable
  appTheme;

  constructor() {
    //locale
    this.lang = this.getDefaultLang();

    this.appTheme = 'light';
  }

  getDefaultLang() {
    let browserLang = navigator.language || navigator.userLanguage;
    let userSettingLang = localStorage.getItem('lang');
    let defaultLang =
      userSettingLang ||
      (browserLang.substr(0, 2) === 'en' ? 'en-US' : 'zh-CN');
    return defaultLang;
  }

  @action
  setLocaleLang(lang) {
    this.lang = lang;
  }
  @action
  setAppLocale(appLocale) {
    this.appLocale = appLocale;
  }
  @action
  setAppTheme(appTheme) {
    this.appTheme = appTheme;
  }
}
