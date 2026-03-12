---
title: "Update Ramp Deal (POST)"
domain: revenue-cloud
topic: update-ramp-deal-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.004Z
estimatedTokens: 609
keywords: [Ramp, Deal, POST, Modify, scenarios, segment, updates, quantity, discount, date, change]
---

# Update Ramp Deal (POST)

> Modify a ramp deal in scenarios where a segment has updates such as
      quantity, discount, or date change.

# Update Ramp Deal (POST)

Modify a ramp deal in scenarios where a segment has updates such as quantity, discount, or date change.

Update a ramp deal in these scenarios.

-   A segment has quantity or discount changes.
-   A trial segment or custom segment has a date change. A custom segment is an added or deleted segment. In this scenario, you can update a ramp deal during the initial sale before assetization.

This API request returns the updated context with the context ID. You must call the Place Sales Transaction (POST) API by specifying this context ID to apply the ramp deal updates. See [Place Sales Transaction (POST) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This API is applicable when you're working with line ramps. To work with ramp deals for groups, you must use the Place Sales Transaction API and specify the groupRampActions property.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| resourceId | String | ID of the context data that’s used to build the pricing procedure. Get the context instance ID by invoking the Context Service API. See Context Service (POST). | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| added​Nodes | Context Node Input[] | Details of the nodes to be added. | Required | 62.0 |
| deleted​Nodes | Context Node Input[] | Details of the nodes to be deleted. | Required | 62.0 |
| execution​Settings | Execution Settings Input[] | Settings to run the pricing or configuration rules. | Optional | 62.0 |
| updated​Nodes | Context Node Input[] | Details of the nodes to be updated. | Required | 62.0 |

Response body for POST

[Ramp Deal Service](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm "Output representation of the details of a created, updated, or deleted ramp deal.")

## Code Examples

```
/connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-update
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue-management/sales-transaction-contexts/4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9/actions/ramp-deal-update
```

```
{
  "executionSettings": {
       "executePricing": true,
       "executeConfigRules": false
  },
  "addedNodes": [
    {
      "contextNodePath": [
        "4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9", // Context ID
        "0Q0xx0000004CPACA2", //Quote or Order ID
        "RandomUUID" // random UUID for Quote Line Item or Order Item ID
      ],
      "contextNode": {
         "Discount": 10,
         "Quantity": 5,
         "ItemSegmentName": "Year 5",
         "StartDate":"2024-09-07T00:00:00.000Z",
         "EndDate":"2024-09-07T00:00:00.000Z"
      }
    }
  ],
  "updatedNodes": [
     {
      "contextNodePath": [
        "4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9", // Context ID
        "0Q0xx0000004CPACA2", //Quote or Order ID
        "0QLxx0000004CfIGAU" // Quote Line ID or Order Line ID to update
      ],
      "contextNode": {
          "Discount": 10,
          "Quantity": 5
      }
    } 
  ],
  "deletedNodes": [
    {
      "contextNodePath": [
        "4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9",
        "0Q0xx0000004CPACA2",
        "0QLxx0000004CfIGAU" // Quote Line Item ID to delete
      ]
    }
  ]
}
```

## Related Topics

- Context Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_context_node_input.htm)
- Execution Settings Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_execution_settings_input.htm)
- Ramp Deal
              Service (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm)
