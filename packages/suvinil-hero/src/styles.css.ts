import { css } from "lit";

export const componentStyles = css`
  :host {
    --suvinil-hero-background-color: var(--color-gray-8);
    --suvinil-hero-text-color: var(--color-gray-15);
    --suvinil-hero-icon-color: var(--color-gray-7);
    --link-color: var(--color-orange-1);
    --humanist-font-stack: Optima, Candara, 'Noto Sans', source-sans-pro,
      sans-serif;
    --brand-font-stack: 'Suvinil Sans', sans-serif;
    --max-font-width: 95ch;
    --card-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --card-background-color: white;
    display: block;
    color: var(--suvinil-hero-text-color);
    background-color: var(--suvinil-hero-background-color);
  }

  .hero-container {
    display: flex;
    gap: 5rem;
  }

  .hero-text {
    max-width: var(--max-font-width);
  }

  .destinations {
    display: flex;
    gap: 1rem;
  }

  .destination-card {
    border: 1px solid var(--color-gray-1);
    padding: 2rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: var(--card-shadow);
    background-color: var(--card-background-color);
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  ::slotted(p) {
    font-family: var(--humanist-font-stack);
    font-size: 2.5rem;
    /* color: var(--color-white-1); */
  }

  ::slotted(h1) {
    font-size: 4rem;
    /* color: var(--color-yellow-2); */
  }

  /* 
  [data-destination-id="0"]{
    --suvinil-hero-icon-color: var(--color-white-1);
    background-color: var(--color-gray-7);
    color: var(--color-white-1);
  }

  [data-destination-id="1"]{
    --suvinil-hero-icon-color: var(--color-white-1);
    background-color: var(--color-brown-2);
    color: var(--color-white-1);
  }

  [data-destination-id="2"]{
    --suvinil-hero-icon-color: var(--color-white-1);
    background-color: var(--color-red-1);
    color: var(--color-white-1);
  }

  [data-destination-id="3"]{
    --suvinil-hero-icon-color: var(--color-white-1);
    background-color: var(--color-orange-6);
    color: var(--color-white-1);
  }

  [data-destination-id="4"]{
    --suvinil-hero-icon-color: var(--color-white-1);
    background-color: var(--color-orange-3);
    color: var(--color-white-1);
  } */
`;