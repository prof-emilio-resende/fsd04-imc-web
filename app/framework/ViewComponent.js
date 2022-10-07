export default class ViewComponent {
  constructor() {
    this.element = document.querySelector(this.__proto__.constructor.name);

    if (this.element === undefined || this.element === null) {
      throw Error(`element ${this.__proto__.constructor.name} not localized at DOM...`);
    }

    this.state = {};
    this.paint();
  }

  setState(newState) {
    this.state = newState;
    this.paint();
  }

  paint() {
    this.element.innerHTML = this.render();
  }

  render() {
    throw new Error(`Component ${this.__proto__.constructor.name} didn't implemented render!`);
  }

}
//# sourceMappingURL=ViewComponent.js.map