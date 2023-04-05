import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { entryPoints } from './component-data.js';
import { componentStyles } from './styles.css.js';

@customElement('suvinil-hero')
export class SuvinilHero extends LitElement {
  @property({ type: Object }) customerEntryPoints = entryPoints;

  static styles = componentStyles;

  #renderEntryPoints() {
    return html`
      <div class="destinations">
        ${this.customerEntryPoints.map(
          (entryPoint, position) => html`
            <div class="destination-card" data-destination-id=${position}>
              <a href="${entryPoint.destination.href}">
                <p>${entryPoint.icon}</p>
                ${entryPoint.text}
              </a>
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="hero-container">
        <slot name="hero-image"></slot>
        <div class="right">
          <div class="hero-text">
            <slot name="headline"></slot>
            <slot name="intro"></slot>
          </div>
          <div class="customer-entry-points">
            <h3>Iniciar</h3>
            ${this.#renderEntryPoints()}
          </div>
        </div>
      </div>
    `;
  }
}
