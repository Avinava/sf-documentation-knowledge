---
title: "Promotions Creation (POST, PUT)"
domain: loyalty
topic: promotions-creation-post-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.225Z
estimatedTokens: 366
keywords: [Promotions, Creation, POST, PUT, promotion, provided, limits, eligibility, conditions]
---

# Promotions Creation (POST, PUT)

> Create a promotion based on the provided promotion limits and eligibility
    conditions.

# Promotions Creation (POST, PUT)

Create a promotion based on the provided promotion limits and eligibility conditions.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST PUT

Response body for GET

[Promotion](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_output.htm "Output representation of the promotion with rule configuration.")

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionDetails | Unified Promotions Input[] | Configuration of the promotion | Required | 64.0 |
| rules | Unified Promotion Template Input[] | List of rules that are configured for a promotion. | Required | 64.0 |

Response body for POST

[Promotion](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_output.htm "Output representation of the promotion with rule configuration.")

Request body for PUT

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| promotionDetails | Unified Promotions Input[] | Configuration of the promotion | Required | 64.0 |
| rules | Unified Promotion Template Input[] | List of rules that are configured for a promotion. | Required | 64.0 |

Response body for PUT

[Promotion](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_output.htm "Output representation of the promotion with rule configuration.")

## Code Examples

```apex
/global-promotions-management/promotions
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/global-promotions-management/promotions
```

## Related Topics

- Promotion (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_output.htm)
- Unified
                        Promotions Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotions_input.htm)
- Unified
                        Promotion Template Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotion_template_input.htm)
