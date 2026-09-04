---
title: 'What Logs Does a VPN Keep, and What Does That Really Mean for Your Privacy?'
description: 'When a VPN says "no logs," what does that actually mean? It''s simple: it means they don''t record anything that can identify you or your online activities. That includes your IP address, connection times, ...'
pubDate: 2026-06-09
author: 'OllaVPN Team'
tags: ['privacy-security']
---

2026 · 07 · 15 · PRIVACY & SECURITY · 5,111 WORDS

# What Logs Does a VPN Keep, and What Does That Really Mean for Your Privacy?

You've likely heard the term "no-logs policy" thrown around a lot when it comes to VPNs. It's a major selling point, but what does it actually mean for your privacy? And, more importantly, what can a VPN \*really\* log, and what does that imply for your online security? We're going to cut through the marketing jargon and give you the straightforward, technical reality of VPN logging, what governments and ISPs can see, and how to tell if a VPN's claims are truly protecting you.

TL;DR - The Short Answer

When a VPN says "no logs," what does that actually mean? It's simple: it means they don't record anything that can identify you or your online activities. That includes your IP address, connection times, how much data you use, or what sites you visit. Anything less than that isn't truly a no-logs VPN, and that's an important distinction.

While a VPN encrypts your traffic from your ISP or government, they can still see that you're using a VPN. The real privacy risk often comes from the VPN provider itself. If they keep logs, that data could be compromised or legally compelled, exposing your private information. This is why a genuine no-logs policy is so crucial.

OllaVPN holds itself to this standard. Whether you're on our free 10 Mbps plan or OllaVPN Plus, we don't log anything that could identify you. Our post-quantum-ready encryption means your data is secure not just today, but against future threats, making logging a non-issue for your privacy. It's truly $0 forever, with no card required, and no compromises on your privacy.

## What does "VPN logs" mean in plain English?

"VPN logs" refers to any information a VPN provider stores about your usage of their service, ranging from harmless technical data to sensitive details about your online activity.

When you connect to a VPN, there's always some information exchanged between your device and the VPN server. What a VPN provider chooses to record, and for how long, is what we mean by "logs." Think of it like a phone call: the phone company always knows you called someone and for how long (that's connection data), but they don't usually record what you actually said (that would be activity data). There are generally two types of logs to consider. **Connection logs** are usually benign. This might include things like the time you connected, the amount of data transferred, or the server you used. This kind of data helps the VPN run smoothly, diagnose issues, and ensure fair use of resources. It doesn't usually reveal what you're doing online, and if it's not tied to any **personally identifiable information**, it's generally not a privacy concern. Many honest-loss-leader free VPNs, like OllaVPN, keep minimal, anonymized connection data for operational purposes, but never linked to you. The real privacy concern comes with **activity logs**. These are records of \*what\* you do while connected: the websites you visit, the apps you use, your search queries, or the files you download. This is often called "traffic logs" or "usage logs." Some ad-funded free VPNs collect this kind of sensitive data, often to build profiles for targeted advertising or even sell to third parties. They might also log your real IP address and link it to your activity, completely defeating the purpose of a VPN. At OllaVPN, we have a strict no-logs policy when it comes to any activity that could compromise your privacy. We don't want to know what you're doing, and we certainly don't record it. Even basic **metadata** that could identify you is purged.

## What's the actual technical reality of what a VPN \*could\* log?

A VPN server can technically record a surprising amount of information about your activity, from your connection times to the websites you visit.

When you connect to any VPN, your traffic goes through their servers. Because of this, the VPN provider \*could\* technically see quite a bit. At a basic level, they can see your original \*\*IP address\*\* when you connect, the \*\*timestamps\*\* of when you connect and disconnect, and how much \*\*bandwidth\*\* you use. This is often called "connection logs" or "metadata," and even some "no-log" VPNs might keep this type of data for operational purposes, like managing server load or preventing abuse. The key is \*why\* they keep it and \*for how long\*. Beyond that, a VPN could also log the specific websites you visit. Every time you type a website into your browser, your computer sends a \*\*DNS query\*\* to translate that human-readable address (like ollavpn.com) into an IP address. If the VPN handles these DNS requests, they technically could log every site you visit. Some less scrupulous free VPNs, especially the ad-funded ones, might even log this \*\*session data\*\* to build profiles on users, which they then sell to advertisers. That's a direct betrayal of the privacy you expect from a VPN. For OllaVPN, our commitment is to collect absolutely nothing that could identify you or your activity. We don't log your original IP, we don't log timestamps, we don't log DNS queries, and we certainly don't log the content of your traffic. Our architecture, which uses the modern \*\*WireGuard\*\* protocol, is designed to minimize the data available to us in the first place, and what little operational data we do see is immediately discarded. We fund our free tier through our paid Plus subscribers, so we have no incentive to compromise your privacy by logging and selling your data.

## What can governments and ISPs see when you use a VPN?

When you use a VPN, your ISP and government can see that you're connected to a VPN server and how much data you're using, but they can't see your online activity or the specific websites you visit.

Think of a VPN as creating a secure, encrypted tunnel from your device to a server run by us, OllaVPN. Your internet service provider (ISP) and any government agency monitoring their network can see that you've established this connection to our server. They know you're using a VPN, and they can see the IP address of that VPN server. They can also monitor the amount of data flowing through that tunnel – your traffic volume – which basically tells them how much you're using the internet, but not what you're doing with it. What they \*can't\* see is the actual content of your online activities. Because your connection is inside that encrypted tunnel, all your browsing, streaming, messaging, and downloads are scrambled. It's like sending a sealed, unbreakable package through the mail; the postal service knows a package was sent from you to our server, but they can't peek inside to see what's being delivered. This means they can't see which specific websites you're visiting, what you're searching for, or what you're saying in unencrypted communications. This distinction is key: **what's visible vs. what's hidden**. Your ISP and government can see the encrypted connection (the outer wrapper), but not the data itself (the contents). They also can't see your original IP address, as all your traffic appears to come from the IP address of our VPN server. It's also important to remember that a VPN doesn't magically encrypt everything. Services that use their own **end-to-end encryption**, like secure messaging apps, are already protected, but for everything else, a VPN adds that crucial layer of privacy at the network level, safeguarding your browsing habits and personal information from passive observation.

## How do VPN logging policies affect what you're protected from?

A VPN's logging policy directly determines how much anonymity and protection it can actually offer you.

Think of it this way: if a VPN keeps detailed records of your online activity, then they effectively become a central point of failure for your privacy. Even if they promise not to share it, that data still exists. This means that if their servers are compromised in a **data breach**, or if they face a legal demand like a **subpoena**, your private browsing history could be exposed. A true privacy-first VPN minimizes the data it collects so there's nothing meaningful to hand over or leak in the first place.

For us, a "no-logs" policy isn't just a marketing slogan; it's a fundamental part of how we protect you. We don't track your connections, the websites you visit, the data you transfer, or even the times you connect. The only information we hold is what's absolutely necessary to keep the service running – think basic account details if you're a [OllaVPN Plus](/plus) subscriber, not anything about your online behavior. This approach ensures a high degree of **anonymity** because there's no personal browsing data tied back to you on our end.

Some VPNs might claim "no logs" but still engage in extensive **data retention**, keeping connection timestamps or bandwidth usage for weeks or months. While this might seem harmless, it can still be used to identify users if combined with other data sets. Our philosophy is simpler: if we don't have it, we can't lose it, sell it, or be forced to give it away. This means that even under legal pressure, we literally have no user activity logs to provide, making your privacy much more robust.

## Which jurisdictional considerations actually matter for VPN logs?

The most important jurisdictional consideration for VPN logs is whether a country has mandatory data retention laws or is part of intelligence-sharing alliances like Five Eyes.

When you're choosing a VPN, where the company is legally based really matters. Some countries have strict **data retention laws** that force companies to store user data for a certain period, regardless of their own privacy policies. This means that even if a VPN advertises a "no-logs" policy, they might legally be required to keep some records if their country demands it. If a government can compel a company to log your activity, then their "no-logs" claims are pretty much moot.

Beyond specific data retention mandates, you also need to think about international intelligence alliances. You might have heard of the [Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes) (US, UK, Canada, Australia, New Zealand) or the broader [Fourteen Eyes](https://en.wikipedia.org/wiki/Fourteen_Eyes) agreements. These are nations that share intelligence with each other. If a VPN is based in one of these countries, even if they don't have direct data retention laws, there's a higher chance they could be pressured to cooperate with **legal requests** or even secret **warrants** from partner nations, potentially compromising your privacy. This doesn't mean they always will, but the legal framework makes it a possibility.

That's why OllaVPN is based in a privacy-friendly jurisdiction with no mandatory data retention laws and no ties to these intelligence alliances. Our [no-logs policy](/no-logs-policy) isn't just a marketing claim; it's reinforced by the legal environment we operate within. We couldn't be compelled to hand over data we don't even collect, and our jurisdiction means we're not under pressure from foreign governments to start collecting it either. It’s about building trust through transparency and strong legal foundations.

## What are the common myths about VPN logging, and what's actually true?

The biggest myths are that "no-logs" always means the same thing, and that a VPN makes you completely untraceable online.

One of the most common myths is the idea of **absolute anonymity** with a VPN. While a VPN significantly enhances your privacy by encrypting your traffic and masking your IP address, it doesn't make you completely invisible or untraceable. Your internet service provider (ISP) can still see that you're connected to a VPN server, and sophisticated trackers or state actors might still be able to correlate your online activity over time, especially if you're logged into personal accounts like Google or Facebook. A VPN is a powerful privacy tool, but it's part of a larger privacy strategy, not a magic bullet for total invisibility. Another big one revolves around "no-logs" claims. You'll see this phrase everywhere in VPN marketing, and while it's a good place to start, it's not always as straightforward as it sounds. The reality is that "no-logs" can mean different things to different providers. Some might not log your activity, but they might still collect connection logs (like timestamps or bandwidth usage) for network optimization or to enforce their terms of service. Others might have genuine, audited no-log policies. It’s crucial to look beyond the marketing claims and understand what a provider specifically means by "no-logs" and what data, if any, they \*do\* collect. Then there's the misconception that once you're connected to a VPN, all your privacy concerns are solved. Not directly. You can still experience issues like **DNS leaks**, where your DNS requests bypass the VPN tunnel and reveal your browsing activity to your ISP. Browser fingerprinting, cookies, and other tracking technologies also operate independently of your VPN. That's why OllaVPN includes features like in-tunnel DNS and a kill switch by default, but it's still important to practice good digital hygiene, like using privacy-focused browsers or extensions, to truly bolster your online privacy.

## How can you evaluate any VPN's claims around logging?

You can evaluate a VPN's logging claims by looking for independent audits, transparency reports, and a warrant canary, and by carefully reading their privacy policy and terms of service.

It's tough to truly know if a VPN is logging your data, because ultimately, you're trusting them. A VPN could tell you they don't log anything, but how would you ever really know? However, there are several things you can look for that build trust and demonstrate a VPN's commitment to privacy. The first and most important is a track record of \*\*independent audits\*\*. These are third-party security experts who comb through a VPN's code, infrastructure, and policies to verify their no-logs claims. If a VPN has nothing to hide, they'll usually pay for these audits and publish the results. Next, look for \*\*transparency reports\*\*. These reports detail requests for user data from governments or law enforcement. A truly no-logs VPN won't have any data to provide, so their transparency report should reflect that — often stating "zero user data provided" because there was nothing to hand over. Related to this is a \*\*warrant canary\*\*. This is a subtle, ongoing declaration that a VPN has \*not\* received any secret government demands for user data. If the canary suddenly disappears, it's a silent warning that they might have been compromised or compelled to log. Finally, always read the fine print. Dig into the VPN's \*\*privacy policy\*\* and \*\*terms of service\*\*. This is where they legally lay out what data they \*do\* collect (even if it's just anonymous connection data to maintain service quality) and what they \*don't\*. Be wary of vague language. A truly privacy-focused VPN will be explicit about what they collect and why, and crucially, what they absolutely do not log. At OllaVPN, we don't log your activity, period, and our business model (funded by Plus subscribers, not data sales) means we're never incentivized to do so.

## What does OllaVPN specifically do to address logging concerns?

OllaVPN is built from the ground up to collect no logs, funding its free service through paid subscriptions rather than data collection or advertising.

Our commitment to "no logs" means exactly that. We don't track your IP address, your connection timestamps, your browsing history, or the amount of data you use. We have no interest in what you do online. Our entire business model is built around providing a private internet connection, not around selling your data or serving you ads. You get $0 forever, no card, no email tracking, no ads, and absolutely no data sale.

We can maintain this strict [no-logs policy](/no-logs-policy) because of how we fund our service. Unlike many "free" VPNs that rely on shady data practices or intrusive advertising, OllaVPN's free tier is subsidized by our paid \*\*OllaVPN Plus\*\* subscribers. You get 10 Mbps free, with no data caps and no strings attached. If you need more speed for 4K streaming or very heavy downloads, our Plus plan offers 10 Gbps on five devices for just $2/month. This direct support from Plus users means we never have to compromise your privacy to keep the lights on for our free users.

Beyond our policy, we also employ technical safeguards. Our network is designed to minimize any transient data that might be generated, and we use advanced, post-quantum-ready encryption to protect your connection from even future threats. Our infrastructure is built to be stateless where possible, meaning there's simply no persistent information about your activities to log. It's a fundamental part of our architecture, not just a marketing claim.

## Is the free OllaVPN plan as private as the paid one?

Yes, the free OllaVPN plan offers the exact same privacy and security features as the paid Plus plan.

You might be used to other "free" VPNs that secretly log your data, inject ads, or cap your data to push you to a paid tier. That's not how we operate. Our commitment to privacy is absolute, whether you're using our free forever plan or you've upgraded to Plus. There's no compromise on privacy for free users. You get the same [post-quantum-ready encryption](/features), the same no-logs policy, the same secure protocols, and the same in-tunnel DNS. The only difference between the free and Plus plans is speed and the number of simultaneous connections. The free plan gives you 10 Mbps on one device, which is enough for most everyday tasks like streaming HD video, browsing, and video calls. If you need more speed or want to connect up to five devices, Plus bumps you up to 10 Gbps for just $2 a month. This \*\*speed cap\*\* is how we manage to keep the free plan genuinely free forever, without resorting to shady tactics. Our \*\*funding model\*\* is simple and transparent: Plus subscribers fund the entire network. This means we don't have to sell your data, run ads, or find other ways to monetize free users. You get full privacy, regardless of whether you pay or not. It's a key part of our mission to make strong privacy accessible to everyone.

## How does post-quantum encryption relate to logging?

Post-quantum encryption protects your past and present data from future decryption, making logs less valuable to an attacker who might try to "harvest now, decrypt later."

It's not directly about whether a VPN logs your activity, but rather about protecting your encrypted traffic from being decrypted by powerful computers in the future. Think of it this way: even if a malicious actor somehow recorded all of your VPN traffic today, they couldn't break OllaVPN's encryption with today's computers. However, quantum computers promise to change that, potentially making current encryption methods obsolete. This is where the concept of "harvest now, decrypt later" comes in – adversaries might store encrypted data today, betting on the ability to decrypt it years down the line with quantum machines. OllaVPN's [post-quantum-ready encryption](/post-quantum-encryption) is all about **future-proofing your privacy**. We use a hybrid handshake that combines classical and quantum-resistant algorithms, making your connection secure against both current and anticipated future threats. This means that even if someone were to capture your encrypted data packets and store them for decades, they still wouldn't be able to decrypt them once quantum computers become powerful enough to break traditional encryption. This commitment to **long-term security** significantly reduces the value of any theoretical logs an adversary might possess. Even if a VPN service were somehow compelled to log your connection metadata (which OllaVPN doesn't do, ever), the actual content of your communications remains unreadable and will stay that way. It's a core part of what makes OllaVPN's approach to privacy different and is a major [OllaVPN's differentiator](/why-ollavpn) in the VPN space. We're building for tomorrow's threats, today.

## What other features are important for privacy beyond a no-logs policy?

Beyond a no-logs policy, crucial privacy features include a kill switch, in-tunnel DNS, strong protocols like WireGuard, and robust peer isolation.

A no-logs policy is foundational, but it's only one piece of the privacy puzzle. You need to look for a VPN that builds privacy into its entire technical architecture. For instance, a reliable **kill switch** is non-negotiable. This feature instantly cuts your internet connection if the VPN unexpectedly drops, preventing your real IP address or unencrypted traffic from ever being exposed, even for a second.

Another vital component is **in-tunnel DNS**. When you type a website address, your computer asks a Domain Name System (DNS) server to translate that into an IP address. If your VPN doesn't handle this securely within its encrypted tunnel, your internet provider could still see which websites you're trying to visit, even if they can't see the content. OllaVPN ensures all your DNS requests are routed securely through the VPN tunnel, keeping that information private.

The underlying technology matters too. We use the **WireGuard protocol**, which is known for its modern cryptography, speed, and simplicity, making it easier to audit for security flaws compared to older, more complex protocols. And for those times when you're on a highly restrictive network, we also offer **QUIC** as an option to help bypass censorship. Finally, good **peer isolation** is essential. This means the VPN actively prevents other users on the same server from seeing or interfering with your traffic, adding another layer of security to your connection.

## Why this topic matters beyond the immediate question

The topic above sits at the intersection of several broader concerns that are worth understanding even if your immediate question has been answered:

**The privacy-tooling category has matured rapidly.** What was leading-edge in 2020 is table stakes in 2026. Standards have finalized (NIST PQC, RFC 9116 security disclosure, the IETF MASQUE work), jurisdictions have clarified (post-CERT-In, post-DSA, post-Investigatory Powers Act), and a clear trustworthy/untrustworthy line has emerged in the consumer VPN category specifically. Decisions you make today should reflect the 2026 state of the market, not the 2020 state.

**The threat landscape has shifted.** Bulk traffic capture by intelligence services is well-documented and continuous. The "harvest now, decrypt later" threat against captured-today-decrypted-tomorrow ciphertext is operational, not theoretical. ISP-level metadata sales to advertising data brokers are routine in the US. Geo-blocking and censorship are both more sophisticated and more widespread. The tools that defended you adequately five years ago may not be adequate now.

**The user has more power than ever — if they use it.** Strong free privacy tools exist in every category. The question is whether the user knows about them, knows how to verify they actually work, and is willing to take the small additional steps required. We try to make the verification path as short as possible because users who can verify are users who can choose well.

## What to actually do about it

If the topic above suggests you should take action, the practical next steps in priority order:

**Pick a trustworthy VPN and start using it by default.** Even on the free tier. The threat model on every internet-connected device benefits from VPN coverage, and a free VPN you can trust is materially better than no VPN. [Our best free VPN 2026 guide](/best-free-vpn-2026) compares the trustworthy options across platforms.

**Run a privacy-properties check on your current setup.** Even if you already use a VPN, run our [DNS lookup](/dns-lookup), [WebRTC leak test](/webrtc-leak-test), and [what-is-my-IP](/what-is-my-ip) tools while connected. The results tell you whether your current VPN is actually delivering the privacy properties it claims.

**Update your threat-model evaluation periodically.** Privacy concerns shift. The tools and operators that were appropriate three years ago may need re-evaluation now. Quarterly is a reasonable cadence for non-targeted users; monthly is appropriate if you're in a higher-risk situation.

**Combine layers.** No single tool covers the full threat surface. VPN + privacy-respecting browser + tracker blocker + password manager + virtual cards + careful account hygiene — together they're materially better than any one alone. Each layer is cheap (most are free); the compound effect is large.

## About this guide

Maintained by [Nathan Pratt](/about/team#nathan-pratt), OllaVPN's Privacy & Security Lead. Fact-checked by [Hannah Wu](/about/team#hannah-wu), Senior Security Engineer. We refresh this post quarterly so its facts, recommendations, and competitor comparisons stay accurate as the category evolves. The last full re-evaluation was 23 June 2026; the next is scheduled for September 2026.

If you spot a fact that's drifted or an addition we should make, email `[[email protected]](/cdn-cgi/l/email-protection)`. Reader corrections drive a meaningful percentage of our quarterly updates.

⭐ Key takeaways

## What to remember from this guide

*   What does &#34;VPN logs&#34; mean in plain English?
*   What&#39;s the actual technical reality of what a VPN \*could\* log?
*   What can governments and ISPs see when you use a VPN?
*   How do VPN logging policies affect what you&#39;re protected from?
*   Which jurisdictional considerations actually matter for VPN logs?

## Frequently asked questions

### Is using a VPN legal in my country?

Yes, for most places, using a VPN is perfectly legal. There are a few countries where it's restricted or illegal, but generally, if you're not doing anything illegal with it, you're fine. It's always a good idea to check your local laws, just in case, but for the vast majority of people, VPNs are a legal and ethical privacy tool.

### Can my ISP see what I do when I use a VPN?

Not directly. Your ISP can see that you're connected to a VPN server and how much data you're using, but they can't see the content of your encrypted traffic. They won't know what websites you visit, what you're downloading, or what you're doing online. That's the whole point of using a service like OllaVPN — to add a layer of privacy.

### Can the government track me if I use a VPN?

If your VPN keeps no identifiable logs, the government can't easily track your online activity through your VPN provider. They might know you're using a VPN, but not what you're doing inside the encrypted tunnel. OllaVPN's strict no-logs policy means there's simply no data to hand over, even if compelled, protecting your privacy from start to finish.

### What about Five Eyes or Fourteen Eyes countries and VPNs?

These alliances mean member countries share intelligence. While OllaVPN isn't based in one of those countries, a true no-logs policy makes the point moot. If there's nothing to log, there's nothing to share, even if compelled by law. Your data isn't logged, so it can't be handed over, regardless of jurisdiction or international agreements.

### Will using a VPN make me look suspicious?

Mostly not. Millions use VPNs every day for legitimate reasons like privacy, security, and accessing geo-restricted content. While some services might detect VPN usage, it rarely makes you inherently suspicious to authorities unless combined with other activities. Using a VPN is a common practice for everyday digital security.

### What if my VPN provider gets a legal subpoena for my data?

If your VPN provider truly keeps no logs that can identify you or your activity, then there's simply nothing for them to hand over, even with a subpoena. This is why a verifiable no-logs policy, like OllaVPN's, is so crucial. We can't give up what we don't have, ensuring your privacy remains intact.

### What logs does OllaVPN keep specifically?

OllaVPN keeps no logs that can identify you or your online activity. This means no connection timestamps, no IP addresses, no websites visited, and no bandwidth used. We're truly a no-logs VPN, for both our free and Plus users. Our business model, funded by Plus subscribers, doesn't rely on selling or tracking your data.

### How is a VPN different from Tor regarding logging and anonymity?

Both enhance privacy, but differently. Tor routes traffic through many relays for high anonymity, but it can be slower and isn't ideal for all uses. A VPN, like OllaVPN, encrypts your traffic directly to a server, offering a good balance of speed and privacy with a strict no-logs policy. They serve different, but often complementary, privacy needs.

### Are there situations where a VPN actually doesn't help with privacy?

Yes, but with caveats. If you log into services that already know who you are (like your email or social media), they'll still know it's you. A VPN hides your IP address and encrypts your connection, but it doesn't anonymize your personal identity if you actively give it away by logging into personal accounts or sharing information online.

### How can I verify a VPN's no-logs claim?

Look for independent third-party audits of their no-logs policy, transparency reports, and a clear, unambiguous privacy policy. Also, consider their business model; if it relies on ads or data, be wary. OllaVPN is funded by our Plus subscribers, not by selling your data, which helps us maintain our ironclad no-logs promise.

### Does post-quantum encryption matter for logging concerns?

Yes, it absolutely does for long-term privacy. Even if an adversary somehow collected your encrypted data now, post-quantum encryption, like what OllaVPN uses, makes it impossible for them to decrypt it later with future quantum computers. It future-proofs your privacy, ensuring your past communications remain private for decades to come.

### Is OllaVPN's free plan as private as the paid one?

Absolutely. Our free plan offers the exact same privacy and no-logs policy as OllaVPN Plus. The only difference is the speed – 10 Mbps for free, 10 Gbps for Plus. Your privacy isn't a premium feature for us; it's a fundamental right we provide to everyone, with no ads, no data selling, and no hidden catches.

✉ Get the next one

### Honest writeups, every two weeks.

Nathan posts one deep-dive every two weeks. No spam, no sales blasts, no clickbait headlines.

 Subscribe

No card. Unsubscribe with one click.

Share Copy link [X](https://twitter.com/intent/tweet?text=What%20Logs%20Does%20a%20VPN%20Keep%2C%20and%20What%20Does%20That%20Really%20Mean%20for%20Your%20Privacy%3F&url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-logs-does-vpn-keep) [LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-logs-does-vpn-keep) [HN](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-logs-does-vpn-keep&t=What%20Logs%20Does%20a%20VPN%20Keep%2C%20and%20What%20Does%20That%20Really%20Mean%20for%20Your%20Privacy%3F) [Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-logs-does-vpn-keep&title=What%20Logs%20Does%20a%20VPN%20Keep%2C%20and%20What%20Does%20That%20Really%20Mean%20for%20Your%20Privacy%3F)


NP

Nathan Pratt

Privacy & Security Lead

Nathan covers privacy engineering, post-quantum cryptography, and the policy + technical layers of consumer VPN security. Eight years at Mozilla and Cloudflare before joining OllaVPN.

[More from Nathan →](/about/team#nathan-pratt)
