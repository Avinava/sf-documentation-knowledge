---
title: "Create Gift Response Link"
domain: nonprofit-cloud
topic: create-gift-response-link
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.989Z
estimatedTokens: 180
keywords: [Gift, Link, Output, representation, links]
---

# Create Gift Response Link

> Output representation of the links to the response object.

# Create Gift Response Link

Output representation of the links to the response object.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| account | Link Details | Link to the donor account. | Small, 60.0 | 60.0 |
| gift​commitment | Link Details | Link to the gift commitment response. | Small, 60.0 | 60.0 |
| gift​transaction | Link Details | Link to the gift transaction response. | Small, 60.0 | 60.0 |
| gifttransaction​designation | Link Details | Link to the gift transaction designations. | Small, 60.0 | 60.0 |
| payment​instrument | Link Details | Link to the payment instrument response. | Small, 60.0 | 60.0 |

## Code Examples

```
{
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
```

## Related Topics

- Link
                Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_link_detail.htm)
- Link
                  Details (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_link_detail.htm)
