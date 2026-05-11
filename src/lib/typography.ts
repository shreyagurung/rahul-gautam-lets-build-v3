// Typography utilities for consistent text hierarchy
// Uses Inter for all UI text, EB Garamond Italic for statements only
export const typography = {
  // Page titles - largest, calm and spacious
  pageTitle: "text-3xl md:text-5xl font-light tracking-tight",

  // Category page titles 
  categoryTitle: "text-2xl md:text-4xl font-light tracking-tight",

  // Section headings - medium prominence, uses spacing not weight
  sectionHeading: "text-lg md:text-xl font-inter font-normal tracking-wide",

  // Subheadings and labels - subtle emphasis
  subheading: "text-base md:text-lg font-inter font-normal",

  // Body text - optimized for readability
  body: "text-sm md:text-base leading-relaxed font-inter font-normal",

  // Editorial text - EB Garamond italic for statement lines ONLY
  editorial: "font-editorial text-lg md:text-xl leading-relaxed",

  // Metadata and captions - smallest text
  metadata: "text-xs tracking-widest uppercase font-inter font-normal",
  caption: "text-sm font-inter font-normal",

  // Navigation and links
  navLink: "text-sm font-inter font-normal hover:text-accent transition-colors duration-300",
} as const;