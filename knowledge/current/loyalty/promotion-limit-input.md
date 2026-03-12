---
title: "Promotion Limit Input"
domain: loyalty
topic: promotion-limit-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.979Z
estimatedTokens: 401
keywords: [Promotion, Limit, Input, representation, limits]
---

# Promotion Limit Input

> Input representation details of the promotion limits.

# Promotion Limit Input

Input representation details of the promotion limits.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| liabilityLimit | Double | Maximum financial liability that the promotion can incur. | Optional | 60.0 |
| liabilityPer​CustomerLimit | Double | Maximum financial liability per customer that the promotion can incur. | Optional | 60.0 |
| loyaltyProgram​Currency | Name And Id Input [] | ID or name of the active loyalty program currency associated with loyalty points. | Optional | 60.0 |
| perCart​Limit | Integer | Maximum number of carts the promotion applies to. | Optional | 60.0 |
| perLine​ItemLimit | Integer | Maximum number of cart items the promotion applies to. | Optional | 60.0 |
| pointsLimit | Double | Maximum number of points that the promotion can credit. | Optional | 60.0 |
| pointsPer​CustomerLimit | Double | Maximum number of points that the promotion can credit to a customer. | Optional | 60.0 |
| rewardLimit | Integer | Maximum number of rewards that can be issued by the promotion. | Optional | 63.0 |
| totalUsageLimit | Integer | Maximum number of times the promotion can be applied in total. | Optional | 64.0 |
| usePer​CustomerLimit | Integer | Maximum number of times the promotion can be applied for a customer. | Optional | 60.0 |
| vouchersLimit | Integer | Maximum number of vouchers that the promotion can issue. | Optional | 60.0 |
| vouchersPer​CustomerLimit | Integer | Maximum number of vouchers that the promotion can issue to a customer. | Optional | 60.0 |

## Related Topics

- Name And Id Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_name_and_id_input.htm)
