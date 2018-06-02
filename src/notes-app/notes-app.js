import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../data-passed-up-by-event/data-passed-up-by-event.js';
import '../data-passed-down-by-attribute/data-passed-down-by-attribute.js';
import '../two-way-bind-non-polymer-element/two-way-bind-non-polymer-element.js';
import '../base-element/base-element.js';
import '../extended-element/extended-element.js';
import '../extended-extended-element/extended-extended-element.js';
import '../base-element-uses-mixin/base-element-uses-mixin.js';

/**
 * @customElement
 * @polymer
 */
class NotesApp extends PolymerElement {
  // Called when the element is upgraded (that is, when an element is created, or when a
  //  previously-created element becomes defined). The constructor is a logical place to
  //  set default values, and to manually set up event listeners for the element itself.
  // Note: The constructor can't examine the element's attributes or children, and the
  //       constructor can't add attributes or children. Whenever possible, defer work
  //       until the connectedCallback or later instead of performing it in the
  //       constructor. See Defer non-critical work for some suggestions.
  constructor() {
    super();
  }

  // Called when the element is added to a document. Can be called multiple times during
  //  the lifetime of an element.
  // Uses include adding document-level event listeners. (For listeners local to the
  //  element, you can use annotated event listeners.)
  connectedCallback() {
    super.connectedCallback();
  }

  // Called when the element is removed from a document. Can be called multiple times
  //  during the lifetime of an element.
  // Uses include removing event listeners added in connectedCallback.
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // Called during Polymer-specific element initialization. Called once, the first
  //  time the element is attached to the document. For details, see Polymer element
  //  initialization.
  // The PolymerElement class initializes your element's template and data system
  //  during the ready callback, so if you override ready, you must call super.ready()
  //  before accessing the element's shadow tree.
  // Polymer does several things at ready time:
  //   - Creates and attaches the element's shadow DOM tree.
  //   - Initializes the data system, propagating intial values to data bindings.
  //   - Allows observers and computed properties to run (as soon as any of their
  //     dependencies are defined).
  //   - When the superclass ready method returns, the element's template has been
  //     instantiated and initial property values have been set. However, light DOM
  //     elements may not have been distributed when ready is called.
  // Don't use ready to initialize an element based on dynamic values, like property
  //  values or an element's light DOM children. Instead, use observers to react to
  //  property changes, and observeNodes or the slotchange event to react to children
  //  being added and removed from the element.
  ready() {
    super.ready();

    this.addEventListener(
      'kick',
      // function(e) {
      (e) => {
        console.log(e.detail.kicked ? 'kicked' : 'not kicked');
        console.log('event.targeted', e.target); // event retargeted
        console.log('event.composedPath()', event.composedPath());
        console.log('original target', event.composedPath()[0]);
      }
    );

    this.exampleData = {
      foo: 'bar'
    };
  }

  // Called when any of the element's attributes are changed, appended, removed, or replaced.
  // Use to handle attribute changes that don't correspond to declared properties.
  // (For declared properties, Polymer handles attribute changes automatically as
  //  described in attribute deserialization.)
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
      <data-passed-up-by-event></data-passed-up-by-event>
      <data-passed-down-by-attribute data="[[exampleData]]"></data-passed-down-by-attribute>
      <two-way-bind-non-polymer-element></two-way-bind-non-polymer-element>

      <base-element></base-element>
      <extended-element></extended-element>
      <extended-extended-element></extended-extended-element>

      <base-element-uses-mixin></base-element-uses-mixin>
    `;
  }

  // Personal note: I don't know of any good reasons why the main app would use the
  //  properties Reaction since it's mainly for the public api of a custom element.
  static get properties() {
    return {
    };
  }
}

window.customElements.define('notes-app', NotesApp);
