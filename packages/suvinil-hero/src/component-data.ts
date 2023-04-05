import { html, TemplateResult } from 'lit';

export interface EntryPoint {
  destination: URL;
  text: string;
  icon: TemplateResult;
}

const svgIcons = {
  recycle: html`<svg
    width="42"
    height="38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1 21.219A17.021 17.021 0 1 0 23.075 2"
      stroke="var(--suvinil-hero-icon-color)"
      stroke-width="3"
    ></path>
    <path
      d="m5.475 16.286 5.471 4.37-9.483 1.368 4.012-5.738Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
  </svg>`,
  paintBrush: html`<svg
    width="20"
    height="42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.926 14.819H0V.639h5.241l1.038 1.754L7.614.64h12.312v14.18ZM2.324 12.464h15.228v-9.42h-8.85L5.933 6.652 3.807 3.044H2.274v9.42h.05Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
    <path
      d="M14.932 41.174H4.944v-14.13C2.126 26.494 0 23.938 0 20.932v-8.468h19.926v8.468c0 3.006-2.126 5.561-4.944 6.113l-.05 14.129Zm-7.664-2.405h5.34v-14.03h1.187c2.076 0 3.807-1.703 3.807-3.857v-6.063H2.324v6.063c0 2.104 1.681 3.858 3.758 3.858h1.186v14.029Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
    <path
      d="M12.51 17.224H1.136v2.355H12.51v-2.355Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
  </svg>`,
  shop: html`<svg
    width="42"
    height="39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9.3.988 8.754A1.15 1.15 0 0 0 .85 9.3H2Zm4.121-7.634V.516a1.15 1.15 0 0 0-1.012.604l1.012.546Zm29.863 0 1.018-.535a1.15 1.15 0 0 0-1.018-.615v1.15ZM39.997 9.3v1.15H41.9l-.885-1.685-1.018.535ZM3.15 13.967V9.3H.85v4.667h2.3Zm-.138-4.12 4.121-7.634L5.11 1.12.99 8.754l2.023 1.092Zm3.11-7.03h29.862v-2.3H6.12v2.3ZM34.965 2.2l4.013 7.634 2.036-1.07-4.013-7.634-2.036 1.07Zm5.03 5.949H7.758v2.3h32.24v-2.3Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
    <path
      d="M13.874 13.967c0 2.578-2.658 4.667-5.937 4.667-3.279 0-5.937-2.09-5.937-4.667M28.125 13.967c0 2.578-3.19 4.667-7.124 4.667-3.935 0-7.125-2.09-7.125-4.667M40 13.967c0 2.578-2.658 4.667-5.937 4.667-3.279 0-5.937-2.09-5.937-4.667"
      stroke="var(--suvinil-hero-icon-color)"
      stroke-width="2.3"
      stroke-linejoin="round"
    ></path>
    <path
      d="M5.456 23.302v8.585a5.417 5.417 0 0 0 5.417 5.416h26.822V23.302"
      stroke="var(--suvinil-hero-icon-color)"
      stroke-width="2.3"
    ></path>
  </svg>`,
  paintBucket: html`<svg
    width="29"
    height="43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.549 15.226v-.07c0-.027 0-.053-.005-.08a14.56 14.56 0 0 0-4.19-10.223A14.177 14.177 0 0 0 14.26.626 14.178 14.178 0 0 0 4.171 4.872 14.562 14.562 0 0 0 0 15.102V37.95c0 1.505 1.535 2.61 4.69 3.38a42.333 42.333 0 0 0 9.554.963c1.465 0 14.313-.122 14.313-4.343V15.228l-.008-.002ZM14.26 2.988a11.97 11.97 0 0 1 7.454 2.668 12.25 12.25 0 0 1 4.226 6.77c-.687-.27-1.392-.49-2.109-.659a47.464 47.464 0 0 0-19.115 0c-.718.169-1.424.39-2.111.66A12.23 12.23 0 0 1 6.817 5.66a11.95 11.95 0 0 1 7.443-2.672Zm8.435 36.236a47.073 47.073 0 0 1-16.89 0c-2.449-.523-3.354-1.129-3.541-1.365V17.741c.79.341 1.61.61 2.448.803a42.167 42.167 0 0 0 9.557.972c.587 0 1.158-.02 1.711-.04.282-.01.552-.02.819-.025v-2.305c-.3.007-.6.017-.9.028-.533.02-1.084.04-1.63.04a41.983 41.983 0 0 1-8.431-.772 8.553 8.553 0 0 1-3.482-1.286 8.553 8.553 0 0 1 3.482-1.286 46.41 46.41 0 0 1 16.861 0 8.548 8.548 0 0 1 3.482 1.286 8.662 8.662 0 0 1-3.55 1.3l-.116.031c-.007 0-.3.093-.849.203v2.344c.5-.084.995-.196 1.482-.336a15.726 15.726 0 0 0 3.125-.96v20.115c-.19.24-1.107.847-3.578 1.368v.003Z"
      fill="var(--suvinil-hero-icon-color)"
    ></path>
  </svg>`,
  palette: html`<svg
    width="46"
    height="37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="var(--suvinil-hero-icon-color)"
      stroke-width="2"
      d="M45 1H10.675v34.325H45zM10.514 35.757 2 13.622 9.946 9.08"
    ></path>
  </svg>`,
};

export const entryPoints: Array<EntryPoint> = [
  {
    destination: new URL('https://www.suvinil.com.br/cores'),
    text: 'Encontre sua cor',
    icon: svgIcons.palette,
  },
  {
    destination: new URL('https://www.suvinil.com.br/descubra-sua-tinta'),
    text: 'Descubra sua tinta',
    icon: svgIcons.paintBucket,
  },
  {
    destination: new URL('https://loja.suvinil.com.br/'),
    text: 'Onde comprar',
    icon: svgIcons.shop,
  },
  {
    destination: new URL('https://www.suvinil.com.br/encontre-seu-pintor'),
    text: 'Encontre seu pintor',
    icon: svgIcons.paintBrush,
  },
  {
    destination: new URL(
      'https://www.suvinil.com.br/a-suvinil/sustentabilidade#section5'
    ),
    text: 'Descarte de tinta',
    icon: svgIcons.recycle,
  },
];
