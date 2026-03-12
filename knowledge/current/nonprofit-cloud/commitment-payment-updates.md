---
title: "Commitment Payment Updates"
domain: nonprofit-cloud
topic: commitment-payment-updates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.943Z
estimatedTokens: 173
keywords: [Commitment, Payment, Updates, Output, representation, fundraising]
---

# Commitment Payment Updates

> Output representation of the request to update the commitment payment for a fundraising
    commitment.

# Commitment Payment Updates

Output representation of the request to update the commitment payment for a fundraising commitment.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Commitment Payment Updates[] | Contains the response of the commitment payment update. | Small, 60.0 | 60.0 |
| failures | Integer | Number of gift commitments that failed to be updated. | Small, 60.0 | 60.0 |
| notProcessed | Integer | Number of gift commitments that weren't processed. | Small, 60.0 | 60.0 |
| successes | Integer | Number of gift commitments that were updated. | Small, 60.0 | 60.0 |

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
        "giftcommitment": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "paymentinstrument": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        }
      }
    }
  ]
}
```

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
        "giftcommitment": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        },
        "paymentinstrument": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        }
      }
    }
  ]
}
```

## Related Topics

- Commitment Payment Updates[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_commitment_payment_updates_respons.htm)
- Error
                  Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_error_detail.htm)
- Commitment Payment Updates Response Link (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_commitment_payment_updates_response_link.htm)
