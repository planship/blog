---
title: "Naming things is hard"
date: 2024-09-19
description: Introducing Planship - optimized software packaging so you can sell more subscriptions, faster.
author: Pawel Wojnarowicz
image: 2024-08-19-hello-world.jpeg
alt: An illustration of a person walking along a sidewalk with a trail of coins behind them
---

# Naming things is hard
<ArticleHeader />

## Is it a plan, tier, edition or something else?

Since we set out to build Planship we’ve talked to A LOT of teams responsible for pricing SaaS products. Just in the first  10 calls we discovered that different teams often use different names for the same pricing concepts. For instance, in the world of recurring subscriptions, what do you call an individual offering that a customer can subscribe to? Is it a ***plan***? Or is it a ***tier***, a ***package***, a ***product***, a ***level***, an ***edition***, or just ***pricing***?. Similarly, what do you call a feature that has a varying availability across different plans (or tiers, packages, products, etc.)? Is it a ***pricing dimension***, ***differentiator***, ***entitlement***, ***lever*** or ***limit***?

## Our nomenclature
The lack of standardized pricing nomenclature made communicating with customers a little more tricky, but it led to a bigger question: how do we name key concepts in Planship so that it’s immediately apparent what they mean and do? Here is what we decided on:
 - **Plan** - an offering that customers can subscribe to to gain access to product features and resources for a defined period of time.
 - **Subscription** - gives one or more customers access to a given plan with a set start date, and duration and auto-renewal defined by that plan.
 - **Lever** - product feature or usage limitation that can be applied to a plan to differentiate it from other plans (E.g. Max projects feature that limits a number of projects allowed for a customer).
 - **Plan Entitlement** - a specific value of a feature or usage lever applied to a plan (e.g. Max projects lever set 5 for a Free plan).
 - **Customer Entitlements** - level of access to product features and resources for a given customer derived from entitlements of all plans they are subscribed to.

## Is it a dimension?
Out of all the naming decisions we made, a term to encompass both feature and usage limits was the trickiest to find. Planship is built to support any pricing model, whether it’s by feature, usage or any combination of the two. In Planship, there’s no reason to treat features and usage limits as separate concepts. While **pricing dimension** is a common term here, it’s usually tied to the cost of delivering a product or service (E.g. “Text messages per month is our pricing dimension because it directly drives our cost”). That is not always the case for feature and usage limits that are applied to pricing plans as differentiators. For instance, a premium UI feature or extra API usage may incur no additional cost, but they have a perceived additional value and are used as **leverage** to move customers to a different, typically more expensive plan. So feature and usage **levers** they are.

<hr class="gradient rounded !mt-8" />

## Ready to get started?
If you're interested in optimizing your pricing and packaging, selling more, and separating plan logic from your product code, please sign up for early access [here](https://planship.io) or [shoot us an email](mailto:connect@planship.io). Don't hesitate to reach out! We're here to help you get up and running.
