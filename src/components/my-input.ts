import { customElement, property } from "lit/decorators.js";
import { SlInput } from "@shoelace-style/shoelace";

/**
 * An element that extends Shoelace's input element.
 * 
 * @csspart my-input - The input element
 * 
 * @cssproperty --my-input-border-color - The border color
 */
@customElement("my-input")
export class MyInput extends SlInput {
  /**
   * Copy for the read the docs hint.
   */
  @property({ attribute: "docs-hint" })
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-input": MyInput;
  }
}
