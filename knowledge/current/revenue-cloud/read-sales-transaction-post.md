---
title: "Read Sales Transaction (POST)"
domain: revenue-cloud
topic: read-sales-transaction-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-07-26T01:59:42.256Z
estimatedTokens: 305
keywords: [Sales, Transaction, POST, Retrieve, efficiently, initialized, hydrated, context]
---

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
| sobjectFieldMap | Map<String, List<String>> | Mapping of an sObject name to a list. The list includes the sObject field names on the object or can be an empty list. An empty list specifies that all fields on the object must be queried. | Optional | 67.0 |
| filters | List<Sales Transaction Filter Condition> | Filter conditions to query the context data. | Optional | 67.0 |

Response body for POST

[Read Sales Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_read_sales_transaction_output.htm "Output representation of the request to read a sales transaction.")

## Code Examples

```
/connect/revenue/transaction-management/sales-transactions/actions/read
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/revenue/transaction-management/sales-transactions/actions/read
```

```
{
  "contextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
  "queryTags": [
    "Quote",
    "QuoteLineItem",
    "Product"
  ],
  "sobjectFieldMap": {
    "Quote": [],
    "QuoteLineItem": [
      "Quantity",
      "Product2Id"
    ]
  },
  "filters": [
    {
      "sObjectName": "Quote",
      "fieldName": "Status",
      "operator": "Equals",
      "operands": [
        {
          "value": "Draft",
          "type": "STRING"
        }
      ]
    }
  ]
}
```

## Related Topics

- Sales Transaction Filter Condition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_sales_transaction_filter_condition_input.htm)
- Read Sales Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_read_sales_transaction_output.htm)
