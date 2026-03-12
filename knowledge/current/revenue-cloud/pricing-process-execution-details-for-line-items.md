---
title: "Pricing Process Execution Details for Line Items"
domain: revenue-cloud
topic: pricing-process-execution-details-for-line-items
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.172Z
estimatedTokens: 183
keywords: [Pricing, Process, Execution, Details, Line, Items, Output, representation, pricing, process, execution, details, line, items, along, error, response, generation, status.]
---

# Pricing Process Execution Details for Line Items

> Output representation of the pricing process execution details for the line items along
    with the error details and response generation status.

# Pricing Process Execution Details for Line Items

Output representation of the pricing process execution details for the line items along with the error details and response generation status.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Pricing Error Response | Error encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the response was generated successfully (true) or not (false). | Small, 63.0 | 63.0 |
| lineItemDetails​List | Line Item Details Response [] | List of the line items for which the pricing process is executed. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "error": {},
  "isSuccess": true,
  "lineItemDetailsList": [
    {
      "lineItemId": "LineItem1",
      "status": "Success"
    },
    {
      "lineItemId": "LineItem2",
      "status": "Success"
    },
    {
      "lineItemId": "LineItem3",
      "status": "Failure"
    }
  ]
}
```

## Related Topics

- Pricing Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
- Line Item Details Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_process_execution_line_item_details_response.htm)
