/* @ds-bundle: {"format":4,"namespace":"FrostDesignSystem_5751f8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/actions/Icon.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logomark","sourcePath":"components/brand/Logomark.jsx"},{"name":"PriceTag","sourcePath":"components/brand/PriceTag.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"eae3ac57dd61","components/actions/Icon.jsx":"6d7c93ad81af","components/actions/IconButton.jsx":"011827703754","components/brand/Logomark.jsx":"630b90c2f4ae","components/brand/PriceTag.jsx":"f49ab4611f6b","components/brand/Wordmark.jsx":"ba7090ce2525","components/data-display/Badge.jsx":"0e7ccba03756","components/data-display/Card.jsx":"ce5e3911f1b1","components/data-display/Tag.jsx":"9460c3aa60be","components/feedback/Dialog.jsx":"9690955ba1de","components/feedback/Toast.jsx":"bec48afe8485","components/feedback/Tooltip.jsx":"a9dca33e8be6","components/forms/Checkbox.jsx":"2bbc163a5ef6","components/forms/Input.jsx":"65f91deafd45","components/forms/Radio.jsx":"1db5f7467a48","components/forms/Select.jsx":"f37e847ec6b3","components/forms/Switch.jsx":"3ebd9d36f065","ui_kits/shop/CartSheet.jsx":"6f832438d957","ui_kits/shop/ProductDetail.jsx":"7bf7794de843","ui_kits/shop/ShopHome.jsx":"ae2dd5d3e630","ui_kits/shop/data.js":"c0947d523ed5","ui_kits/social/CarouselPost.jsx":"3019dc68361c","ui_kits/social/Slides.jsx":"2bf310e4a3ec","ui_kits/social/Templates.jsx":"c353db52b833","ui_kits/tiktok/TikTokPost.jsx":"057bf70d2d1d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrostDesignSystem_5751f8 = window.FrostDesignSystem_5751f8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Icon.jsx
try { (() => {
/* Converts a Lucide IconNode ([[tag, attrs], ...]) into an inner-SVG HTML
   string. Children are pure geometry, so stroke/width/caps inherit from the
   parent <svg> — meaning one wrapper controls size + weight + colour. */
function nodeToHTML(node) {
  if (!Array.isArray(node)) return '';
  return node.map(([tag, attrs]) => {
    const a = Object.entries(attrs || {}).map(([k, v]) => `${k}="${String(v).replace(/"/g, '&quot;')}"`).join(' ');
    return `<${tag} ${a} />`;
  }).join('');
}
const toPascal = s => String(s).replace(/(^|-|_)([a-z0-9])/g, (_, __, c) => c.toUpperCase());

/**
 * Icon — thin wrapper over Lucide (loaded from CDN as window.lucide).
 * The brand's source defines no UI icon set; Lucide is a flagged substitution
 * chosen for its soft, rounded 2px stroke. See readme → ICONOGRAPHY.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  title,
  className = '',
  style = {},
  ...rest
}) {
  // Re-render once if Lucide finishes loading after first paint.
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.lucide) {
      let n = 0;
      const id = setInterval(() => {
        if (window.lucide || n++ > 40) {
          clearInterval(id);
          force(x => x + 1);
        }
      }, 50);
      return () => clearInterval(id);
    }
  }, []);
  const L = typeof window !== 'undefined' ? window.lucide : null;
  const icons = L && L.icons;
  const node = icons && (icons[name] || icons[toPascal(name)]);
  return React.createElement('svg', {
    className,
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    role: title ? 'img' : undefined,
    'aria-label': title || undefined,
    'aria-hidden': title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + (node ? nodeToHTML(node) : '')
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* one-time stylesheet injection (keyed by id) */
function injectOnce(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-btn{
  --_bg:var(--grad-pink-cta); --_fg:var(--white); --_bd:transparent; --_sh:var(--shadow-pink);
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  font-family:var(--font-display); font-weight:var(--fw-semibold);
  border:1.5px solid var(--_bd); border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg); box-shadow:var(--_sh);
  cursor:pointer; text-decoration:none; white-space:nowrap; user-select:none;
  transition:transform var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out),
             filter var(--dur-base) var(--ease-out),
             background var(--dur-base) var(--ease-out);
}
.fro-btn:hover{ transform:translateY(-1px); filter:brightness(1.04); }
.fro-btn:active{ transform:scale(.97); filter:brightness(.97); }
.fro-btn:focus-visible{ outline:none; box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-btn[disabled],.fro-btn[aria-disabled="true"]{ opacity:.45; pointer-events:none; box-shadow:none; }

.fro-btn--sm{ font-size:var(--fs-body-sm); padding:8px 16px; }
.fro-btn--md{ font-size:var(--fs-body); padding:12px 22px; }
.fro-btn--lg{ font-size:var(--fs-body-lg); padding:16px 30px; }
.fro-btn--block{ width:100%; }

.fro-btn--primary{ --_bg:var(--grad-pink-cta); --_fg:var(--white); --_sh:var(--shadow-pink); }
.fro-btn--secondary{ --_bg:var(--ink-900); --_fg:var(--white); --_sh:var(--shadow-md); }
.fro-btn--secondary:hover{ background:var(--ink-700); }
.fro-btn--soft{ --_bg:var(--pink-100); --_fg:var(--pink-600); --_sh:none; }
.fro-btn--soft:hover{ background:var(--pink-200); }
.fro-btn--glass{ --_bg:var(--glass-fill); --_fg:var(--ink-900); --_bd:var(--glass-border); --_sh:var(--shadow-sm); -webkit-backdrop-filter:var(--blur-md); backdrop-filter:var(--blur-md); }
.fro-btn--ghost{ --_bg:transparent; --_fg:var(--ink-700); --_sh:none; }
.fro-btn--ghost:hover{ background:var(--surface-sunk); }
.fro-btn--outline{ --_bg:transparent; --_fg:var(--ink-900); --_bd:var(--border-strong); --_sh:none; }
.fro-btn--outline:hover{ --_bd:var(--pink-400); --_fg:var(--pink-600); }
`;

/**
 * Button — the brand's pill CTA. Primary = Frost-Pink gradient with a pink glow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  as = 'button',
  className = '',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-btn-css', CSS), []);
  const Tag = as;
  const cls = ['fro-btn', `fro-btn--${variant}`, `fro-btn--${size}`, block ? 'fro-btn--block' : '', className].filter(Boolean).join(' ');
  const iconSize = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;
  /* A one-sided icon otherwise pushes the label off the button's true
     centre; a matching invisible spacer on the empty side re-balances it
     so the label always sits centred on the pink pill, icon or no icon. */
  const spacerStyle = { width: iconSize, flex: 'none', display: 'inline-block' };
  const needsLeftSpacer = !iconLeft && !!iconRight;
  const needsRightSpacer = !iconRight && !!iconLeft;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  }) : needsLeftSpacer ? /*#__PURE__*/React.createElement('span', { style: spacerStyle, 'aria-hidden': true }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : needsRightSpacer ? /*#__PURE__*/React.createElement('span', { style: spacerStyle, 'aria-hidden': true }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-iconbtn{
  --_bg:transparent; --_fg:var(--ink-700); --_bd:transparent; --_sh:none;
  display:inline-flex; align-items:center; justify-content:center;
  border:1.5px solid var(--_bd); border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg); box-shadow:var(--_sh);
  cursor:pointer; padding:0; line-height:0;
  transition:transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out);
}
.fro-iconbtn:hover{ transform:translateY(-1px); }
.fro-iconbtn:active{ transform:scale(.92); }
.fro-iconbtn:focus-visible{ outline:none; box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-iconbtn[disabled]{ opacity:.4; pointer-events:none; }

.fro-iconbtn--sm{ width:36px; height:36px; }
.fro-iconbtn--md{ width:44px; height:44px; }
.fro-iconbtn--lg{ width:52px; height:52px; }

.fro-iconbtn--primary{ --_bg:var(--grad-pink-cta); --_fg:var(--white); --_sh:var(--shadow-pink); }
.fro-iconbtn--secondary{ --_bg:var(--ink-900); --_fg:var(--white); }
.fro-iconbtn--soft{ --_bg:var(--pink-100); --_fg:var(--pink-600); }
.fro-iconbtn--soft:hover{ background:var(--pink-200); }
.fro-iconbtn--glass{ --_bg:var(--glass-fill); --_fg:var(--ink-900); --_bd:var(--glass-border); --_sh:var(--shadow-sm); -webkit-backdrop-filter:var(--blur-md); backdrop-filter:var(--blur-md); }
.fro-iconbtn--ghost{ --_bg:transparent; --_fg:var(--ink-700); }
.fro-iconbtn--ghost:hover{ background:var(--surface-sunk); }
`;

/**
 * IconButton — a circular, icon-only affordance (close, cart, like, nav…).
 * Minimum 44px hit target at size="md".
 */
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-iconbtn-css', CSS), []);
  const iconSize = size === 'lg' ? 24 : size === 'sm' ? 18 : 20;
  const cls = ['fro-iconbtn', `fro-iconbtn--${variant}`, `fro-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logomark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DROPLET = 'M24 6C24 6 8 22 8 30A16 16 0 0 0 40 30C40 22 24 6 24 6Z';

/**
 * Logomark — the Frosté brand mark: a cute, chubby droplet mascot in
 * Frost Pink with a friendly little face. Invented for the brand at its
 * owner's request — no prior logo existed. Pair with Wordmark for a lockup.
 */
function Logomark({
  size = 40,
  fill = 'gradient',
  color,
  className = '',
  style = {},
  ...rest
}) {
  const id = `fro-logo-grad-${React.useId()}`;
  const fillValue = fill === 'gradient' ? `url(#${id})` : fill === 'white' ? '#fff' : color || 'var(--ink-900)';
  const face = fill === 'solid' ? '#fff' : '#182238';
  const shine = fill === 'white' ? 'rgba(24,34,56,0.14)' : 'rgba(255,255,255,0.55)';
  const blush = fill === 'white' ? 'rgba(224,70,138,0.28)' : 'rgba(168,40,102,0.3)';
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    style: {
      display: 'inline-block',
      flex: 'none',
      ...style
    }
  }, rest), fill === 'gradient' && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: id,
    x1: "6",
    y1: "4",
    x2: "42",
    y2: "46",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#F79AC6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "#E0468A"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C7327A"
  }))), /*#__PURE__*/React.createElement("path", {
    d: DROPLET,
    fill: fillValue
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "16",
    cy: "13",
    rx: "3.2",
    ry: "5",
    transform: "rotate(-25 16 13)",
    fill: shine
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "13",
    cy: "35",
    rx: "3",
    ry: "2",
    fill: blush
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "35",
    cy: "35",
    rx: "3",
    ry: "2",
    fill: blush
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "32",
    r: "2.4",
    fill: face
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "31",
    cy: "32",
    r: "2.4",
    fill: face
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 37Q24 41 30 37",
    stroke: face,
    strokeWidth: "2.2",
    strokeLinecap: "round",
    fill: "none"
  }));
}
Object.assign(__ds_scope, { Logomark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logomark.jsx", error: String((e && e.message) || e) }); }

// components/brand/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-price{ display:inline-flex; align-items:baseline; gap:.5em; font-family:var(--font-display); color:var(--pink-500); }
.fro-price--pill{ padding:.4em .9em; border-radius:var(--radius-pill); background:var(--pink-100); }
.fro-price--glass{ padding:.4em .95em; border-radius:var(--radius-pill); background:var(--glass-fill); -webkit-backdrop-filter:var(--blur-md); backdrop-filter:var(--blur-md); border:1px solid var(--glass-border); box-shadow:var(--shadow-sm); }
.fro-price__amt{ display:inline-flex; align-items:baseline; font-weight:var(--fw-extrabold); letter-spacing:var(--ls-tight); line-height:1; }
.fro-price__cur{ font-family:var(--font-thai); font-weight:var(--fw-bold); font-size:.62em; margin-right:.06em; align-self:flex-start; }
.fro-price__was{ font-weight:var(--fw-medium); color:var(--ink-300); text-decoration:line-through; text-decoration-thickness:2px; font-size:.5em; align-self:center; }
.fro-price__note{ font-weight:var(--fw-semibold); color:var(--ink-500); font-size:.34em; align-self:center; letter-spacing:0; }
.fro-price__note--on-accent{ color:var(--pink-600); }
`;

/**
 * PriceTag — the "฿159 Launch Price 🌿" money treatment.
 * Baht glyph is set in Noto Sans Thai; amount in Poppins ExtraBold.
 */
function PriceTag({
  amount,
  currency = '฿',
  compareAt,
  note,
  emoji,
  size = 40,
  variant = 'plain',
  className = '',
  style = {},
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-price-css', CSS), []);
  const cls = ['fro-price', variant !== 'plain' ? `fro-price--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      fontSize: typeof size === 'number' ? `${size}px` : size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fro-price__amt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fro-price__cur"
  }, currency), amount), compareAt != null && /*#__PURE__*/React.createElement("span", {
    className: "fro-price__was"
  }, currency, compareAt), note && /*#__PURE__*/React.createElement("span", {
    className: `fro-price__note${variant !== 'plain' ? ' fro-price__note--on-accent' : ''}`
  }, note), emoji && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '0.55em'
    }
  }, emoji));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the Frosté brand mark, set purely in type (no logo file exists).
 * FROSTÉ in Poppins ExtraBold, uppercase, widely tracked, always with the é.
 */
function Wordmark({
  as = 'span',
  size = 44,
  fill = 'solid',
  weight = 800,
  text = 'FROSTÉ',
  className = '',
  style = {},
  ...rest
}) {
  const Tag = as;
  const fills = {
    solid: {
      color: 'var(--ink-900)'
    },
    white: {
      color: 'var(--white)'
    },
    pink: {
      color: 'var(--pink-500)'
    },
    'holographic-text': {
      background: 'var(--grad-holographic)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    'pink-text': {
      background: 'var(--grad-pink-cta)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: weight,
      fontSize: typeof size === 'number' ? `${size}px` : size,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      lineHeight: 1,
      display: 'inline-block',
      margin: 0,
      ...(fills[fill] || fills.solid),
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-badge{ --_bg:var(--pink-100); --_fg:var(--pink-600);
  display:inline-flex; align-items:center; gap:.4em; font-family:var(--font-display);
  font-weight:var(--fw-bold); border-radius:var(--radius-pill); background:var(--_bg); color:var(--_fg);
  line-height:1; white-space:nowrap; letter-spacing:var(--ls-wide); }
.fro-badge--sm{ font-size:var(--fs-micro); padding:4px 9px; }
.fro-badge--md{ font-size:var(--fs-caption); padding:6px 12px; }
.fro-badge__dot{ width:6px; height:6px; border-radius:var(--radius-pill); background:currentColor; }

.fro-badge--accent{ --_bg:var(--pink-100); --_fg:var(--pink-600); }
.fro-badge--neutral{ --_bg:var(--ink-50); --_fg:var(--ink-500); }
.fro-badge--ink{ --_bg:var(--ink-900); --_fg:var(--white); }
.fro-badge--success{ --_bg:var(--success-soft); --_fg:#0a7d68; }
.fro-badge--info{ --_bg:var(--info-soft); --_fg:#2f6d92; }
.fro-badge--warning{ --_bg:var(--warning-soft); --_fg:#a5641a; }
.fro-badge--new{ background:var(--grad-pink-cta); color:var(--white); text-transform:uppercase; letter-spacing:var(--ls-wider); }
.fro-badge--holo{ background:var(--grad-holographic); color:var(--ink-900); }
`;

/** Small status / label pill — "NEW", "Launch", "Bestseller", counts. */
function Badge({
  children,
  tone = 'accent',
  size = 'md',
  dot = false,
  uppercase = false,
  className = '',
  style = {},
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-badge-css', CSS), []);
  const cls = ['fro-badge', `fro-badge--${tone}`, `fro-badge--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      textTransform: uppercase ? 'uppercase' : undefined,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fro-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-card{ --_pad:24px; position:relative; border-radius:var(--radius-lg); overflow:hidden;
  background:var(--surface-card); border:1px solid var(--border-subtle); box-shadow:var(--shadow-sm);
  color:var(--text-primary); transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.fro-card__body{ padding:var(--_pad); }
.fro-card__media{ display:block; width:100%; }
.fro-card__media img{ display:block; width:100%; height:100%; object-fit:cover; }

.fro-card--pad-none{ --_pad:0; }
.fro-card--pad-sm{ --_pad:16px; }
.fro-card--pad-md{ --_pad:24px; }
.fro-card--pad-lg{ --_pad:32px; }

.fro-card--solid{ background:var(--surface-card); }
.fro-card--elevated{ border-color:transparent; box-shadow:var(--shadow-md); }
.fro-card--glass{ background:var(--glass-fill); -webkit-backdrop-filter:var(--blur-md); backdrop-filter:var(--blur-md); border-color:var(--glass-border); box-shadow:var(--shadow-sm); }
.fro-card--holo{ background:var(--grad-holographic); border-color:transparent; box-shadow:var(--shadow-iri); }
.fro-card--mint{ background:var(--grad-mint-fresh); border-color:transparent; }
.fro-card--cream{ background:var(--surface-cream); border-color:transparent; }

.fro-card--interactive{ cursor:pointer; }
.fro-card--interactive:hover{ transform:translateY(-4px); box-shadow:var(--shadow-lg); }
.fro-card--interactive:active{ transform:translateY(-1px); }
`;

/** Surface container — solid, elevated, glass, or gradient (holographic / mint). */
function Card({
  children,
  variant = 'solid',
  padding = 'md',
  media,
  interactive = false,
  className = '',
  style = {},
  bodyStyle = {},
  as = 'div',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-card-css', CSS), []);
  const Tag = as;
  const cls = ['fro-card', `fro-card--${variant}`, `fro-card--pad-${padding}`, interactive ? 'fro-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "fro-card__media"
  }, media), /*#__PURE__*/React.createElement("div", {
    className: "fro-card__body",
    style: bodyStyle
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-tag{ --_bg:var(--ink-50); --_fg:var(--ink-700); --_bd:transparent;
  display:inline-flex; align-items:center; gap:.45em; font-family:var(--font-display);
  font-weight:var(--fw-semibold); font-size:var(--fs-body-sm); line-height:1;
  padding:8px 14px; border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg); border:1.5px solid var(--_bd); white-space:nowrap;
  transition:transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out); }
.fro-tag--button{ cursor:pointer; }
.fro-tag--button:hover{ transform:translateY(-1px); }
.fro-tag--button:active{ transform:scale(.96); }
.fro-tag--button:focus-visible{ outline:none; box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-tag__dot{ width:9px; height:9px; border-radius:var(--radius-pill); background:currentColor; opacity:.9; }
.fro-tag__x{ display:inline-flex; margin-right:-4px; opacity:.6; cursor:pointer; }
.fro-tag__x:hover{ opacity:1; }

.fro-tag--neutral{ --_bg:var(--ink-50); --_fg:var(--ink-700); }
.fro-tag--pink{ --_bg:var(--pink-100); --_fg:var(--pink-600); }
.fro-tag--acne{ --_bg:var(--mint-200); --_fg:#0a7d68; }
.fro-tag--oil{ --_bg:#E2EEF4; --_fg:#2f6d92; }
.fro-tag--dewy{ --_bg:#FCE1EC; --_fg:#c0417f; }
.fro-tag--glass{ --_bg:var(--glass-fill); --_fg:var(--ink-900); --_bd:var(--glass-border); -webkit-backdrop-filter:var(--blur-md); backdrop-filter:var(--blur-md); }
.fro-tag--outline{ --_bg:transparent; --_fg:var(--ink-700); --_bd:var(--border-strong); }

.fro-tag--selected{ --_bg:var(--ink-900); --_fg:var(--white); --_bd:transparent; }
`;
const VARIANT_DOT = {
  acne: 'var(--variant-acne)',
  oil: 'var(--variant-oil)',
  dewy: 'var(--variant-dewy)'
};

/** Chip for benefits / variants / filters — "Oil Control", "Acne Care", "Dewy Glow". */
function Tag({
  children,
  tone = 'neutral',
  icon,
  dot = false,
  selected = false,
  onRemove,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-tag-css', CSS), []);
  const clickable = !!onClick;
  const cls = ['fro-tag', `fro-tag--${tone}`, selected ? 'fro-tag--selected' : '', clickable ? 'fro-tag--button' : '', className].filter(Boolean).join(' ');
  const Tag_ = clickable ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    style: style,
    onClick: onClick
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fro-tag__dot",
    style: {
      background: VARIANT_DOT[tone]
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "fro-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    strokeWidth: 2.5
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
@keyframes fro-dlg-in{ from{ opacity:0; transform:translateY(12px) scale(.96); } to{ opacity:1; transform:none; } }
@keyframes fro-dlg-fade{ from{ opacity:0; } to{ opacity:1; } }
.fro-dlg__backdrop{ position:fixed; inset:0; z-index:1000; display:flex; align-items:center; justify-content:center;
  padding:24px; background:var(--glass-tint-ink); -webkit-backdrop-filter:var(--blur-sm); backdrop-filter:var(--blur-sm);
  animation:fro-dlg-fade var(--dur-base) var(--ease-out); }
.fro-dlg{ position:relative; width:100%; background:var(--surface-card); border-radius:var(--radius-xl);
  box-shadow:var(--shadow-xl); padding:28px; animation:fro-dlg-in var(--dur-slow) var(--ease-spring);
  max-height:calc(100vh - 48px); overflow:auto; }
.fro-dlg--sm{ max-width:400px; } .fro-dlg--md{ max-width:520px; } .fro-dlg--lg{ max-width:680px; }
.fro-dlg__close{ position:absolute; top:16px; right:16px; }
.fro-dlg__title{ font-family:var(--font-display); font-weight:var(--fw-extrabold); font-size:var(--fs-h2);
  letter-spacing:var(--ls-tight); color:var(--text-primary); margin:0 40px 6px 0; }
.fro-dlg__desc{ font-family:var(--font-body); color:var(--text-secondary); font-size:var(--fs-body); line-height:var(--lh-body); margin:0; }
.fro-dlg__body{ margin-top:16px; }
.fro-dlg__footer{ display:flex; justify-content:flex-end; gap:10px; margin-top:24px; flex-wrap:wrap; }
`;

/** Modal dialog over a frosted backdrop. Renders nothing when `open` is false. */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
  className = '',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-dlg-css', CSS), []);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fro-dlg__backdrop",
    onMouseDown: e => {
      if (closeOnBackdrop && e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['fro-dlg', `fro-dlg--${size}`, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, rest), onClose && /*#__PURE__*/React.createElement("span", {
    className: "fro-dlg__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    onClick: onClose
  })), title && /*#__PURE__*/React.createElement("h2", {
    className: "fro-dlg__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "fro-dlg__desc"
  }, description), children && /*#__PURE__*/React.createElement("div", {
    className: "fro-dlg__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "fro-dlg__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
@keyframes fro-toast-in{ from{ opacity:0; transform:translateY(10px) scale(.97); } to{ opacity:1; transform:none; } }
.fro-toast{ --_accent:var(--pink-500);
  display:flex; align-items:flex-start; gap:12px; width:100%; max-width:400px;
  background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg);
  box-shadow:var(--shadow-lg); padding:14px 16px; font-family:var(--font-body);
  animation:fro-toast-in var(--dur-base) var(--ease-spring); }
.fro-toast__icon{ flex:none; width:34px; height:34px; border-radius:var(--radius-pill);
  display:flex; align-items:center; justify-content:center;
  background:color-mix(in srgb, var(--_accent) 15%, white); color:var(--_accent); }
.fro-toast__body{ flex:1; min-width:0; padding-top:1px; }
.fro-toast__title{ font-weight:var(--fw-bold); font-size:var(--fs-body-sm); color:var(--text-primary); font-family:var(--font-display); }
.fro-toast__msg{ font-size:var(--fs-caption); color:var(--text-secondary); line-height:1.45; margin-top:2px; }
.fro-toast__x{ flex:none; border:none; background:transparent; color:var(--text-muted); cursor:pointer; padding:2px; border-radius:8px; line-height:0; }
.fro-toast__x:hover{ color:var(--text-primary); background:var(--surface-sunk); }
.fro-toast--success{ --_accent:var(--success); }
.fro-toast--info{ --_accent:var(--info); }
.fro-toast--accent{ --_accent:var(--pink-500); }
.fro-toast--warning{ --_accent:var(--warning); }
`;
const TONE_ICON = {
  success: 'check-circle-2',
  info: 'info',
  accent: 'sparkles',
  warning: 'triangle-alert'
};

/** A single toast notification. Compose your own stack/viewport around it. */
function Toast({
  title,
  children,
  tone = 'accent',
  icon,
  onClose,
  className = '',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-toast-css', CSS), []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fro-toast', `fro-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "fro-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || TONE_ICON[tone] || 'sparkles',
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    className: "fro-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "fro-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "fro-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "fro-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-tt{ position:relative; display:inline-flex; }
.fro-tt__bubble{ position:absolute; z-index:900; pointer-events:none;
  background:var(--ink-900); color:var(--white); font-family:var(--font-body); font-weight:var(--fw-medium);
  font-size:var(--fs-caption); line-height:1.3; padding:7px 11px; border-radius:var(--radius-sm);
  box-shadow:var(--shadow-md); white-space:nowrap; max-width:240px;
  opacity:0; transform:scale(.94); transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.fro-tt__bubble::after{ content:""; position:absolute; width:8px; height:8px; background:var(--ink-900); transform:rotate(45deg); }
.fro-tt:hover .fro-tt__bubble, .fro-tt:focus-within .fro-tt__bubble{ opacity:1; transform:scale(1); }

.fro-tt__bubble--top{ bottom:calc(100% + 8px); left:50%; translate:-50% 0; }
.fro-tt__bubble--top::after{ bottom:-4px; left:50%; margin-left:-4px; }
.fro-tt__bubble--bottom{ top:calc(100% + 8px); left:50%; translate:-50% 0; }
.fro-tt__bubble--bottom::after{ top:-4px; left:50%; margin-left:-4px; }
.fro-tt__bubble--left{ right:calc(100% + 8px); top:50%; translate:0 -50%; }
.fro-tt__bubble--left::after{ right:-4px; top:50%; margin-top:-4px; }
.fro-tt__bubble--right{ left:calc(100% + 8px); top:50%; translate:0 -50%; }
.fro-tt__bubble--right::after{ left:-4px; top:50%; margin-top:-4px; }
`;

/** Hover / focus tooltip. Wraps a single interactive child. */
function Tooltip({
  label,
  side = 'top',
  children,
  className = '',
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-tt-css', CSS), []);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fro-tt', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `fro-tt__bubble fro-tt__bubble--${side}`,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-body);
  font-size:var(--fs-body); color:var(--text-primary); cursor:pointer; user-select:none; }
.fro-check input{ position:absolute; opacity:0; width:0; height:0; }
.fro-check__box{ flex:none; width:22px; height:22px; border-radius:7px;
  border:1.5px solid var(--border-strong); background:var(--surface-card);
  display:inline-flex; align-items:center; justify-content:center; color:var(--white);
  transition:background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); margin-top:1px; }
.fro-check__box svg{ opacity:0; transform:scale(.5); transition:opacity var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-spring); }
.fro-check input:checked + .fro-check__box{ background:var(--grad-pink-cta); border-color:transparent; }
.fro-check input:checked + .fro-check__box svg{ opacity:1; transform:scale(1); }
.fro-check input:focus-visible + .fro-check__box{ box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-check:hover .fro-check__box{ border-color:var(--pink-400); }
.fro-check[data-disabled="true"]{ opacity:.5; pointer-events:none; }
.fro-check__text{ line-height:1.4; padding-top:1px; }
.fro-check__sub{ display:block; font-size:var(--fs-caption); color:var(--text-muted); font-weight:var(--fw-regular); }
`;

/** Checkbox with a pink-gradient checked state and spring-in tick. */
function Checkbox({
  label,
  sublabel,
  checked,
  defaultChecked,
  disabled = false,
  id,
  className = '',
  onChange,
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-check-css', CSS), []);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ['fro-check', className].filter(Boolean).join(' '),
    htmlFor: uid,
    "data-disabled": disabled || undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fro-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3
  })), (label || sublabel) && /*#__PURE__*/React.createElement("span", {
    className: "fro-check__text"
  }, label, sublabel && /*#__PURE__*/React.createElement("span", {
    className: "fro-check__sub"
  }, sublabel)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.fro-field__label{ font-size:var(--fs-body-sm); font-weight:var(--fw-semibold); color:var(--text-primary); }
.fro-field__req{ color:var(--pink-500); margin-left:2px; }
.fro-input{ position:relative; display:flex; align-items:center; gap:8px;
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:0 14px; transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.fro-input--pill{ border-radius:var(--radius-pill); }
.fro-input__icon{ color:var(--text-muted); flex:none; }
.fro-input input{ flex:1; border:none; outline:none; background:transparent; font:inherit;
  color:var(--text-primary); font-size:var(--fs-body); padding:12px 0; min-width:0; }
.fro-input input::placeholder{ color:var(--text-muted); }
.fro-input:hover{ border-color:var(--border-strong); }
.fro-input:focus-within{ border-color:var(--pink-400); box-shadow:0 0 0 var(--ring-width) color-mix(in srgb, var(--focus-ring) 22%, transparent); }
.fro-field--error .fro-input{ border-color:var(--danger); }
.fro-field--error .fro-input:focus-within{ box-shadow:0 0 0 var(--ring-width) color-mix(in srgb, var(--danger) 22%, transparent); }
.fro-field[data-disabled="true"]{ opacity:.55; pointer-events:none; }
.fro-field__hint{ font-size:var(--fs-caption); color:var(--text-muted); }
.fro-field__hint--error{ color:var(--danger); font-weight:var(--fw-medium); }
`;

/** Text input with optional label, leading icon, hint & error state. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  pill = false,
  required = false,
  disabled = false,
  id,
  className = '',
  style = {},
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-input-css', CSS), []);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: ['fro-field', error ? 'fro-field--error' : '', className].filter(Boolean).join(' '),
    "data-disabled": disabled || undefined,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fro-field__label",
    htmlFor: uid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fro-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: `fro-input${pill ? ' fro-input--pill' : ''}`
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "fro-input__icon",
    name: iconLeft,
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `fro-field__hint${error ? ' fro-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-radio{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-body);
  font-size:var(--fs-body); color:var(--text-primary); cursor:pointer; user-select:none; }
.fro-radio input{ position:absolute; opacity:0; width:0; height:0; }
.fro-radio__dot{ flex:none; width:22px; height:22px; border-radius:var(--radius-pill);
  border:1.5px solid var(--border-strong); background:var(--surface-card);
  display:inline-flex; align-items:center; justify-content:center;
  transition:border-color var(--dur-fast) var(--ease-out); margin-top:1px; }
.fro-radio__dot::after{ content:""; width:11px; height:11px; border-radius:var(--radius-pill);
  background:var(--grad-pink-cta); transform:scale(0); transition:transform var(--dur-base) var(--ease-spring); }
.fro-radio input:checked + .fro-radio__dot{ border-color:var(--pink-400); }
.fro-radio input:checked + .fro-radio__dot::after{ transform:scale(1); }
.fro-radio input:focus-visible + .fro-radio__dot{ box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-radio:hover .fro-radio__dot{ border-color:var(--pink-400); }
.fro-radio[data-disabled="true"]{ opacity:.5; pointer-events:none; }
.fro-radio__text{ line-height:1.4; padding-top:1px; }
.fro-radio__sub{ display:block; font-size:var(--fs-caption); color:var(--text-muted); font-weight:var(--fw-regular); }
`;

/** Radio button with a pink-gradient dot. */
function Radio({
  label,
  sublabel,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  id,
  className = '',
  onChange,
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-radio-css', CSS), []);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ['fro-radio', className].filter(Boolean).join(' '),
    htmlFor: uid,
    "data-disabled": disabled || undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fro-radio__dot"
  }), (label || sublabel) && /*#__PURE__*/React.createElement("span", {
    className: "fro-radio__text"
  }, label, sublabel && /*#__PURE__*/React.createElement("span", {
    className: "fro-radio__sub"
  }, sublabel)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-select{ position:relative; display:flex; align-items:center;
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:0 14px; transition:border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.fro-select:hover{ border-color:var(--border-strong); }
.fro-select:focus-within{ border-color:var(--pink-400); box-shadow:0 0 0 var(--ring-width) color-mix(in srgb, var(--focus-ring) 22%, transparent); }
.fro-select select{ appearance:none; -webkit-appearance:none; flex:1; border:none; outline:none; background:transparent;
  font:inherit; font-family:var(--font-body); font-size:var(--fs-body); color:var(--text-primary);
  padding:12px 26px 12px 0; cursor:pointer; }
.fro-select__chev{ position:absolute; right:14px; color:var(--text-muted); pointer-events:none; }
.fro-select[data-disabled="true"]{ opacity:.55; pointer-events:none; }
`;

/** Native select, styled to match the brand's inputs. */
function Select({
  label,
  hint,
  options = [],
  placeholder,
  required = false,
  disabled = false,
  id,
  className = '',
  style = {},
  children,
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-select-css', CSS), []);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: ['fro-field', className].filter(Boolean).join(' '),
    "data-disabled": disabled || undefined,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fro-field__label",
    htmlFor: uid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fro-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "fro-select",
    "data-disabled": disabled || undefined
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    defaultValue: placeholder ? '' : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "fro-select__chev",
    name: "chevron-down",
    size: 18
  })), hint && /*#__PURE__*/React.createElement("span", {
    className: "fro-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const CSS = `
.fro-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--font-body);
  font-size:var(--fs-body); color:var(--text-primary); cursor:pointer; user-select:none; }
.fro-switch input{ position:absolute; opacity:0; width:0; height:0; }
.fro-switch__track{ flex:none; width:44px; height:26px; border-radius:var(--radius-pill);
  background:var(--ink-200); position:relative; transition:background var(--dur-base) var(--ease-out); }
.fro-switch__track::after{ content:""; position:absolute; top:3px; left:3px; width:20px; height:20px;
  border-radius:var(--radius-pill); background:var(--white); box-shadow:var(--shadow-sm);
  transition:transform var(--dur-base) var(--ease-spring); }
.fro-switch input:checked + .fro-switch__track{ background:var(--grad-pink-cta); }
.fro-switch input:checked + .fro-switch__track::after{ transform:translateX(18px); }
.fro-switch input:focus-visible + .fro-switch__track{ box-shadow:0 0 0 var(--ring-offset) var(--surface-card), 0 0 0 calc(var(--ring-offset) + var(--ring-width)) var(--focus-ring); }
.fro-switch[data-disabled="true"]{ opacity:.5; pointer-events:none; }
`;

/** Toggle switch — pink-gradient track when on, spring thumb. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  className = '',
  onChange,
  ...rest
}) {
  React.useEffect(() => injectOnce('fro-switch-css', CSS), []);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    className: ['fro-switch', className].filter(Boolean).join(' '),
    htmlFor: uid,
    "data-disabled": disabled || undefined
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fro-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/CartSheet.jsx
try { (() => {
/* Frosté · Shop kit — slide-up cart / checkout sheet with line items,
   quantity steppers, free-keychain callout and totals. Exposes CartSheet. */
(function () {
  const {
    Icon,
    IconButton,
    Button,
    PriceTag
  } = window.FrostDesignSystem_5751f8;
  function CartSheet({
    open,
    items,
    onClose,
    onQty,
    onCheckout
  }) {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const shipping = subtotal >= 300 || subtotal === 0 ? 0 : 40;
    const total = subtotal + shipping;
    return /*#__PURE__*/React.createElement("div", {
      className: `sheet-wrap${open ? ' is-open' : ''}`,
      onMouseDown: e => {
        if (e.target === e.currentTarget) onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sheet",
      role: "dialog",
      "aria-label": "Your bag"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sheet__grab"
    }), /*#__PURE__*/React.createElement("header", {
      className: "sheet__head"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sheet__title"
    }, "Your bag"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      variant: "ghost",
      size: "sm",
      onClick: onClose
    })), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "sheet__empty"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sheet__empty-emoji"
    }, "\uD83E\uDEE7"), /*#__PURE__*/React.createElement("p", null, "Your bag is empty.", /*#__PURE__*/React.createElement("br", null), "Time to slay.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "sheet__items"
    }, items.map((it, idx) => /*#__PURE__*/React.createElement("div", {
      className: "line",
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "line__media",
      style: {
        background: it.grad
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: it.img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "line__info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "line__name"
    }, it.name), /*#__PURE__*/React.createElement("div", {
      className: "line__charm"
    }, it.charm ? /*#__PURE__*/React.createElement(React.Fragment, null, "Charm: ", it.charm.emoji, " ", it.charm.name) : 'No charm'), /*#__PURE__*/React.createElement("div", {
      className: "line__qty"
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Decrease",
      onClick: () => onQty(idx, -1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 15
    })), /*#__PURE__*/React.createElement("span", null, it.qty), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Increase",
      onClick: () => onQty(idx, 1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })))), /*#__PURE__*/React.createElement(PriceTag, {
      amount: it.price * it.qty,
      size: 16
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sheet__gift"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sheet__gift-emoji"
    }, "\uD83E\uDDF8"), /*#__PURE__*/React.createElement("span", null, "Free charm keychain included with every order"), /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--success)",
      strokeWidth: 3
    })), /*#__PURE__*/React.createElement("div", {
      className: "sheet__totals"
    }, /*#__PURE__*/React.createElement("div", {
      className: "trow"
    }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "\u0E3F", subtotal)), /*#__PURE__*/React.createElement("div", {
      className: "trow"
    }, /*#__PURE__*/React.createElement("span", null, "Shipping ", shipping === 0 && /*#__PURE__*/React.createElement("em", null, "\xB7 free")), /*#__PURE__*/React.createElement("span", null, shipping === 0 ? '฿0' : `฿${shipping}`)), /*#__PURE__*/React.createElement("div", {
      className: "trow trow--total"
    }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u0E3F", total)), shipping > 0 && /*#__PURE__*/React.createElement("div", {
      className: "sheet__ship-note"
    }, "Add \u0E3F", 300 - subtotal, " more for free shipping")), /*#__PURE__*/React.createElement("div", {
      className: "sheet__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      block: true,
      iconRight: "arrow-right",
      onClick: onCheckout
    }, "Checkout \xB7 \u0E3F", total)))));
  }
  Object.assign(window, {
    CartSheet
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/CartSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/ProductDetail.jsx
try { (() => {
/* Frosté · Shop kit — product detail page: variant switch, free-charm picker,
   benefits, sticky add-to-bag. Exposes ProductDetail on window. */
(function () {
  const {
    Wordmark,
    IconButton,
    Icon,
    Button,
    Tag,
    PriceTag
  } = window.FrostDesignSystem_5751f8;
  function Stars({
    rating
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "stars",
      "aria-label": `${rating} out of 5`
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
      key: i,
      name: "star",
      size: 15,
      color: "var(--variant-dewy-warm)",
      style: {
        fill: i < Math.round(rating) ? 'var(--variant-dewy-warm)' : 'transparent'
      }
    })));
  }
  function ProductDetail({
    product,
    onBack,
    onAdd,
    cartCount,
    onCart
  }) {
    const products = window.FROSTE.products;
    const charms = window.FROSTE.charms;
    const [variantId, setVariantId] = React.useState(product.id);
    const [charm, setCharm] = React.useState(charms[0].id);
    const p = products.find(x => x.id === variantId);
    return /*#__PURE__*/React.createElement("div", {
      className: "screen"
    }, /*#__PURE__*/React.createElement("header", {
      className: "topbar topbar--float"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      label: "Back",
      variant: "glass",
      size: "sm",
      onClick: onBack
    }), /*#__PURE__*/React.createElement("div", {
      className: "topbar__actions"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "heart",
      label: "Save",
      variant: "glass",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cartbtn"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-bag",
      label: "Cart",
      variant: "glass",
      size: "sm",
      onClick: onCart
    }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "cartbtn__count"
    }, cartCount)))), /*#__PURE__*/React.createElement("div", {
      className: "scroll scroll--pdp"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdp__hero",
      style: {
        background: p.grad
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.name
    })), /*#__PURE__*/React.createElement("div", {
      className: "pdp__body"
    }, /*#__PURE__*/React.createElement(Wordmark, {
      as: "div",
      size: 13
    }), /*#__PURE__*/React.createElement("div", {
      className: "pdp__title-row"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "pdp__title"
    }, p.name), /*#__PURE__*/React.createElement(PriceTag, {
      amount: p.price,
      compareAt: p.compareAt,
      size: 26
    })), /*#__PURE__*/React.createElement("p", {
      className: "pdp__serif"
    }, p.serif), /*#__PURE__*/React.createElement("div", {
      className: "pdp__rating"
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: p.rating
    }), /*#__PURE__*/React.createElement("span", null, p.rating, " \xB7 ", p.reviews.toLocaleString(), " reviews")), /*#__PURE__*/React.createElement("p", {
      className: "pdp__about"
    }, p.about), /*#__PURE__*/React.createElement("div", {
      className: "pdp__tags"
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      tone: p.tone
    }, t))), /*#__PURE__*/React.createElement("div", {
      className: "pdp__section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdp__label"
    }, "Choose your formula"), /*#__PURE__*/React.createElement("div", {
      className: "variants"
    }, products.map(v => /*#__PURE__*/React.createElement("button", {
      key: v.id,
      className: `variant${v.id === variantId ? ' is-on' : ''}`,
      onClick: () => setVariantId(v.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "variant__sw",
      style: {
        background: v.grad
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "variant__name"
    }, v.name))))), /*#__PURE__*/React.createElement("div", {
      className: "pdp__section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pdp__label"
    }, "Pick your free charm ", /*#__PURE__*/React.createElement("span", {
      className: "pdp__free"
    }, "Free \uD83E\uDDF8")), /*#__PURE__*/React.createElement("div", {
      className: "charms"
    }, charms.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: `charm${c.id === charm ? ' is-on' : ''}`,
      onClick: () => setCharm(c.id),
      title: c.name
    }, /*#__PURE__*/React.createElement("span", {
      className: "charm__emoji"
    }, c.emoji), /*#__PURE__*/React.createElement("span", {
      className: "charm__name"
    }, c.name))))))), /*#__PURE__*/React.createElement("div", {
      className: "pdp__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      block: true,
      iconLeft: "shopping-bag",
      onClick: () => onAdd({
        ...p,
        charm: charms.find(c => c.id === charm)
      })
    }, "Add to bag \xB7 \u0E3F", p.price)));
  }
  Object.assign(window, {
    ProductDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/ShopHome.jsx
try { (() => {
/* Frosté · Shop kit — storefront home: hero banner, filter chips, product grid.
   Exposes ShopHome on window. */
(function () {
  const {
    Wordmark,
    IconButton,
    Icon,
    Button,
    Tag,
    PriceTag,
    Badge
  } = window.FrostDesignSystem_5751f8;
  function ProductCard({
    p,
    onOpen,
    onAdd
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pc",
      onClick: () => onOpen(p)
    }, /*#__PURE__*/React.createElement("div", {
      className: "pc__media",
      style: {
        background: p.grad
      }
    }, p.bestseller && /*#__PURE__*/React.createElement("span", {
      className: "pc__flag"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "ink",
      size: "sm"
    }, "\u2605 Bestseller")), /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.name
    })), /*#__PURE__*/React.createElement("div", {
      className: "pc__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pc__name"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "pc__serif"
    }, p.serif), /*#__PURE__*/React.createElement("div", {
      className: "pc__foot"
    }, /*#__PURE__*/React.createElement(PriceTag, {
      amount: p.price,
      size: 20
    }), /*#__PURE__*/React.createElement("button", {
      className: "pc__add",
      "aria-label": `Add ${p.name}`,
      onClick: e => {
        e.stopPropagation();
        onAdd(p);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20,
      color: "#fff"
    })))));
  }
  function ShopHome({
    onOpen,
    onAdd,
    cartCount,
    onCart,
    filter,
    setFilter
  }) {
    const products = window.FROSTE.products;
    const chips = [['all', 'All'], ['acne', 'Acne Care'], ['oil', 'Oil Control'], ['dewy', 'Dewy Glow']];
    const shown = filter === 'all' ? products : products.filter(p => p.id === filter);
    return /*#__PURE__*/React.createElement("div", {
      className: "screen"
    }, /*#__PURE__*/React.createElement("header", {
      className: "topbar"
    }, /*#__PURE__*/React.createElement(Wordmark, {
      as: "div",
      size: 24
    }), /*#__PURE__*/React.createElement("div", {
      className: "topbar__actions"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search",
      variant: "ghost",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cartbtn"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "shopping-bag",
      label: "Cart",
      variant: "ghost",
      size: "sm",
      onClick: onCart
    }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "cartbtn__count"
    }, cartCount)))), /*#__PURE__*/React.createElement("div", {
      className: "scroll"
    }, /*#__PURE__*/React.createElement("section", {
      className: "hero-banner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-banner__text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero-banner__eyebrow"
    }, "Launch drop"), /*#__PURE__*/React.createElement("h1", {
      className: "hero-banner__head"
    }, "SPRAY IT.", /*#__PURE__*/React.createElement("br", null), "SLAY IT."), /*#__PURE__*/React.createElement("p", {
      className: "hero-banner__sub"
    }, "3 sprays. 3 problems solved."), /*#__PURE__*/React.createElement(Button, {
      variant: "glass",
      size: "sm",
      iconRight: "arrow-right"
    }, "Shop the drop")), /*#__PURE__*/React.createElement("img", {
      className: "hero-banner__bottle",
      src: products[2].img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "promo"
    }, /*#__PURE__*/React.createElement("span", {
      className: "promo__emoji"
    }, "\uD83E\uDDF8"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Free charm keychain"), " with every order")), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, chips.map(([id, label]) => /*#__PURE__*/React.createElement(Tag, {
      key: id,
      tone: id === 'all' ? 'neutral' : id,
      dot: id !== 'all',
      selected: filter === id,
      onClick: () => setFilter(id)
    }, label))), /*#__PURE__*/React.createElement("div", {
      className: "grid"
    }, shown.map(p => /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      onOpen: onOpen,
      onAdd: onAdd
    })))));
  }
  Object.assign(window, {
    ShopHome
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/ShopHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/data.js
try { (() => {
/* Frosté · Shop kit — shared demo data (plain JS, loaded before the JSX). */
window.FROSTE = {
  products: [{
    id: 'acne',
    name: 'Acne Care',
    tone: 'acne',
    serif: 'Clear skin, zero drama.',
    benefit: 'Blemish-fighting mist',
    price: 159,
    compareAt: 259,
    img: '../../assets/product-acne-care.png',
    grad: 'var(--grad-acne)',
    hue: 'var(--variant-acne)',
    rating: 4.9,
    reviews: 1243,
    bestseller: true,
    tags: ['Salicylic', 'Oil-free', 'Fragrance-free'],
    about: 'A featherlight mist that calms breakouts and blurs redness while you\u2019re out living. Spray, go, glow.'
  }, {
    id: 'oil',
    name: 'Oil Control',
    tone: 'oil',
    serif: 'Shine? Never met her.',
    benefit: 'Mattifying setting mist',
    price: 159,
    compareAt: 259,
    img: '../../assets/product-oil-control.png',
    grad: 'var(--grad-oil)',
    hue: 'var(--variant-oil)',
    rating: 4.8,
    reviews: 982,
    bestseller: false,
    tags: ['Mattifying', 'Pore-blur', '12h hold'],
    about: 'Locks makeup in place and keeps midday shine on mute. A quick mist resets your whole face.'
  }, {
    id: 'dewy',
    name: 'Dewy Glow',
    tone: 'dewy',
    serif: 'Your face, but dewier.',
    benefit: 'Hydrating glow mist',
    price: 159,
    compareAt: 259,
    img: '../../assets/product-dewy-glow.png',
    grad: 'var(--grad-dewy)',
    hue: 'var(--variant-dewy)',
    rating: 5.0,
    reviews: 1587,
    bestseller: true,
    tags: ['Hyaluronic', 'Lit-from-within', 'Dewy finish'],
    about: 'A dewy veil of hydration for that lit-from-within finish. The one everyone stops you to ask about.'
  }],
  charms: [{
    id: 'bear',
    emoji: '\uD83E\uDDF8',
    name: 'Gummy Bear'
  }, {
    id: 'duck',
    emoji: '\uD83E\uDD86',
    name: 'Rubber Duck'
  }, {
    id: 'heart',
    emoji: '\uD83D\uDC96',
    name: 'Love Heart'
  }, {
    id: 'balloon',
    emoji: '\uD83C\uDF88',
    name: 'Balloon Dog'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/data.js", error: String((e && e.message) || e) }); }

// ui_kits/social/CarouselPost.jsx
try { (() => {
/* Frosté · Social kit — an Instagram feed post wrapping the launch carousel.
   Interactive: swipe slides (arrows / dots / tap), like, save.
   Exposes CarouselPost on window. */
(function () {
  const {
    Icon
  } = window.FrostDesignSystem_5751f8;
  function Avatar() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ig__avatar"
    }, /*#__PURE__*/React.createElement("span", null, "F"));
  }
  function CarouselPost() {
    const slides = [window.HeroSlide, window.LineupSlide, window.OfferSlide];
    const [i, setI] = React.useState(0);
    const [liked, setLiked] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const [follow, setFollow] = React.useState(false);
    const go = d => setI(v => Math.max(0, Math.min(slides.length - 1, v + d)));
    const Slide = slides[i];
    return /*#__PURE__*/React.createElement("article", {
      className: "ig"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ig__head"
    }, /*#__PURE__*/React.createElement(Avatar, null), /*#__PURE__*/React.createElement("div", {
      className: "ig__id"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ig__name"
    }, "frost\xE9.official ", /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 14,
      color: "var(--pink-500)",
      style: {
        fill: 'var(--pink-100)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "ig__meta"
    }, "Bangkok \xB7 Sponsored")), /*#__PURE__*/React.createElement("button", {
      className: `ig__follow${follow ? ' is-on' : ''}`,
      onClick: () => setFollow(f => !f)
    }, follow ? 'Following' : 'Follow'), /*#__PURE__*/React.createElement("button", {
      className: "ig__more",
      "aria-label": "More"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-horizontal",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ig__frame"
    }, /*#__PURE__*/React.createElement(Slide, null), i > 0 && /*#__PURE__*/React.createElement("button", {
      className: "ig__nav ig__nav--l",
      "aria-label": "Previous",
      onClick: () => go(-1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 18
    })), i < slides.length - 1 && /*#__PURE__*/React.createElement("button", {
      className: "ig__nav ig__nav--r",
      "aria-label": "Next",
      onClick: () => go(1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      className: "ig__count"
    }, i + 1, "/", slides.length)), /*#__PURE__*/React.createElement("div", {
      className: "ig__bar"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ig__act",
      "aria-label": "Like",
      onClick: () => setLiked(l => !l)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 26,
      color: liked ? 'var(--pink-500)' : 'var(--ink-900)',
      style: liked ? {
        fill: 'var(--pink-500)'
      } : undefined
    })), /*#__PURE__*/React.createElement("button", {
      className: "ig__act",
      "aria-label": "Comment"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 26,
      color: "var(--ink-900)"
    })), /*#__PURE__*/React.createElement("button", {
      className: "ig__act",
      "aria-label": "Share"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 25,
      color: "var(--ink-900)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ig__dots"
    }, slides.map((_, d) => /*#__PURE__*/React.createElement("span", {
      key: d,
      className: `ig__dot${d === i ? ' is-on' : ''}`,
      onClick: () => setI(d)
    }))), /*#__PURE__*/React.createElement("button", {
      className: "ig__act ig__act--save",
      "aria-label": "Save",
      onClick: () => setSaved(s => !s)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 26,
      color: "var(--ink-900)",
      style: saved ? {
        fill: 'var(--ink-900)'
      } : undefined
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ig__likes"
    }, "Liked by ", /*#__PURE__*/React.createElement("b", null, "skincaretok"), " and ", /*#__PURE__*/React.createElement("b", null, "2,481 others")), /*#__PURE__*/React.createElement("div", {
      className: "ig__caption"
    }, /*#__PURE__*/React.createElement("b", null, "frost\xE9.official"), " Spray it. Slay it. \uD83C\uDF3F One pocket mist, three problems solved \u2014 oil, acne & that dewy glow. Free charm keychain with every order \uD83E\uDDF8", /*#__PURE__*/React.createElement("div", {
      className: "ig__tags"
    }, "#froste #dewyglow #kbeauty #sprayitslayit #\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E1C\u0E34\u0E27")), /*#__PURE__*/React.createElement("div", {
      className: "ig__time"
    }, "2 hours ago"));
  }
  Object.assign(window, {
    CarouselPost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/CarouselPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Slides.jsx
try { (() => {
/* Frosté · Social kit — the three launch carousel slides, rebuilt faithfully
   from the source PDF. Text scales with the slide via container query units
   (cqw), so a slide looks right at any rendered size.
   Exposes HeroSlide / LineupSlide / OfferSlide on window. */
(function () {
  const {
    Wordmark,
    PriceTag
  } = window.FrostDesignSystem_5751f8;
  const A = '../../assets';
  function HeroSlide() {
    return /*#__PURE__*/React.createElement("div", {
      className: "slide slide--holo"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "hero__head"
    }, "SPRAY IT.", /*#__PURE__*/React.createElement("br", null), "SLAY IT."), /*#__PURE__*/React.createElement("p", {
      className: "hero__sub"
    }, "Frost\xE9 \u2014 Oil Control \xB7 Acne Care \xB7 Dewy Glow")), /*#__PURE__*/React.createElement("div", {
      className: "hero__fan"
    }, /*#__PURE__*/React.createElement("img", {
      className: "hero__bottle hero__bottle--l",
      src: `${A}/product-oil-control.png`,
      alt: "Frost\xE9 Oil Control"
    }), /*#__PURE__*/React.createElement("img", {
      className: "hero__bottle hero__bottle--c",
      src: `${A}/product-acne-care.png`,
      alt: "Frost\xE9 Acne Care"
    }), /*#__PURE__*/React.createElement("img", {
      className: "hero__bottle hero__bottle--r",
      src: `${A}/product-dewy-glow.png`,
      alt: "Frost\xE9 Dewy Glow"
    })));
  }
  function LineupSlide() {
    const items = [['product-acne-care.png', 'Acne Care'], ['product-oil-control.png', 'Oil Control'], ['product-dewy-glow.png', 'Dewy Glow']];
    return /*#__PURE__*/React.createElement("div", {
      className: "slide slide--holo slide--pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lineup"
    }, items.map(([img, name]) => /*#__PURE__*/React.createElement("div", {
      className: "lineup__col",
      key: name
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A}/${img}`,
      alt: `Frosté ${name}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "lineup__name"
    }, name)))), /*#__PURE__*/React.createElement("p", {
      className: "lineup__tag"
    }, "3 sprays.", /*#__PURE__*/React.createElement("br", null), "3 problems solved."));
  }
  function OfferSlide() {
    return /*#__PURE__*/React.createElement("div", {
      className: "slide slide--mint slide--pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "offer__head"
    }, /*#__PURE__*/React.createElement(Wordmark, {
      as: "div",
      size: "12cqw"
    }), /*#__PURE__*/React.createElement("p", {
      className: "offer__serif"
    }, "Oil Control \xB7 Acne Care \xB7 Dewy Glow")), /*#__PURE__*/React.createElement("div", {
      className: "offer__row"
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A}/product-acne-care.png`,
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: `${A}/product-oil-control.png`,
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: `${A}/product-dewy-glow.png`,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "offer__foot"
    }, /*#__PURE__*/React.createElement(PriceTag, {
      amount: 159,
      note: "Launch Price",
      emoji: "\uD83C\uDF3F",
      size: "10cqw"
    }), /*#__PURE__*/React.createElement("span", {
      className: "offer__free"
    }, "FREE keychain with every order \uD83E\uDDF8"), /*#__PURE__*/React.createElement("span", {
      className: "offer__slay"
    }, "Spray It. Slay It.")));
  }
  Object.assign(window, {
    HeroSlide,
    LineupSlide,
    OfferSlide
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Templates.jsx
try { (() => {
/* Frosté · Social kit — extra formats: a 9:16 Story and a 1:1 feed announcement.
   Same brand system, different canvas. Exposes StoryTemplate / FeedPost. */
(function () {
  const {
    Wordmark,
    PriceTag,
    Button,
    Badge,
    Icon
  } = window.FrostDesignSystem_5751f8;
  const AA = '../../assets';
  function StoryTemplate() {
    return /*#__PURE__*/React.createElement("div", {
      className: "story slide--holo"
    }, /*#__PURE__*/React.createElement("div", {
      className: "story__bars"
    }, /*#__PURE__*/React.createElement("i", {
      className: "is-on"
    }), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
      className: "story__top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "story__id"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ig__avatar ig__avatar--sm"
    }, /*#__PURE__*/React.createElement("span", null, "F")), "frost\xE9.official", /*#__PURE__*/React.createElement("span", {
      className: "story__time"
    }, "3h")), /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      className: "story__body"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "new"
    }, "NEW DROP"), /*#__PURE__*/React.createElement("img", {
      className: "story__bottle",
      src: `${AA}/product-dewy-glow.png`,
      alt: "Frost\xE9 Dewy Glow"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "story__head"
    }, "SPRAY IT.", /*#__PURE__*/React.createElement("br", null), "SLAY IT."), /*#__PURE__*/React.createElement(PriceTag, {
      amount: 159,
      note: "Launch Price",
      emoji: "\uD83C\uDF3F",
      size: "8cqw",
      variant: "glass"
    })), /*#__PURE__*/React.createElement("div", {
      className: "story__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      block: true,
      iconRight: "arrow-up"
    }, "Shop the drop"), /*#__PURE__*/React.createElement("span", {
      className: "story__swipe"
    }, "Swipe up to shop")));
  }
  function FeedPost() {
    return /*#__PURE__*/React.createElement("div", {
      className: "slide slide--holo slide--pad feed"
    }, /*#__PURE__*/React.createElement("span", {
      className: "feed__eyebrow"
    }, "Launch day \u2728"), /*#__PURE__*/React.createElement(Wordmark, {
      as: "div",
      fill: "white",
      size: "15cqw"
    }), /*#__PURE__*/React.createElement("p", {
      className: "feed__serif"
    }, "Your face, but dewier."), /*#__PURE__*/React.createElement("img", {
      className: "feed__bottle",
      src: `${AA}/product-acne-care.png`,
      alt: "Frost\xE9"
    }), /*#__PURE__*/React.createElement("div", {
      className: "feed__foot"
    }, /*#__PURE__*/React.createElement(PriceTag, {
      amount: 159,
      note: "Launch Price",
      size: "8cqw",
      variant: "glass"
    }), /*#__PURE__*/React.createElement("span", {
      className: "feed__free"
    }, "\uD83E\uDDF8 Free keychain with every order")));
  }
  Object.assign(window, {
    StoryTemplate,
    FeedPost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Templates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tiktok/TikTokPost.jsx
try { (() => {
/* Frosté · TikTok kit — a branded TikTok video post: holographic brand
   background (same as the IG kit), all 3 products fanned together with the
   "Spray It. Slay It." headline, glass action rail + caption bar. */
(function () {
  const {
    Icon
  } = window.FrostDesignSystem_5751f8;
  const A = '../../assets';
  function RailBtn({
    icon,
    count,
    active,
    onClick,
    label,
    filled
  }) {
    return /*#__PURE__*/React.createElement("button", {
      className: "tiktok__action",
      onClick: onClick,
      "aria-label": label
    }, /*#__PURE__*/React.createElement("span", {
      className: "tiktok__action-ico"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22,
      color: active ? 'var(--pink-500)' : 'var(--ink-900)',
      style: {
        fill: active && filled ? 'var(--pink-500)' : 'none'
      }
    })), count && /*#__PURE__*/React.createElement("span", null, count));
  }
  function TikTokPost({
    liked,
    onLike,
    saved,
    onSave,
    follow,
    onFollow
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tiktok slide--holo"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tiktok__head"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "tiktok__headline"
    }, "SPRAY IT.", /*#__PURE__*/React.createElement("br", null), "SLAY IT.")), /*#__PURE__*/React.createElement("div", {
      className: "tiktok__fan"
    }, /*#__PURE__*/React.createElement("img", {
      className: "tiktok__bottle tiktok__bottle--l",
      src: `${A}/product-oil-control.png`,
      alt: "Frost\xE9 Oil Control"
    }), /*#__PURE__*/React.createElement("img", {
      className: "tiktok__bottle tiktok__bottle--c",
      src: `${A}/product-acne-care.png`,
      alt: "Frost\xE9 Acne Care"
    }), /*#__PURE__*/React.createElement("img", {
      className: "tiktok__bottle tiktok__bottle--r",
      src: `${A}/product-dewy-glow.png`,
      alt: "Frost\xE9 Dewy Glow"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tiktok__rail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tiktok__avatar-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tiktok__avatar"
    }, /*#__PURE__*/React.createElement("span", null, "F")), /*#__PURE__*/React.createElement("button", {
      className: `tiktok__follow${follow ? ' is-on' : ''}`,
      onClick: onFollow,
      "aria-label": "Follow"
    }, follow ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 11,
      color: "#fff",
      strokeWidth: 3
    }) : '+')), /*#__PURE__*/React.createElement(RailBtn, {
      icon: "heart",
      count: liked ? '48.3K' : '48.2K',
      active: liked,
      filled: true,
      onClick: onLike,
      label: "Like"
    }), /*#__PURE__*/React.createElement(RailBtn, {
      icon: "message-circle",
      count: "1,204",
      label: "Comment"
    }), /*#__PURE__*/React.createElement(RailBtn, {
      icon: "bookmark",
      count: saved ? '3,891' : '3,890',
      active: saved,
      filled: true,
      onClick: onSave,
      label: "Save"
    }), /*#__PURE__*/React.createElement(RailBtn, {
      icon: "share",
      count: "Share",
      label: "Share"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tiktok__disc"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "music",
      size: 16,
      color: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "tiktok__bottom"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tiktok__user"
    }, "@frost\xE9.official"), /*#__PURE__*/React.createElement("p", {
      className: "tiktok__caption"
    }, "3 sprays. 3 problems solved. Free keychain with every order \uD83E\uDDF8 ", /*#__PURE__*/React.createElement("span", {
      className: "tiktok__tag"
    }, "#froste #sprayitslayit")), /*#__PURE__*/React.createElement("div", {
      className: "tiktok__sound"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "music",
      size: 13,
      color: "var(--ink-700)"
    }), " original sound \u2014 Frost\xE9")));
  }
  Object.assign(window, {
    TikTokPost
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tiktok/TikTokPost.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logomark = __ds_scope.Logomark;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
