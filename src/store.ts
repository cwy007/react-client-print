import { makeAutoObservable } from 'mobx';

class PrintStore {
  foo?: string;

  /** 打印份数 */
  numberOfCopies?: number;

  /** 打印模板 */
  templates?: any[];

  /** 系统字段 */
  systemFields?: any[];

  /**  */
  activeNode?: any;

  /** 辅助线 */
  enableRulerGuide?: boolean;

  constructor({ foo }: { foo: string }) {
    this.foo = foo;

    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default PrintStore;
