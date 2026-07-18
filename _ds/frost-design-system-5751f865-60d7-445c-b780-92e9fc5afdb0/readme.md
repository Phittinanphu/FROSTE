# Frosté — Design System

> **Spray It. Slay It.**
> A Gen-Z facial mist brand. Portable iridescent spray bottles that ship with a
> free charm keychain. Playful, dewy, a little Y2K — sold on social in Thailand.

This design system was reverse-engineered from Frosté's **launch Instagram
carousel** (the only source provided). It captures the brand's colors, type,
tone, imagery and a set of reusable UI primitives + social/commerce UI kits so
designers and agents can produce on-brand Frosté material.

---

## SOURCES

- `uploads/Frosté IG Carousel (1).pdf` — 3-slide launch carousel, exported from
  **Canva** (1080×1080 / rendered 810px). This is the ground truth for every
  value in this system.
  - **Slide 1** — Hero: holographic gradient, `SPRAY IT. / SLAY IT.` in heavy
    uppercase, serif subtitle "Frosté — Oil Control · Acne Care · Dewy Glow",
    three bottles fanned out.
  - **Slide 2** — The lineup: three bottles labelled Acne Care / Oil Control /
    Dewy Glow; "3 sprays. 3 problems solved."
  - **Slide 3** — Offer: mint gradient, big `FROSTÉ` wordmark, serif benefit
    line, `฿159 Launch Price 🌿`, "FREE keychain with every order",
    "Spray It. Slay It."

Extracted raw assets live in `scraps/` (per-page PNGs + image cutouts); the
production-ready ones were cleaned into `assets/`.

**No logo file was provided in the source carousel.** At the brand owner's
explicit request, an original mark — **Logomark**, a cute, chubby droplet
mascot in Frost Pink with a friendly little face — was designed for this
system (see `assets/logo.svg` and the `Logomark` component). Pair it with the
typographic **Wordmark** (`FROSTÉ`, Poppins ExtraBold/Black, uppercase, always
with the acute accent) for a full lockup. This is the one deliberate departure
from "nothing invented" in this system — flagged here and in CAVEATS.

### What is real vs. extrapolated
- **Real (from the carousel):** all colors, the type pairing, the three product
  variants + their charms, the tagline, price (฿159), the free-keychain offer,
  the emoji voice, the iridescent + mint gradients, the bottle photography.
- **Extrapolated (brand system applied to new surfaces):** the UI component
  primitives and the two UI kits (Social templates, mobile Shop). The source is
  social artwork only — it defines no app or website. These kits apply Frosté's
  visual language to plausible surfaces and are clearly the system's own
  invention, not recreations of shipped product. Treat them as on-brand
  starting points, not canonical screens.

---

## BRAND AT A GLANCE

| | |
|---|---|
| **Name** | Frosté (stylised `FROSTÉ` / `Frosté`, always with the é) |
| **Category** | Facial mist / setting spray — beauty & skincare |
| **Format** | Slim iridescent aluminium atomiser + free charm keychain |
| **Variants** | **Acne Care** (teal-green), **Oil Control** (icy blue), **Dewy Glow** (sunset rose) |
| **Tagline** | Spray It. Slay It. |
| **Hook** | "3 sprays. 3 problems solved." · FREE keychain with every order |
| **Price** | ฿159 launch price |
| **Market** | Thailand · Gen-Z · Instagram / TikTok social-commerce |
| **Personality** | Playful, confident, kawaii, dewy, Y2K-iridescent |

---

## CONTENT FUNDAMENTALS

**Voice: confident, punchy, and fun.** Frosté talks like a hyped-up friend, not
a clinical skincare label. Short. Declarative. A little bit of attitude.

- **Casing:** Marketing headlines shout in **ALL-CAPS** (`SPRAY IT. SLAY IT.`).
  Product/benefit lines use **Title Case** (`Oil Control`, `Dewy Glow`, `Launch
  Price`). Body/offer copy is sentence case (`FREE keychain with every order`).
- **Punctuation as rhythm:** full stops chop lines into beats —
  "Spray It. Slay It.", "3 sprays. 3 problems solved." The period is a design
  element, not just grammar. Middot `·` separates the three variants
  ("Oil Control · Acne Care · Dewy Glow").
- **Person:** Speaks *to* the customer implicitly ("**you** spray, **you** slay")
  but rarely says "you" outright. Never uses "I/we". No corporate first person.
- **Numbers:** used as punchy proof — "**3** sprays. **3** problems solved.",
  "฿**159**". Kept to single memorable figures, never data-dense.
- **Emoji:** yes — sparingly and *botanical/sweet*: 🌿 sits next to the price.
  Emoji act as a warmth/tone signal, not decoration spam. One per line, max.
  In-brand palette: 🌿 ✨ 💧 🫧 💖. Avoid faces/hands.
- **Rhyme & wordplay:** the brand leans on rhyme ("Spray it / Slay it") and
  problem→solution framing. Slang is welcome ("slay").
- **Do:** be brief, rhythmic, benefit-first, a little cheeky.
  **Don't:** write paragraphs, use ingredient-deck jargon, hedge, or sound
  medical. No exclamation-mark spam (the caps already carry the energy).

**Copy examples (verbatim from source):**
> SPRAY IT. SLAY IT.
> 3 sprays. 3 problems solved.
> ฿159 Launch Price 🌿
> FREE keychain with every order

**Copy in the same voice (safe to reuse):**
> Glow on the go.
> One spray, zero stress.
> Your face, but dewier.
> Slay all day.

---

## VISUAL FOUNDATIONS

The look is **iridescent, dewy, soft and playful** — think holographic
cellophane, frosted glass, and cute plastic charms.

**Color.** Two worlds sit on a cool navy + white base:
1. **Holographic pastels** — the signature. A mesh of sky-blue → periwinkle →
   lilac → bubblegum-pink → cyan (`--grad-holographic`). Used full-bleed behind
   hero content. Dreamy, shifting, never flat.
2. **Fresh / botanical** — mint-green → cream → baby-blue (`--grad-mint-fresh`),
   used for the "clean/effective" offer moments.
   The single saturated accent is **Frost Pink `#E0468A`** (magenta) — price,
   CTAs, highlights. Text is deep navy **`#182238`** (primary) / slate
   **`#4A5470`** (secondary), or **white** over gradients. Each variant owns a
   hue: Acne = teal, Oil = icy blue, Dewy = sunset rose.

**Type.** A deliberate two-voice pairing:
- **Poppins** (the workhorse) — geometric, friendly, rounded. Black/ExtraBold in
  uppercase for punchy display + the wordmark; Bold/SemiBold for taglines,
  labels, UI; Regular for body.
- **Playfair Display**, *italic*, SemiBold — an elegant high-contrast serif used
  **only** for benefit / variant lines ("Oil Control · Acne Care · Dewy Glow").
  It's the "dewy/premium glow" counterpoint to Poppins' punch. Use sparingly.
- **Noto Sans Thai** for Thai copy + the ฿ glyph.

**Backgrounds.** Almost always a **full-bleed gradient** (holographic or mint) —
never plain white for hero/marketing surfaces. Real photographic gradient assets
exist (`assets/bg-holographic.jpg`, `assets/bg-mint-fresh.jpg`); CSS equivalents
are tokenised (`--grad-*`) for lightweight UI. No hard-edged color blocks, no
busy patterns, no drop-in stock photos — the gradient *is* the texture.

**Imagery.** Hero imagery = the **product bottles as clean cut-outs** (transparent
PNGs) floating over gradient, often lightly tilted, with soft shadows. The
charms (gummy bear, rubber duck, balloon dog, beaded HAPPY, love-you heart,
chain links) are a core visual — cute, glossy, colourful plastic. Product colour
vibe: **cool, glossy, high-key, iridescent** — bright and clean, never warm/grainy/moody.

**Corners.** Soft and generous. Buttons & chips are **full pills** (`--radius-pill`).
Cards are `--radius-lg` (24px) up to `--radius-2xl` (40px). Almost nothing is
sharp-cornered.

**Shadows.** Soft, diffuse, cool-tinted, low-contrast (`--shadow-sm/md/lg`).
Floating product shots and CTAs may get a **coloured glow** — pink
(`--shadow-pink`) or iridescent (`--shadow-iri`). No hard/black drop shadows.

**Transparency & blur.** **Frosted glass** is on-brand (the name is *Frosté*).
Pills and cards that float over the gradient use a translucent white fill +
`backdrop-filter: blur()` + a 1px light inner highlight (`--glass-*`,
`--blur-md`). Use glass when an element sits over the gradient; use solid white
cards on plain surfaces.

**Borders.** Minimal. Hairline `--border-subtle/default` (navy at 7–12% alpha)
on solid cards; a light **white 60%** border on glass elements
(`--border-on-glass`) to catch the edge. No heavy outlines. Avoid the
"rounded card with a coloured left-border accent" cliché.

**Motion.** Playful but controlled. Default `--ease-out` for fades/slides;
`--ease-spring` (gentle overshoot) for delightful interactive moments (a chip
popping in, a bottle settling). Hover = slight lift + brightness (`--dur-base`).
Durations 120–380ms. Nothing frenetic.

**Hover states.** Buttons/interactive: lift `translateY(-1px)`, accent goes
*lighter* (`--brand-accent-hover`), optional pink glow intensifies. Cards: lift +
deepen shadow. Links: navy→pink.

**Press states.** Scale down slightly (`scale(0.97)`) + accent goes *darker*
(`--brand-accent-press`). Quick (`--dur-fast`).

**Focus.** 3px Frost-Pink ring (`--focus-ring`) with 2px offset. Always visible.

**Layout.** Content is centred and airy with strong vertical rhythm. Social
canvases are the native format (1:1, 4:5, 9:16 presets tokenised in
`spacing.css`). Generous margins; let the gradient breathe.

---

## ICONOGRAPHY

Frosté's source artwork uses **no line-icon system at all** — its "icons" are:
1. **Emoji** (via Noto Color Emoji in the source) — 🌿 by the price. Emoji are
   the brand's primary pictographic voice: botanical/sweet, one per line. See
   CONTENT FUNDAMENTALS.
2. **Physical charm objects** — the gummy bear, rubber duck, balloon dog, beaded
   letters, hearts and chain links photographed on the keychains. These are
   product, not UI, but they define the brand's "cute object" iconography.

There is **no built-in icon font, SVG sprite, or PNG icon set** in the source.

**For UI that needs functional icons** (cart, close, chevron, search, etc.) this
system uses **Lucide** (`lucide@latest`, loaded from CDN) as a **flagged
substitution** — the source defines no UI icon set, and Lucide's soft 2px
rounded stroke is the closest match to the brand's friendly, rounded geometry.
The `Icon` component wraps Lucide. **⚠️ Substitution — see CAVEATS.** If Frosté
has (or adopts) a house icon set, drop the SVGs into `assets/icons/` and point
`Icon` at them.

**Rules of thumb:** prefer emoji for expressive/marketing accents; use Lucide
for functional affordances; never hand-draw a logo or brand mark.

---

## INDEX / MANIFEST

Root files: `styles.css` (global entry — @imports only) · `readme.md` (this) ·
`SKILL.md` · `thumbnail.html` · `tokens/` · `components/` · `ui_kits/` ·
`guidelines/` · `assets/` · `scraps/` (raw carousel extractions — not shipped).

**Tokens** (`tokens/`, all reached from `styles.css`): `fonts.css`, `colors.css`,
`typography.css`, `spacing.css`, `effects.css`.

**Assets** (`assets/`): `product-acne-care.png`, `product-oil-control.png`,
`product-dewy-glow.png` (transparent bottle cut-outs) · `bg-holographic.jpg`,
`bg-mint-fresh.jpg` (real gradient backgrounds).

**Components** (`components/`, mounted via `window.FrostDesignSystem_5751f8`):

| Group | Components |
|---|---|
| `actions/` | **Button**, **IconButton**, **Icon** |
| `brand/` | **Wordmark**, **PriceTag** |
| `forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `data-display/` | **Card**, **Badge**, **Tag** |
| `feedback/` | **Dialog**, **Toast**, **Tooltip** |

**UI kits** (`ui_kits/`): *Social* (interactive IG carousel + story + post,
recreating the launch campaign) · *Shop* (interactive mobile DTC storefront —
browse → product detail → free-charm picker → cart/checkout) · *TikTok*
(interactive vertical video post: action rail, follow, caption/sound bar,
swipeable variants). See each kit's `README.md`. All apply the brand system to
surfaces the source didn't define — see "What is real vs. extrapolated" above.

No standalone slide deck was created: the source is social artwork, not a
presentation template. The Social kit's carousel is the closest analogue.

**Templates** (`templates/`) — copy-and-edit starting points consuming projects
can seed a new design from:
- `social-post/` — square 1080×1080 branded Instagram post (holographic hero,
  product, headline, price).
- `product-card/` — branded e-commerce product card (gradient hero, bestseller
  badge, rating, price, add-to-bag).
Both compose the design-system components and load the system via `ds-base.js`.

### Intentional additions
The brand-guidelines source defines no component inventory, so a standard,
brand-sized primitive set was authored from scratch. Two brand-specific
primitives were added because the identity demands them:
- **Wordmark** — the typographic `FROSTÉ` treatment; a component enforces
  correct casing/tracking/accent so nobody hand-draws it.
- **Logomark** — an original chubby-droplet mascot in Frost Pink, designed at
  the brand owner's request since the source had no logo (see `assets/logo.svg`).
- **PriceTag** — the "฿159 Launch Price" money treatment (Thai ฿ glyph + Poppins)
  is a recurring, distinctive brand element.
- **Icon** — a thin Lucide wrapper documenting the (flagged) icon substitution.

---

## CAVEATS
- **Fonts load from Google Fonts (CDN), not self-hosted.** The source is a Canva
  export using **Poppins**, **Playfair Display** and **Noto Sans Thai** — all
  Google Fonts, so these are the real families, not guesses. `tokens/fonts.css`
  `@import`s them from the CDN; the compiler therefore reports no local
  `@font-face`. If you need offline/vendored fonts, drop the woff2 files in and
  swap the `@import` for `@font-face` rules. **No font substitution was needed.**
- **Icons: Lucide (CDN) is a substitution.** The source defines no UI icon set
  (its only pictographs are emoji + physical charms), so Lucide stands in for
  functional icons. Swap in a house set if one exists. Emoji is authentic.
- **A logo now exists.** The source carousel had none; at the brand owner's
  explicit request an original mark (`Logomark`, `assets/logo.svg`) was
  designed for this system — a faceted droplet pairing with the `Wordmark`.
  This is the one invented visual asset in the system; everything else traces
  to the source.
- **UI kits are extrapolations.** The source is social artwork only; the Social
  carousel faithfully recreates it, but the Story/Post templates and the entire
  Shop kit apply the brand system to plausible surfaces the brand hasn't shipped.
- **Charms are shown as emoji** in the Shop kit (no isolated charm cut-outs exist
  in the source) — on-brand, but swap for real charm photography if available.

