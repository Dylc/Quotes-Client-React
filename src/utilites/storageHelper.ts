export class LocalStorageWorker {

  constructor() {}

  set(key: string, item: string) {
    localStorage.setItem(key, item);
  }

  get(key: string, defaultValue: string) : string {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, defaultValue);
    }
    return localStorage.getItem(key) || defaultValue;
  }
}

export default (() => {
    return new LocalStorageWorker()
})();