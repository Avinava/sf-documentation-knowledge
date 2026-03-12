---
title: "Commerce Subscription Detail"
domain: chatterapi
topic: commerce-subscription-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.850Z
estimatedTokens: 498
keywords: [Commerce, Subscription, Detail, Representation]
---

# Commerce Subscription Detail

> Representation for the Commerce subscription details.

# Commerce Subscription Detail

Representation for the Commerce subscription details.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amendment​Status | String | Amendment status of the subscription. Possible values are:Failed—The operation status is failed.InProgress—The operation status is in progress.Success—The operation status is successful. | Small, 65.0 | 65.0 |
| billing | Commerce Subscription Billing Summary | Billing info associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| cancelStatus | String | Cancel status of the subscription. Possible values are:Failed—The operation status is failed.InProgress—The operation status is in progress.Success—The operation status is successful. | Small, 63.0 | 63.0 |
| endDate | String | End date associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| id | String | ID of the Commerce subscription record. | Small, 63.0 | 63.0 |
| lastAction | Subscription Action | Details about the most recent action performed on the subscription. | Small, 65.0 | 65.0 |
| process​Exceptions | Process Exception Output[] | Reserved for future use. | Small, 64.0 | 64.0 |
| product | Buyer Product Summary | Product associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| quantity | Double | Quantity associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| renewalStatus | String | Renewal status of the subscription. Possible values are:Failed—The operation status is failed.InProgress—The operation status is in progress.Success—The operation status is successful. | Small, 65.0 | 65.0 |
| sellingModel | Product Selling Model | Selling model associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| startDate | String | Start date associated with the Commerce subscription. | Small, 63.0 | 63.0 |
| subscription​Term | Integer | Subscription term associated with the Commerce subscription. | Small, 63.0 | 63.0 |

## Related Topics

- Commerce
                  Subscription Billing Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_billing_summary.htm)
- Subscription Action (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_subscription_action.htm)
- Buyer Product Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_product_summary.htm)
- Product Selling Model (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_selling_model.htm)
