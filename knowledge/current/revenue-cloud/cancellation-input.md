---
title: "Cancellation Input"
domain: revenue-cloud
topic: cancellation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.854Z
estimatedTokens: 233
keywords: [Cancellation, Input, representation, details, request, cancel, quote, order.]
---

# Cancellation Input

> Input representation of the details of the request to cancel a quote or an
    order.

# Cancellation Input

Input representation of the details of the request to cancel a quote or an order.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetIds | String[] | IDs of the assets that you want to cancel. All assets in a request must belong to the same price book. | Required | 62.0 |
| cancellation​Date | String | Effective date of the cancellation. | Required | 62.0 |
| contract​Id | String | ID of the Contract record that you want to sync with the cancellation quote. | Optional | 62.0 |
| opportunity​Id | String | ID of the Opportunity record that you want to sync with the cancellation quote. | Optional | 62.0 |
| output​RecordId | String | ID of the quote or order that you want to cancel. | Optional | 62.0 |
| output​RecordType | String | Type of cancellation record that you want to create. | Required | 62.0 |

## Code Examples

```
{
  "assetIds": [
    "02iSG0000003NMhYAM",
    "02iSG0000006DvSYAU"
  ],
  "cancellationDate": "2023-10-04T00:00:00",
  "contractId": "800SG00000CFpepYAD",
  "opportunityId": "006SG000004W5tVYAS",
  "outputRecordId": "801SG00000DX1jWYAT",
  "outputRecordType": "Quote"
}
```
