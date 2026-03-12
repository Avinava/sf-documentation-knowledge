---
title: "Promotion Limit"
domain: revenue-cloud
topic: promotion-limit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.259Z
estimatedTokens: 192
keywords: [Promotion, Limit, Output, representation, details, promotion, limit, eligible, promotion.]
---

# Promotion Limit

> Output representation of the details of the promotion limit of an eligible
    promotion.

# Promotion Limit

Output representation of the details of the promotion limit of an eligible promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| limitCurrent​Attainment | Double | Current attainment of the promotion's limit value. | Big, 66.0 | 66.0 |
| limitTarget | Double | Value beyond which the promotion can't be applied to customer carts. | Big, 66.0 | 66.0 |
| limitType | String | Limit type for the promotion. Valid values are:CartItemCount—Specifes the limit type that represents the maximum number of cart items the promotion can applied for.OrderCount—Specifies the limit type that represents the maximum number of carts the promotion can applied for. | Big, 66.0 | 66.0 |
