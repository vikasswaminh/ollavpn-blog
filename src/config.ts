// ─────────────────────────────────────────────────────────────────────────────
//  PER-PROJECT BRANDING  ·  the ONLY file that changes between blog repos.
//  Owner-locked via CODEOWNERS — the SEO team does not edit this (see CONTRIBUTING.md).
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  brand: 'OllaVPN',
  title: 'OllaVPN Blog — Privacy & Security Insights',
  description: 'Expert articles on online privacy, zero-log VPN security, encryption & data protection.',
  url: 'https://blogs.ollavpn.com',
  marketingUrl: 'https://ollavpn.com',
  marketingLabel: 'ollavpn.com',
  author: 'OllaVPN Team',
  accent: '#DA291C',
  tagline: 'Privacy, unlocked.',
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Technology', href: '/tags/protocol-tech/' },
  { label: 'Blogs', href: '/' },
  { label: 'Free VPN', href: '/free-vpn' },
  { label: 'Apps', href: '/tags/use-cases/' },
  { label: 'Download', href: 'https://ollavpn.com/download' },
];
