---
title: "Commerce Webstore Carts Compact Summary"
domain: chatterapi
topic: commerce-webstore-carts-compact-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.310Z
estimatedTokens: 243
keywords: [Commerce, Webstore, Carts, Compact, Summary, cart, includes, subset, including, total, unique, product, counts]
---

# Commerce Webstore Carts Compact Summary

> Get a compact cart summary for an existing cart. The compact cart
      summary includes a subset of fields from the cart summary, including the total and unique
      product counts.

# Commerce Webstore Carts Compact Summary

Get a compact cart summary for an existing cart. The compact cart summary includes a subset of fields from the cart summary, including the total and unique product counts.

Resource

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | Optional | 64.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 64.0 |

Response body for GET

[Cart Compact Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary_compact.htm "A compact cart summary for an existing cart. Includes a subset of fields from the cart summary, including the total and unique product counts.")

## Code Examples

```
/commerce/webstores/${webstoreId}/carts/compact-summary
```

## Related Topics

- Cart Compact Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary_compact.htm)
