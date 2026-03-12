---
title: "Create Gift"
domain: nonprofit-cloud
topic: create-gift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.975Z
estimatedTokens: 158
keywords: [Gift, Output, representation, created, transaction]
---

# Create Gift

> Output representation of the details of the created gift transaction
    response.

# Create Gift

Output representation of the details of the created gift transaction response.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Create Gift Response Details[] | Contains the details of the gift response. | Small, 60.0 | 60.0 |
| failures | Integer | Number of transactions that failed to be created. | Small, 60.0 | 60.0 |
| notProcessed | Integer | Number of transactions that weren’t processed. | Small, 60.0 | 60.0 |
| successes | Integer | Number of transactions that were created. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "successes": 0,
  "failures": 0,
  "notProcessed": 0,
  "details": [
    {
      "success": true,
      "errors": [
        {
          "field": "string",
          "message": "string"
        }
      ],
      "links": {
        "account": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "gifttransaction": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "giftcommitment": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "paymentinstrument": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "gifttransactiondesignation": [
          {
            "href": "/services/data/vXX.X/sobjects/sObject/...",
            "id": "string"
          }
        ],
        "campaign": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "outreachsourcecode": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        }
      }
    }
  ]
}
```

## Related Topics

- Create Gift Response Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_create_gift_response_detail.htm)
