---
name: JB·DEV — Cracktro Void Queue
description: Personal landing page for Jesús Briceño — one bitmap face on an emissive black void, where rank is depth and nothing is ever enclosed.
colors:
  void: "#050505"
  dust-0: "#f2efe6"
  dust-1: "#b9b6ac"
  dust-2: "#7d7b74"
  dust-3: "#4a4944"
  amber: "#e8a33d"
typography:
  display:
    fontFamily: '"Silkscreen", ui-monospace, monospace'
    fontSize: "clamp(1.5rem, 5.2vw, 3.4rem)"
    fontWeight: 400
    letterSpacing: "0.12em"
  text:
    fontFamily: '"Silkscreen", ui-monospace, monospace'
    fontSize: "0.75rem"
    fontWeight: 400
components:
  link-contact:
    textColor: "{colors.dust-1}"
    typography: "{typography.text}"
    padding: "0.4rem 0.2rem"
  link-contact-hover:
    textColor: "{colors.amber}"
  lang-switch:
    textColor: "{colors.dust-2}"
    typography: "{typography.text}"
    padding: "0.3rem 0.2rem"
  lang-switch-hover:
    textColor: "{colors.dust-1}"
  queue-item-d1:
    textColor: "{colors.dust-1}"
    typography: "{typography.text}"
  queue-item-d2:
    textColor: "{colors.dust-2}"
    typography: "{typography.text}"
  queue-item-d3:
    textColor: "{colors.dust-3}"
    typography: "{typography.text}"
  queue-item-d4:
    textColor: "{colors.dust-3}"
    typography: "{typography.text}"
---

# Design System: JB·DEV — Cracktro Void Queue

## Overview

**Creative North Star: "The Cracktro Title Screen"**

The page is a worked queue built from a cracktro title screen: one bitmap face on an emissive black void, rank expressed as depth, dust drifting behind, nothing ever enclosed. The visitor lands in the void — three dust fields drifting at three speeds — and finds the name dead still and brightest at the center of the front plane, an amber caret blinking at its head. What Jesús does recedes behind him as a queue of lines stepping back into the dark; how to reach him sits at the front plane again, beside the caret. The direction contract lives as the first HTML comment in `static/index.html` (seed key 7b69ad24, challenger 4 "void"); this document records what the shipped code actually does.

The system is radically minimal in means — six colors, one typeface, two type sizes, zero containers — and maximal in discipline. Hierarchy is carried entirely by brightness and letterspacing; depth is a stepped ladder, never a shadow; state is a probe of amber. The page refuses every card, box, rule, and divider: overlap is allowed, enclosure never. Motion belongs to the rear layers alone; the front plane is still except for the caret's hard blink. The result must feel built by its subject — a demo-scene love letter from a developer who cares about craft — not generated from a template.

**Key Characteristics:**

- Emissive black ground (#050505) with four dust neutrals ash-to-ivory and exactly one accent, signal amber.
- One bitmap face (self-hosted Silkscreen) at exactly two sizes: a fluid display clamp and a single small text size.
- Depth expressed as brightness step + letterspacing step + drift rate — never as shadow, lift, or overlap order.
- No rules, boxes, dividers, or rounded surfaces anywhere; the only line in the system is the keyboard focus ring.
- Rear-only motion: dust fields drift, the front plane is still except the amber caret's steps(1) blink.
- Bilingual ES/EN in one document, flipped without reload; no trackers, no cookies, no external requests.

## Colors

The palette is dust on a void: four warm-greys stepping from deep ash to ivory, and one signal amber that means "alive."

### Primary

- **Signal Amber** (`--amber`, #e8a33d): the only accent in the system, and it is reserved for signal. It fills the caret block, marks the active language option, answers any hover/focus probe on links and the language switch, rings keyboard focus, and inverts text selection. Its rarity is the point.

### Neutral

- **Emissive Black / The Void** (`--void`, #050505): the ground of everything — body background, selection text color, favicon field. It is not a surface among surfaces; it is the space the page happens in.
- **Ivory Dust** (`--dust-0`, #f2efe6): the front plane. Default text color and the name line — the brightest text on the page, with a faint ivory glow.
- **Light Ash** (`--dust-1`, #b9b6ac): first rank back. The role line, queue rank d1, contact links at rest, and the language switch's hover/focus answer.
- **Ash** (`--dust-2`, #7d7b74): second rank back. Queue rank d2, the first aside line, the JB·DEV board mark, the language switch at rest; also the dot color of the nearest dust field.
- **Deep Ash** (`--dust-3`, #4a4944): deepest rank. Queue ranks d3 and d4, the second aside line, the footer, the language separator, and the dot color of the two far dust fields.

### Named Rules

**The One Signal Rule.** Amber is used only where the system is alive: the caret, the active language, a hover/focus probe, the focus ring, the selection fill. Amber is never used for resting body text, decoration, or large fills. If amber appears and nothing is being signaled, remove it.

**The Dust Ladder Rule.** Text steps back by switching dust tokens, never by applying opacity. A rank is a color: d1 = `--dust-1`, d2 = `--dust-2`, d3/d4 = `--dust-3`. Opacity fades the bitmap face; the ladder keeps every glyph crisp.

## Typography

**Display Font:** Silkscreen (self-hosted woff2, `font-display: swap`, with `ui-monospace, monospace` fallback)
**Body Font:** Silkscreen — the same face; there is no second family
**Label/Mono Font:** Silkscreen — all text, at every rank, is the bitmap face

**Character:** A pixel bitmap face that reads like a cracktro title screen: every line is uppercase, wide-tracked, and set far from its neighbors. The face ships regular and bold weights, but the shipped page renders regular only — hierarchy is brightness and tracking, not weight.

### Hierarchy

The system commits to exactly two sizes, exposed as tokens on `:root`:

- **Display** (`--display`, regular 400, clamp(1.5rem, 5.2vw, 3.4rem), letterspacing 0.12em): the name line only — the single brightest, largest element, glowing faintly ivory. On narrow widths its tracking sheds to 0.06em.
- **Text** (`--text`, regular 400, 0.75rem): everything else — board mark, language switch, role line, queue, asides, contact links, footer. Rank within this size is carried by dust token and letterspacing: the role line tracks at 0.42em; queue ranks track 0.3em → 0.4em → 0.5em → 0.6em as they step back; asides track 0.28em and 0.36em; contact links 0.34em; the board mark 0.5em; the footer 0.4em. Aside lines cap at 60ch.

### Named Rules

**The Two Sizes Rule.** One bitmap face at exactly two sizes: the fluid display clamp and the one small text size. Hierarchy is brightness + letterspacing, never a third size, a second family, or a heavier weight.

## Layout

The page is a single viewport column — `min-height: 100dvh`, flex column, `overflow: hidden` — with no scroll content: a top strip, a centered main block, and a footer. The top strip is a baseline-aligned row (board mark left, language switch right) padded 1.4rem vertically and clamp(1.2rem, 4vw, 3rem) horizontally — no enclosure, just baselines. The main block is flex-1, centered on both axes, with a 1.6rem gap between its elements and 3rem / 1.2rem padding; the queue inside it stacks with a 1rem gap (1.4rem above the queue), and the contact row wraps with a 1.2rem × 2.6rem gap, 2rem below the asides. The footer is a single centered line padded 1.2rem.

Layering is explicit: the three dust fields are fixed behind everything (`inset: -100px`, `pointer-events: none`), and the top strip, main, and footer all sit at `z-index: 2` above them. Horizontal padding tracks `clamp(1.2rem, 4vw, 3rem)`.

At narrow widths (≤640px) the layout sheds letterspacing steps but never brightness steps: queue ranks d2–d4 collapse to 0.3em tracking, the deep aside to 0.28em, the name to 0.06em, the role line to 0.3em, and contact links to 0.24em. The dust ladder stays fully intact.

### Named Rules

**The Narrow-Shed Rule.** Below 640px, shed tracking steps, never brightness steps. Depth must remain legible by color alone when the screen is too narrow to afford wide letterspacing.

## Elevation & Depth

This system is flat — there are no box-shadows used as elevation and no lifted surfaces anywhere. Depth is conveyed by three coordinated channels, and only three:

1. **Brightness step** — each rank back is one dust token darker (the Dust Ladder).
2. **Letterspacing step** — each rank back tracks wider, so deeper lines feel more diffuse.
3. **Drift rate** — the rear dust fields move, and nearer dust drifts faster: far (90px × 70px dot tile) drifts one cycle in 90s, mid (140px × 110px, offset 30px 40px) in 55s, near (220px × 170px, brighter dots, offset 80px 20px) in 32s. All three share one drift vector, translate3d(-160px, 90px, 0), linear, infinite.

The depth ladder as shipped: front plane (name in ivory with a faint glow, caret, contact at light ash) → role line and queue d1 (light ash) → queue d2 and first aside (ash) → queue d3 and second aside (deep ash) → queue d4 (deep ash, widest tracking) → the three dust fields behind all text.

The glows that do exist are **emissive, not elevating** — light emitted by a bright thing, not a shadow cast by a lifted thing: the name carries a 24px ivory glow (rgba(242,239,230,0.28)); the caret carries a 14px amber glow (rgba(232,163,61,0.8)); contact links on probe carry a 12px amber glow (rgba(232,163,61,0.6)); the active language option carries a 10px amber glow (rgba(232,163,61,0.5)).

### Named Rules

**The Rank-Is-Depth Rule.** Rank is depth, and depth is brightness step + letterspacing step (+ drift rate for dust). Never reach for shadows, scale, borders, or z-stacking to separate ranks.

**The Rear-Only Motion Rule.** Motion belongs to the rear layers: the dust fields drift, the front plane is still. The sole exception is the amber caret, which blinks with a hard steps(1) cut at 1.1s. Under `prefers-reduced-motion: reduce`, both stop — the dust freezes and the caret stays lit.

## Shapes

The form language is the absence of form: every corner is square (border-radius 0 everywhere), there are no borders, no rules, no dividers, no cards, and no containers of any kind. Elements relate by position, brightness, and tracking alone — overlap is allowed, enclosure never. The only "line" in the entire system is the keyboard focus ring: a 1px solid amber outline at 4px offset, shown only on `:focus-visible`. The selection state inverts the world — amber ground with void-colored text — the single sanctioned area fill of the accent. The favicon is the system in miniature: a 32×32 void square with a 4×16 amber bar, the caret glyph.

### Named Rules

**The Enclosure-Never Rule.** No cards, boxes, borders, dividers, or rounded surfaces — ever. If a grouping needs to be visible, express it with spacing, brightness, and tracking instead.

## Components

### The Name Line (signature component)

The one display-size element: the visitor's anchor, dead still at the front plane, the brightest text on the page.

- **Shape:** no container — a flex row of caret block + name, gap 0.5em, centered.
- **Color:** ivory (`--dust-0`) with the faint 24px ivory glow.
- **Caret:** a solid amber block 0.45em × 1.05em with a 14px amber glow, blinking at 1.1s with steps(1) — a hard cut to invisible at 50%, no fade. Under reduced motion it stays lit.
- **Behavior:** never animated, never hovered; it simply burns.

### Queue Lines

The four things Jesús does, each one depth step back.

- **Shape:** a bare list (no markers), stacked with 1rem gaps.
- **Color assignment:** d1 light ash / 0.3em tracking, d2 ash / 0.4em, d3 deep ash / 0.5em, d4 deep ash / 0.6em. Below 640px, d2–d4 shed to 0.3em tracking; the color steps hold.

### Aside Lines

Two personal lines ("I like understanding how things work on the inside / breaking them to see why they break"), sitting between queue and contact.

- **Shape:** paragraphs capped at 60ch.
- **Color assignment:** first line ash at 0.28em tracking (rank d2), second deep ash at 0.36em (rank d3); the deep line sheds to 0.28em below 640px.

### Contact Links

The front plane again: GitHub, LinkedIn, Email — bare uppercase words, no underline, no boxes.

- **Shape:** a wrapping row, gap 1.2rem × 2.6rem; each link padded 0.4rem 0.2rem for a comfortable hit area.
- **Rest:** light ash, 0.34em tracking.
- **Hover / Focus:** the probe answer — amber with a 12px amber glow, transitioning color and glow over 0.2s. Keyboard focus adds the 1px amber ring at 4px offset.
- **Behavior:** external links open in a new tab with `rel="noopener me"`; email is a mailto.

### Language Switch

A DIP switch for tongues: `ES · EN`, both languages living in the same document.

- **Shape:** a fully unstyled button — no background, no border — padded 0.3rem 0.2rem, 0.3em tracking, ash at rest; the separator dot is deep ash.
- **Active option:** amber with a 10px amber glow. The active side is driven by `html[lang]`.
- **Hover / Focus:** the whole switch answers in light ash; keyboard focus adds the amber ring.
- **Behavior:** ships as `role="switch"` with `aria-checked` tracking EN. The shipped `lang.js` flips visibility of `[data-lang]` spans via `hidden` — no reload — persists the choice in localStorage (`jbdev-lang`), defaults to the browser language with Spanish fallback, and responds to click, Enter, and Space.

### Board Mark & Footer Line

- **Board mark:** "JB·DEV" top-left — text size, 0.5em tracking, ash. Pure typography, no logo asset.
- **Footer line:** one centered line ("no cookies · no trackers") — deep ash, 0.4em tracking, the dimmest text on the page.

### Dust Fields

Three fixed, pointer-transparent layers of 1px radial-gradient dots tiling behind everything — the system's parallax. Far dots (deep ash) drift 90s, mid (deep ash, offset tile) 55s, near (ash, slightly larger dots) 32s, all along translate3d(-160px, 90px, 0). They stop under reduced motion.

## Do's and Don'ts

### Do:

- **Do** keep every word Silkscreen, and keep it to exactly two sizes — the display clamp (clamp(1.5rem, 5.2vw, 3.4rem)) and the one text size (0.75rem). Build hierarchy from dust tokens and letterspacing.
- **Do** express rank as the depth ladder: one dust token darker + wider tracking per step back, drift reserved for dust.
- **Do** keep the front plane still; the caret's steps(1) blink is the only motion allowed there.
- **Do** reserve amber for signal — caret, active language, hover/focus probe, focus ring, selection.
- **Do** keep focus-visible affordances exactly as shipped: 1px solid amber outline, 4px offset.
- **Do** shed letterspacing steps (never brightness steps) below 640px, and honor `prefers-reduced-motion` by freezing dust and caret.
- **Do** ship self-hosted assets only (woff2 with `font-display: swap`); zero external scripts, trackers, or cookies.

### Don't:

- **Don't** introduce cards, boxes, borders, rules, dividers, or rounded corners — enclosure never.
- **Don't** add a second typeface, a third size, or heavier weights as hierarchy.
- **Don't** use amber for resting text, decoration, or fills beyond the sanctioned selection state.
- **Don't** use shadows as elevation or lift; the only shadows in this world are emissive glows.
- **Don't** animate the front plane — no entrance animations, no hover motion on content, no drifting text.
- **Don't** fade ranks with opacity; step them with the dust ladder so glyphs stay crisp.
- **Don't** underline links or wrap them in containers.
