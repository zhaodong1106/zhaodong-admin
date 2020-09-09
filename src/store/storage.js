import storage from 'store2';

// 缓存数据的key
const USER_INFO = 'USER_INFO';

const storage={
  set setLocalStorageName(val) {
    if (!val) {
      storage.remove(WEB_NAME);
    } else {
      storage.set(WEB_NAME, val);
    }
  },
  get getLocalStorageName() {
    return storage.get(WEB_NAME);
  }
}
export  default  storage;
