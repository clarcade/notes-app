import {html} from '@polymer/polymer/polymer-element.js';

/**
 * @mixinFunction
 * @polymer
 */
export function FancyMixin(superClass) {
  return class extends superClass {
    constructor() {
      super();

      this.talk = 'Hello World';
    }
  }
}

// export const FancyMixin = (superClass) => class extends superClass {
//   constructor() {
//     super();

//     this.talk = 'Hello World';
//   }

//   static get properties() {
//     return {
//     };
//   }
// };
