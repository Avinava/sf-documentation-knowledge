---
title: "ConnectApi.ProductSellingModel"
domain: apex-reference
topic: connectapiproductsellingmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.628Z
estimatedTokens: 515
keywords: [ConnectApi.ProductSellingModel, Product, selling, model, Commerce, subscriptions.]
---

# ConnectApi.ProductSellingModel

> Product selling model for Commerce subscriptions.

# ConnectApi.ProductSellingModel

Product selling model for Commerce subscriptions.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Description of the product selling model displayed on the UI. | 60.0 |
| displayName | String | Name of the product selling model displayed on the UI. | 60.0 |
| id | String | ID of the product selling model. | 56.0 |
| name | String | Name of the product selling model. | 56.0 |
| pricingTerm | Integer | Number of pricing term units in the pricing term. Used with pricingTermUnit to define the length of the pricing term. For example, if pricingTermUnit is Months and this property is 1, the subscription is priced monthly. However, if the sellingModelType property is set to OneTime, the pricingTerm property is empty, because the product isn’t sold as a subscription. The only allowed value for this property is 1. | 56.0 |
| pricingTermUnit | ConnectApi.​Pricing​TermUnit | Unit of time used to define a pricing term. Value is:Months—Product is priced on a monthly basis.Annual—Product is priced on an annual basis.This unit of time is combined with a number (specified by the pricingTerm property) to define the full term of the subscription. For example, if the unit of time is Months and the pricingTerm property is set to 1, the subscription is priced monthly. However, if the sellingModelType property is set to OneTime, the pricingTermUnit property is empty, because the product isn’t sold as a subscription. | 56.0 |
| sellingModelType | ConnectApi.​Selling​ModelType | Type of product selling model. Values are:Evergreen—A subscription without an end date. An evergreen subscription continues until the shopper affirmatively cancels it.OneTime—A product that isn’t sold as a subscription.TermDefined—A subscription with a defined end date. The subscription continues for a specified time period. When the term ends, the subscription ends. | 56.0 |
| subscriptionTermRule | ConnectApi.​Subscription​TermRule | Rules for the subscription term. | 59.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​Pricing​TermUnit (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​Selling​ModelType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​Subscription​TermRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_subscription_term_rule.htm)
