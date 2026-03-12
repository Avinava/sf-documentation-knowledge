---
title: "Distribute Picked Quantities Output"
domain: chatterapi
topic: distribute-picked-quantities-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.298Z
estimatedTokens: 194
keywords: [Distribute, Picked, Quantities, Output, representation, were, distributed, orders, any, remaining, quantity]
---

# Distribute Picked Quantities Output

> Output representation of where the quantities were distributed in orders and any remaining quantity

# Distribute Picked Quantities Output

Output representation of where the quantities were distributed in orders and any remaining quantity

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fullyDistributedOrdersList | Order Quantities Output[] | Orders that have all quantities distributed. | Big | 58.0 |
| notDistributedOrdersList | Order Quantities Output[] | Orders that have no quantities available after distribution. | Big | 58.0 |
| partiallyDistributedOrdersList | Order Quantities Output[] | Orders that have partially distributed quantities after distribution. | Big | 58.0 |
| quantitiesRemainingList | Item Quantity Output[] | The quantities remaining after the distribution. | Big | 58.0 |
