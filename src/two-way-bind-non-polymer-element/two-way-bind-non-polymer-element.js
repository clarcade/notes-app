import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class DataPassedUpByEvent extends PolymerElement {
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
      <input type="text" value="{{foo::change}}">
      <div>Bind via change event: [[foo]]</div>
      <input type="text" value="{{bar::input}}">
      <div>Bind via input event: [[bar]]</div>
    `;
  }

  // For this example, we'll be passing data to parental elements via an
  // event and not a public property
  static get properties() {
    return {
    };
  }
}

window.customElements.define('two-way-bind-non-polymer-element', DataPassedUpByEvent);
