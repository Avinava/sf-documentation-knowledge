---
title: "Object Input Map"
domain: revenue-cloud
topic: object-input-map
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.083Z
estimatedTokens: 194
keywords: [Input, Map, representation, sObject, record, key-value]
---

# Object Input Map

> Input representation of an sObject record in a key-value map format.

# Object Input Map

Input representation of an sObject record in a key-value map format.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map <String, String> | Configuration input for the record process. Valid values are:type—Type of sales transaction such as Quote or Order.method—HTTP methods such as POST, PATCH, and DELETE.id—Unique identifier for the record. Required for PATCH and DELETE operations.criteria—Criteria to group order or quote line items. For example, group order or quote line items based on a monthly billing frequency.action—Action to group order or quote line items. Valid values are:GroupByGroupUngroupGroupAllDeleteGroup | Required | 60.0 |

## Code Examples

```
{
  "records": [
    {
      "referenceId": "refOrder",
      "record": {
        "attributes": {
          "type": "Order",
          "method": "PATCH",
          "id": "402xx000003KY5vJGH"
        },
        "Quantity": 5
      }
    }
  ]
}
```
