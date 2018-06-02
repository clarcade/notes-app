import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
export class BaseElement extends PolymerElement {
  constructor() {
    super();

    this.base = 'Property from BaseElement';
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
      <div>Base Element</div>
    `;
  }

  static get properties() {
    return {
    };
  }
}

window.customElements.define('base-element', BaseElement);
