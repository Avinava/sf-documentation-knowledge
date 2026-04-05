---
title: "Initiate Swap Input"
domain: revenue-cloud
topic: initiate-swap-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-05T00:23:17.329Z
estimatedTokens: 184
keywords: [Initiate, Swap, Input, representation, action]
---

# Initiate Swap Input

> Input representation of the details of the request to initiate a swap action.

# Initiate Swap Input

Input representation of the details of the request to initiate a swap action.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractId | String | ID of the contract record for the swap action. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record for the swap action. | Optional | 66.0 |
| outputRecordType | String | Output record type for the swap action. | Required | 66.0 |
| swapGroups | Swap Group[] | List of swap groupings that contain the asset details for the swap action. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the swap action. | Required | 66.0 |

## Code Examples

```
{
  "swapStartDate": "2025-12-01T00:00:00Z",
  "outputRecordType": "Quote",
  "swapGroups": {
    "groups": [
      {
        "referenceId": "SWAP-001",
        "outGroup": {
          "swapAssets": [
            {
              "assetId": "02ixx0000004HOAAA2",
              "quantity": 1
            }
          ]
        },
        "inGroup": {
          "graphId": "swapRequest",
          "records": [
            {
              "referenceId": "refQuoteLine0",
              "record": {
                "attributes": {
                  "type": "QuoteLineItem",
                  "method": "POST"
                },
                "Product2Id": "01txx0000006iVlAAI",
                "PricebookEntryId": "01uxx0000008ym4AAA",
                "UnitPrice": 1049,
                "Quantity": "1",
                "StartDate": "2022-09-22"
              }
            }
          ]
        }
      }
    ]
  }
}
```

## Related Topics

- Swap Group (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_swap_group.htm)
