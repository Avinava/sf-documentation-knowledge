---
title: "Sales Transaction Record"
domain: revenue-cloud
topic: sales-transaction-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.428Z
estimatedTokens: 88
keywords: [Sales, Transaction, Record, Generic, output, representation, any, sales, transaction, record, type.]
---

# Sales Transaction Record

> Generic output representation for any sales transaction record type.

# Sales Transaction Record

Generic output representation for any sales transaction record type.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data | Map<String, Object> | Represents the data map for any sales transaction record. | Small, 65.0 | 65.0 |

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
