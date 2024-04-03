---
title: "Hello world: Why we're building Planship"
date: 2024-04-09
description: Introducing Planship - optimized software packaging so you can sell more subscriptions, faster.
author: Trent Peterson
image: 2024-04-09-hello-world.jpeg
alt: An illustration of a person walking along a sidewalk with a trail of coins behind them
---

# Hello World: Why we're building Planship
<ArticleHeader />

## The problem
Software pricing and packaging is a forever project. In the early days of a business, it's not uncommon to change pricing dimensions multiple times in a short period. As time goes on, more features are added, new plan packages are introduced, and custom plans are created for enterprise customers. The pricing journey never ends.

Over the past dozen years we built SaaS products at scrappy startups like AppThwack and Routegy and large enterprises like AWS. SaaS packaging and monetization strategies, both on the business side as well as the software side, consistently grew in complexity and frustration over time. Onboarding big customers required finance and engineering to get involved just to get started, pricing experimentation took longer and longer, and the code and data model became messier and messier.

We lived with those frustrations, and, once we could afford the resources, built and maintained systems to manage tiers, plans, entitlements, metering, and provisioning in a more scalable way. While this sorta worked, it was a distraction from our core business and wasn't a one-off effort; it required maintenance and support just like any software effort, and it was never as full-featured as a dedicated product.

Not only did we see this issue from every angle in our own companies, we heard from leaders and devs at other companies that this was a common pattern for them, too. We set out to help decision makers, sales, and devs at every software company by building Planship.

## What's Planship?
Planship's a new service that helps you optimize software pricing and packaging so you can sell more subscriptions, faster. It provides guardrails and tooling for software plan packaging, dimensions, entitlements, metering, enterprise onboarding, upsell logic, experimentation, and a lot more.


### What Planship isn't
What we don't do is billing, payments, invoicing, etc. We simply work alongside your existing implementation and providers (E.g. Stripe) and integrate with them where it makes sense. In this way you can separate billing from packaging and entitlements for ultimate flexibility.

## Planship for decision makers, sales, and marketing
Experimenting with a new tier or retiring and replacing an old one? No problem. With Planship, creating new plans, including promotional plans and trial plans, is easy. Once a product is instrumented, plans can be created, tweaked, and tested without touching code or bugging developers.

### Enabling enterprise deals
Creating custom tailored plans when onboarding new enterprise customers is commonplace, but it requires a provisioning step that involves devs and causes friction. With Planship, one-off custom plans can be created, managed, and converted without engaging devs.

## Planship for devs
Planship provides simple APIs and language/platform-specific SDKs for implementing plan-related logic both on the backend and frontend in a performant way. You can easily get plan-related entitlements on the frontend to disable/enable options and display upsell widgets while gating features, reporting usage, and managing subscriptions in your backend.

Entitlements are calculated upon request, and, on the frontend, entitlements can be streamed with WebSockets. With Planship, you can skip the infamous `SUBSCRIPTIONS` table, the JSON blobs of entitlements for specific customers, and all the other funky logic that accumulates over time.

## Who we are
Pawel and I began our careers as engineers and evolved into engineering leads, product managers, and founders, among other business roles. Planship is 100% bootstrapped by way of a previous exit.

<hr class="gradient rounded !mt-8" />

## Ready to get started?
If you're interested in optimizing your pricing and packaging, selling more, and separating plan logic from your product code, please sign up for early access [here](https://planship.io) or [shoot us an email](mailto:connect@planship.io). Don't hesitate to reach out! We're here to help you get up and running.
