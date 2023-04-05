# \<suvinil-hero>

Este repositório é um exemplo de como podemos codificar e entregar um experimento. Ele foi projetado para se ajustar facilmente aos fluxos de trabalho de desenvolvedores existentes. 

**Nota: Este componente é atualmente projetado apenas para dispositivos de desktop.**

## Instalação

```bash
npm i suvinil-hero
```

## Uso

```html
<script type="module">
  import 'suvinil-hero/hero-component.js';
</script>

<suvinil-hero></suvinil-hero>
```

## Linting e formatação

Para verificar o projeto em busca de erros de linting e formatação, execute o seguinte comando:

```bash
npm run lint
```

Para corrigir automaticamente erros de linting e formatação, execute o seguinte comando:

```bash
npm run format
```


## Configuração de ferramentas

Para a maioria das ferramentas, a configuração está no arquivo `package.json`

## Demonstração local com `web-dev-server`

```bash
npm start
```

Para executar um servidor de desenvolvimento local que serve a demonstração básica localizada em `demo/index.html`