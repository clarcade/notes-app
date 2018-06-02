import {html} from '@polymer/polymer/polymer-element.js';

import {BaseElement} from '../base-element/base-element.js';
import {FancyMixin} from '../fancy-mixin/fancy-mixin.js';

/**
 * @customElement
 * @polymer
 */
class BaseElementUsesMixin extends FancyMixin(BaseElement) {
  ready() {
    super.ready();
    console.log('base', this.base);
    console.log('talk', this.talk);
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>Base Element Uses Mixin (start)</div>
      ${super.template}
      <div>this.base = [[base]]</div>
      <div>this.talk = [[talk]]</div>
      <div>Base Element Uses Mixin (end)</div>
    `;
  }
}

window.customElements.define('base-element-uses-mixin', BaseElementUsesMixin);
