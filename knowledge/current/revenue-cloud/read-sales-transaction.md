---
title: "Read Sales Transaction"
domain: revenue-cloud
topic: read-sales-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.861Z
estimatedTokens: 182
keywords: [Sales, Transaction, Output, representation]
---

# Read Sales Transaction

> Output representation of the request to read a sales transaction.

# Read Sales Transaction

Output representation of the request to read a sales transaction.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Place Sales Transaction Error Response[] | List of errors encountered during the processing of the API request. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 65.0 | 65.0 |
| response | Read Sales Transaction Records[] | Contains a map of keys and associated values. The keys are record type names, such as a Quote or QuoteLineItem, and values are lists of records of that type. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "response": {
    "records": {
      "Quote": [
        {
          "data": {
            "Id": "0Q05g000000AJK954",
            "Name": "Sample Quote",
            "Status": "Draft",
            "TotalPrice": 1500
          }
        }
      ],
      "QuoteLineItem": [
        {
          "data": {
            "Id": "0QL5g000000DEF456",
            "Product2Id": "01t5g000000GUE752",
            "Quantity": 2,
            "UnitPrice": 750,
            "TotalPrice": 1500
          }
        }
      ]
    }
  },
  "isSuccess": true,
  "errorResponse": []
}
```

## Related Topics

- Place Sales Transaction Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_sales_transaction_error_response.htm)
- Read Sales Transaction Records (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_read_sales_transaction_records_output.htm)
