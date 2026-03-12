---
title: "Promotion Execution"
domain: chatterapi
topic: promotion-execution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.685Z
estimatedTokens: 174
keywords: [Promotion, Execution, discounts, applied, cart, items]
---

# Promotion Execution

> Promotion discounts applied to a cart and its items.

# Promotion Execution

Promotion discounts applied to a cart and its items.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 56.0 and later. In version 56.0 and later, use [Promotion Evaluation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm "Results of a promotion evaluation.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| sales​Transaction | Map<String, Object> | Map of discounts applied to a cart and the specific discount for each cart item. | 53.0 | 53.0 |

## Related Topics

- Promotion Evaluation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_promotion_evaluation.htm)
