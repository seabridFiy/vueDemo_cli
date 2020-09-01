/***
 * 事件总线用于兄弟组件或是跨多级组件传值
 */
class BUS {
  constructor() {
    this._listener = {};
  }
  // 触发事件
  $emit(event, params) {
    if (
      event in this._listener &&
      Object.prototype.toString.call(this._listener[event]) ===
        "[object Function]"
    ) {
      this._listener[event](params);
    }
  }
  // 注册事件
  $on(event, handler) {
    if (Object.prototype.toString.call(handler) === "[object Function]") {
      this._listener[event] = handler;
    } else {
      throw Error("注册监听事件的第二个参数须为函数");
    }
  }
}

const Bus = new BUS();
export default Bus;
