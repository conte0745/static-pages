// トップページの部品。本文はHTML側に残し、ここでは枠とレイアウトだけを持つ

const BADGES = {
  java: "background: #f89820; color: #1b1b19;",
  spring: "background: #6db33f; color: #14210c;",
  aws: "background: #232f3e; color: #ff9900; border: 1px solid #ff9900;",
  python: "background: #ffd343; color: #1f4b73;",
  html: "background: #bf360c; color: #fff;",
  css: "background: #1572b6; color: #fff;",
  javascript: "background: #f7df1e; color: #1b1b19;",
  typescript: "background: #3178c6; color: #fff;",
  chrome: "background: #1a73e8; color: #fff;",
  svelte: "background: #ff3e00; color: #fff;",
  vite: "background: #646cff; color: #fff;",
  next: "background: #111; color: #fff;",
  react: "background: #17313b; color: #61dafb; border: 1px solid #61dafb;",
  cloudflare: "background: #f48120; color: #1b1b19;",
  gcp: "background: #4285f4; color: #1b1b19;",
  clerk: "background: #6c47ff; color: #fff;",
  tailwind: "background: #0284c7; color: #fff;",
};

const CARD_COLORS = {
  yellow: "var(--yellow)",
  green: "#bfe8a8",
  blue: "var(--blue)",
  lavender: "#d3cffa",
  mint: "#5eead4",
};

const rules = (table, selector) =>
  Object.entries(table)
    .map(([name, css]) => selector(name, css))
    .join("\n");

function template(html) {
  const element = document.createElement("template");
  element.innerHTML = html;
  return element;
}

const badgeTemplate = template(`
  <style>
    :host {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 99px;
      font-size: 11px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0.03em;
      box-shadow: 0 2px 0 rgba(27, 27, 25, 0.22);
    }
    :host([size="small"]) {
      padding: 7px 10px;
      font-size: 10px;
      letter-spacing: 0;
      box-shadow: none;
    }
    ${rules(BADGES, (name, css) => `:host([tech="${name}"]) { ${css} }`)}
  </style>
  <slot></slot>
`);

const cardTemplate = template(`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: hidden;
      background: var(--card-color, var(--white));
      border: 1px solid var(--line);
      border-radius: 26px;
    }
    ${rules(CARD_COLORS, (name, color) => `:host([color="${name}"]) { --card-color: ${color}; }`)}
    :host([color="yellow"]) {
      border-color: var(--yellow);
    }
    :host([outlined]) {
      overflow: visible;
      border: 2px solid var(--ink);
      box-shadow: 10px 10px 0 var(--ink);
    }
    .content {
      padding: 34px 34px 0;
    }
    .heading {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin: 18px 0 12px;
    }
    .tech {
      display: flex;
      gap: 9px;
      flex-wrap: wrap;
    }
    .actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .media {
      margin-top: auto;
      padding: 30px;
    }
    @media (max-width: 760px) {
      .media {
        padding: 30px 24px;
      }
    }
  </style>
  <div class="content">
    <slot name="kind"></slot>
    <div class="heading">
      <slot name="title"></slot>
      <div class="tech" role="group" aria-label="使用技術">
        <slot name="tech"></slot>
      </div>
    </div>
    <slot></slot>
    <div class="actions"><slot name="actions"></slot></div>
  </div>
  <div class="media"><slot name="image"></slot></div>
`);

class ShadowElement extends HTMLElement {
  constructor(source) {
    super();
    this.attachShadow({ mode: "open" }).append(source.content.cloneNode(true));
  }
}

customElements.define(
  "tech-badge",
  class extends ShadowElement {
    constructor() {
      super(badgeTemplate);
    }
  },
);

customElements.define(
  "product-card",
  class extends ShadowElement {
    constructor() {
      super(cardTemplate);
    }
  },
);
