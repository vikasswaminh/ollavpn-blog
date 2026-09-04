---
title: 'How Advertisers Track You Across the Internet (And How to Fight Back)'
description: 'The complete, plain-English guide to every method advertisers use to follow you around the web — third-party cookies, browser fingerprinting, pixel beacons, data brokers — and how to stop them.'
pubDate: 2026-06-10
author: 'OllaVPN Team'
tags: ['privacy-security']
---

2026 · 06 · 10 · PRIVACY GUIDE · 6,586 WORDS

# How Advertisers Track You Across the Internet (And How to Fight Back)

The complete, plain-English guide to every method advertisers use to follow you around the web - from third-party cookies and browser fingerprinting to pixel tracking and data brokers - and exactly what you can do to stop them.

TL;DR - The Short Answer

Try [OllaVPN free](/free-vpn) - no logs, no tracking, lifetime free plan. No credit card. Or $2/mo for 5 devices on a faster plan. [Download free →](/dl/) →

Every time you open a browser, you are being watched. Not by one company - by hundreds of them at the same time. The advertising industry has built one of the most advanced surveillance systems in human history, and it runs quietly underneath the websites you visit. This guide breaks down how it works: cookies, fingerprints, pixels, data brokers, ID graphs, and the server-side tricks that replaced older methods as privacy tools got better. Then it tells you, plainly and specifically, what you can do to fight back.

If you’ve ever searched for a pair of running shoes on Monday and found ads for that exact brand following you around on completely unrelated websites for the next two weeks - you’ve already seen ad tracking in its most obvious form. That’s retargeting, and it’s only one corner of a much larger system.

The advertising surveillance ecosystem is, in terms of sheer data collection, one of the most ambitious engineering projects ever built. It operates across millions of websites. It profiles billions of people. And for most users, it’s largely invisible - even after more than a decade of privacy regulation and browser changes. In many ways, it’s still growing.

This guide isn’t a rant against advertising. Ads pay for a lot of the free internet we use every day. But understanding how tracking works - in real, specific technical terms - is the only way to make genuinely informed choices about your own privacy. So let’s get into it.

## Why ad tracking is bigger than most people realize

QUICK ANSWER

The online advertising industry collects data not just to show you relevant ads, but to build detailed behavioral and psychographic profiles that are sold, shared, and used in ways you never agreed to. The scale isn’t ten or twenty trackers per website - it’s often hundreds. And the data can follow you for months or years.

Here’s a fact that changes how most people think about this: when you visit an average news website, you’re not interacting with one company. You’re interacting with a whole set of third parties. Research from Princeton’s WebTAP project and follow-up studies found that a typical major publisher loads between 70 and 200 distinct third-party tracking scripts in a single page load. Each script belongs to a different company. Each one records your behavior. And each one correlates what it sees with data it already collected about you on other websites.

This industry is usually called “adtech” - short for advertising technology. It includes the big platforms everyone knows (Google, Meta, Amazon), but also a dense ecosystem of companies most people have never heard of: data management platforms, demand-side platforms, supply-side platforms, identity resolution firms, data enrichment companies, and data brokers. Most people browse completely unaware that this ecosystem exists, let alone that it’s watching.

The incentive structure is simple. Advertisers pay more to show ads to people who are likely to buy. The more precisely an ad can be targeted - not just “someone who searched for shoes,” but “a 34-year-old woman in Portland who earns over $80,000, runs three times a week, recently bought fitness gear, and is browsing during her lunch break” - the more it’s worth. The whole industry exists to produce and sell that precision.

Once you understand how they get it, you can decide how much of it you want to give them.

## Third-party cookies - the original surveillance tool

QUICK ANSWER

A third-party cookie is a small file placed on your device by a company other than the website you’re actually visiting. When the same company’s code appears on thousands of websites, it can use that cookie to recognize you across all of them - building a profile of everywhere you’ve been online.

Cookies were invented in 1994 to solve a practical problem: HTTP is stateless, meaning a web server doesn’t inherently remember that you’re the same person who visited five minutes ago. Cookies gave websites a way to remember you across requests and sessions. They were, and still are, genuinely useful.

First-party cookies are set by the website you’re actually visiting. The cookie that keeps you logged into your email is a first-party cookie. It’s scoped to that domain. The bank’s website can’t read it; your email provider is the only one who can.

Third-party cookies work differently. When you visit a website that includes code from an ad network (for example, Google’s ad network), that code runs in your browser and sets a cookie from the ad network’s domain. When you visit the next website that also includes that same ad network code, the network reads the cookie and recognizes you as the same person. Every website that includes that tracking code becomes a data point in the tracker’s profile of you.

Multiply that by the number of companies whose code appears across the web - Google, Meta, LiveRamp, Criteo, AppNexus, and hundreds of others - and you can see why a single browsing session generates data for so many parties at once.

## What gets recorded in a third-party cookie profile

The cookie itself is just an identifier - a string of characters that says “this is user #4829174.” The data tied to that identifier is collected and stored on the tracking company’s servers:

Pages visited - every URL where the tracker appeared

Time of visit - day, time, frequency, duration

Search terms - if the tracker is embedded in a search engine or shopping site

Products viewed - categories, brands, price ranges, specific items

Content topics - inferred interests from the types of articles you read

Purchase signals - cart additions, checkout pages, confirmation pages

Demographic inferences - age, gender, income, and family status inferred from behavior

Location - derived from IP address, often to the city or neighborhood level

Over weeks and months, this becomes a surprisingly detailed portrait of who you are, what you care about, and what you might be persuaded to buy.

## Browser fingerprinting - the cookieless tracker

QUICK ANSWER

Browser fingerprinting identifies you by combining dozens of technical attributes of your browser and device - installed fonts, screen resolution, GPU, timezone, browser plugins, canvas rendering output, and more - into a unique identifier that requires no cookie and leaves no file on your device. Clearing your cookies doesn’t defeat it. Changing your IP address doesn’t defeat it.

Browser fingerprinting can feel more insidious than cookies because it’s invisible. Cookies leave a file on your device. You can see them in developer tools, clear them, or block them. A fingerprint leaves nothing on your device at all - it’s assembled on the server side from information your browser willingly hands over during normal operation.

Here’s the basic idea. When your browser loads a webpage, it exposes a lot of information through standard web APIs:

User-Agent string - browser type, version, and operating system

Screen resolution and color depth

Timezone and language settings

Installed browser plugins and extensions (names and versions)

Installed fonts - tested by measuring rendering sizes of many fonts

WebGL fingerprint - how your GPU renders specific 3D graphics commands

Canvas fingerprint - how your browser renders a hidden canvas element (subtle rendering differences create a signature)

Audio context fingerprint - how your system processes audio

Battery status (where available)

CPU cores and memory size (approximate)

Network connection type (WiFi vs cellular)

None of these attributes is unique on its own. Millions of people run Chrome on Windows at 1920×1080. But combined - your specific browser version, your fonts, your GPU rendering output, your timezone, your plugins - the combination becomes unique or near-unique with high probability.

Research published by the Electronic Frontier Foundation’s Panopticlick project found that over 94% of browsers had a unique or near-unique fingerprint among their test population. More recent studies by engineering teams at Johns Hopkins and Princeton found similar or higher rates, especially as browsers added new APIs that expand the fingerprint surface.

Fingerprinting is increasingly the fallback for trackers when cookies aren’t available - and it’s becoming a primary method as third-party cookies disappear. It’s also significantly harder to block than cookies, and most mainstream privacy advice still doesn’t address it well enough.

## Tracking pixels and invisible beacons

QUICK ANSWER

A tracking pixel is a 1×1 transparent image (or a tiny JavaScript snippet) embedded in a webpage or email. When it loads, it fires a request to the tracker’s server, confirming you visited the page or opened the email - and passing your IP address, device type, browser, and timestamp along with it.

You’ve probably heard about tracking pixels in email marketing - the invisible images that tell a sender whether you opened their newsletter, at what time, and from what kind of device. But pixels are also used across the web for ad measurement and attribution.

The Meta Pixel (formerly the Facebook Pixel) is one of the most widely deployed pieces of code on the internet. A study by The Markup found the Meta Pixel on 30% of the top one million websites, including many places users wouldn’t expect - hospital patient portals, tax preparation services, news sites. When you visit a page with the Meta Pixel, Facebook records your visit regardless of whether you have a Facebook account and regardless of whether you’re logged in.

## What a pixel can capture

Page visit and URL

IP address (cross-referenced with other data)

Browser type and device type

Timestamp and session data

Specific events - if configured, it can fire on button clicks, form submissions, video views, product page views, add-to-cart actions, and purchases

When a retailer installs the Meta Pixel on a checkout page, every purchase can send data to Meta - including, often, product name, price, and sometimes an email address hashed. That data feeds Meta’s ad targeting system, which updates its profile of you accordingly.

## IP address tracking and what it reveals

QUICK ANSWER

Your IP address is visible to every server you connect to. It reveals your approximate geographic location - often to the neighborhood level in dense urban areas - and it can be used to correlate your activity across websites that share data. It also identifies your Internet Service Provider, which may sell browsing data to advertisers.

Your IP address isn’t as detailed as a cookie or fingerprint, but it reveals more than most people realize. It’s also one of the most durable identifiers because there’s no easy way to hide it without a VPN or proxy.

From your IP address, an observer can typically determine:

Your geographic location - country, state/region, and city with high confidence; sometimes neighborhood-level in dense areas

Your Internet Service Provider - which in many countries is allowed to sell anonymized (or not-so-anonymized) browsing data to data brokers

Whether you’re on a home, corporate, or mobile connection

A rough correlation to other activity - if multiple sites share data and notice the same IP visiting at similar times, they can make inferences even without a cookie

In the United States, ISPs have been legally permitted to sell customer browsing data since 2017, when Congress rescinded FCC privacy rules that would have required opt-in consent. Many major ISPs have sold aggregated or individual browsing data to advertising and analytics firms. This is a separate tracking layer from what websites do themselves: your ISP sees your entire browsing history, not just the sites that embed tracking pixels.

A VPN masks your IP address from websites and your browsing history from your ISP. It doesn’t solve every tracking problem, but it addresses a specific layer that it genuinely helps with. We’ll come back to this in the section on where a VPN fits.

## Login-based tracking - the hardest to escape

QUICK ANSWER

When you’re logged into a Google, Meta, or Apple account, everything you do on those platforms - and everywhere their tracking code appears across the web - can be tied to your real identity. This is deterministic tracking. It’s more accurate than cookies or fingerprints, and it can’t be blocked with browser settings.

Everything covered so far - cookies, fingerprints, pixels, IP addresses - is usually probabilistic tracking. It uses indirect signals to infer that you’re the same person across different sites and sessions. It’s powerful, but it has error rates.

Login-based or deterministic tracking has no error rate. When you’re logged into Google and you visit a site with Google’s ad code, Google doesn’t need to infer anything - it knows because you told it. The same is true for Meta, Amazon, Apple, Microsoft, and other platforms where you have an account.

The scope is hard to overstate. Google services are used on virtually every device. Google Analytics alone runs on more than 56% of all websites. Google Ads code runs on a similar percentage. If you’re logged into a Google account while browsing - which many people are because they need it for Gmail, Maps, Drive, and YouTube - Google can have deterministic knowledge of your behavior across a large part of the web.

The Social Login problem

Every time you click “Sign in with Google” or “Sign in with Facebook” on a third-party app or website, you’re doing two things: creating an account on that app, and telling the platform which apps you use. Meta and Google can then add “uses this app” to your profile. For apps in sensitive categories - mental health, fertility, medical, financial - this is information many people would rather keep private.

## Cross-device tracking and identity graphs

QUICK ANSWER

Cross-device tracking matches the same person across their phone, laptop, tablet, and smart TV by correlating behavioral signals, login events, shared IP addresses, and device identifiers. The output - called an identity graph - helps advertisers reach you with a consistent message across every screen.

The modern advertising industry isn’t confused about the fact that people use multiple devices. It has built infrastructure specifically to track the same person across them.

There are two approaches to cross-device tracking:

Deterministic matching uses hard identifiers - typically a shared login. If you log into the same Google or Meta account on your phone and your laptop, the platform creates a permanent link between those devices in its identity graph. Data from each device gets merged into one profile.

Probabilistic matching uses softer signals when there’s no shared login:

Shared IP address - your phone and laptop often use the same home WiFi, so the same IP appearing on both is a strong signal they belong to the same household

Similar behavioral patterns - browsing at the same hours and in similar content categories

Shared location signals - devices appearing in the same physical location repeatedly

Device graph correlations - your phone number linked to your email, linked to your Google account, linked back to your browser fingerprint on your laptop

Companies that specialize in identity resolution - LiveRamp, the Trade Desk’s Unified ID, Oracle’s CX Unity - maintain large databases of these linkages. When an advertiser buys from a platform like The Trade Desk, they can upload lists of email addresses or phone numbers. The platform matches those identifiers to device IDs, cookie IDs, fingerprints, and IP addresses, then shows ads across whatever devices you use.

## Data brokers - where it all gets sold

QUICK ANSWER

Data brokers are companies that collect personal data from hundreds of sources - public records, retailer loyalty programs, website trackers, app data, ISPs, and more - and sell it to advertisers, employers, insurance companies, law enforcement, and anyone else willing to pay. Most people have never heard of the companies that hold the most detailed files about them.

You’ve probably heard of data brokers in the context of people-search websites: Spokeo, BeenVerified, Whitepages. Those are the consumer-facing tip of a much larger industry.

The major data brokers - Acxiom, Experian, LexisNexis, Oracle Data Cloud, Equifax, and many others - operate largely out of public view. Their business is assembling and selling profiles. Inputs come from everywhere:

## Purchase data from retailer loyalty programs

Public records

ISP browsing data (where allowed)

App location data

Credit card transaction data

Third-party cookies and device IDs

Social media scraping

Survey and sweepstakes data

Acxiom, one of the largest, claims to hold data on 700 million people across 62 countries. It sells that data to companies that want to target specific audiences. When a healthcare company wants to market to people with type 2 diabetes, or a financial company wants to reach people with specific income and debt profiles, they go to Acxiom or its peers.

The data broker industry is largely unregulated at the federal level in the US, though some states have begun passing laws that give residents rights to request deletion. In the EU, GDPR creates stronger restrictions, though enforcement has been uneven.

## The "cookie death" myth - what actually replaced cookies

QUICK ANSWER

Google has been announcing the end of third-party cookies since 2020. As of 2026, the deprecation has been delayed repeatedly. But even when it finally arrives, third-party cookies won’t be replaced by “nothing.” They’ll be replaced by browser-based APIs that provide similar targeting capabilities while keeping user data inside the browser. For users, the practical privacy improvement is often smaller than headlines suggest.

If you’ve followed privacy news, you’ve heard “third-party cookies are dying.” Google announced plans to deprecate them in Chrome in 2020. That deadline moved to 2022, then 2023, then 2024, then 2025, then “sometime in 2024-2025.” As of mid-2026, Chrome prompts users to make a choice about cookie usage, but third-party cookies still function for those who don’t opt out.

More importantly: the replacement Google has been building - originally called Privacy Sandbox, later renamed into a set of APIs including the Topics API - has been criticized by privacy researchers as providing many of the same targeting capabilities as cookies while shifting data collection into the browser itself. Instead of ad companies tracking you on their own servers, the browser categorizes your interests and shares those categories with advertisers. You’re still being profiled - the profile just lives in a different place.

Meanwhile, adtech didn’t wait. The industry’s response to cookie restrictions includes:

Doubling down on fingerprinting (which doesn’t require cookies)

Building first-party data relationships (getting users to log in or share email)

Email hashing programs (matching hashed emails against broker databases)

Server-side tracking (moving pixels to servers to bypass client-side blockers)

The lesson isn’t that privacy tools don’t matter. It’s that the tracking industry adapts, and staying private requires understanding what’s being used today, not just what existed five years ago.

## Supercookies and CNAME cloaking

QUICK ANSWER

Supercookies store identifiers in harder-to-clear places than regular cookies - ETags, cached resources, browser storage APIs, and IndexedDB. CNAME cloaking disguises a third-party tracker as a first-party resource by making it appear to come from the website’s own domain. Both techniques exist specifically to evade privacy tools that block third-party tracking.

Supercookies (also called evercookies or zombie cookies) use storage mechanisms most users never clear because they don’t know they exist:

ETag caching - HTTP ETags can store a unique identifier that persists after cookies are cleared

localStorage and sessionStorage - standard browser APIs that store data outside the “cookie” concept

IndexedDB - a more capable client-side database

HSTS super-cookies - using HTTP Strict Transport Security headers to encode tracking data

Flash cookies / LSOs - largely obsolete now, but historically a major vector

Research by Samy Kamkar showed that using multiple storage mechanisms together, an identifier can be reconstructed even after users clear cookies, cache, and history.

CNAME cloaking is a server-side technique. Tracking scripts loaded from a different domain can be blocked by ad blockers that use domain-based blocklists. To evade this, some companies ask publishers to create a CNAME record so the tracker appears to come from the publisher’s own domain. From the browser’s perspective, it looks first-party. Ad blockers that rely on domain matching can be defeated. Some browsers detect CNAME cloaking, but it remains an ongoing arms race.

## Mobile tracking - apps and the advertising ID

QUICK ANSWER

Mobile apps track you through a device-level advertising identifier (IDFA on iOS, GAID on Android) that’s unique to your device and shared with every app that requests it. Location data from apps - often GPS-precise - is one of the most valuable data streams in the broker ecosystem. Apple’s App Tracking Transparency reduced this significantly, but it didn’t eliminate it.

On mobile, tracking works a bit differently than on desktop web.

The Advertising ID is built into iOS and Android for ad targeting. It was designed to be “less invasive” than hardware identifiers like the IMEI because it can be reset. In practice, most users never reset it. When you install an app and grant permissions, the app can access this ID and share it with ad networks. Those networks correlate your in-app behavior with your behavior in other apps (and sometimes on the web) using cross-device identity graphs.

Location data is where mobile tracking becomes most invasive. Many categories of apps request location permissions. In many cases, the revenue model includes selling location data to brokers. A single GPS-precise location reading can reveal where you live, where you work, which places you visit, and which events you attend. Location data has been implicated in real-world privacy harms and investigations.

Apple’s App Tracking Transparency (ATT) introduced in iOS 14.5 requires apps to ask permission before accessing the Advertising ID for cross-app tracking. Studies found a large majority of iOS users declined when asked. That reduced the IDFA-based tracking ecosystem for iOS. Google introduced a similar framework for Android later. Neither framework eliminates tracking completely, but both represent meaningful reductions in cross-app tracking.

## What advertisers actually know about you

At this point, the natural question is: what does all of this add up to?

Major data brokers sell audience segments with names like:

Chronic disease sufferers - diabetes

Pregnant women - second trimester

Recent divorcees

Consumers with gambling tendencies

LGBTQ+ audience

Low-income household - high financial stress

Politically persuadable - conservative lean

Recently bereaved

These segments are inferred from behavioral data - the websites you visit, the apps you use, the purchases you make, and the locations you frequent. They’re often surprisingly accurate, and they’re sold to anyone willing to pay: insurers, employers (via background-check firms), political campaigns, and increasingly law enforcement. There have been documented cases where location and browsing data were purchased through brokers to avoid warrants.

The Federal Trade Commission has documented cases where data brokers sold lists tied to sensitive categories like health conditions and people seeking help. What happens after the data is sold is largely uncontrolled.

## Five common myths about ad tracking

Myth 1: “I don’t care if they track me, I have nothing to hide.”

The privacy argument isn’t only about hiding things you’re ashamed of. It’s about who gets to know things about you and what they can do with that information. Medical profiles can affect insurance rates. Location data can reveal religious and political activity. Behavioral profiles can be used for manipulation, not just advertising. The value of privacy is control over your own information.

## Myth 2: “Clearing my cookies regularly protects me.”

Clearing cookies removes one tracking vector. It doesn’t defeat fingerprinting, your IP address, your advertising ID, login-based tracking, or server-side tracking. If you clear cookies and immediately log back into Google, you’ve handed back a deterministic identifier within seconds.

## Myth 3: “Private browsing / Incognito mode stops tracking.”

Private browsing prevents your browser from saving history and cookies on your device. It doesn’t stop websites from tracking you. They still see the same fingerprint, the same IP address, and the same tracking pixels. Incognito mode has also been the subject of legal action alleging continued data collection.

## Myth 4: “GDPR / privacy law has solved this problem.”

GDPR improved consent requirements in the EU and created meaningful obligations for data controllers. It hasn’t eliminated ad tracking. In many cases, it produced cookie-consent banners with confusing patterns designed to maximize opt-ins. Also, many broker operations happen in places where strong privacy law doesn’t apply, and enforcement can be slow.

## Myth 5: “Ad blockers block all tracking.”

Mainstream ad blockers are effective at blocking known third-party tracking domains. They don’t block fingerprinting, first-party tracking, CNAME cloaked trackers, server-side tracking, or login-based tracking. They’re a useful part of a toolkit, but not a complete solution.

## How to fight back - a practical toolkit

*   This is the section most people came for, so let’s be practical. These steps are listed roughly in order of effort and impact.
*   Use a privacy-respecting browser
*   Firefox is the most practical choice for most people. It ships with Enhanced Tracking Protection enabled by default, which blocks known third-party trackers and fingerprinting protection, and includes CNAME cloaking detection. Brave is a Chromium-based alternative with built-in fingerprint randomization and first-party-only cookie isolation. Safari has strong Intelligent Tracking Prevention on Apple devices. Chrome is the one to move away from if you care about tracking.

## 2\. Install uBlock Origin

uBlock Origin is a strong content blocker. It blocks third-party tracking scripts, known fingerprinting domains, ad pixels, and redirecting URLs. It works at the network level, meaning it stops tracking requests before they leave your browser. Use Medium Mode for stronger protection if you’re okay with occasional website breakage.

Note: uBlock Origin availability and extension capabilities depend on browser version and extension manifest support. That’s one reason many privacy-focused users prefer Firefox.

## 3\. Use a VPN for network-level protection

A VPN masks your IP address from every website you visit and prevents your ISP from seeing your browsing history. This addresses two tracking vectors: IP-based tracking and ISP data sales. It doesn’t stop cookie-based tracking or fingerprinting by itself, but it removes your ISP from the picture entirely and makes IP-based profiling harder.

Choose a VPN with a genuine no-logs policy, an audited technical architecture, and a business model that doesn’t depend on selling your data.

## 4\. Compartmentalize your logins

Avoid “Sign in with Google” or “Sign in with Facebook” for third-party apps if you care about privacy. Use dedicated email accounts for different categories of services - one for shopping, one for newsletters, one for work. A password manager makes this easier without turning your life into a chore.

## 5\. Manage your advertising IDs

On iOS: Settings → Privacy & Security → Tracking. Turn off “Allow Apps to Request to Track.” Revoke permissions for apps that already have access. You can also turn off Personalized Ads in Apple Advertising settings.

On Android: Settings → Privacy → Ads. Reset your advertising ID regularly, or delete it entirely on newer Android versions. Menus vary by manufacturer.

## 6\. Use a privacy-respecting search engine

Google ties searches to your account when you’re logged in, or to your IP and fingerprint when you’re not. DuckDuckGo, Brave Search, and Startpage are practical alternatives. Kagi is a paid option some privacy-conscious users prefer.

## 7\. Use a tracker-blocking DNS resolver

A DNS resolver that blocks tracking and advertising domains adds network-level protection that works regardless of which browser or app you use. NextDNS and Cloudflare Gateway are common options. Quad9 blocks malware domains by default. These work before tracking scripts even load.

## 8\. Consider an email privacy service

Email tracking pixels are everywhere. Hey, Fastmail, and ProtonMail offer tracking pixel blocking. Apple Mail on iOS and macOS uses privacy relay features that mask your IP and block open tracking. For a more aggressive approach, email aliasing services like SimpleLogin or Apple’s Hide My Email help you create unique masked addresses per service.

## 9\. Opt out of data broker databases

This is tedious, but it matters for the most sensitive data. In states with privacy laws, you can request deletion from broker databases. Services like DeleteMe or Privacy Bee automate parts of this. Manual opt-outs are possible if you’re willing to work through the largest brokers.

## 10\. Use end-to-end encrypted messaging

SMS and standard phone calls aren’t encrypted end-to-end and can be intercepted or subpoenaed. Signal is the gold standard for private messaging. iMessage with PQ3 is a reasonable choice if your contacts are all on Apple devices. WhatsApp is end-to-end encrypted but owned by Meta, which collects metadata.

## Where a VPN fits into all of this

QUICK ANSWERA VPN masks your IP address from websites and your browsing history from your ISP. Those are two real tracking vectors. A VPN does not stop cookie-based tracking, fingerprinting, login-based tracking, or data brokers who already have your data. It belongs in a toolkit, not as a standalone solution.

Let’s be precise about what a VPN does and doesn’t do for ad tracking, because VPN marketing often overstates it.

## What a VPN genuinely helps with:

IP address masking - every website you visit sees the VPN server’s IP, not yours. This defeats IP-based geolocation and IP-based correlation across sites.

ISP data sales - your ISP can’t see which domains you visit. In the US, where ISPs can sell this data, that’s a meaningful privacy improvement.

Network-level eavesdropping - on public WiFi, a VPN encrypts the tunnel between your device and the VPN server.

Reducing location precision - your apparent location becomes the VPN server’s location.

## What a VPN does not help with:

Cookie-based tracking - if you’re logged into Google, Google knows it’s you regardless of IP.

Browser fingerprinting - your fingerprint is assembled from your browser and device attributes. A VPN doesn’t change that.

Login-based tracking - Facebook knows it’s you because you logged in.

Data already held by brokers - a VPN can’t delete profiles built before you started using it.

App-level tracking on mobile - advertising IDs and app permissions aren’t affected by a VPN.

The honest framing: a VPN is one layer in a privacy toolkit. Used alongside a privacy browser, uBlock Origin, compartmentalized logins, and managed advertising IDs, it reduces your tracking exposure. Used alone, it reduces only one part of the picture.

## How OllaVPN handles your network privacy

We built OllaVPN to be the most privacy-respecting VPN we could make - not the one with the most features, the most servers, or the most aggressive marketing, but the one that does its actual job correctly.

Here is what that means for advertising and tracking:

Zero-logs architecture - OllaVPN does not log connection timestamps, IP addresses, session durations, or DNS queries. There is nothing to hand over because it doesn’t exist. The architecture has been independently audited.

DNS inside the encrypted tunnel - your DNS queries are resolved inside the VPN tunnel by OllaVPN’s own resolver, not by your ISP and not by a third-party DNS provider that might log them.

Kill switch that cannot be accidentally disabled - if the VPN connection drops, the [kill switch](/blog/what-is-a-vpn-kill-switch.html) blocks all traffic until the connection is restored.

Post-quantum-ready encryption on every connection - hybrid X25519 + ML-KEM-768. For “harvest now, decrypt later,” this matters. For everyday ad tracking, it’s a bonus on top of the core privacy properties.

Available on the lifetime free plan - privacy protections that matter aren’t paywalled.

No account required for the free plan - you don’t give OllaVPN an email address to get started.

## OllaVPN plans:

Lifetime free · $0 · 10 Mbps IP masking, no-logs, in-tunnel DNS, PQC-ready, [kill switch](/blog/what-is-a-vpn-kill-switch.html). Every country. No time limits. No data caps. No ads.

Paid plan · $2 / month · 10 Gbps Same privacy stack, faster connections. Five devices on one account.

You can try the free plan right now - no email, no card, no upsell. Your ISP stops seeing your traffic from your first connection.
