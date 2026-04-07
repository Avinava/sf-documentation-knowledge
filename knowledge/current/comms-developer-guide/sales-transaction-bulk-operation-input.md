---
title: "Sales Transaction Bulk Operation Input"
domain: comms-developer-guide
topic: sales-transaction-bulk-operation-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:26.039Z
estimatedTokens: 328
keywords: [Sales, Transaction, Bulk, Operation, perform, operations, quote, line, items, order, products]
---

> Input representation of the details of a request to perform bulk operations for
    specified quote line items or order products.

# Sales Transaction Bulk Operation Input

Input representation of the details of a request to perform bulk operations for specified quote line items or order products.

JSON example

This sample request deletes the quote line item that's specified in the graph property.

```

```

This sample request modifies the discount for all lines in a quote line group. Additionally, this request modifies the margin for all lines in another quote line group. The details of quote line groups are specified by using filter conditions.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| condition | String | Number that's assigned to a filter condition for sequential processing of filters. | Optional | 65.0 |
| filters | Sales Transaction Bulk Operation Filter[] | Details of the filter conditions. | Optional | 65.0 |
| method | String | Action that you want to perform on the specified object. Valid values are:DeletePatch | Optional | 65.0 |
| targetEntity | String | You can perform bulk operations on these target objects:QuoteLineItemQuoteLineGroupOrderItemOrderItemGroup | Optional | 65.0 |
| targetFields | Map<String, Object> | Fields of the specified target object on which you want to perform the operation. | Optional | 65.0 |

## Code Examples

```
{
  "pricingPref": "System",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "method": "PATCH",
            "type": "Quote",
            "id": "801xx000003GZ9bAAG"
          }
        }
      }
    ]
  },
  "bulkOperations": [
    {
      "method": "Delete",
      "targetEntity": "QuoteLineItem"
    }
  ]
}
```

```
{
  "pricingPref": "System",
  "graph": {
    "graphId": "updateQuote",
    "records": [
      {
        "referenceId": "refQuote",
        "record": {
          "attributes": {
            "method": "PATCH",
            "type": "Quote",
            "id": "0Q0SG000000Awlt0AC"
          }
        }
      }
    ]
  },
  "bulkOperations": [
    {
      "method": "Patch",
      "targetEntity": "QuoteLineItem",
      "targetFields": {
        "Discount": "50"
      },
      "filters": [
        {
          "field": "QuoteLineGroup",
          "operator": "eq",
          "value": [
            "1C9SG0000000IrO0AU"
          ],
          "index": "1"
        }
      ],
      "condition": "1"
    },
    {
      "method": "Patch",
      "targetEntity": "QuoteLineItem",
      "targetFields": {
        "Margin": "20"
      },
      "filters": [
        {
          "field": "QuoteLineGroup",
          "operator": "eq",
          "value": [
            "1C9SG0000000IrO0AP"
          ],
          "index": "1"
        }
      ],
      "condition": "1"
    }
  ]
}
```
