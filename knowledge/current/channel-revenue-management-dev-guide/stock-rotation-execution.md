---
title: "Stock Rotation Execution"
domain: channel-revenue-management-dev-guide
topic: stock-rotation-execution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.881Z
estimatedTokens: 145
keywords: [Stock, Rotation, Execution, Output, representation, action]
---

# Stock Rotation Execution

> Output representation for a stock rotation action request.

# Stock Rotation Execution

Output representation for a stock rotation action request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorDetails | Stock Rotation Output Error[] | Details of errors if the operation was unsuccessful. | Big, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the operation was successful (true) or not (false). | Big, 66.0 | 66.0 |
| stockRotationExecutionId | String | The stock rotation execution ID that was processed. | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "stockRotationExecutionId": "1Ft1234567890abcdef",
  "isSuccess": true,
  "errorDetails": null
}
```

## Related Topics

- Stock Rotation Output Error (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_responses_stock_rotation_output_error.htm)
