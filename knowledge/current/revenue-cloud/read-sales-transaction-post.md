---
title: "Read Sales Transaction (POST)"
domain: revenue-cloud
topic: read-sales-transaction-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.909Z
estimatedTokens: 210
keywords: [Sales, Transaction, POST, Retrieve, data, efficiently, initialized, hydrated, context]
---

# Read Sales Transaction (POST)

> Retrieve sales transaction data efficiently from an initialized or a
      hydrated context.

# Read Sales Transaction (POST)

Retrieve sales transaction data efficiently from an initialized or a hydrated context.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context to retrieve the data records. | Required | 65.0 |
| queryTags | List<String> | List of objects that must be retrieved from the context. | Optional | 65.0 |

Response body for POST

[Read Sales Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_read_sales_transaction_output.htm "Output representation of the request to read a sales transaction.")

## Code Examples

```
/connect/revenue/transaction-management/sales-transactions/actions/read
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue/transaction-management/sales-transactions/actions/read
```

```
{
  "contextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
  "queryTags": [
    "Quote",
    "QuoteLineItem",
    "Product"
  ]
}
```

## Related Topics

- Read Sales Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_read_sales_transaction_output.htm)
