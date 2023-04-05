var _SuvinilHero_instances, _SuvinilHero_renderEntryPoints;
import { __classPrivateFieldGet, __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { entryPoints } from './component-data.js';
import { componentStyles } from './styles.css.js';
let SuvinilHero = class SuvinilHero extends LitElement {
    constructor() {
        super(...arguments);
        _SuvinilHero_instances.add(this);
        this.customerEntryPoints = entryPoints;
    }
    render() {
        return html `
      <div class="hero-container">
        <slot name="hero-image"></slot>
        <div class="right">
          <div class="hero-text">
            <slot name="headline"></slot>
            <slot name="intro"></slot>
          </div>
          <div class="customer-entry-points">
            <h3>Iniciar</h3>
            ${__classPrivateFieldGet(this, _SuvinilHero_instances, "m", _SuvinilHero_renderEntryPoints).call(this)}
          </div>
        </div>
      </div>
    `;
    }
};
_SuvinilHero_instances = new WeakSet();
_SuvinilHero_renderEntryPoints = function _SuvinilHero_renderEntryPoints() {
    return html `
      <div class="destinations">
        ${this.customerEntryPoints.map((entryPoint, position) => html `
            <div class="destination-card" data-destination-id=${position}>
              <a href="${entryPoint.destination.href}">
                <p>${entryPoint.icon}</p>
                ${entryPoint.text}
              </a>
            </div>
          `)}
      </div>
    `;
};
SuvinilHero.styles = componentStyles;
__decorate([
    property({ type: Object })
], SuvinilHero.prototype, "customerEntryPoints", void 0);
SuvinilHero = __decorate([
    customElement('suvinil-hero')
], SuvinilHero);
export { SuvinilHero };
//# sourceMappingURL=hero-component.js.map