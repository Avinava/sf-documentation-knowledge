---
title: "Clone Sales Transaction"
domain: revenue-cloud
topic: clone-sales-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.184Z
estimatedTokens: 202
keywords: [Clone, Sales, Transaction, Output, representation, result, cloning, records]
---

# Clone Sales Transaction

> Output representation for the result of cloning records within a sales transaction.

# Clone Sales Transaction

Output representation for the result of cloning records within a sales transaction.

JSON example

This example shows a sample of a successful response.

```

```

This example shows a sample error response.

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| requestId | String | Request ID of the process that can be used to query the async status. | 64.0 |
| salesTransactionId | String | ID of the quote line item, order item, quote line group, or order item group record. | 64.0 |
| success | Boolean | Indicates whether the synchronous part of the processing is successful (true) or not (false). | 64.0 |
| errors | Clone Sales Transaction Error Response[] | List of errors encountered during synchronous processing. | 64.0 |

## Code Examples

```
{
    "requestId": "9356bcbf04f06e22360a09807c13e1d4e395",
    "salesTransactionId": "0Q0SG000000ACxf0AG",
    "errors": [],
    "success": true
}
```

```
{
    "requestId": "9356bcbf04f06e22360a09807c13e1d4e395",
    "salesTransactionId": "0Q0SG000000ACxf0AG",
    "errors": [
        {
            "errorCode": "INVALID_API_INPUT",
            "message": "Specify only one record",
            "referenceId": "0QLxx0000004CBYGA2"
        }
    ],
    "success": false
}
```

## Related Topics

- Clone Sales Transaction Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_clone_sales_transaction_error_response.htm)
