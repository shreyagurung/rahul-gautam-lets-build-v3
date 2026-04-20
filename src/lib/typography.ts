// Typography utilities for consistent text hierarchy
export const typography = {
  // Page titles - largest, most prominent
  pageTitle: "text-3xl md:text-5xl font-light tracking-tight",

  // Category page titles - slightly smaller than hero
  categoryTitle: "text-2xl md:text-4xl font-light tracking-tight",

  // Section headings - medium prominence
  sectionHeading: "text-lg md:text-xl font-light tracking-tight",

  // Subheadings and labels - smaller but still prominent
  subheading: "text-base md:text-lg font-medium",

  // Body text - main content
  body: "text-sm md:text-base leading-relaxed",

  // Editorial text - special styling for quotes/featured text
  editorial: "font-editorial text-lg md:text-xl leading-relaxed",

  // Metadata and captions - smallest text
  metadata: "text-xs tracking-wide uppercase",
  caption: "text-sm",

  // Navigation and links
  navLink: "text-sm hover:text-accent transition-colors duration-300",
} as const;