---
title: 'What Is a Post-Quantum VPN and Why Do You Need One?'
description: 'The plain-English guide to post-quantum VPNs. Why harvest-now-decrypt-later turns a future quantum threat into a today problem, and how PQC handshakes work.'
pubDate: 2026-07-04
author: 'OllaVPN Team'
tags: ['pillars']
---

S

Try OllaVPN free — post-quantum-ready, lifetime free plan.

No credit card. Or $2/mo for 5 devices on a faster plan.

[DOWNLOAD →](/apps.html)

# What Is a Post-Quantum VPN and Why Do You Need One?

The plain-English guide to what a post-quantum VPN actually changes under the hood, why harvest-now-decrypt-later matters today, and how to verify real PQC protection.

JUMP TO A SECTION

1.  [1\. Why "post-quantum VPN" suddenly became a real category](#why-post-quantum-vpn-suddenly-became-a-real-category)
2.  [2\. What a VPN actually encrypts, in plain terms](#what-a-vpn-actually-encrypts-in-plain-terms)
3.  [3\. The two places a VPN uses cryptography](#the-two-places-a-vpn-uses-cryptography)
4.  [4\. What "post-quantum" changes, specifically](#what-post-quantum-changes-specifically)
5.  [5\. Why you personally need one, not just governments](#why-you-personally-need-one-not-just-governments)
6.  [6\. "Harvest now, decrypt later," VPN edition](#harvest-now-decrypt-later-vpn-edition)
7.  [7\. How a quantum computer would actually break a VPN handshake](#how-a-quantum-computer-would-actually-break-a-vpn-handshake)
8.  [8\. The standards behind post-quantum VPNs](#the-standards-behind-post-quantum-vpns)
9.  [9\. Hybrid handshakes — the current best practice](#hybrid-handshakes-the-current-best-practice)
10.  [10\. Who's already shipped post-quantum VPN tunnels](#who-s-already-shipped-post-quantum-vpn-tunnels)
11.  [11\. What doesn't change — symmetric encryption](#what-doesn-t-change-symmetric-encryption)
12.  [12\. Common myths about post-quantum VPNs](#common-myths-about-post-quantum-vpns)
13.  [13\. How to tell a real post-quantum VPN from a marketing claim](#how-to-tell-a-real-post-quantum-vpn-from-a-marketing-claim)
14.  [14\. Performance — does it slow your connection down?](#performance-does-it-slow-your-connection-down)
15.  [15\. How OllaVPN handles this](#how-ollavpn-handles-this)
16.  [16\. Frequently asked questions](#frequently-asked-questions)

What Is a [Post-Quantum VPN](/blog/what-is-a-post-quantum-vpn.html) and Why Do You Need One?

The plain-English guide to the newest, most misunderstood label in the VPN world. What a “[post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html)” actually changes under the hood, why the timing of your upgrade matters even though quantum computers don’t exist yet, and how to tell a real post-quantum VPN from a marketing sticker.

TL;DR — THE SHORT ANSWERA post-quantum VPN is a VPN that has upgraded its connection handshake — the part where your device and the VPN server agree on a shared secret — to use encryption algorithms designed to resist attacks from future quantum computers, not just today’s classical ones. It doesn’t mean your connection suddenly behaves differently at the physics level; it’s still ordinary software on ordinary hardware. What changed is the math. You need one because of a threat called “harvest now, decrypt later”: an adversary can capture your encrypted VPN traffic today, store it for years, and decrypt it later once quantum computers become capable enough. If that sounds like a problem for governments and big organizations, it’s worth remembering that ordinary people’s medical histories, financial records, immigration documents, and private messages can stay sensitive for a decade or two — long enough for the “later” part to arrive. NIST finalized the first three post-quantum standards in August 2024, and VPN providers — OllaVPN included — have started shipping the upgrade on every connection, at no extra cost.

If you’ve seen “post-quantum” pop up in a VPN app’s changelog, in a comparison article, or in an ad and wondered whether it’s substance or buzzword — this guide will tell you what to look for, in language that doesn’t require a math degree.

## Why "post-quantum VPN" suddenly became a real category

Post-quantum VPNs moved from research curiosity to an actual product category because the underlying cryptographic standards were finalized in August 2024, and because “harvest now, decrypt later” turns a future threat into a today problem. VPN providers that ignore it are shipping tunnels that may have an expiration date.

For twenty-plus years, the VPN industry didn’t have to think about this. VPN encryption was built on the same well-known algorithms as the rest of the internet — RSA, Diffie-Hellman, elliptic-curve variants — and those algorithms had survived attacks from classical computers. If a VPN provider said “256-bit encryption,” that was basically the end of the conversation. People didn’t ask what kind of encryption, because there was really only one kind that mattered.

That comfortable situation is changing, not because the old math suddenly got weaker against today’s computers, but because a new kind of computer is being built that will eventually be very good at the specific math problems those algorithms depend on. Once the U.S. National Institute of Standards and Technology finished an eight-year public competition and finalized the first three post-quantum cryptographic standards in 2024, “post-quantum” stopped being a research paper topic and became something a VPN provider could actually ship. Browsers did it. Messaging apps did it. VPNs are doing it now — and the ones that are further along are worth understanding before you pick one.

The reason it matters specifically for VPNs — more than for a single website you visit once — is that a VPN is meant to protect an ongoing stream of everything you do online. If the tunnel’s handshake has a shelf life, so does everything that ever passed through it.

## What a VPN actually encrypts, in plain terms

Before getting into the post-quantum part, it helps to be clear about what a VPN is doing in the first place, because a lot of confusion about “post-quantum VPNs” comes from people not being sure what a regular VPN protects.

When you turn on a VPN, your device builds an encrypted tunnel to a server run by your VPN provider. Everything that leaves your device — web requests, app traffic, DNS lookups, all of it — gets wrapped inside that tunnel before it reaches your Wi‑Fi router, your internet provider, or anyone else on the network path. Your internet provider can see that you’re connected to a VPN server, and roughly how much data is flowing, but it can’t see what’s inside. The websites and apps you talk to see the VPN server’s identity, not yours.

The tunnel is built using a VPN protocol — WireGuard and OpenVPN are the two you’ll hear about most often — and that protocol relies on cryptographic algorithms to do two jobs: agree on a secret key when the connection starts, and then use that key to scramble the data flowing through the tunnel for as long as the connection stays open.

That distinction — the “agreeing on a key” part versus the “using the key” part — is exactly where the post-quantum story lives.

## The two places a VPN uses cryptography

A VPN tunnel relies on cryptography twice: once during the handshake, when your device and the server negotiate a shared secret key, and continuously afterward, when that key is used to symmetrically encrypt your actual traffic. Quantum computers threaten the handshake far more than the ongoing encryption.

This is the single most useful thing to understand if you want the rest of this guide to click into place.

1\. The handshake. When you connect to a VPN server, your device and the server need to agree on a secret that nobody else can figure out, even though the negotiation itself happens over a network that anyone could be watching. This is done with public-key cryptography — algorithms like RSA, Diffie-Hellman, or elliptic-curve variants like X25519 that WireGuard uses. This step happens once per connection (or periodically, if the VPN rotates keys), and it’s the part a quantum computer would target.

2\. The bulk encryption. Once the handshake is done and both sides have a shared secret, the VPN switches to symmetric encryption — usually AES-256 or ChaCha20 — to scramble your browsing traffic for the rest of the session. This is a different mathematical category, and it holds up far better against quantum attacks than the handshake does.

Here’s why that split matters: an attacker who wants to read your VPN traffic later doesn’t need to break your AES-256 bulk encryption directly. Symmetric algorithms like AES-256 are estimated to lose only about half their effective security margin against a quantum computer running Grover’s algorithm — and AES-256 has so much margin to begin with that this barely matters in practice. What the attacker actually wants is the secret key your handshake negotiated. If they can recover that, they can unlock everything that key protected. And the handshake is the kind of math (large-number factoring, discrete logarithms, and their elliptic-curve cousins) that a sufficiently powerful quantum computer is expected to solve.

So when someone says “[post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html),” what they really mean, almost every time, is: the handshake has been upgraded. The bulk encryption usually doesn’t need to change at all.

## What "post-quantum" changes, specifically

A [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) replaces or supplements the handshake’s key-exchange algorithm with one built on different mathematics — mathematics that both classical and quantum computers are believed to struggle with. The leading approach, and the one NIST standardized as ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism, formerly known by its project name, Kyber), is based on problems involving lattices: geometric structures in very high-dimensional space where finding certain hidden patterns is believed to be extremely hard, even with a quantum computer’s tricks.

None of this requires new hardware. It requires new software — an updated VPN client and an updated VPN server that both know how to run the new key-exchange algorithm during the handshake, typically alongside the classical one rather than replacing it (more on why that “alongside” matters in the hybrid-mode section below). Once the handshake completes and a shared secret has been established, everything downstream — the AES-256 tunnel, the way your traffic gets routed, the app you’re using — looks and behaves the same as it always has.

In other words: a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) doesn’t feel different, look different, or ask you to understand lattice mathematics. It’s a change to a few kilobytes of data exchanged in the first fraction of a second of your connection, designed so that the secret those kilobytes establish stays secret for decades, not just for as long as classical computers remain the only computers that exist.

## Why you personally need one, not just governments

“Harvest now, decrypt later” doesn’t care who you are. Anyone’s VPN traffic can be captured and stored cheaply today. What determines whether it’s worth decrypting later is simply whether the data inside is still sensitive by the time quantum decryption becomes possible — and for ordinary people, plenty of it will be.

It’s easy to read about quantum computers, nation-state threat actors, and NIST standards and assume this is only a governments-and-defense-contractors problem. That conclusion is wrong.

Storage is cheap. Bulk internet traffic flows through many places where it can be copied — internet exchange points, undersea cable landing stations, ISP infrastructure — and copying it costs almost nothing compared to what might eventually be inside it. An adversary doesn’t need to know today whether your traffic is interesting; they just need to bet that some of what they stored will be worth decrypting once the tools exist.

Now think about what actually flows through your VPN over a normal decade: medical logins, tax filings, mortgage and immigration paperwork, years of private messages, work communications, identity documents. Almost none of that is sensitive for just a day. Much of it stays sensitive for ten or twenty years — which lines up uncomfortably well with even optimistic estimates for when a capable quantum computer might exist.

You don’t need to be a journalist or an executive for this to matter. You just need to expect that some of what you do online today should still be private in 2040 — and if that’s you, the handshake protecting your VPN traffic right now is quietly making a decades-long promise worth checking on.

## "Harvest now, decrypt later," VPN edition

For a VPN specifically, “harvest now, decrypt later” means an adversary records your encrypted handshake and tunnel traffic today, keeps it in storage, and — once a capable quantum computer exists — works backward from the recorded handshake to recover the session key, unlocking everything you sent through that VPN connection.

It’s worth walking through this step by step, because the phrase gets repeated a lot without explaining what exactly gets stored and what exactly gets unlocked.

When your VPN client connects to a server, the handshake that establishes the shared secret is transmitted over the network — it has to be, since that’s the only way the two sides can agree on anything. That handshake is encrypted using public-key cryptography, but crucially, it is observable by anyone positioned to see the traffic, even though they can’t currently make sense of it. An adversary recording your connection sees the handshake bytes and the encrypted tunnel traffic that follows, all timestamped and archived.

Today, that recording is useless to them — cracking classical elliptic-curve or RSA-based key exchange with existing computers isn’t feasible, even with unlimited money and time within a human lifespan. But a cryptographically relevant quantum computer, once it exists, could run an algorithm (Shor’s algorithm, specifically) against that recorded handshake and recover the secret key it established. With that key in hand, all the tunnel traffic recorded alongside it — the AES-256-encrypted payload — becomes readable, because the key was the hard part, not the bulk cipher.

This is exactly why the fix has to happen at the handshake, and why it has to happen before the quantum computer shows up, not after. Upgrading your VPN’s cryptography the week a cryptographically relevant quantum computer becomes public knowledge doesn’t protect the traffic you already sent. It only protects connections made after the upgrade. That’s the whole logic behind why [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) adoption is a today problem: every connection you make with old-style cryptography between now and your provider’s upgrade is a connection with a decryption expiration date somewhere in the 2030s or 2040s.

## How a quantum computer would actually break a VPN handshake

Today’s quantum computers are nowhere close to this. Breaking the elliptic-curve cryptography that protocols like WireGuard use for their handshake is estimated to require millions of stable, error-corrected logical qubits — current machines have hundreds to a few thousand physical qubits, which is a very different, much smaller thing.

Modern VPN handshakes, including WireGuard’s, typically rely on X25519, an elliptic-curve variant of Diffie-Hellman key exchange. Breaking it with a classical computer would take longer than the universe has existed. A quantum computer running Shor’s algorithm could, in theory, solve the underlying problem in reasonable time — but only with enough logical qubits: error-corrected, stable quantum bits built from many noisy physical qubits working together.

Current machines from IBM, Google, IonQ, and others have made real progress — some exceed a thousand physical qubits. But breaking elliptic-curve or RSA cryptography is estimated to need millions of error-corrected logical qubits, which could translate to tens or hundreds of millions of physical qubits at today’s error rates. That’s several orders of magnitude away, and closing the gap is one of the hardest open problems in applied physics.

Estimates for when a “cryptographically relevant quantum computer” might exist range from optimistic early 2030s to conservative 2040s guesses, with some researchers doubting it happens at scale within our lifetimes. Nobody knows the exact year — but betting decades of recorded traffic on the pessimistic end of that range is not a bet worth making, especially when the fix costs almost nothing.

## The standards behind post-quantum VPNs

In August 2024, NIST finalized FIPS 203 (ML-KEM), the key-exchange standard that post-quantum VPNs use for their handshake, alongside two signature standards (FIPS 204 and FIPS 205) that matter more for certificate authentication than for the VPN handshake itself.

A [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) isn’t inventing its own cryptography from scratch — that would be a red flag, not a feature. It’s implementing algorithms that went through the U.S. National Institute of Standards and Technology’s public, multi-year Post-Quantum Cryptography competition, which ran from 2016 to 2024 and involved cryptographers around the world trying to break candidate algorithms in public.

The result, finalized in August 2024:

FIPS 203 — ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism, formerly Kyber). This is the one that matters most for a VPN handshake. It’s a key-establishment algorithm, meaning its job is to let two parties agree on a shared secret over an insecure channel — exactly what a VPN handshake needs.

FIPS 204 — ML-DSA (Module-Lattice-based Digital Signature Algorithm, formerly Dilithium). A signature scheme, more relevant to certificate authentication and software update verification than to the handshake itself, but part of the broader post-quantum picture a VPN provider needs to think about.

FIPS 205 — SLH-DSA (Stateless Hash-based Digital Signature Algorithm, formerly SPHINCS+). Another signature scheme, kept as a conservative backup built on different math in case lattice-based approaches are ever found to have a weakness.

A fourth key-exchange candidate, HQC, based on error-correcting codes rather than lattices, is going through an additional NIST round specifically to provide a second option that doesn’t share any mathematical assumptions with ML-KEM — useful insurance in case a future breakthrough targets lattice-based math specifically.

For a VPN, the practical takeaway is simple: when a provider says “post-quantum,” ML-KEM (FIPS 203) is the algorithm you should expect to see named. If a VPN’s marketing mentions “post-quantum” but can’t point to a specific standardized algorithm, that’s worth treating with skepticism — the whole point of standardization was to stop everyone from rolling their own untested math.

## Hybrid handshakes — the current best practice

Almost every credible [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) implementation today combines a classical algorithm (like X25519) with a post-quantum one (like ML-KEM) in the same handshake, rather than replacing the classical algorithm outright. The connection stays secure as long as either algorithm holds up, which hedges against both quantum attacks and the small risk that a flaw is later found in the newer math.

This is one of the more reassuring details in the whole story, and it directly affects how you should evaluate a VPN’s claims.

Post-quantum algorithms are new. ML-KEM, despite years of public cryptanalysis, hasn’t had the fifty-year track record that RSA and elliptic-curve cryptography have — and a handful of competing lattice-based algorithms were eliminated from NIST’s own competition after unexpected weaknesses turned up. Cryptographers are appropriately cautious about betting everything on younger math, however well-vetted.

The industry’s answer is the hybrid handshake: run the classical and post-quantum key exchanges side by side and combine both resulting secrets into the final key. An attacker needs to break both algorithms, not just one. If ML-KEM turns out to have an undiscovered flaw, X25519 still protects you from classical attackers; if a quantum computer eventually breaks X25519, ML-KEM still protects you from that. You get the new math’s benefit without giving up decades of confidence in the old.

You’ll see this written in shorthand like X25519MLKEM768 — a combination of the classical X25519 elliptic-curve exchange and the 768-bit-security-level variant of ML-KEM. Google Chrome uses an equivalent combination for TLS connections. Signal’s PQXDH protocol follows the same logic for messaging. And VPN protocols adopting post-quantum handshakes are doing the same thing: hybrid first, pure post-quantum later, once the newer math has had more years to prove itself.

The cost of this belt-and-suspenders approach is small — a few extra kilobytes exchanged during the handshake and a few milliseconds of additional computation, once, at the start of the connection. Given what’s being protected, that’s about as good a trade as cryptography ever offers.

## Who's already shipped post-quantum VPN tunnels

This isn’t a future feature. Here’s what’s already happened, in order.

2016\. NIST opens its Post-Quantum Cryptography standardization competition, kicking off eight years of public analysis and attempted attacks against dozens of candidate algorithms.

May 2022. The White House issues National Security Memorandum 10, directing U.S. federal agencies to begin planning their migration to quantum-resistant cryptography.

September 2022. The NSA publishes the Commercial National Security Algorithm Suite 2.0, setting a 2033 target for post-quantum migration across U.S. national-security systems.

October 2022. Cloudflare begins rolling out hybrid post-quantum key exchange across its edge network, protecting a large share of the web’s TLS traffic.

2023\. Mullvad becomes one of the first commercial VPN providers to ship quantum-resistant WireGuard tunnels, using a Classic McEliece and Kyber hybrid, later making it the default on desktop.

August 2023. Google Chrome starts rolling out the X25519Kyber768 hybrid for TLS 1.3 connections, defaulted on for most users by 2024.

September 2023. Signal launches PQXDH, a post-quantum hybrid upgrade to the key-agreement protocol underlying its end-to-end encrypted messaging.

February 2024. Apple ships PQ3, a post-quantum upgrade to iMessage’s end-to-end encryption protocol.

August 2024. NIST finalizes FIPS 203, 204, and 205 — the moment post-quantum cryptography stops being experimental and becomes a formal, deployable standard.

2025 onward. Broad rollout accelerates across browsers, messaging platforms, cloud infrastructure, and VPN providers. VPNs built from the ground up in this period — OllaVPN among them — ship post-quantum handshakes as a default, not an opt-in.

If you’ve been wondering whether “[post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html)” is real yet or still a few years off: it’s real, it’s shipped in products used by hundreds of millions of people, and the VPN category specifically is now in the middle of catching up to where browsers and messaging apps already are.

## What doesn't change — symmetric encryption

It’s worth pausing to reassure you about the part of your VPN connection that doesn’t need a post-quantum upgrade, or this guide might leave you thinking your whole connection is one giant vulnerability. It isn’t.

Once the handshake — classical, post-quantum, or hybrid — has established a shared secret, the rest of your traffic is scrambled with symmetric encryption, almost always AES-256 or ChaCha20. These don’t rely on the “hard math problem” structure that makes public-key cryptography vulnerable to Shor’s algorithm. The relevant quantum attack against symmetric ciphers, Grover’s algorithm, only roughly halves their effective security margin rather than breaking them outright — and AES-256 has so much margin to spare that even halved, it remains solidly secure.

This is why the [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) conversation is narrower than it might sound. You don’t need a “post-quantum AES.” You need a post-quantum handshake, because that’s the only piece a quantum computer meaningfully threatens.

## Common myths about post-quantum VPNs

Myth 1: "Quantum computers don't exist yet, so this doesn't matter for years."

This ignores harvest now, decrypt later. The threat isn’t that your VPN traffic gets broken today — it’s that it gets recorded today and broken whenever a capable quantum computer eventually exists. The earlier your VPN upgrades, the less of your past traffic is exposed to that eventual risk.

Myth 2: "A [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) will be noticeably slower."

This was closer to true with early, experimental post-quantum algorithms, which sometimes had unwieldy key sizes. The NIST-standardized algorithms, particularly ML-KEM, are efficient enough that the added handshake overhead — a few extra kilobytes, a few milliseconds — is basically invisible during normal use. Your video call, your browsing, your downloads all run at the same speed once the handshake completes.

Myth 3: "If quantum computers can break my VPN's handshake, they can break everything about my privacy."

Not quite. A broken handshake means an attacker with a future quantum computer could recover the session key for connections made before your VPN upgraded. It doesn’t retroactively unmask your identity if your provider had a strict [no-logs policy](/blog/which-free-vpn-does-not-keep-logs.html), and it doesn’t affect encryption that never depended on the vulnerable math in the first place, such as the AES-256 bulk cipher.

Myth 4: "I have to manually turn on post-quantum mode."

On a well-built modern VPN, no — it should be part of the default handshake for every connection, not a setting hidden three menus deep that most users will never find. If a provider requires you to dig through advanced settings to get post-quantum protection, most users won’t get the benefit.

Myth 5: "Post-quantum VPNs require special hardware or a faster device."

They don’t. Post-quantum cryptography, despite the name, is pure software running on the same phones, laptops, and servers everyone already has. There’s no quantum hardware involved anywhere in the process — it’s new math, running on old-fashioned silicon.

## How to tell a real post-quantum VPN from a marketing claim

Look for a named, standardized algorithm (ML-KEM specifically), a hybrid mode rather than a pure post-quantum-only mode, default-on behavior with no manual configuration required, no extra charge for the feature, and continued support for baseline privacy features like a kill switch.

Not every VPN that slaps “quantum-safe” or “quantum-resistant” on its landing page has actually done the engineering work. Here’s a checklist worth running through before you trust the claim.

The [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) checklist

• A specific, named algorithm. You should be able to find “ML-KEM” or a hybrid combination like “X25519 + ML-KEM” in the provider’s technical documentation. Vague phrases like “quantum-proof encryption” with no algorithm named anywhere are a warning sign.

• Hybrid mode, not pure post-quantum. The current industry consensus, backed by cryptographers across academia and industry, favors combining classical and post-quantum algorithms rather than replacing classical cryptography outright. A provider claiming a pure post-quantum-only handshake today is being more aggressive than the field currently recommends.

• Default on every connection, not an opt-in buried in an advanced settings screen. Protection that most users never discover is protection that doesn’t actually protect most users.

• No additional cost. A cryptographic upgrade protecting the confidentiality of your own data shouldn’t be a premium add-on — that’s a privacy feature, not a luxury feature.

• Existing privacy features stay intact. A kill switch, DNS leak protection, and proper IPv6 handling should keep working exactly as before; post-quantum support shouldn’t come at the cost of the fundamentals.

• A stated commitment to keep pace with the standards. NIST is still finalizing additional algorithms (FN-DSA and HQC among them). A provider that treats post-quantum support as a one-time checkbox, rather than an evolving commitment, is likely to fall behind again within a few years.

If a VPN’s post-quantum claim is vague, undocumented, paywalled, or missing an algorithm name entirely, it’s reasonable to treat the claim as marketing until proven otherwise.

## Performance — does it slow your connection down?

This is one of the first practical questions people ask, and the honest answer is: barely, and only for a fraction of a second, once.

The post-quantum part of a handshake only runs when the connection is first established. ML-KEM’s key sizes are modest compared to earlier candidates eliminated from NIST’s competition for being too unwieldy — a few extra kilobytes exchanged, a handful of extra milliseconds of computation. Once the handshake completes, the connection behaves like any other VPN tunnel: throughput, latency, and browsing speed are governed by your internet connection, server load, and the underlying protocol, exactly as before.

You won’t notice a post-quantum handshake in daily use. What you’ll notice later is whether your provider bothered to add one before it started to matter.

## How OllaVPN handles this

We built OllaVPN around a simple question: what should a modern, privacy-first VPN do by default in 2026, without making the user hunt for it?

For post-quantum protection specifically, here’s where we land.

• A hybrid X25519 + ML-KEM-768 handshake on every connection, not a roadmap item and not something you need to enable. It’s part of the default WireGuard handshake from the moment you connect.

• Included on the lifetime free plan. We don’t think a cryptographic upgrade that protects your own data should be something only paying customers get. Free users get the same handshake as paid users.

• An always-on kill switch that can’t be accidentally disabled, so a dropped connection never silently falls back to unprotected traffic.

• In-tunnel DNS handling by default — see our DNS leak guide for what that protects against and what it doesn’t.

• An ongoing commitment to the standards, meaning as NIST finalizes additional algorithms like FN-DSA and HQC in the coming years, our post-quantum handshake will evolve rather than freeze in place.

OllaVPN — post-quantum handshake included, out of the box:

Lifetime free — $0 · 10 Mbps. Post-quantum protection included. Every country we serve. No time limits, no data caps, no ads.

Paid plan — $2/month · 10 Gbps. Same post-quantum protection, faster connection, five devices on one account.

You can try the free plan right now — no email, no card, no upsell. The post-quantum handshake is on from your very first connection.

Related reading

What is post-quantum cryptography? — the underlying concept explained

Mullvad vs ProtonVPN — including how Mullvad pioneered production PQC tunnels

WireGuard vs OpenVPN

What is a DNS leak? How to test, fix, and prevent it

What is a VPN kill switch?

Inside the OllaVPN stack — what post-quantum-ready actually means in our product

Deeper context worth knowing

A guide like this should leave you understanding the surrounding landscape well enough to spot bad information elsewhere. A few things worth carrying with you:

The threat model is specific. A post-quantum handshake protects the confidentiality of your traffic against a future quantum-capable adversary who recorded it today. It doesn’t make your VPN provider trustworthy, prevent the provider from logging your activity, or address tracking above the network layer, like cookies or account logins. Post-quantum cryptography and “[no-logs](/blog/which-free-vpn-does-not-keep-logs.html)” are separate promises.

The category will keep evolving. NIST’s work isn’t finished — algorithms like FN-DSA and HQC are still moving through the pipeline. A VPN’s post-quantum implementation from 2026 should update in the years ahead, the same way TLS has continually evolved rather than being finalized once and forgotten.

“Post-quantum” and “quantum” aren’t the same job. Quantum cryptography uses quantum physics itself — specialized hardware sending photons in particular states — to detect eavesdropping. Post-quantum cryptography is ordinary software math that runs on hardware everyone already owns. If a VPN’s marketing conflates the two, double-check against their technical documentation.

How this connects to OllaVPN specifically

If you’ve read this far, you’re probably wondering how directly this applies to using OllaVPN. The short version:

Where a post-quantum handshake is something a VPN should provide by default, OllaVPN ships it on every connection, free tier included — WireGuard with a hybrid X25519 + ML-KEM-768 handshake, an OS-level enforced kill switch, in-tunnel DNS, and peer isolation across four independent layers. The technology page covers the full architecture.

Where a VPN only partially solves the problem — anonymity from every adversary, or threats above the network layer — OllaVPN does what a privacy VPN genuinely can, without overselling. Post-quantum cryptography protects traffic against future decryption; it doesn’t make you anonymous, and it isn’t a substitute for tools built for that job, like Tor.

Where a VPN doesn’t help at all — malware on your device, account-based tracking, or a provider’s own logging practices — we say so plainly. A post-quantum handshake is one piece of a much larger privacy picture.

About this guide

If you spot a fact that’s drifted or an addition we should make, email us through the contact page. Reader corrections drive a meaningful share of our updates.

## Frequently asked questions

What is a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) in simple terms?

A [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) is a VPN whose connection handshake — the step where your device and the VPN server agree on a shared secret key — uses encryption algorithms believed to resist attacks from both classical and future quantum computers. The rest of the connection, including the bulk encryption of your actual traffic, typically stays the same, since it’s already resistant enough to quantum attacks on its own.

Why do I need a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) if quantum computers don't exist yet?

Because of “harvest now, decrypt later.” An adversary can record your encrypted VPN handshake and traffic today, store it, and decrypt it once a capable quantum computer eventually exists — which mainstream estimates place somewhere between the early 2030s and the mid-2040s. Anything sensitive today that will still be sensitive a decade or two from now is at risk under this pattern, and upgrading your VPN now is the only way to protect traffic you send between now and whenever quantum computers arrive.

Does a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) require special hardware?

No. Post-quantum cryptography is a software upgrade that runs on ordinary phones, laptops, and servers — the same hardware you already use. It’s a different category from “quantum cryptography,” which does require specialized hardware and isn’t what VPN providers are deploying.

What algorithm do post-quantum VPNs actually use?

The most common one is ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism), standardized by NIST as FIPS 203 in August 2024, formerly known by its project name Kyber. Most credible implementations combine ML-KEM with a classical algorithm like X25519 in a hybrid handshake, rather than replacing classical cryptography outright.

Will a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) slow down my connection?

Not noticeably. The post-quantum part of the handshake adds a small amount of extra data and a few milliseconds of computation, once, at the start of a connection. Everyday browsing, streaming, and downloads run at the same speed once the handshake is complete.

Does AES-256 need to be replaced for post-quantum security?

No. AES-256, the symmetric cipher most VPNs use to encrypt bulk traffic, is far more resistant to quantum attacks than public-key handshake algorithms are. The relevant quantum attack against it only roughly halves its effective security margin, and AES-256 has so much margin to spare that it remains solidly secure. The handshake is the part that actually needs upgrading.

Which VPNs already have post-quantum handshakes?

Mullvad was among the first commercial VPNs to ship quantum-resistant WireGuard tunnels, starting in 2023 with a Classic McEliece and Kyber hybrid. OllaVPN ships a hybrid X25519 + ML-KEM-768 handshake by default on every connection, including its free tier, as of 2026.

Is a [post-quantum VPN](/blog/what-is-a-post-quantum-vpn.html) the same as an anonymous VPN?

No, and this is a common mix-up. A post-quantum handshake protects the confidentiality of your traffic against a future quantum-capable adversary. It says nothing about whether your VPN provider logs your activity, whether websites can still track you by other means, or how anonymous you are more broadly. Post-quantum cryptography and a genuine [no-logs policy](/blog/which-free-vpn-does-not-keep-logs.html) are separate promises that both matter.

How can I check if a VPN's post-quantum claim is real?

Look for a specific, named, NIST-standardized algorithm (ML-KEM specifically) in the provider’s technical documentation, confirmation that it runs in hybrid mode alongside a classical algorithm, default-on behavior with no manual configuration, and no extra charge for the feature. Vague marketing language with no algorithm named anywhere is a sign the claim may be more sticker than substance.

Is OllaVPN's handshake post-quantum ready?

Yes. OllaVPN uses a hybrid X25519 + ML-KEM-768 handshake on every connection — free and paid alike — with no configuration required. You can try it without an email or a card.

### 🔗 Related Privacy & Security Deep Dives

[

HTTPS vs VPN: What's the Difference, and Do You Need Both? →

Why transport encryption and full-tunnel encryption operate at different layers.

](/blog/https-vs-vpn.html)[

What Your ISP Can See About You (And How to Hide It) →

How metadata collection happens today and how post-quantum tunnels prevent future decryption.

](/blog/what-your-isp-can-see-about-you.html)[

Best VPN for Chrome That Actually Protects Your Privacy →

System-level VPN vs browser extensions and why post-quantum protection matters.

](/blog/best-vpn-for-chrome.html)[

Which Free VPN Does Not Keep Logs? 2026 Checklist →

A verifiable audit checklist to test no-log VPN claims.

](/blog/which-free-vpn-does-not-keep-logs.html)

### Ready for genuine, zero-log privacy?

Try OllaVPN with post-quantum cryptography on every connection. Lifetime free tier with no data caps.

[Download OllaVPN free →](/apps.html)