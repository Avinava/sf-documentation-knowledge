---
title: "Initiate Upgrade Input"
domain: revenue-cloud
topic: initiate-upgrade-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:01:58.448Z
estimatedTokens: 211
keywords: [Initiate, Upgrade, Input, representation, action, includes, sales, transaction, creates]
---

# Initiate Upgrade Input

> Input representation of the details of the request to initiate an upgrade action. The
    response includes the ID of the sales transaction that the upgrade action creates.

# Initiate Upgrade Input

Input representation of the details of the request to initiate an upgrade action. The response includes the ID of the sales transaction that the upgrade action creates.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractId | String | ID of the contract record for the upgrade action. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record for the upgrade action. | Optional | 66.0 |
| outputRecordType | String | Output record type for the upgrade action. | Required | 66.0 |
| swapGroups | Swap Group[] | List of swap groupings that contain the asset details for the upgrade action. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the upgrade action. | Required | 66.0 |

## Code Examples

```
{
  "swapStartDate": "2025-12-01T00:00:00Z",
  "outputRecordType": "Quote",
  "swapGroups": {
    "groups": [
      {
        "referenceId": "UPGRADE-001",
        "outGroup": {
          "swapAssets": [
            {
              "assetId": "02ixx0000004HOAAA2",
              "quantity": 1
            }
          ]
        },
        "inGroup": {
          "graphId": "upgradeRequest",
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
                "StartDate": "2026-03-22"
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
