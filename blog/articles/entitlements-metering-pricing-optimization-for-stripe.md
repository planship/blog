---
title: Entitlements, metering, and pricing optimization for Stripe
date: 2025-02-12
description: Enable entitlements, metering, and pricing optimization with the Planship app for Stripe.
author: Trent Peterson
cover_alt: The Planship logo and Stripe logo with a red plus sign between them on a dark blue background
---

<div class="mt-2"></div>

tl;dr: [Check out Planship for Stripe in the Stripe marketplace](https://marketplace.stripe.com/apps/planship)

## Monetizing SaaS with Stripe
You could update the old adage that nobody gets fired for buying IBM to nobody gets fired for choosing [Stripe](https://stripe.com/). In fact, we've used Stripe in our previous companies and use Stripe today in Planship because, well, it just works.

Stripe makes monetizing SaaS apps dead simple with payment processing, subscription management, invoicing, tax, and more in a single solution. The API and documentation are easy to follow and the developer experience is overall great.

While Stripe handles the billing and payment side of things in an elegant fashion, you’re on your own when it comes to product integration and functionality that is beyond Stripe’s offering - plan-defined feature entitlements and usage-based limits, team subscriptions, usage aggregation, customer provisioning, subscription data models, upsell logic, etc.

Enter Planship.

Planship is payment-processor agnostic and adds complementary functionality to Stripe. Before today, you could use Planship with Stripe, but it involved setting up webhooks and performing any desired synchronization yourself. With the launch of our new [Planship app in the Stripe marketplace](https://marketplace.stripe.com/apps/planship), using Planship with Stripe has never been easier.

But first, why should you use Planship with Stripe?

## What's missing from Stripe?
As great as Stripe is, there are a bunch of pricing-related tasks that fall outside of Stripe's offering. These include things like:

### Entitlements for features
Feature entitlements boil down to "what" and "how much" a customer can do in your product according to their subscription level. These can be anything from a simple flag (E.g. Can I use this feature?) to a quantity (E.g. How many widgets can I create?) to a list (E.g. Which integrations can I configure) to usage (E.g. How many SMS have I sent this month?).

Stripe offers an [API for basic entitlements](https://docs.stripe.com/billing/entitlements) tied to Stripe products, but they are limited to simple feature flags and require repeated API calls to keep up to date. In fact, Stripe recommends that you store the entitlements in your own database.

Planship offers a wide range of highly configurable lever types: flags, enums, lists, numbers, and metered. These types provide the necessary lever types for building modern SaaS plan packages. Unlike Stripe entitlements, Planship entitlements do not need to be stored in your database - they're always up to date and accessible via platform-optimized SDKs with edge caching and, on the client-side, WebSockets.

### Metering aggregation
If your product has metered resources, regardless of whether you're using [pay-as-you-go pricing or tiered limits](https://blog.planship.io/articles/which-usage-based-pricing-model-is-right-for-your-saas-business#how-do-i-choose-the-right-model), you will likely need to gate behavior and functionality based on up-to-date information.

While Stripe provides functionality for aggregating metering records for billing, there is no functionality for consuming the records and aggregated totals within your product.

With Planship, metering records can be aggregated (and sub-aggregated) for consumption within your product (E.g. enforcing limits, displaying real-time totals, warning of overages, driving upsells). The metering records can then be fed into Stripe for billing purposes, either in real-time, relying on Stripe's aggregation features, or in batch amounts aggregated by Planship.

### Team subscriptions
Stripe supports simple seat-based licensing with subscription _quantities_ for fixed seats and _metered billing_ for dynamic licenses. However, product logic around how to handle seats (I.e. How many seats are remaining for this customer?) are left for you to build.

This is where Planship shines. Planship provides functionality that makes enabling seat-based pricing within your product easy. You can have fixed or floating seats, per-seat dedicated resources, shared resources between seats, and usage auditing per seat.

### Upsell logic
Stripe doesn’t have insight into your product’s real-time customer behavior, and therefore offers limited upsell capabilities beyond moving from one plan to another on a Stripe checkout page using static [upsells](https://docs.stripe.com/payments/checkout/upsells) (I.e. Annual vs. monthly discounts) and [cross-sells](https://docs.stripe.com/payments/checkout/cross-sells) (I.e. Product add-ons) that you define.

Using Planship's always-up-to-date entitlements within your product, you can display dynamic, contextual upsell widgets for features a customer isn't entitled to on their current plan, or notify sales when a customer approaches a limit on their existing subscription.

## Why you shouldn't use your billing system for entitlements
While it may seem convenient, tying your entitlement system to your billing system is a recipe for pain.

Arnon Shimoni has an excellent article that goes into great detail on this topic: [You Should Separate Your Billing from Entitlements](https://arnon.dk/why-you-should-separate-your-billing-from-entitlement/)

In addition to Arnon’s points, and specific to Stripe Entitlements and other payment-processors' solutions, what happens when you have a customer who uses a payment system outside of your billing system (E.g. a custom contract paid via ACH or Wire Transfer)? Essentially, how do you handle a customer within your product who doesn’t exist in your normal payment processor’s system?

Planship makes it simple to keep your billing and entitlement systems separate, while also avoiding the development effort and ongoing support of building an entitlement system and integrating it with your billing system yourself.

## Introducing the Planship App in the Stripe Marketplace
With our new [Planship App in the Stripe Marketplace](https://marketplace.stripe.com/apps/planship), you can easily combine Stripe’s billing functionality with Planship’s entitlement functionality.

<Image
  src="planship-entitlements-stripe-dashboard.jpg"
  alt="Screenshot of the Stripe dashboard with the Planship app for Stripe visible on the right side open to the entitlement configuration view"
  caption="Configure pricing entitlements in the Stripe dashboard"
/>

Once your Planship and Stripe accounts are connected, Planship will automatically mirror all of your Stripe products, customers, and subscriptions.

You can then define feature and metered levers and configure entitlements for your Stripe products, all directly from the Stripe UI.

With entitlements defined, you can use the [Planship SDK](https://docs.planship.io/integration/#getting-started-with-planship-sdks) of your choice within your product to retrieve and enforce entitlements, report and retrieve usage information, manage team subscriptions, drive upsells, and more.

<Image
  src="planship-stripe-entitlements-autocomplete.jpg"
  alt="Screenshot showing autocompletion of pricing entitlements while editing a React component in Microsoft Visual Studio Code"
  caption="Use pricing entitlements in your product configured with the Planship app for Stripe"
/>

## Get started
Ready to optimize your pricing? Planship offers a generous [free tier](https://planship.io/pricing) and flexible plans for any sized business interested in selling more subscriptions, faster. To begin, go directly to the [Stripe Marketplace](https://marketplace.stripe.com/apps/planship) or follow our [getting started guide](https://docs.planship.io/howtos/use-planship-with-stripe/#getting-started).

## Important links
* [Planship App in the Stripe Marketplace](https://marketplace.stripe.com/apps/planship)
* [Planship App for Stripe Documentation](https://docs.planship.io/howtos/use-planship-with-stripe/)

<hr class="gradient rounded !mt-8" />

## Looking for help with SaaS pricing and packaging?
Pricing optimization is not easy. Without the right tools, building the infrastructure to iterate on packaging, dimensions, entitlements, and metering can be a serious distraction from your core business. We learned this lesson the hard way in our previous companies, and that's why we built Planship. To get started, please sign up [here](https://planship.io) or [shoot us an email](mailto:connect@planship.io) for a demo. Don't hesitate to reach out! We're here to help you get up and running.
