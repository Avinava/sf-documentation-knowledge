---
title: "Product Selling Model"
domain: chatterapi
topic: product-selling-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.592Z
estimatedTokens: 435
keywords: [Product, Selling, Model, Commerce, subscriptions]
---

# Product Selling Model

> Product selling model for Commerce subscriptions.

# Product Selling Model

Product selling model for Commerce subscriptions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the product selling model displayed on the UI. | Small, 60.0 | 60.0 |
| displayName | String | Name of the product selling model displayed on the UI. | Small, 60.0 | 60.0 |
| id | String | ID of the product selling model. | Small, 56.0 | 56.0 |
| name | String | Name of the product selling model. | Small, 56.0 | 56.0 |
| pricingTerm | Integer | Number of pricing term units in the pricing term. Used with pricingTermUnit to define the length of the pricing term. For example, if pricingTermUnit is Months and this property is 1, the subscription is priced monthly. However, if the sellingModelType property is set to OneTime, the pricingTerm property is empty, because the product isn’t sold as a subscription. The only allowed value for this property is 1. | Small, 56.0 | 56.0 |
| pricingTermUnit | String | Unit of time used to define a pricing term. Values are:Months—Product is priced on a monthly basis.Annual—Product is priced on an annual basis. | Small, 56.0 | 56.0 |
| sellingModelType | String | Type of product selling model. Values are:Evergreen—A subscription without an end date. An evergreen subscription continues until the shopper affirmatively cancels it.OneTime—A product that isn’t sold as a subscription.TermDefined—A subscription with a defined end date. The subscription continues for a specified time period. When the term ends, the subscription ends. | Small, 56.0 | 56.0 |
| subscriptionTermRule | Subscription Term Rule | Rules for a subscription term. | Small, 59.0 | 59.0 |

## Related Topics

- Subscription Term Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_term_rule.htm)
