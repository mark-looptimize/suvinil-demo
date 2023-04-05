import 'suvinil-hero/hero-component.js';

export default function Home() {
  return (
    <suvinil-hero>
      <img src="hero-image.jpg" slot="hero-image" alt=""></img>
      <h1 slot="headline">
        Tintas Suvinil, a marca mais tradicional e querida do Brasil!
      </h1>
      <p slot="intro">
        Vamos além da tinta, pincel e parede. Aqui você encontra cor, inspiração e tudo o que precisar pra pintar sua nova história.
      </p>
    </suvinil-hero>
  )
}
