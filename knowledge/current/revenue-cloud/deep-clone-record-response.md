---
title: "Deep Clone Record Response"
domain: revenue-cloud
topic: deep-clone-record-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.674Z
estimatedTokens: 122
keywords: [Deep, Clone, Record, Response, Output, representation, details, cloned, related, records.]
---

# Deep Clone Record Response

> Output representation of the details of the cloned related records.

# Deep Clone Record Response

Output representation of the details of the cloned related records.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​RecordId | String | ID of the created related record. | Small, 63.0 | 63.0 |
| entity​ApiName | String | API name of the created object. | Small, 63.0 | 63.0 |
| entity​Label | String | Label of the created object. | Small, 63.0 | 63.0 |

## Code Examples

```
"createdRecordList": [
    {
      "createdRecordId": "01tSG0000030Yb3YAE",
      "entityApiName": "Product2",
      "entityLabel": "Product"
    },
    {
      "createdRecordId": "0iOSG0000002rMn2AI",
      "entityApiName": "ProductSellingModelOption",
      "entityLabel": "Product Selling Model Option"
    },
    {
      "createdRecordId": "0v7SG0000001ktdYAA",
      "entityApiName": "ProductAttributeDefinition",
      "entityLabel": "Product Attribute Definition"
    }
  ]
```
