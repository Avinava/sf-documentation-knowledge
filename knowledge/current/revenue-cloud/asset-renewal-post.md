---
title: "Asset Renewal (POST)"
domain: revenue-cloud
topic: asset-renewal-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.617Z
estimatedTokens: 373
keywords: [Asset, Renewal, POST, Initiate, execute, renewal, asset.]
---

# Asset Renewal (POST)

> Initiate and execute the renewal of an asset.

# Asset Renewal (POST)

Initiate and execute the renewal of an asset.

Special Access Rules

To use this API, you need the InitiateRenewal API permission set.

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
| assetIds | String[] | IDs of the assets that you want to renew. | Required | 62.0 |
| contractId | String | ID of the Contract record that you want to sync with the renewal of the Quote or Order record. | Optional | 62.0 |
| opportunity​Id | String | ID of the Opportunity record that you want to sync with the renewal quote. | Optional | 62.0 |
| output​RecordId | String | ID of the Quote or Order record that you want to renew. | Optional | 62.0 |
| output​RecordType | String | Type of renewal record that you want to create. | Required | 62.0 |
| renewal​EndDate | String | End date of the renewal process for the assets. | Optional | 62.0 |
| renewal​StartDate | String | Start date of the renewal process for the assets. Required for early asset renewals and renewing expired assets, using today’s date or a future date. | Optional | 62.0 |

Response body for POST

[Renewal](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_renew_output.htm "Output representation of the details of a renewal record.")

## Code Examples

```
/connect/revenue-management/assets/actions/renew
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue-management/assets/actions/renew
```

```
{
  "assetIds": [
    "02iSG0000003NMhYAM",
    "02iSG0000006DvSYAU"
  ],
  "contractId": "800SG00000CFpepYAD",
  "opportunityId": "006SG000004W5tVYAS",
  "outputRecordId": "801SG00000DX1jWYAT",
  "outputRecordType": "Quote",
  "renewalEndDate": "2024-10-03T23:59:59",
  "renewalStartDate": "2023-10-04T00:00:00"
}
```

## Related Topics

- Renewal (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_renew_output.htm)
