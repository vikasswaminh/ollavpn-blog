---
title: 'What is Split Tunneling and Why Should You Care?'
description: 'Split tunneling is a clever feature that lets you decide which internet traffic uses your VPN''s secure tunnel and which goes directly to the internet. It''s like having two separate pathways for your online activi...'
pubDate: 2026-06-09
author: 'OllaVPN Team'
tags: ['beginner-basics']
---

2026 · 07 · 15 · PRIVACY & SECURITY · 5,204 WORDS

# What is Split Tunneling and Why Should You Care?

You've probably heard that a VPN encrypts all your internet traffic, but what if you don't want everything to go through the VPN? Sometimes, you need to access local network resources while protecting your browsing, or maybe you want to stream international content without slowing down your local downloads. That's where split tunneling comes in. It's a clever feature that gives you fine-grained control over which apps or websites use your VPN and which don't, offering a balance between security and convenience. We'll break down how it works and why you might want it.

TL;DR - The Short Answer

Split tunneling is a clever feature that lets you decide which internet traffic uses your VPN's secure tunnel and which goes directly to the internet. It's like having two separate pathways for your online activity, giving you a lot more control over your connection.

This is super handy for a few reasons. You can keep your sensitive browsing or streaming private and encrypted through OllaVPN, while allowing other apps to connect directly at full local speed. This helps you balance security with convenience, especially if you need to access local network devices or services that might be blocked by a VPN.

OllaVPN offers split tunneling so you can customize exactly what you protect. While our free plan already gives you a solid 10 Mbps for everything you need, split tunneling lets you fine-tune your setup even further, ensuring you get the best performance for every online task without compromising your privacy with OllaVPN.

## What exactly is split tunneling?

Split tunneling is a VPN feature that lets you choose which of your internet traffic goes through the encrypted VPN tunnel and which connects directly to the internet.

It's essentially a form of **selective routing** for your online activity. Normally, when you connect to a VPN like OllaVPN, all your internet traffic - every single byte - travels through a secure, encrypted tunnel to a VPN server before heading out to the web. This is great for privacy and security, as it hides your IP address and encrypts your data from your device all the way to our servers. But sometimes, you don't need or want all your traffic to go through the VPN. Maybe you're streaming content from a service that performs better with a direct internet connection, or perhaps you're accessing a local network device (like a printer or a network-attached storage drive) that can only be reached if your traffic stays on your **local network**. Split tunneling gives you the flexibility to decide. You can tell specific applications or websites to use the VPN, while others bypass it entirely and use your regular **direct internet connection**. This means you can enjoy the privacy and security benefits of OllaVPN for your sensitive browsing, while simultaneously performing activities that require your real IP address or higher speeds, all without constantly connecting and disconnecting from your VPN. It's about giving you more control over your digital footprint and optimizing your internet usage for different needs.

## How does split tunneling actually work under the hood?

Split tunneling works by intelligently directing some of your device's internet traffic through the VPN and letting other traffic bypass it, based on rules you set.

Think of it like having two different doors for your internet data. Normally, all your data goes through one door. When you use a VPN, all that data goes through the secure VPN door. Split tunneling gives you the option to send some specific data through a different, regular internet door.

Under the hood, your **VPN client** is making changes to your device's **IP routing table**. This table is like a set of instructions for your operating system, telling it where to send different types of internet traffic. When you enable split tunneling, the VPN client modifies these instructions. For example, with **application-based** split tunneling, the routing table might say, "Send all traffic from this specific app to the VPN," while letting everything else go directly to the internet. Or, with **IP-based** split tunneling, it might direct traffic for certain website IP addresses through the VPN.

Essentially, the VPN client is creating exceptions. Instead of routing _all_ your internet connections through the VPN tunnel, it's selectively choosing which ones get the VPN treatment and which ones don't. This can be super useful for managing bandwidth, accessing local network resources while staying secure online, or using services that might block VPN connections. It's all about giving you fine-grained control over your network traffic at a **device-level**.

## Why should you care about split tunneling for your daily internet use?

Split tunneling lets you decide which apps use the VPN and which connect directly, giving you more control over speed, privacy, and access.

It's all about simultaneous access without compromise. Think about it: you might want the privacy of a VPN for your general browsing or downloading, but you don't necessarily need it for everything. Maybe you're streaming content from a service that automatically logs you out if your IP address changes, or you're trying to access your local network devices like printers. That's where split tunneling shines, letting you use the VPN only when and where you need it. This feature offers a lot of practical benefits for your daily internet use, especially for things like online gaming where every millisecond counts, or when you need to access secure sites like bank websites that might flag VPN connections as suspicious. By routing only specific traffic through the VPN, you get the privacy on demand you want without slowing down other applications that don't need that extra layer of encryption. It's essentially a form of speed optimization, ensuring that non-VPN traffic runs at your full, unencrypted internet speed. So, while your torrent client might be happily anonymous through OllaVPN, your video call or your connection to a local printer can bypass the VPN entirely, ensuring smooth performance and hassle-free access. It means you don't have to constantly connect and disconnect your VPN based on what you're doing. You set it once, and it intelligently handles your traffic, giving you both security and convenience.

## Are there common misunderstandings about split tunneling?

Yes, many people misunderstand how split tunneling works and its security implications.

One of the biggest misconceptions is that split tunneling offers the same **full protection** as routing all your traffic through the VPN. It doesn't. When you use split tunneling, only the apps or websites you select go through the VPN. The rest of your internet activity is exposed to your ISP and anyone else who might be monitoring your regular connection. This means you're trading some privacy and security for convenience, and it's essential to understand that compromise. Another common misunderstanding revolves around **security risks**. Some users assume that if \*some\* traffic is encrypted, then their overall connection is secure. However, unencrypted traffic is still vulnerable. This can lead to issues like **DNS leaks** if your non-VPN traffic inadvertently uses your ISP's DNS servers, potentially revealing your browsing habits. Also, if you're relying on the VPN for anonymity, split tunneling can create a "side door" that links your real IP address to some of your online activities. Finally, people often confuse split tunneling with other VPN features. It's not the same as a [kill switch](/features/kill-switch), which is designed to block \*all\* internet traffic if your VPN connection drops, ensuring no data leaks out unencrypted. Split tunneling, by design, allows some traffic to bypass the VPN. While useful for specific scenarios like accessing local network resources while torrenting, it's crucial to remember that it means not **all traffic is encrypted**, and you're intentionally creating two separate routes for your data.

## How does split tunneling relate to your overall internet privacy?

Split tunneling can enhance your internet privacy by giving you granular control over which traffic uses VPN encryption and which doesn't, allowing for a more tailored approach to security and anonymity.

Split tunneling is a tool that helps you manage your privacy by letting you decide what data goes through the VPN. Think of it like having two separate doors for your internet traffic: one that leads through the secure, encrypted tunnel of your VPN, and another that goes directly to the internet. This can be really useful for specific situations. For example, you might want your banking app to always use your home IP address directly for security reasons, while everything else goes through the VPN for [IP address masking](/blog/ip-address-masking) and general [anonymity](/blog/online-anonymity). While split tunneling offers flexibility, it's important to understand its place within your overall privacy strategy. It's a feature, not a complete privacy solution on its own. For instance, if you choose to route certain apps outside the VPN, they won't benefit from the VPN encryption, meaning your internet service provider (ISP) can still see that traffic. This is a trade-off between convenience and comprehensive privacy. The core of your privacy with a VPN still comes from its fundamental features: strong VPN encryption, a strict no-data-logging policy (meaning the VPN provider doesn't keep records of your online activity), and effective IP address masking. Split tunneling works alongside these to optimize your experience. It helps you avoid unnecessary slowdowns on apps that don't need VPN protection, or ensures certain services continue to work as expected without triggering geo-restrictions or security alerts. It's about fine-tuning your privacy settings to match your specific needs, rather than a blanket "all or nothing" approach, which can sometimes be too restrictive. It won't directly stop things like ad tracking or sophisticated digital fingerprinting, but by keeping sensitive traffic within the VPN, you reduce the surface area for those tactics.

## When should you use split tunneling, and when can you ignore it?

You should use split tunneling when you need to send some internet traffic through the VPN while allowing other traffic to bypass it, mainly for performance or accessing local network resources.

Split tunneling is super handy when you want the security of a VPN for certain things, but don't need or want it for everything else. For example, if you're working with **sensitive data**, you absolutely want that protected by the VPN, especially on **public Wi-Fi**. But maybe you're also streaming a show from a local service that doesn't need to go through the VPN, or playing a game where every millisecond of latency counts. Pushing all that data through the VPN unnecessarily can slow things down. It's also great for accessing **geo-restricted content**. You can route your streaming app through a VPN server in another country to unlock content, while your banking app or other local services connect directly as usual. This way, you get the best of both worlds without constantly turning your VPN on and off. For **performance-critical applications** like online gaming or large downloads, skipping the VPN tunnel can significantly reduce latency and increase speeds for those specific apps. However, if your primary goal is maximum privacy and security for \*all\* your online activity, then you should just stick to **full tunnel mode**. This means everything goes through the VPN, leaving no stone unturned. If you're not dealing with specific apps that need local access or don't require the absolute fastest connection for certain tasks, split tunneling just adds a layer of complexity you don't really need.

## How do good VPNs implement split tunneling for you?

Good VPNs integrate split tunneling directly into their client software, offering intuitive controls to route specific apps or websites either through or around the VPN.

When you choose a quality VPN, split tunneling isn't some obscure setting you have to dig for. It's usually a clearly labeled feature within the **VPN client software** itself. You'll find options presented through a user-friendly interface, often with toggles or simple lists, allowing you to decide exactly which parts of your internet traffic go through the encrypted tunnel and which connect directly. This ease of use is crucial, because if it's too complicated, most people won't bother with it, defeating the purpose of offering the feature in the first place. Most implementations let you set **application-specific rules**. This means you can tell the VPN, for example, to send your browser traffic through the VPN for privacy, but let your online game connect directly to avoid potential latency issues. Some even offer **website exclusions**, so you can specify certain domains that should always bypass the VPN, which is handy for services that might block VPN connections, like some banking sites or streaming platforms. The goal is to give you granular control without making you feel like you need an IT degree to configure it. Reputable VPNs also tend to have sensible **default settings** for split tunneling, often with the option to either "include" or "exclude" based on your primary usage. This means you can choose to only send certain apps through the VPN, or send everything through \*except\* a few specific ones. This flexibility ensures that the feature is genuinely useful and not just a checkbox on a features list. It's all about making your online experience smoother while maintaining your privacy where it matters most.

## What practical steps can you take based on this knowledge?

You can immediately review your existing VPN settings, test your setup, and adopt more secure browsing habits.

Once you understand what split tunneling does, the first step is to \*\*check your VPN settings\*\*. See if your current VPN offers split tunneling and, if so, how it's configured. Many VPNs default to full tunnel mode, meaning all your traffic goes through the VPN. If you're encountering issues with certain apps or services not working, or if you simply want to optimize performance for specific tasks, adjusting these settings might be exactly what you need. Next, it's crucial to \*\*test your setup\*\*. Don't just assume it's working as intended. Use a tool like our [IP address checker](/ip-check) to confirm which IP address different applications are using. For example, if you've set an app to bypass the VPN, check its IP to ensure it's showing your real one, not the VPN's. This quick verification can save you a lot of headaches later on and confirm your split tunneling rules are correctly applied. Beyond just configuring your VPN, think about adopting more \*\*secure browsing habits\*\* in general. If you're using split tunneling to access specific services directly, make sure you're not inadvertently exposing sensitive activities. For instance, if you're using browser extensions for some tasks outside the VPN, ensure those extensions are trustworthy and not tracking your activity. Remember, the goal is to balance convenience with privacy and security.

## What's the difference between split tunneling and a full VPN tunnel?

A full VPN tunnel routes all your internet traffic through the VPN, while split tunneling lets you choose which apps or websites use the VPN and which connect directly.

When you connect to a VPN, the default behavior is usually a **full VPN tunnel**. This means every single bit of data leaving or entering your device  -  from your web browser to your email client, to background operating system updates  -  passes through the encrypted VPN server. The main advantage here is maximum privacy and security: all your traffic is encrypted, and your real IP address is hidden for all online activity. The downside is that it can sometimes impact performance for certain services, and you might not want every single app to use the VPN. This is where **split tunneling** comes in. Instead of forcing all traffic through the VPN, it gives you granular control. You can pick and choose which applications or even specific websites will use the VPN tunnel, while others go directly to the internet. For example, you might want your streaming app to connect directly for better speeds, while your web browser and torrent client use the VPN for privacy. This offers a great balance of security vs. flexibility, allowing you to optimize for both privacy and performance where it matters most to you. The performance impact of a full tunnel is usually negligible for most everyday tasks, especially on OllaVPN's free 10 Mbps plan, which is plenty for HD streaming and browsing. However, if you're doing something very bandwidth-intensive that doesn't require VPN privacy, split tunneling can help by freeing up that traffic from the VPN overhead. OllaVPN doesn't currently offer split tunneling, focusing instead on robust full-tunnel privacy, but it's a feature we understand users find valuable.

## Does split tunneling introduce any security risks?

Yes, split tunneling can introduce security risks if not configured carefully, as it exposes some of your traffic directly to the internet.

When you use split tunneling, you're essentially deciding which applications or websites go through the VPN's encrypted tunnel and which don't. The main security implication is that any traffic you route outside the VPN tunnel is unprotected traffic. This means it's sent directly from your device to its destination without the encryption, IP address masking, or other protections a VPN provides. This could potentially lead to [IP address leaks](/blog/ip-address-leaks) for that specific traffic, making you identifiable to third parties.

Consider your personal [threat model](/blog/what-is-a-threat-model) when deciding to use split tunneling. For instance, if you're using it to access local network resources while browsing the internet securely, the risk might be minimal. However, if you're trying to hide your browsing activity for specific sites while leaving other apps exposed, you open yourself up to potential vulnerabilities. An attacker could potentially exploit unprotected connections or expose you to malware exposure if you're not careful about the apps you exclude from the VPN tunnel.

So, while split tunneling offers convenience and can improve performance for certain tasks, it requires careful configuration. Always make sure you understand exactly what traffic is being routed outside the VPN. If you're ever unsure, it's generally safer to route all your traffic through the VPN to ensure maximum protection. OllaVPN doesn't currently offer split tunneling, prioritizing maximum privacy and security by default.

## How does OllaVPN handle split tunneling specifically?

OllaVPN offers robust split tunneling through its desktop client, allowing you to choose which apps use the VPN and which bypass it.

We know that sometimes you need the privacy and security of a VPN for certain tasks, while other applications work better directly through your regular internet connection. That's why the OllaVPN client includes built-in, user-friendly controls for split tunneling. You can easily select specific applications to route their traffic through our secure, post-quantum-ready encrypted tunnel, while everything else goes through your normal internet connection. This means you can, for instance, secure your browser traffic while keeping your online gaming ping low by having it bypass the VPN. This feature is available to all users, whether you're on our free plan or have upgraded to Plus. On the free plan, you'll still get our solid 10 Mbps speed for your chosen VPN-routed apps, with no data caps and absolutely no logs of your activity. If you need more speed for multiple applications or heavier use, our Plus plan boosts you to 10 Gbps across five devices, giving you even more flexibility with your split tunneling choices. Our approach to split tunneling is designed to give you maximum control without compromising your privacy or making things overly complicated. It's about giving you the tools to manage your digital footprint effectively, ensuring that OllaVPN works the way you need it to for every scenario.

## A broader-context closing thought

One pattern we've noticed across every privacy-and-networking topic we cover: the gap between what most users believe about a given topic and what the technical reality is keeps widening. Marketing departments have gotten better at producing confident-sounding claims; the underlying technology has gotten more complex; the threats have gotten more sophisticated; and the time most users have to evaluate any single claim has, if anything, gotten shorter. The result is that confident-sounding wrongness has a structural advantage over carefully-hedged correctness.

The remedy we've settled on is to publish at depth  -  long enough to cover the topic honestly, with primary sources and named authors and explicit limits  -  and to publish free verification tools so the reader does not have to take our word for the technical claims. Both are choices that don't optimise for "users who skim and click." They optimise for users who actually want to understand what they're using.

If you've read this far, you're in the second group. That's the group we're writing for, and it's the group whose privacy outcomes most depend on having access to honest information. We try to keep this material updated quarterly so the facts don't drift, and we add notes when something material changes (a competitor's audit completes, a new threat is documented, a piece of regulation shifts the calculus). The [main free-VPN comparison](/best-free-vpn-2026), the [technology overview](/technology), and the [free privacy tools](/tools/) are the three pages most worth bookmarking from the OllaVPN site if you've found this guide useful.

## Verify and cross-reference

For any claim on this page that affects a decision you're about to make, the verification path we recommend:

**Verify the technical claim from your own device.** Our [DNS lookup](/dns-lookup), [WebRTC leak test](/webrtc-leak-test), [what-is-my-IP](/what-is-my-ip), and the other tools at [our tools page](/tools/) are free, require no account, and run entirely in your browser. Most claims about VPN behavior can be verified from your own device in under fifteen minutes using these tools.

**Cross-reference at least one third-party source.** We are an operator with a commercial interest in the conclusion. The most reputable independent voices in the privacy-VPN category in 2026 are Mullvad's blog (technical depth without sales pressure because they don't run affiliate programs), the Privacy Guides project documentation, the Restore Privacy site, and the academic literature on consumer VPN security (the canonical paper is Ikram et al. 2016, "An Analysis of the Privacy and Security Risks of Android VPN Permission-enabled Apps," in ACM IMC). Read across multiple sources before forming a strong view.

**Read the primary sources where they exist.** Government regulations, NIST publications, IETF RFCs, and court rulings are primary sources. Vendor marketing pages and most commentary pieces are derivatives. When a claim is specific enough to have a primary source (a specific regulation, a specific standard, a specific court case), find the primary source and read it yourself rather than relying on summaries.

**Update your view when the facts update.** Privacy concerns shift, operators change, standards evolve. The view you formed two years ago about a specific operator may not be accurate today. We refresh our material quarterly; the operators worth trusting most are the ones who do the same.

## Deeper context worth knowing

A definitional explainer should leave you understanding not just the concept but the surrounding category  -  what other concepts it connects to, what common misunderstandings to avoid, and which adjacent ideas you should know about. A few worth covering:

**The category history matters.** Most networking and privacy concepts you encounter today were invented to solve a specific problem that may or may not still be the dominant problem in 2026. Understanding why a concept exists helps you evaluate whether it's the right tool for your situation. We try to include the historical context for every "what is X" guide we publish.

**The standards-body work matters.** Many privacy and networking concepts have a corresponding RFC, NIST publication, or IETF draft that defines them rigorously. The standard is the canonical source; vendor marketing pages and Wikipedia summaries are derivatives. When in doubt, find the standard.

**The threat model matters.** The same concept can be a strong defense against one class of threat and useless against another. "Encrypted" doesn't mean "private" if the recipient is the threat actor. "Anonymized" doesn't mean "unlinkable" if you have enough side data. We try to be specific about what each property actually defends.

## How this connects to OllaVPN specifically

If you've read this far, you probably want to know how the concept applies to OllaVPN's product. The short version:

**If the concept above is something a VPN should provide** (no-logs, kill switch, in-tunnel DNS, peer isolation, post-quantum cryptography), OllaVPN ships it by default on the free tier. The cryptographic stack uses WireGuard with a hybrid X25519 + ML-KEM-768 handshake; the kill switch is enforced at the OS firewall layer (Windows Filtering Platform on Windows, Packet Filter on macOS, VpnService.setBlockingMode on Android); DNS goes to an in-tunnel unbound resolver with the OS DNS path firewall-blocked; peer isolation is enforced in four independent layers including an automated end-to-end test. Read the [technology page](/technology) for the complete architecture.

**If the concept above is something only a VPN partially helps with** (anonymity, censorship circumvention, streaming geo-unblock), OllaVPN does what a privacy VPN can do but the underlying limits of the category apply. We don't oversell capabilities we don't have. The [best free VPN 2026 guide](/best-free-vpn-2026) covers what's realistic to expect from a free VPN versus what requires a paid tier or a different category of tool entirely.

**If the concept above is something a VPN doesn't help with at all** (application-layer tracking, account-based identity, malware on your device, source-anonymity against a global passive adversary), we say so. A VPN replaces the ISP in the traffic-visibility role; it does not stop websites from tracking you, does not stop your accounts from identifying you, does not stop malware already on your device, and is not Tor. Use the right tool for each layer of the threat model.

## About this guide

Maintained by [Nathan Pratt](/about/team#nathan-pratt), OllaVPN's Privacy & Security Lead. Fact-checked by [Hannah Wu](/about/team#hannah-wu), Senior Security Engineer. We refresh this post quarterly so its facts, recommendations, and competitor comparisons stay accurate as the category evolves. The last full re-evaluation was 23 June 2026; the next is scheduled for September 2026.

If you spot a fact that's drifted or an addition we should make, email `[[email protected]](/cdn-cgi/l/email-protection)`. Reader corrections drive a meaningful percentage of our quarterly updates.

⭐ Key takeaways

## What to remember from this guide

*   What exactly is split tunneling?
*   How does split tunneling actually work under the hood?
*   Why should you care about split tunneling for your daily internet use?
*   Are there common misunderstandings about split tunneling?
*   How does split tunneling relate to your overall internet privacy?

## Frequently asked questions

### What is split tunneling in one sentence?

It's a VPN feature that lets you pick and choose which of your apps or websites use the encrypted VPN tunnel and which connect directly to the internet, giving you more control over your traffic flow.

### Why should I care about using split tunneling?

You should care because it's a great way to balance security and speed. You can protect your sensitive data through the VPN while allowing other apps, like local streaming services or network printers, to run directly and quickly, without interruption.

### Is it dangerous to ignore split tunneling options?

Not directly, but ignoring it means all your internet traffic goes through the VPN. This can slow down activities that don't need VPN protection, like accessing local network devices, and might even prevent some apps from working correctly. It’s mostly about optimizing your experience.

### How does a VPN relate to split tunneling?

Split tunneling is a feature that many VPN services offer. It's built into the VPN client to give you more control over how your internet traffic is routed – whether it's encrypted and sent through the VPN, or sent directly to the internet.

### Do I need a VPN to deal with split tunneling?

Yes, you absolutely need a VPN to use split tunneling. It's a function that's part of your VPN client software. Without a VPN actively running, all your internet traffic goes directly to the internet by default, so there's nothing to 'split'.

### Can a free VPN handle split tunneling properly?

Some ad-funded free VPNs might offer it, but you'll want to carefully check their privacy policies. OllaVPN's free plan includes split tunneling, and we don't log your data or sell it, ever. We cap speed at 10 Mbps, not data, so you get full control.

### How can I check whether I'm protected by split tunneling?

You can check your VPN client's settings for an option like 'split tunneling' or 'app exclusion.' Once you've configured it, test by trying to access a local network resource directly while ensuring your browser (routed through the VPN) shows a different IP address.

### Are there free tools to test if split tunneling is working correctly?

Yes, there are. You can use online IP address checkers, like searching "what is my IP" in your browser, to see if the IP changes for apps you've routed through the VPN, while remaining your local IP for those you've excluded.

### Does split tunneling still matter for privacy in 2026?

Absolutely! As our online lives get more complex, being able to selectively encrypt traffic is super important for balancing privacy, performance, and access to local services. It helps you control exactly what information goes through the VPN, so it's here to stay.

### What's the simplest fix if I want to use split tunneling?

The simplest fix is to use a reputable VPN service that offers an easy-to-use split tunneling feature directly in its client. This allows you to quickly select which applications should use the VPN and which should bypass it, often with just a few clicks.

### Are there situations where split tunneling doesn't apply?

Yes, if your goal is to have all your internet traffic fully encrypted and routed through the VPN for maximum security and privacy, then split tunneling wouldn't apply. In that case, you'd want to use the full VPN tunnel for everything.

### How does OllaVPN handle split tunneling specifically?

OllaVPN's client lets you easily configure split tunneling, so you can decide which applications bypass the VPN tunnel. This feature is available on both our 10 Mbps free plan and the 10 Gbps Plus plan, ensuring you have granular control over your traffic.

✉ Get the next one

### Honest writeups, every two weeks.

Nathan posts one deep-dive every two weeks. No spam, no sales blasts, no clickbait headlines.

 Subscribe

No card. Unsubscribe with one click.

Share Copy link [X](https://twitter.com/intent/tweet?text=What%20is%20Split%20Tunneling%20and%20Why%20Should%20You%20Care%3F&url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-is-split-tunneling) [LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-is-split-tunneling) [HN](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-is-split-tunneling&t=What%20is%20Split%20Tunneling%20and%20Why%20Should%20You%20Care%3F) [Reddit](https://www.reddit.com/submit?url=https%3A%2F%2Follavpn.com%2Fblog%2Fwhat-is-split-tunneling&title=What%20is%20Split%20Tunneling%20and%20Why%20Should%20You%20Care%3F)


NP

Nathan Pratt

Privacy & Security Lead

Nathan covers privacy engineering, post-quantum cryptography, and the policy + technical layers of consumer VPN security. Eight years at Mozilla and Cloudflare before joining OllaVPN.

[More from Nathan →](/about/team#nathan-pratt)
