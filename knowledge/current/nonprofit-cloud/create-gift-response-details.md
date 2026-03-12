---
title: "Create Gift Response Details"
domain: nonprofit-cloud
topic: create-gift-response-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.985Z
estimatedTokens: 142
keywords: [Gift, Output, representation]
---

# Create Gift Response Details

> Output representation of the request details to create the gift.

# Create Gift Response Details

Output representation of the request details to create the gift.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Details[] | Details of the error if the request failed to process. | Small, 60.0 | 60.0 |
| links | Create Gift Response Link | Links to the response object. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the request was processed successfully (true) or not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
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

- Error
                  Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_error_detail.htm)
- Create Gift Response Link (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_create_gift_response_link.htm)
