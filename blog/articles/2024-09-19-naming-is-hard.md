---
title: "Naming things is hard: SaaS pricing nomenclature edition"
date: 2024-09-25
description: How we named key SaaS pricing concepts in Planship given the lack of standardized nomenclature.
author: Pawel Wojnarowicz
image: 2024-09-26-naming-is-hard.jpeg
alt: An illustration of a person walking along a sidewalk with a trail of coins behind them
---

# Naming things is hard
<ArticleHeader />

## Is it a plan, tier, edition, or something else?

Since we set out to build Planship we’ve talked to A LOT of teams responsible for pricing SaaS products. Just in the first 10 calls we discovered that different teams often use different names for the same pricing concepts. For instance, in the world of recurring subscriptions, what do you call an individual offering that a customer can subscribe to? Is it a ***plan***? Or is it a ***tier***, a ***package***, a ***product***, a ***level***, an ***edition***, or just ***pricing***? Similarly, what do you call a feature that has variable availability across different plans (or tiers, packages, products, etc.)? Is it a ***pricing dimension***, ***differentiator***, ***entitlement***, ***lever***, or ***limit***?

## How to name key concepts?

The lack of standardized pricing nomenclature makes communicating with customers a little more tricky, but it also leads to a bigger question: How do we name key concepts in Planship so that it’s immediately apparent what they mean and do?

### Plans

Recurring subscriptions, perpetual licenses, trial periods, temporary add-ons, product credits that either expire or don’t, day passes, and more. These seem like completely different approaches to product packaging, but in reality they all boil down to an offering that a customer can subscribe to that grants access to certain features and resources of a product for a defined period of time. In Planship, this key construct is called a **plan**, and it lets us support any SaaS pricing model that we've seen to date. Choosing the right name wasn't obvious though. We considered **plan**, **product**, **package**, **tier**, **edition**, **level**, and a handful more. Eventually, our list was down to two: **plan** and **product**. While **product** is already used by [Stripe](https://docs.stripe.com/api/products) to describe a similar concept, we found that **plan** is more widely used and understood by the customers we talked to.

### Levers and entitlements

Different pricing **plans** give customers different levels of access to various *resources* of the product. They can be either features (E.g. a list of 3rd party integrations) or metered resources (E.g. text messages per month). Both feature and metered resources seem like very distinct concepts, but from the perspective of **plans**, they should be treated the same, at least that's our philosophy at Planship. Why? Regardless of whether they are static features or metered resources, they translate to **entitlements** on the plan level. We introduced a new term here, **entitlement**, but this one was a no-brainer - most of the customers that we talked to already use **entitlement** to describe whether a customer can (or cannot) access a given feature or metered resource of the product (E.g. *Can I use integration X? Can I make another API call?*).

So **entitlements** are limits on *features and resources* defined for individual **plans**, but what do we call *features and resources* themselves? We trimmed the list down to **levers** and **pricing dimensions** after considering **feature flags**, **resources**, and **differentiators**. We liked **pricing dimension** because it's a commonly used term, but it’s usually tied to the cost of delivering a product or service (E.g. “Text messages per month is our pricing dimension because it directly drives our cost”). That is not always the case for feature and usage limits that are applied to pricing plans as differentiators. For instance, a premium UI feature or extra API usage may incur no additional cost, but they have a perceived additional value and are used as *leverage* to move customers to a different, typically more expensive plan. For that reason we decided to go with the term **lever** instead.


## Subscriptions, customers, etc.
Luckily, some terms have common definitions. These include the following:
- **Customer** - an entity, typically a person, that can subscribe to one or more **plans**
- **Subscription** - a unique reference to a **plan** for one or more **customers**. Customers can subscribe to a plan by creating a new **subscription**, or joining an existing team **subscription**.
- **Product** - a SaaS product with features and metered resources (**levers**) that are packaged into one or more **plans**.


## Wrapping up
As you can see, while naming things is hard, finding common terms is possible. And as we talk to new customers and learn about new pricing models, we hope that our terminology will cover them. If not? We’ll simply evolve and expand. Just like pricing, naming things is never done.

<hr class="gradient rounded !mt-8" />

## Ready to get started?
If you're interested in optimizing your pricing and packaging, selling more, and separating plan logic from your product code, please sign up [here](https://planship.io) or [shoot us an email](mailto:connect@planship.io). Don't hesitate to reach out! We're here to help you get up and running.
