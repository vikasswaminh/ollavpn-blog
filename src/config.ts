// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'OllaVPN',
  title: 'OllaVPN Blog',
  description: 'Guides, privacy tips, and product updates from the OllaVPN team.',
  url: 'https://blogs.ollavpn.com',
  marketingUrl: 'https://ollavpn.com',
  marketingLabel: 'ollavpn.com',
  author: 'OllaVPN Team',
  accent: '#2f6fed',
  tagline: 'Privacy, unlocked.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/' },
  { label: 'Tags', href: '/tags/' },
  { label: 'About', href: '/about/' },
];
