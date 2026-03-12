---
title: "Promotion Limit"
domain: loyalty
topic: promotion-limit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.600Z
estimatedTokens: 196
keywords: [Promotion, Limit, Output, representation, eligible]
---

# Promotion Limit

> Output representation of the promotion limit of an eligible promotion.

# Promotion Limit

Output representation of the promotion limit of an eligible promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| limitCurrentAttainment | Double | Value of the promotion's limit that has been attained so far. | Small, 60.0 | 60.0 |
| limitTarget | Double | Value beyond which the promotion can't be applied for customer carts. | Small, 60.0 | 60.0 |
| limitType | String | Type of the promotion limit. Possible values are:CartItemCount—Maximum number of cart items the promotion applies to. This value maps to Per Line Item in Salesforce Lightning.OrderCount—Maximum number of carts the promotion applies to. This value maps to Per Cart in Salesforce Lightning. | Small, 60.0 | 60.0 |
