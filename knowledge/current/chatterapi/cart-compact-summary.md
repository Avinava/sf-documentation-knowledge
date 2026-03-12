---
title: "Cart Compact Summary"
domain: chatterapi
topic: cart-compact-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.614Z
estimatedTokens: 164
keywords: [Cart, Compact, Summary, Includes, subset, including, total, unique, product, counts]
---

# Cart Compact Summary

> A compact cart summary for an existing cart. Includes a subset of fields from the cart
    summary, including the total and unique product counts.

# Cart Compact Summary

A compact cart summary for an existing cart. Includes a subset of fields from the cart summary, including the total and unique product counts.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of the Cart. | Small, 64.0 | 64.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the cart. | Small, 64.0 | 64.0 |
| totalProductCount | String | Total count of items in the cart. | Small, 64.0 | 64.0 |
| uniqueProductCount | Integer | Total count of unique items, or SKUs, in the cart. | Small, 64.0 | 64.0 |
