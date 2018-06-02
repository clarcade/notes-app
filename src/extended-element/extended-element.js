import {html} from '@polymer/polymer/polymer-element.js';
import {BaseElement} from '../base-element/base-element.js';

/**
 * @customElement
 * @polymer
 */
export class ExtendedElement extends BaseElement {
  // Polymer does not currently support extending built-in elements. Ex/ <input>
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>Extended Element</div>
    `;
  }
}

window.customElements.define('extended-element', ExtendedElement);
