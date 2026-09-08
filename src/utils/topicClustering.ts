import { readingTime } from './posts';

export interface MotherTopic {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  children: string[];
}

export const MOTHER_TOPICS: Record<string, MotherTopic> = {
  'protocols-crypto': {
    id: 'protocols-crypto',
    name: 'Protocols & Quantum Cryptography',
    slug: 'protocol-tech',
    icon: 'lock',
    description: 'Cryptographic primitives, tunneling benchmarks, NIST lattice standards, and 10Gbps WireGuard throughput.',
    children: [
      'Post-Quantum Cryptography',
      'WireGuard Architecture',
      'OpenVPN & TLS',
      'MASQUE & QUIC',
      'IPsec & Tunneling Primitives'
    ]
  },
  'privacy-threat-defense': {
    id: 'privacy-threat-defense',
    name: 'Privacy Defense & Threat Mitigation',
    slug: 'privacy-security',
    icon: 'shield',
    description: 'Data protection engineering, ISP snooping defense, zero-logs verification, and leak prevention.',
    children: [
      'DNS & IPv6 Leak Prevention',
      'ISP Tracking & Data Brokers',
      'Zero-Logs Architecture',
      'Kill Switch Safeguards',
      'Anonymity & Fingerprinting'
    ]
  },
  'client-setup-platforms': {
    id: 'client-setup-platforms',
    name: 'Client Setup & Platform Security',
    slug: 'how-to-guides',
    icon: 'desktop',
    description: 'Native deployment, configuration walkthroughs, and OS-level tunneling for desktop and mobile.',
    children: [
      'Windows 11 Configuration',
      'macOS & Apple Ecosystem',
      'Mobile (iOS & Android)',
      'Linux & Command Line',
      'Routers & Hardware Gateways'
    ]
  },
  'buyer-intelligence': {
    id: 'buyer-intelligence',
    name: 'Buyer Intelligence & Benchmarks',
    slug: 'buyer-guides',
    icon: 'chart',
    description: 'Independent speed testing, provider comparisons, pricing transparency, and monetization audits.',
    children: [
      'Free vs Paid Architecture',
      'Provider Benchmarks',
      'Streaming & Geo-Unblocking',
      'Torrenting & P2P Latency',
      'Cost & Security Audits'
    ]
  }
};

export interface ArticleClusterInfo {
  motherTopic: MotherTopic;
  childTopic: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  contentType: 'Architecture Deep Dive' | 'Technical Benchmark' | 'Setup Tutorial' | 'Explainer Guide' | 'Comparison Matrix';
  readingMinutes: number;
  readingType: 'Quick Read' | 'Standard Read' | 'Deep Dive';
  breadcrumbs: { name: string; href: string }[];
}

export function getArticleTopicCluster(post: any): ArticleClusterInfo {
  const slug = (post.slug || '').toLowerCase();
  const tags = (post.data?.tags || []).map((t: string) => t.toLowerCase());
  const title = (post.data?.title || '').toLowerCase();
  const body = post.body || '';
  const rTime = readingTime(body);

  // 1. Determine Difficulty
  let difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 'Intermediate';
  if (
    tags.includes('beginner-basics') ||
    slug.startsWith('what-is-a-vpn-and') ||
    slug.includes('for-beginners') ||
    slug.includes('how-to-set-up') ||
    title.includes('what is a vpn') ||
    title.includes('simple guide') ||
    title.includes('for beginners')
  ) {
    difficulty = 'Beginner';
  } else if (
    tags.includes('protocol-tech') ||
    slug.includes('quantum') ||
    slug.includes('wireguard') ||
    slug.includes('cryptography') ||
    slug.includes('masque') ||
    slug.includes('quic') ||
    slug.includes('ech') ||
    slug.includes('packet') ||
    slug.includes('mitm') ||
    title.includes('lattice') ||
    title.includes('benchmark') ||
    title.includes('nist')
  ) {
    difficulty = 'Advanced';
  }

  // 2. Determine Reading Type
  let readingType: 'Quick Read' | 'Standard Read' | 'Deep Dive' = 'Standard Read';
  if (rTime <= 4) {
    readingType = 'Quick Read';
  } else if (rTime >= 9) {
    readingType = 'Deep Dive';
  }

  // 3. Determine Content Type
  let contentType: 'Architecture Deep Dive' | 'Technical Benchmark' | 'Setup Tutorial' | 'Explainer Guide' | 'Comparison Matrix' = 'Explainer Guide';
  if (slug.includes('vs-') || slug.includes('-vs') || title.includes(' vs ') || tags.includes('comparisons')) {
    contentType = 'Comparison Matrix';
  } else if (slug.includes('benchmark') || slug.includes('speed') || title.includes('benchmark') || title.includes('speed test')) {
    contentType = 'Technical Benchmark';
  } else if (slug.startsWith('how-to') || tags.includes('how-to-guides') || title.startsWith('how to')) {
    contentType = 'Setup Tutorial';
  } else if (rTime >= 8 || difficulty === 'Advanced') {
    contentType = 'Architecture Deep Dive';
  }

  // 4. Determine Mother Topic & Child Topic (Cloudflare Clustering)
  let motherId = 'privacy-threat-defense';
  let childTopic = 'DNS & IPv6 Leak Prevention';

  if (
    tags.includes('protocol-tech') ||
    slug.includes('wireguard') ||
    slug.includes('openvpn') ||
    slug.includes('quantum') ||
    slug.includes('masque') ||
    slug.includes('quic') ||
    slug.includes('ipsec') ||
    slug.includes('cryptography') ||
    slug.includes('split-tunneling') ||
    slug.includes('tls')
  ) {
    motherId = 'protocols-crypto';
    if (slug.includes('quantum') || slug.includes('lattice') || slug.includes('nist')) {
      childTopic = 'Post-Quantum Cryptography';
    } else if (slug.includes('wireguard')) {
      childTopic = 'WireGuard Architecture';
    } else if (slug.includes('openvpn') || slug.includes('tls')) {
      childTopic = 'OpenVPN & TLS';
    } else if (slug.includes('masque') || slug.includes('quic') || slug.includes('ech')) {
      childTopic = 'MASQUE & QUIC';
    } else {
      childTopic = 'IPsec & Tunneling Primitives';
    }
  } else if (
    tags.includes('how-to-guides') ||
    slug.includes('windows') ||
    slug.includes('mac') ||
    slug.includes('ios') ||
    slug.includes('iphone') ||
    slug.includes('android') ||
    slug.includes('linux') ||
    slug.includes('router') ||
    slug.startsWith('how-to-set-up')
  ) {
    motherId = 'client-setup-platforms';
    if (slug.includes('windows')) {
      childTopic = 'Windows 11 Configuration';
    } else if (slug.includes('mac') || slug.includes('apple')) {
      childTopic = 'macOS & Apple Ecosystem';
    } else if (slug.includes('ios') || slug.includes('iphone') || slug.includes('android')) {
      childTopic = 'Mobile (iOS & Android)';
    } else if (slug.includes('linux') || slug.includes('ubuntu')) {
      childTopic = 'Linux & Command Line';
    } else {
      childTopic = 'Routers & Hardware Gateways';
    }
  } else if (
    tags.includes('buyer-guides') ||
    tags.includes('comparisons') ||
    slug.includes('free-vpn') ||
    slug.includes('best-vpn') ||
    slug.includes('streaming') ||
    slug.includes('netflix') ||
    slug.includes('torrent') ||
    slug.includes('gaming') ||
    slug.includes('cost') ||
    slug.includes('vs-')
  ) {
    motherId = 'buyer-intelligence';
    if (slug.includes('free-vpn') || slug.includes('why-are-free')) {
      childTopic = 'Free vs Paid Architecture';
    } else if (slug.includes('vs-') || slug.includes('alternative')) {
      childTopic = 'Provider Benchmarks';
    } else if (slug.includes('streaming') || slug.includes('netflix') || slug.includes('bbc')) {
      childTopic = 'Streaming & Geo-Unblocking';
    } else if (slug.includes('torrent') || slug.includes('gaming') || slug.includes('ping')) {
      childTopic = 'Torrenting & P2P Latency';
    } else {
      childTopic = 'Cost & Security Audits';
    }
  } else {
    // Privacy & Threat Defense
    motherId = 'privacy-threat-defense';
    if (slug.includes('dns') || slug.includes('leak')) {
      childTopic = 'DNS & IPv6 Leak Prevention';
    } else if (slug.includes('isp') || slug.includes('ad-tracker') || slug.includes('tracking')) {
      childTopic = 'ISP Tracking & Data Brokers';
    } else if (slug.includes('logs') || slug.includes('audit')) {
      childTopic = 'Zero-Logs Architecture';
    } else if (slug.includes('kill-switch')) {
      childTopic = 'Kill Switch Safeguards';
    } else {
      childTopic = 'Anonymity & Fingerprinting';
    }
  }

  const motherTopic = MOTHER_TOPICS[motherId];

  // 5. Hierarchical Breadcrumbs
  const breadcrumbs = [
    { name: 'OllaVPN Blog', href: '/' },
    { name: motherTopic.name, href: `/#archive-section?mother=${motherTopic.id}` },
    { name: childTopic, href: `/#archive-section?child=${encodeURIComponent(childTopic)}` }
  ];

  return {
    motherTopic,
    childTopic,
    difficulty,
    contentType,
    readingMinutes: rTime,
    readingType,
    breadcrumbs
  };
}

export function getMotherTopicRecommendations(currentSlug: string, motherId: string, allPosts: any[], count: number = 3) {
  const mother = MOTHER_TOPICS[motherId];
  if (!mother) return [];

  // Filter posts belonging to the same mother topic, exclude current
  const candidates = allPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => {
      const cluster = getArticleTopicCluster(p);
      return { post: p, cluster };
    })
    .filter(item => item.cluster.motherTopic.id === motherId);

  return candidates.slice(0, count);
}
