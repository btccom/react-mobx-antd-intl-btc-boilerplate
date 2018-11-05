import { store } from 'rfx-core';
import AppStore from './AppStore';
import DemoStore from './DemoStore';

export default store.setup({
  appStore: AppStore,
  demoStore: DemoStore
});
