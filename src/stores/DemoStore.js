import { observable, action, computed, runInAction, reaction } from 'mobx';
import ajax from 'ajax';

class DemoStore {
  @observable
  loading;

  constructor() {
    this.loading = false;
  }

  @action
  getBlockList = async () => {
    this.loading = true;
    const res = await ajax.get(
      `/block/list?page=${this.currentPage}&size=${this.pageSize}`
    );
    this.loading = false;
    if (res && res.data) {
      runInAction(() => {
        // this.blockList = res.data.list;
        // this.totalCount = res.data.total_count;
      });
    }
  };
}

export default DemoStore;
