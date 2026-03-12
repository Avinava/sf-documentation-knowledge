---
title: "Composite Promotion Qualifier"
domain: chatterapi
topic: composite-promotion-qualifier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.695Z
estimatedTokens: 288
keywords: [Composite, Promotion, Qualifier, Output, representation]
---

# Composite Promotion Qualifier

> Output representation of the promotion qualifier.

# Composite Promotion Qualifier

Output representation of the promotion qualifier.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| approaching​DiscountThreshold | String | The cart amount that a customer has to reach before seeing an approaching discount message. For example, if a promotion qualifier minimum is set at $150 and this field is set at $50, then a customer receives a banner notification that they’re approaching the discount when they have at least $50 in their cart. | Small, 64.0 | 64.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the promotion qualifier. | Small, 62.0 | 62.0 |
| qualifier​References | Item Reference[] | List of products and categories that qualifies for the promotion. | Small, 62.0 | 62.0 |
| qualifierType | String | Type of the promotion qualifier. Possible values are:Amount—Minimum spend amount.Quantity—Minimum quantity. | Small, 62.0 | 62.0 |
| qualifierValue | Double | Value for the promotion qualifier. For example, if qualifier type is Quality, the value can be "3". | Small, 62.0 | 62.0 |

## Related Topics

- Item
                Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_item_reference.htm)
