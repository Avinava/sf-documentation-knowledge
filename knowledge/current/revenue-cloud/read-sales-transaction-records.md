---
title: "Read Sales Transaction Records"
domain: revenue-cloud
topic: read-sales-transaction-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.863Z
estimatedTokens: 123
keywords: [Sales, Transaction, Records, Output, representation, map, keys, associated, record, Quote, QuoteLineItem]
---

# Read Sales Transaction Records

> Output representation of the details of a map of keys and associated values. The keys are
    record type names, such as a Quote or QuoteLineItem, and values are lists of records of that
    type.

# Read Sales Transaction Records

Output representation of the details of a map of keys and associated values. The keys are record type names, such as a Quote or QuoteLineItem, and values are lists of records of that type.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| records | Map<String, Sales Transaction Record>> | Map of record type names to the list of records. | Small, 65.0 | 65.0 |

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

- Sales Transaction Record (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_sales_transaction_record_output.htm)
