---
title: "Amendment Input"
domain: revenue-cloud
topic: amendment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.580Z
estimatedTokens: 252
keywords: [Amendment, Input, representation, record]
---

# Amendment Input

> Input representation of the details of the request to create an amendment
    record.

# Amendment Input

Input representation of the details of the request to create an amendment record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetIds | String[] | IDs of the assets that you want to add to the amendment record. | Required | 62.0 |
| amendmentStart​Date | String | Start date of the amendment. | Required | 62.0 |
| contract​Id | String | ID of the Contract record that you want to sync with the amendment quote. | Optional | 62.0 |
| opportunity​Id | String | ID of the Opportunity record that you want to sync with the amendment quote. | Optional | 62.0 |
| outputRecord​Id | String | ID of the quote or order record that you want to add the assets to. | Optional | 62.0 |
| output​RecordType | String | Type of amendment record that you want to create. | Required | 62.0 |
| quantity​Change | Double | Quantity to add to or reduce from the asset's existing quantity. | Required | 62.0 |

## Code Examples

```
{
  "assetIds": [
    "02iSG0000003NMhYAM",
    "02iSG0000006DvSYAU"
  ],
  "amendmentStartDate": "2023-10-04T00:00:00",
  "contractId": "800SG00000CFpepYAD",
  "opportunityId": "006SG000004W5tVYAS",
  "outputRecordId": "801SG00000DX1jWYAT",
  "outputRecordType": "Quote",
  "quantityChange": 5
}
```
