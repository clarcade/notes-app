import {html} from '@polymer/polymer/polymer-element.js';
import {ExtendedElement} from '../extended-element/extended-element.js';

/**
 * @customElement
 * @polymer
 */
class ExtendedExtendedElement extends ExtendedElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>Extended Extended Element</div>
    `;
  }
}

window.customElements.define('extended-extended-element', ExtendedExtendedElement);
