---
title: "Sales Transaction"
domain: revenue-cloud
topic: sales-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.563Z
estimatedTokens: 362
keywords: [Sales, Transaction, Output, representation]
---

# Sales Transaction

> Output representation of the request to create a sales transaction.

# Sales Transaction

Output representation of the request to create a sales transaction.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDetails | Sales Transaction Context | Details of the context that’s created for the sales transaction. | Small, 63.0 | 63.0 |
| errorResponse | Sales Transaction Error Response[] | Details of the error if the operation fails. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates if the operation is successful (true) or not (false). | Small, 63.0 | 63.0 |
| salesTransactionId | String | ID of the sales transaction, such as a quote or an order. | Small, 63.0 | 63.0 |
| statusUrl | String | URL to check the status of the operation. | Small, 63.0 | 63.0 |
| trackerId | String | Unique identifier assigned to a specific operation or request that's used for tracking and referencing the operation. | Small, 63.0 | 63.0 |

The **Calculation Status** field for a quote or an order shows an intermediate status as Saving during the creation of a sales transaction. If the pricing calculation fails, then the **Calculation Status** field shows the Pricing Calculation Failed status. See [Quote standard object](https://developer.salesforce.com/docs/atlas.en-us.254.0.object_reference.meta/object_reference/sforce_api_objects_quote.htm "HTML (New Window)") for a list of applicable calculation status values.

## Code Examples

```
{
  "contextDetails": {
    "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708",
    "isBuiltInTransaction": true
  },
  "errorResponse": {
    "errorCode": "INVALID_API_INPUT",
    "message": "Include record type and method in the request and try again.",
    "referenceId": "refQuoteItem2"
  },
  "isSuccess": true,
  "salesTransactionId": "0Q0xx0000004CNYCA2",
  "statusUrl": null,
  "trackerId": null
}
```

## Related Topics

- Sales Transaction Context (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sales_transaction_context_output.htm)
- Sales Transaction Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_sales_transaction_error_response.htm)
