import { makeAutoObservable } from 'mobx';

class PrintStore {
  foo?: string;

  constructor({ foo }: { foo: string }) {
    this.foo = foo;

    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default PrintStore;
