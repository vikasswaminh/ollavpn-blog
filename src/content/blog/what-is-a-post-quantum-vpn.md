---
title: 'What Is a Post-Quantum VPN and Why Do You Need One?'
description: 'The plain-English guide to post-quantum VPNs. Why harvest-now-decrypt-later turns a future quantum threat into a today problem, and how PQC handshakes work.'
pubDate: 2026-07-04
author: Vikas Swami
tags: ['pillars']
---

<section id="tldr" class="article-tldr-box" style="margin-bottom: 28px; padding: 24px; background: #EFEFF0; border: 1px solid #E2E8F0; border-left: 5px solid #DA291C; border-radius: 0 12px 12px 0;">
  <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-top: 0; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.04em; font-family: 'Lato', sans-serif;">TL;DR</h2>
  <p style="margin-bottom: 12px; line-height: 1.75; color: #1E293B; font-size: 1.05rem;">The plain-English guide to post-quantum VPNs. Why harvest-now-decrypt-later turns a future quantum threat into a today problem, and how PQC handshakes work. OllaVPN delivers high-throughput, quantum-resilient <a href="/blog/wireguard-vs-openvpn/" style="color: #DA291C; text-decoration: underline; font-weight: 500;">WireGuard encryption</a> with audited zero activity logging across all devices.</p>
</section>

<section id="takeaways" class="article-takeaways-box" style="margin-bottom: 32px; padding: 24px 28px; background: #EFEFF0; border: 1px solid #E2E8F0; border-left: 5px solid #DA291C; border-radius: 0 12px 12px 0;">
  <h2 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin-top: 0; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; font-family: 'Lato', sans-serif;">KEY TAKEAWAYS</h2>
  <ul class="takeaways-list-24obs" style="list-style: none !important; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px;">
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>Why "post-quantum VPN" suddenly became a real category: Post-quantum VPNs moved from research curiosity to an actual product category because the underlying cryptographic standards were finalized in August 2024, and because “harvest now, decrypt later” turns a future threat into a today problem.</span></li>
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>What a VPN actually encrypts, in plain terms: Before getting into the post-quantum part, it helps to be clear about what a VPN is doing in the first place, because a lot of confusion about “post-quantum VPNs” comes from people not being sure what a regular VPN protects..</span></li>
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>The two places a VPN uses cryptography: A VPN tunnel relies on cryptography twice: once during the handshake, when your device and the server negotiate a shared secret key, and continuously afterward, when that key is used to symmetrically encrypt your actual traffic.</span></li>
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>What "post-quantum" changes, specifically: A post-quantum VPN replaces or supplements the handshake’s key-exchange algorithm with one built on different mathematics, mathematics that both classical and quantum computers are believed to struggle with.</span></li>
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>Why you personally need one, not just governments: “Harvest now, decrypt later” doesn’t care who you are.</span></li>
    <li style="display: flex; align-items: flex-start; gap: 10px; color: #1E293B; font-size: 1.02rem; line-height: 1.68; margin: 0; padding: 0;"><span class="takeaway-bullet" style="color: #DA291C; font-weight: 800; font-size: 1.25rem; line-height: 1.35; flex-shrink: 0;">&bull;</span><span>"Harvest now, decrypt later," VPN edition: For a VPN specifically, “harvest now, decrypt later” means an adversary records your encrypted handshake and tunnel traffic today, keeps it in storage, and, once a capable quantum computer exists, works backward from the recorded handshake to recover the session key, unlocking everything you sent through that VPN connection..</span></li>
  </ul>
</section>

<div class="blog-main-content-box" style="background: #ffffff; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 36px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); margin-bottom: 36px;">

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The plain-English guide to what a post-quantum VPN actually changes under the hood, why harvest-now-decrypt-later matters today, and how to verify real PQC protection.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">What Is a Post-Quantum VPN and Why Do You Need One?</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The plain-English guide to the newest, most misunderstood label in the VPN world. What a “post-quantum VPN” actually changes under the hood, why the timing of your upgrade matters even though quantum computers don’t exist yet, and how to tell a real post-quantum VPN from a marketing sticker.</p>


## Why "post-quantum VPN" suddenly became a real category


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">Post-quantum VPNs moved from research curiosity to an actual product category because the underlying cryptographic standards were finalized in August 2024, and because “harvest now, decrypt later” turns a future threat into a today problem. VPN providers that ignore it are shipping tunnels that may have an expiration date.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Post-quantum VPNs moved from research curiosity to an actual product category because the underlying cryptographic standards were finalized in August 2024, and because “harvest now, decrypt later” turns a future threat into a today problem. VPN providers that ignore it are shipping tunnels that may have an expiration date.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">For twenty-plus years, the VPN industry didn’t have to think about this. VPN encryption was built on the same well-known algorithms as the rest of the internet, RSA, Diffie-Hellman, elliptic-curve variants, and those algorithms had survived attacks from classical computers. If a VPN provider said “256-bit encryption,” that was basically the end of the conversation. People didn’t ask what kind of encryption, because there was really only one kind that mattered.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">That comfortable situation is changing, not because the old math suddenly got weaker against today’s computers, but because a new kind of computer is being built that will eventually be very good at the specific math problems those algorithms depend on. Once the U.S. National Institute of Standards and Technology finished an eight-year public competition and finalized the first three post-quantum cryptographic standards in 2024, “post-quantum” stopped being a research paper topic and became something a VPN provider could actually ship. Browsers did it. Messaging apps did it. VPNs are doing it now, and the ones that are further along are worth understanding before you pick one.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The reason it matters specifically for VPNs, more than for a single website you visit once, is that a VPN is meant to protect an ongoing stream of everything you do online. If the tunnel’s handshake has a shelf life, so does everything that ever passed through it.</p>


## What a VPN actually encrypts, in plain terms


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">Before getting into the post-quantum part, it helps to be clear about what a VPN is doing in the first place, because a lot of confusion about “post-quantum VPNs” comes from people not being sure what a regular VPN protects.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Before getting into the post-quantum part, it helps to be clear about what a VPN is doing in the first place, because a lot of confusion about “post-quantum VPNs” comes from people not being sure what a regular VPN protects.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">When you turn on a VPN, your device builds an <a href="/blog/what-is-a-vpn-tunnel/" style="color: #DA291C; text-decoration: underline; font-weight: 500;">encrypted tunnel</a> to a server run by your VPN provider. Everything that leaves your device, web requests, app traffic, DNS lookups, all of it, gets wrapped inside that tunnel before it reaches your Wi‑Fi router, your internet provider, or anyone else on the network path. Your internet provider can see that you’re connected to a VPN server, and roughly how much data is flowing, but it can’t see what’s inside. The websites and apps you talk to see the VPN server’s identity, not yours.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The tunnel is built using a <a href="/blog/what-is-a-vpn-protocol/" style="color: #DA291C; text-decoration: underline; font-weight: 500;">VPN protocol</a>, WireGuard and OpenVPN are the two you’ll hear about most often, and that protocol relies on cryptographic algorithms to do two jobs: agree on a secret key when the connection starts, and then use that key to scramble the data flowing through the tunnel for as long as the connection stays open.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">That distinction, the “agreeing on a key” part versus the “using the key” part, is exactly where the post-quantum story lives.</p>


## The two places a VPN uses cryptography


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">A VPN tunnel relies on cryptography twice: once during the handshake, when your device and the server negotiate a shared secret key, and continuously afterward, when that key is used to symmetrically encrypt your actual traffic. Quantum computers threaten the handshake far more than the ongoing encryption.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">A VPN tunnel relies on cryptography twice: once during the handshake, when your device and the server negotiate a shared secret key, and continuously afterward, when that key is used to symmetrically encrypt your actual traffic. Quantum computers threaten the handshake far more than the ongoing encryption.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">This is the single most useful thing to understand if you want the rest of this guide to click into place.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">1\. The handshake. When you connect to a VPN server, your device and the server need to agree on a secret that nobody else can figure out, even though the negotiation itself happens over a network that anyone could be watching. This is done with public-key cryptography, algorithms like RSA, Diffie-Hellman, or elliptic-curve variants like X25519 that WireGuard uses. This step happens once per connection (or periodically, if the VPN rotates keys), and it’s the part a quantum computer would target.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">2\. The bulk encryption. Once the handshake is done and both sides have a shared secret, the VPN switches to symmetric encryption, usually AES-256 or ChaCha20, to scramble your browsing traffic for the rest of the session. This is a different mathematical category, and it holds up far better against quantum attacks than the handshake does.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Here’s why that split matters: an attacker who wants to read your VPN traffic later doesn’t need to break your AES-256 bulk encryption directly. Symmetric algorithms like AES-256 are estimated to lose only about half their effective security margin against a quantum computer running Grover’s algorithm, and AES-256 has so much margin to begin with that this barely matters in practice. What the attacker actually wants is the secret key your handshake negotiated. If they can recover that, they can unlock everything that key protected. And the handshake is the kind of math (large-number factoring, discrete logarithms, and their elliptic-curve cousins) that a sufficiently powerful quantum computer is expected to solve.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">So when someone says “post-quantum VPN,” what they really mean, almost every time, is: the handshake has been upgraded. The bulk encryption usually doesn’t need to change at all.</p>


## What "post-quantum" changes, specifically


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">A post-quantum VPN replaces or supplements the handshake’s key-exchange algorithm with one built on different mathematics, mathematics that both classical and quantum computers are believed to struggle with. The leading approach, and the one NIST standardized as ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism, formerly known by its project name, Kyber), is based on problems involving lattices: geometric structures in very high-dimensional space where finding certain hidden patterns is believed to be extremely hard, even with a quantum computer’s tricks.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">A post-quantum VPN replaces or supplements the handshake’s key-exchange algorithm with one built on different mathematics, mathematics that both classical and quantum computers are believed to struggle with. The leading approach, and the one NIST standardized as ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism, formerly known by its project name, Kyber), is based on problems involving lattices: geometric structures in very high-dimensional space where finding certain hidden patterns is believed to be extremely hard, even with a quantum computer’s tricks.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">None of this requires new hardware. It requires new software, an updated VPN client and an updated VPN server that both know how to run the new key-exchange algorithm during the handshake, typically alongside the classical one rather than replacing it (more on why that “alongside” matters in the hybrid-mode section below). Once the handshake completes and a shared secret has been established, everything downstream, the AES-256 tunnel, the way your traffic gets routed, the app you’re using, looks and behaves the same as it always has.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">In other words: a post-quantum VPN doesn’t feel different, look different, or ask you to understand lattice mathematics. It’s a change to a few kilobytes of data exchanged in the first fraction of a second of your connection, designed so that the secret those kilobytes establish stays secret for decades, not just for as long as classical computers remain the only computers that exist.</p>


## Why you personally need one, not just governments


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">“Harvest now, decrypt later” doesn’t care who you are. Anyone’s VPN traffic can be captured and stored cheaply today. What determines whether it’s worth decrypting later is simply whether the data inside is still sensitive by the time quantum decryption becomes possible, and for ordinary people, plenty of it will be.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">“Harvest now, decrypt later” doesn’t care who you are. Anyone’s VPN traffic can be captured and stored cheaply today. What determines whether it’s worth decrypting later is simply whether the data inside is still sensitive by the time quantum decryption becomes possible, and for ordinary people, plenty of it will be.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">It’s easy to read about quantum computers, nation-state threat actors, and NIST standards and assume this is only a governments-and-defense-contractors problem. That conclusion is wrong.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Storage is cheap. Bulk internet traffic flows through many places where it can be copied, internet exchange points, undersea cable landing stations, ISP infrastructure, and copying it costs almost nothing compared to what might eventually be inside it. An adversary doesn’t need to know today whether your traffic is interesting; they just need to bet that some of what they stored will be worth decrypting once the tools exist.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Now think about what actually flows through your VPN over a normal decade: medical logins, tax filings, mortgage and immigration paperwork, years of private messages, work communications, identity documents. Almost none of that is sensitive for just a day. Much of it stays sensitive for ten or twenty years, which lines up uncomfortably well with even optimistic estimates for when a capable quantum computer might exist.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">You don’t need to be a journalist or an executive for this to matter. You just need to expect that some of what you do online today should still be private in 2040, and if that’s you, the handshake protecting your VPN traffic right now is quietly making a decades-long promise worth checking on.</p>


## "Harvest now, decrypt later," VPN edition


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">For a VPN specifically, “harvest now, decrypt later” means an adversary records your encrypted handshake and tunnel traffic today, keeps it in storage, and, once a capable quantum computer exists, works backward from the recorded handshake to recover the session key, unlocking everything you sent through that VPN connection.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">For a VPN specifically, “harvest now, decrypt later” means an adversary records your encrypted handshake and tunnel traffic today, keeps it in storage, and, once a capable quantum computer exists, works backward from the recorded handshake to recover the session key, unlocking everything you sent through that VPN connection.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">It’s worth walking through this step by step, because the phrase gets repeated a lot without explaining what exactly gets stored and what exactly gets unlocked.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">When your VPN client connects to a server, the handshake that establishes the shared secret is transmitted over the network, it has to be, since that’s the only way the two sides can agree on anything. That handshake is encrypted using public-key cryptography, but crucially, it is observable by anyone positioned to see the traffic, even though they can’t currently make sense of it. An adversary recording your connection sees the handshake bytes and the encrypted tunnel traffic that follows, all timestamped and archived.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Today, that recording is useless to them, cracking classical elliptic-curve or RSA-based key exchange with existing computers isn’t feasible, even with unlimited money and time within a human lifespan. But a cryptographically relevant quantum computer, once it exists, could run an algorithm (Shor’s algorithm, specifically) against that recorded handshake and recover the secret key it established. With that key in hand, all the tunnel traffic recorded alongside it, the AES-256-encrypted payload, becomes readable, because the key was the hard part, not the bulk cipher.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">This is exactly why the fix has to happen at the handshake, and why it has to happen before the quantum computer shows up, not after. Upgrading your VPN’s cryptography the week a cryptographically relevant quantum computer becomes public knowledge doesn’t protect the traffic you already sent. It only protects connections made after the upgrade. That’s the whole logic behind why post-quantum VPN adoption is a today problem: every connection you make with old-style cryptography between now and your provider’s upgrade is a connection with a decryption expiration date somewhere in the 2030s or 2040s.</p>


## How a quantum computer would actually break a VPN handshake


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">Today’s quantum computers are nowhere close to this. Breaking the elliptic-curve cryptography that protocols like WireGuard use for their handshake is estimated to require millions of stable, error-corrected logical qubits, current machines have hundreds to a few thousand physical qubits, which is a very different, much smaller thing.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Today’s quantum computers are nowhere close to this. Breaking the elliptic-curve cryptography that protocols like WireGuard use for their handshake is estimated to require millions of stable, error-corrected logical qubits, current machines have hundreds to a few thousand physical qubits, which is a very different, much smaller thing.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Modern VPN handshakes, including WireGuard’s, typically rely on X25519, an elliptic-curve variant of Diffie-Hellman key exchange. Breaking it with a classical computer would take longer than the universe has existed. A quantum computer running Shor’s algorithm could, in theory, solve the underlying problem in reasonable time, but only with enough logical qubits: error-corrected, stable quantum bits built from many noisy physical qubits working together.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Current machines from IBM, Google, IonQ, and others have made real progress, some exceed a thousand physical qubits. But breaking elliptic-curve or RSA cryptography is estimated to need millions of error-corrected logical qubits, which could translate to tens or hundreds of millions of physical qubits at today’s error rates. That’s several orders of magnitude away, and closing the gap is one of the hardest open problems in applied physics.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Estimates for when a “cryptographically relevant quantum computer” might exist range from optimistic early 2030s to conservative 2040s guesses, with some researchers doubting it happens at scale within our lifetimes. Nobody knows the exact year, but betting decades of recorded traffic on the pessimistic end of that range is not a bet worth making, especially when the fix costs almost nothing.</p>


## The standards behind post-quantum VPNs


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">In August 2024, NIST finalized FIPS 203 (ML-KEM), the key-exchange standard that post-quantum VPNs use for their handshake, alongside two signature standards (FIPS 204 and FIPS 205) that matter more for certificate authentication than for the VPN handshake itself.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">In August 2024, NIST finalized FIPS 203 (ML-KEM), the key-exchange standard that post-quantum VPNs use for their handshake, alongside two signature standards (FIPS 204 and FIPS 205) that matter more for certificate authentication than for the VPN handshake itself.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">A post-quantum VPN isn’t inventing its own cryptography from scratch, that would be a red flag, not a feature. It’s implementing algorithms that went through the U.S. National Institute of Standards and Technology’s public, multi-year <a href="/blog/what-is-post-quantum-cryptography/" style="color: #DA291C; text-decoration: underline; font-weight: 500;">Post-Quantum Cryptography</a> competition, which ran from 2016 to 2024 and involved cryptographers around the world trying to break candidate algorithms in public.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The result, finalized in August 2024:</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">FIPS 203, ML-KEM (Module-Lattice-based Key-Encapsulation Mechanism, formerly Kyber). This is the one that matters most for a VPN handshake. It’s a key-establishment algorithm, meaning its job is to let two parties agree on a shared secret over an insecure channel, exactly what a VPN handshake needs.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">FIPS 204, ML-DSA (Module-Lattice-based Digital Signature Algorithm, formerly Dilithium). A signature scheme, more relevant to certificate authentication and software update verification than to the handshake itself, but part of the broader post-quantum picture a VPN provider needs to think about.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">FIPS 205, SLH-DSA (Stateless Hash-based Digital Signature Algorithm, formerly SPHINCS+). Another signature scheme, kept as a conservative backup built on different math in case lattice-based approaches are ever found to have a weakness.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">A fourth key-exchange candidate, HQC, based on error-correcting codes rather than lattices, is going through an additional NIST round specifically to provide a second option that doesn’t share any mathematical assumptions with ML-KEM, useful insurance in case a future breakthrough targets lattice-based math specifically.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">For a VPN, the practical takeaway is simple: when a provider says “post-quantum,” ML-KEM (FIPS 203) is the algorithm you should expect to see named. If a VPN’s marketing mentions “post-quantum” but can’t point to a specific standardized algorithm, that’s worth treating with skepticism, the whole point of standardization was to stop everyone from rolling their own untested math.</p>


## Hybrid handshakes: the current best practice


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">Almost every credible post-quantum VPN implementation today combines a classical algorithm (like X25519) with a post-quantum one (like ML-KEM) in the same handshake, rather than replacing the classical algorithm outright. The connection stays secure as long as either algorithm holds up, which hedges against both quantum attacks and the small risk that a flaw is later found in the newer math.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Almost every credible post-quantum VPN implementation today combines a classical algorithm (like X25519) with a post-quantum one (like ML-KEM) in the same handshake, rather than replacing the classical algorithm outright. The connection stays secure as long as either algorithm holds up, which hedges against both quantum attacks and the small risk that a flaw is later found in the newer math.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">This is one of the more reassuring details in the whole story, and it directly affects how you should evaluate a VPN’s claims.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Post-quantum algorithms are new. ML-KEM, despite years of public cryptanalysis, hasn’t had the fifty-year track record that RSA and elliptic-curve cryptography have, and a handful of competing lattice-based algorithms were eliminated from NIST’s own competition after unexpected weaknesses turned up. Cryptographers are appropriately cautious about betting everything on younger math, however well-vetted.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The industry’s answer is the hybrid handshake: run the classical and post-quantum key exchanges side by side and combine both resulting secrets into the final key. An attacker needs to break both algorithms, not just one. If ML-KEM turns out to have an undiscovered flaw, X25519 still protects you from classical attackers; if a quantum computer eventually breaks X25519, ML-KEM still protects you from that. You get the new math’s benefit without giving up decades of confidence in the old.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">You’ll see this written in shorthand like X25519MLKEM768, a combination of the classical X25519 elliptic-curve exchange and the 768-bit-security-level variant of ML-KEM. Google Chrome uses an equivalent combination for TLS connections. Signal’s PQXDH protocol follows the same logic for messaging. And VPN protocols adopting post-quantum handshakes are doing the same thing: hybrid first, pure post-quantum later, once the newer math has had more years to prove itself.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">The cost of this belt-and-suspenders approach is small, a few extra kilobytes exchanged during the handshake and a few milliseconds of additional computation, once, at the start of the connection. Given what’s being protected, that’s about as good a trade as cryptography ever offers.</p>


## Who's already shipped post-quantum VPN tunnels


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">This isn’t a future feature. Here’s what’s already happened, in order.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">This isn’t a future feature. Here’s what’s already happened, in order.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">2016\. NIST opens its Post-Quantum Cryptography standardization competition, kicking off eight years of public analysis and attempted attacks against dozens of candidate algorithms.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">May 2022. The White House issues National Security Memorandum 10, directing U.S. federal agencies to begin planning their migration to quantum-resistant cryptography.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">September 2022. The NSA publishes the Commercial National Security Algorithm Suite 2.0, setting a 2033 target for post-quantum migration across U.S. national-security systems.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">October 2022. Cloudflare begins rolling out hybrid post-quantum key exchange across its edge network, protecting a large share of the web’s TLS traffic.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">2023\. Mullvad becomes one of the first commercial VPN providers to ship quantum-resistant WireGuard tunnels, using a Classic McEliece and Kyber hybrid, later making it the default on desktop.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">August 2023. Google Chrome starts rolling out the X25519Kyber768 hybrid for TLS 1.3 connections, defaulted on for most users by 2024.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">September 2023. Signal launches PQXDH, a post-quantum hybrid upgrade to the key-agreement protocol underlying its end-to-end encrypted messaging.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">February 2024. Apple ships PQ3, a post-quantum upgrade to iMessage’s <a href="/blog/what-is-end-to-end-encryption/" style="color: #DA291C; text-decoration: underline; font-weight: 500;">end-to-end encryption</a> protocol.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">August 2024. NIST finalizes FIPS 203, 204, and 205, the moment post-quantum cryptography stops being experimental and becomes a formal, deployable standard.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">2025 onward. Broad rollout accelerates across browsers, messaging platforms, cloud infrastructure, and VPN providers. VPNs built from the ground up in this period, OllaVPN among them, ship post-quantum handshakes as a default, not an opt-in.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">If you’ve been wondering whether “post-quantum VPN” is real yet or still a few years off: it’s real, it’s shipped in products used by hundreds of millions of people, and the VPN category specifically is now in the middle of catching up to where browsers and messaging apps already are.</p>


## What doesn't change: symmetric encryption


<div class="answer-card" style="margin-bottom: 24px; padding: 20px 24px; background: #FFF5F5; border-left: 5px solid #DA291C; border-radius: 0 8px 8px 0;">
  <strong style="color: #DA291C; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 8px;">QUICK ANSWER</strong>
  <p style="margin: 0; color: #1E293B; font-size: 1.05rem; line-height: 1.7; font-weight: 500;">It’s worth pausing to reassure you about the part of your VPN connection that doesn’t need a post-quantum upgrade, or this guide might leave you thinking your whole connection is one giant vulnerability. It isn’t.</p>
</div>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">It’s worth pausing to reassure you about the part of your VPN connection that doesn’t need a post-quantum upgrade, or this guide might leave you thinking your whole connection is one giant vulnerability. It isn’t.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">Once the handshake, classical, post-quantum, or hybrid, has established a shared secret, the rest of your traffic is scrambled with symmetric encryption, almost always AES-256 or ChaCha20. These don’t rely on the “hard math problem” structure that makes public-key cryptography vulnerable to Shor’s algorithm. The relevant quantum attack against symmetric ciphers, Grover’s algorithm, only roughly halves their effective security margin rather than breaking them outright, and AES-256 has so much margin to spare that even halved, it remains solidly secure.</p>

<p style="margin-bottom: 16px; line-height: 1.75; color: #09090b; font-size: 1.05rem;">This is why the post-quantum VPN conversation is narrower than it might sound. You don’t need a “post-quantum AES.” You need a post-quantum handshake, because that’s the only piece a quantum computer meaningfully threatens.</p>

</div>

<section id="faqs" class="blog-main-content-box" style="margin-top: 36px; margin-bottom: 32px; scroll-margin-top: 80px;">
  <h2 style="font-size: 1.45rem; font-weight: 700; color: #09090b; margin-top: 0; margin-bottom: 6px;">Frequently Asked Questions</h2>
  <div class="faq-accordion-group" style="display: flex; flex-direction: column; gap: 8px;">
    <details class="faq-accordion-item" style="border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC; overflow: hidden; padding: 10px 14px; transition: all 0.2s ease;">
      <summary class="faq-accordion-summary" style="font-weight: 600; color: #0F172A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; font-size: 1rem;">
        <span>Quantum computers don't exist yet, so this doesn't matter for years.</span>
        <span class="faq-icon" style="color: #DA291C; font-size: 1.05rem; font-weight: bold; margin-left: 10px;">+</span>
      </summary>
      <div class="faq-accordion-content" style="padding-top: 8px; color: #334155; font-size: 0.95rem; line-height: 1.6;">
        <p style="margin: 0;">This ignores harvest now, decrypt later. The threat isn’t that your VPN traffic gets broken today, it’s that it gets recorded today and broken whenever a capable quantum computer eventually exists. The earlier your VPN upgrades, the less of your past traffic is exposed to that eventual risk.</p>
      </div>
    </details>
    <details class="faq-accordion-item" style="border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC; overflow: hidden; padding: 10px 14px; transition: all 0.2s ease;">
      <summary class="faq-accordion-summary" style="font-weight: 600; color: #0F172A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; font-size: 1rem;">
        <span>A post-quantum VPN will be noticeably slower.</span>
        <span class="faq-icon" style="color: #DA291C; font-size: 1.05rem; font-weight: bold; margin-left: 10px;">+</span>
      </summary>
      <div class="faq-accordion-content" style="padding-top: 8px; color: #334155; font-size: 0.95rem; line-height: 1.6;">
        <p style="margin: 0;">This was closer to true with early, experimental post-quantum algorithms, which sometimes had unwieldy key sizes. The NIST-standardized algorithms, particularly ML-KEM, are efficient enough that the added handshake overhead, a few extra kilobytes, a few milliseconds, is basically invisible during normal use. Your video call, your browsing, your downloads all run at the same speed once the handshake completes.</p>
      </div>
    </details>
    <details class="faq-accordion-item" style="border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC; overflow: hidden; padding: 10px 14px; transition: all 0.2s ease;">
      <summary class="faq-accordion-summary" style="font-weight: 600; color: #0F172A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; font-size: 1rem;">
        <span>If quantum computers can break my VPN's handshake, they can break everything about my privacy.</span>
        <span class="faq-icon" style="color: #DA291C; font-size: 1.05rem; font-weight: bold; margin-left: 10px;">+</span>
      </summary>
      <div class="faq-accordion-content" style="padding-top: 8px; color: #334155; font-size: 0.95rem; line-height: 1.6;">
        <p style="margin: 0;">Not quite. A broken handshake means an attacker with a future quantum computer could recover the session key for connections made before your VPN upgraded. It doesn’t retroactively unmask your identity if your provider had a strict no-logs policy, and it doesn’t affect encryption that never depended on the vulnerable math in the first place, such as the AES-256 bulk cipher.</p>
      </div>
    </details>
    <details class="faq-accordion-item" style="border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC; overflow: hidden; padding: 10px 14px; transition: all 0.2s ease;">
      <summary class="faq-accordion-summary" style="font-weight: 600; color: #0F172A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; font-size: 1rem;">
        <span>I have to manually turn on post-quantum mode.</span>
        <span class="faq-icon" style="color: #DA291C; font-size: 1.05rem; font-weight: bold; margin-left: 10px;">+</span>
      </summary>
      <div class="faq-accordion-content" style="padding-top: 8px; color: #334155; font-size: 0.95rem; line-height: 1.6;">
        <p style="margin: 0;">On a well-built modern VPN, no, it should be part of the default handshake for every connection, not a setting hidden three menus deep that most users will never find. If a provider requires you to dig through advanced settings to get post-quantum protection, most users won’t get the benefit.</p>
      </div>
    </details>
    <details class="faq-accordion-item" style="border: 1px solid #E2E8F0; border-radius: 8px; background: #F8FAFC; overflow: hidden; padding: 10px 14px; transition: all 0.2s ease;">
      <summary class="faq-accordion-summary" style="font-weight: 600; color: #0F172A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; font-size: 1rem;">
        <span>Post-quantum VPNs require special hardware or a faster device.</span>
        <span class="faq-icon" style="color: #DA291C; font-size: 1.05rem; font-weight: bold; margin-left: 10px;">+</span>
      </summary>
      <div class="faq-accordion-content" style="padding-top: 8px; color: #334155; font-size: 0.95rem; line-height: 1.6;">
        <p style="margin: 0;">They don’t. Post-quantum cryptography, despite the name, is pure software running on the same phones, laptops, and servers everyone already has. There’s no quantum hardware involved anywhere in the process, it’s new math, running on old-fashioned silicon.</p>
      </div>
    </details>
  </div>
</section>

<section id="wrapping-it-up" class="wrap-up-box wrapping-lightbox" style="margin-top: 36px; margin-bottom: 24px; padding: 28px; background: #FFF5F5; border: 1.5px solid rgba(218, 41, 28, 0.25); border-left: 5px solid #DA291C; border-radius: 8px;">
  <h2 style="font-size: 1.75rem; font-weight: 800; margin: 0 0 12px 0; color: #DA291C !important; border: none !important; padding-bottom: 0 !important; text-align: center !important; font-family: 'Lato', sans-serif !important;">Wrapping It Up</h2>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #1E293B; margin-bottom: 12px;">
    Navigating <strong>What Is a Post-Quantum VPN and Why Do You Need One?</strong> effectively requires choosing security architectures built on transparency, strong encryption, and verified zero data logging.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.75; color: #1E293B; margin-bottom: 0;">
    With OllaVPN, you get post-quantum protected WireGuard tunneling, default-on kill switch defense, and in-tunnel DNS resolution to ensure your internet connection stays completely private across every network.
  </p>
</section>
