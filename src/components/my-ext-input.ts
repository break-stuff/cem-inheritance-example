import { customElement, property } from 'lit/decorators.js'
import { MyInput } from './my-input.ts';

/**
 * An element that extends the local input element that extends Shoelace's input element.
 * 
 * @cssproperty --my-other-input-border-color - The border color
 */
@customElement('my-ext-input')
export class MyExtInput extends MyInput {
  /**
   * Sets the style variation for the input
   */
  @property()
  variation = 'primary'
}

declare global {
  interface HTMLElementTagNameMap {
    'my-ext-input': MyExtInput
  }
}
