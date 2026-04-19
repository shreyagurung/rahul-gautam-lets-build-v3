
The user wants the "A few notes" section on AboutPage.tsx restructured into a more confident, editorial statement of practice. Clear scope: only that one section. I have the file already in context — no further exploration needed.

### Scope
Replace lines containing the "Light credentials section" in `src/pages/AboutPage.tsx`. Nothing else changes.

### New section structure

**Entry**
- Small uppercase eyebrow: `Practice` (matches "About" eyebrow style on the page)
- Serif heading (`font-editorial`, size between page H1 and inline serif paragraphs): "The work sits between material, people, and place."
- Thin 16–20px accent line below heading using `bg-accent` (already mapped to #C84A2F)

**Three vertically stacked blocks**, generous spacing (`space-y-20 md:space-y-28`), each on a 12-col grid mirroring the existing "Beginnings / Material / Where the work has gone" pattern:
- Left (col-span-4): `01` numeral in serif + title
- Right (col-span-7 col-start-6): short accent rule + body

Background block gets slightly more vertical breathing room and a longer paragraph to feel more prominent. Collaborators and Recognition stay tighter.

**Content (rewritten, no invented specifics)**

01 — Background
> Trained as a civil engineer and worked briefly within conventional practice before stepping away to learn on the ground. The years that followed — moving across India, building alongside people who had never opened a drawing — became the real education. The practice today carries both: the discipline of an engineer and the patience of someone who learned by doing.

02 — Collaborators
Multi-line middot list:
> Bamboo artisans · Masons & earth builders
> Festival production teams · Carpenters
> Architects · Landowners & community stewards

03 — Recognition
> The work has appeared in independent publications on natural building, and has been shared through occasional talks and workshops on site-led practice. Most of it, though, lives where it was built — quietly, in the places it was made for.

### Visual rules respected
- No new colors, fonts, components, borders, cards, icons.
- Accent (#C84A2F) used only as 16–20px rules — same minimal usage already on the page.
- Background stays `bg-background-secondary`.
- FadeIn staggered 0 / 0.1 / 0.2 / 0.3.

### File to change
- `src/pages/AboutPage.tsx` — replace only the `{/* Light credentials section */}` `<section>` block (roughly lines 224–263).

Nothing else in the file or project changes.
