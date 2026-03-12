---
title: "Stock Rotation Execution (POST)"
domain: channel-revenue-management-dev-guide
topic: stock-rotation-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.896Z
estimatedTokens: 348
keywords: [Stock, Rotation, Execution, POST, Performs, action, line, items, filters]
---

# Stock Rotation Execution (POST)

> Performs a stock rotation action for the specified line items and filters.

# Stock Rotation Execution (POST)

Performs a stock rotation action for the specified line items and filters.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | The action to perform on the stock rotation execution. Valid values are:GenerateClaim — Generate claims for scrapped items and returns.CalculateClaimAmount — Calculate the claim amount for the stock rotation line items that are filtered. | Required | 66.0 |
| filterCriteria | Stock Rotation Filter Criteria Input | The filter criteria for selecting stock rotation line items. | Optional. Either sourceObjectIds or filterCriteria must be provided. | 66.0 |
| sourceObjectIds | String[] | The IDs of stock rotation line items to include in the action. | Optional. Either sourceObjectIds or filterCriteria must be provided. | 66.0 |
| stockRotationExecutionId | String | The ID of the stock rotation execution to run the action on. | Required. | 66.0 |

Response body for POST

[Stock Rotation Execution](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_requests_stock_rotation_action.htm "Output representation for a stock rotation action request.")

## Code Examples

```
/connect/stock-rotation-execution
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/stock-rotation-execution
```

```
{
  "actionType": "GenerateClaim",
  "stockRotationExecutionId": "1Ft1234567890abcdef",
  "sourceObjectIds": [
    "obj-1",
    "obj-2",
    "obj-3"
  ],
  "filterCriteria": {
    "fieldCriteria": [
      {
        "fieldApiName": "AccepedQuantity",
        "operator": "GreaterThan",
        "filterValues": [
          "100"
        ]
      },
      {
        "fieldApiName": "Status",
        "operator": "In",
        "filterValues": [
          "ReadyForClaim"
        ]
      }
    ]
  }
}
```

## Related Topics

- Stock Rotation Filter Criteria
                            Input (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_requests_stock_rotation_field_criteria_input.htm)
- Stock Rotation Execution (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/connect_requests_stock_rotation_action.htm)
