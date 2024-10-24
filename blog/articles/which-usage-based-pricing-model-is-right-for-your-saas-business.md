---
title: Which usage-based pricing model is right for your SaaS business? A real-world example
date: 2024-10-24
description: How to choose the right pricing model for your usage-based product
author: Pawel Wojnarowicz
cover_alt: Mobile device screens with dollar signs displayed on them
---

## How do you sell a usage-based product?
A question we hear over and over again is how to best optimize SaaS pricing, especially as it relates to usage-based pricing vs. other pricing models. Unfortunately, the answer is complicated and boils down to “it depends.” However, we have real world experience with this topic that can hopefully help.

Our first company, AppThwack, offered access to physical, cloud-hosted mobile devices for the amount of time it took to run a customer’s automated tests, which we measured as device time. It was clear that our pricing would be based on device time, but our challenge was how to package it. Should we bill customers for the amount of device time they use in a billing period? Should we ask customers to prepay for blocks of device time? Or should we package device time into tiered plans?

In this article I’ll explain how we navigated usage-based pricing models at AppThwack, all the way to its reincarnation as AWS Device Farm after AppThwack was acquired by Amazon.

## What is usage-based pricing?
Before we jump in, let’s define usage-based pricing. Usage-based pricing usually means **Pay-as-You-Go** (also known as metered billing, consumption-based pricing, or pay-for-what-you-use), where customers are billed for how much of a product they actually use. It can be based on any measurable unit, like data storage, processing power, or time.

Big cloud providers like AWS and Microsoft Azure use a pay-as-you-go model for their flagship services, and the model continues to [grow in popularity](https://www.forbes.com/sites/sushmadaggubati/2024/09/19/the-rise-of-pay-for-what-you-use-models/) across the SaaS industry. Because of this, it’s tempting to default to pay-as-you-go pricing. However, your SaaS company may find that other usage-based models are superior due to the particulars of your business or the stage of your company.

## Pay-as-you-go pros (and cons)
There are three primary benefits that are often brought up when discussing pay-as-you-go pricing: flexibility, revenue growth, and engagement. Let’s take a look at the pros/cons of each one using real world examples.

### 1. Flexibility and fairness
A key premise of pay-as-you-go billing is the flexibility and fairness it offers to customers. They pay only for the services they provision and resources they use, giving them full control of their expenses.

It sounds great for customers until it doesn’t; consider the infamous [$104k Netlify bill for hosting a simple static site](https://old.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/). While this example borders on the extreme (The charges were ultimately waived), it shows potential perils of pay-as-you-go models. And not just for the customer; if you’re Netlify, you’ll likely need to deal with similar issues over-and-over again, resulting in processes and code to streamline billing adjustments for confused and angry customers.

**Pay-as-you-go** can be a great fit for products where resources are pre-provisioned (E.g. virtual machine instances) or billed usage can be modeled and predicted. AppThwack, like many products, didn’t fit this mold.

Automated tests are a fickle beast and you can’t predict how long it will take for a script to finish with anywhere near 100% certainty. If everything runs as expected your test might be done in two minutes. If things go sideways with your code, app, or a device, and your various waits, retries, and other contingencies kick in, execution time could easily balloon to 20 minutes or more. Per device. Triggered by every commit. You get the picture.

Unpredictable tasks are why **usage-based subscriptions** may be a better choice for certain products than **pay-as-you-go**. If predicting monthly spend becomes a big headache for your customers, consider offering a pricing structure that removes that burden.

### 2. Revenue growth
The pay-as-you-go model is often [touted as a great way to grow revenue](https://techcrunch.com/2021/02/18/why-do-saas-companies-with-usage-based-pricing-grow-faster/  ). As your customers become more successful and grow, their usage and spend increases, and your business grows with them. This is true as long as the usage metric that you are billing for (also known as a pricing dimension) follows the scaling dimension of your customers. If you offer cloud compute or storage services, it may be a no-brainer; as your customers grow their business, they need more compute and storage, and their spend on your product grows proportionately.

However, this is not always the case. Some products, while intrinsically usage based, are meant to be used irregularly, or have a de-facto usage ceiling that is unlikely to be crossed regardless of the size and potential budget of the customer. Let’s take a look at AppThwack again.

We discovered that medium-size companies used significantly more device time than startups and indy developers, most often due to budget and time constraints. However, the device time usage gap between medium and large customers was tiny. It makes sense when you think about it; why would an app developed by a medium-size developer need more testing than one developed by a Fortune 500 company? It was more about complexity of the app and sophistication of the customer, rather than the size of their potential AppThwack budget. While usage was a key pricing dimension for us, we had to come up with a pricing structure with additional levers that let us funnel these high value customers into enterprise level spend.

**Usage-based subscriptions**, often combined with other pricing levers, can be a way to optimize your pricing and maximize revenue growth. In short, if you choose to bill purely on usage, you may be leaving money on the table.

### 3. Engagement and adoption
**Pay-as-you-go** is often tied to strong adoption and stickiness of a product. As your customers become more successful, they use and rely more and more on your product. They stay engaged, which helps you improve and grow your business even more. Without annual contract negotiations and inevitable subscription cancellations, customer churn is less of an issue. And without upfront costs and long-term commitments, the top of your customer funnel widens by reducing onboarding friction.

However, for some products, the opposite is true. **Pay-as-you-go** billing can prevent cost-conscious customers from adopting your product, or inhibit their usage so they don’t fully realize its value. Cloud providers like AWS, Azure, and Google Cloud offer credits to provide a risk-free way to develop and integrate with their services, but it may not be the best fit for all products.

In AppThwack, we discovered that the most valuable customers were the ones who integrated our product into their automated CI/CD pipelines. They would start small and grow their usage running more frequently and on more devices. This sounds like a perfect scenario for pay-as-you-go, but it was not. Testing activity often comes in bursts (E.g.. pre-release testing) and big spikes in charges would spook some customers and increase churn. With subscriptions, we were able to nurture customer relationships, growing them into higher usage tiers over time.

## How do I choose the right model?
If usage is an obvious pricing dimension of your product, you have several models to choose from:
- Pure metered billing
- Prepaid usage credits
- Recurring subscriptions tiered on usage

You can also combine them into a hybrid model like recurring subscriptions with allowed overage. In that model, usage entitlements aren’t hard-enforced so customers can continue using your product when they reach a subscription-defined limit. That overage is then billed and charged as metered usage. You may also want to define a hard limit on allowed overage to prevent excess anomalous usage that can lead to “bill shock.”

Ultimately, choosing the right model depends on your product and customers.
- Can your customers predict their spend if you bill them purely on usage?
- What are the potential scenarios for bill shock if you charge purely on usage?
- Is usage the best or only dimension that will let you upsell customers to extract maximum value from them?
- What pricing will encourage your customers to fully realize the value of your product?

## Final thoughts
Even if you define and implement the pricing model that puts your revenue on the right trajectory, you can’t assume that it’s going to stay that way forever. If you’re just starting out, recurring subscriptions may be the best way to get predictable, recurring revenue and build relationships with initial customers. However, as your business grows and you learn more about usage patterns and upsell levers, you may discover that a different pricing structure is a better fit.

In fact, this is what happened at AppThwack. After being [acquired by AWS in 2015](https://venturebeat.com/mobile/amazon-web-services-buys-appthwack-a-startup-with-ios-android-devices-for-app-testing-service-will-shut-down-on-sept-1/), we relaunched as AWS Device Farm with a pay-as-you-go pricing at [a flat rate per device minute that is still offered today](https://aws.amazon.com/device-farm/pricing#Pay_as_you_go). But there’s a twist.

Subscription pricing eventually returned in the form of dedicated devices. In this way, we were able to offer different pricing models for our customers to choose from depending on their preference and pricing sensitivities, widening our funnel in doing so. The pricing journey never ends.

<hr class="gradient rounded !mt-8" />

## Looking for help with SaaS pricing and packaging?
Pricing optimization is not easy. Without the right tools, building the infrastructure to iterate on packaging, dimensions, entitlements, and metering can be a serious distraction from your core business. We learned this lesson in our previous endeavors, and this is why we built Planship  To get started, please sign up [here](https://planship.io) or [shoot us an email](mailto:connect@planship.io). Don't hesitate to reach out! We're here to help you get up and running.
