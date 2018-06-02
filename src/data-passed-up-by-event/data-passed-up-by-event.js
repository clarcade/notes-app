import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js'
/**
 * @customElement
 * @polymer
 */
class DataPassedUpByEvent extends PolymerElement {
  constructor() {
    super();

    this.kicked = false;

    // When possible, use afterNextRender to defer non-critical work until after first paint.
    // In most cases, you can call afterNextRender from either the constructor or the ready
    //  callback with similar results. For anything requiring access to the element's shadow
    //  tree, use the ready callback.
    // afterNextRender(this, function() {
    //   this.addEventListener('click', this._handleClick);
    // });
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

  _handleClick(e) {
    console.log('_handleClick');

    this.kicked = !this.kicked;

    // By default, custom events stop at shadow DOM boundaries. To make a custom event
    // pass through shadow DOM boundaries, set the composed flag to true when you create
    // the event
    this.dispatchEvent(new CustomEvent(
      'kick',
      {
        detail: {kicked: this.kicked},
        composed: true
      }
    ));
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <button on-click="_handleClick">Kick</button>
    `;
  }

  // For this example, we'll be passing data to parental elements via an
  // event and not a public property
  static get properties() {
    return {
    };
  }
}

window.customElements.define('data-passed-up-by-event', DataPassedUpByEvent);
