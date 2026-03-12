---
title: "Asset Amendment (POST)"
domain: revenue-cloud
topic: asset-amendment-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.429Z
estimatedTokens: 357
keywords: [Asset, Amendment, POST, Initiate, execute, quote, order]
---

# Asset Amendment (POST)

> Initiate and execute the amendment of a quote or an
    order.

# Asset Amendment (POST)

Initiate and execute the amendment of a quote or an order.

Special Access Rules

To use this API, you need the InitiateAmend API permission set.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Amendment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_amend_output.htm "Output representation of the details of an amendment record.")

## Code Examples

```
/connect/revenue-management/assets/actions/amend
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue-management/assets/actions/amend
```

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

## Related Topics

- Amendment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_amend_output.htm)
