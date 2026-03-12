---
title: "Order Item Summary Adjustment Collection Input"
domain: chatterapi
topic: order-item-summary-adjustment-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.292Z
estimatedTokens: 98
keywords: [Order, Item, Summary, Adjustment, Collection, Input, summaries]
---

# Order Item Summary Adjustment Collection Input

> Collection of order item summaries.

# Order Item Summary Adjustment Collection Input

Collection of order item summaries.

Root XML tag

<orderItemSummaryCollectionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderItem​Summaries | Order Item Summary Adjustment Input[] | List of order item summaries. | Required | 53.0 |

## Code Examples

```
{
"orderItemSummaries":[{  
  "orderItemSummaryId":"10uxx00000000W0001"
  },
  {
  "orderItemSummaryId":"10uxx00000000W0054"
  }
]
}
```

## Related Topics

- Order Item Summary Adjustment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_item_summary_adjustment_input.htm)
