import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DataPassedDownByAttribute extends PolymerElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  attributeChangedCallback() {
    super.attributeChangedCallback();
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>[[data.foo]]</div>
    `;
  }

  // For this example, we're configuring the element via attribute
  static get properties() {
    return {
      data: {
        type: Object
      }
    };
  }
}

window.customElements.define('data-passed-down-by-attribute', DataPassedDownByAttribute);
