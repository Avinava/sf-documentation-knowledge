---
title: "Initiate Upgrade (POST)"
domain: revenue-cloud
topic: initiate-upgrade-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:04.543Z
estimatedTokens: 489
keywords: [Initiate, Upgrade, POST, Move, lower-tier, product, higher-tier, change, tracked, linked, asset, actions, quote, order, line, linkage, reporting, auditing, API, creates, amendment, action, subtypes]
---

> Move a lower-tier product to a higher-tier product. The change is
      tracked as an upgrade request with linked asset actions and quote or order line linkage for
      reporting and auditing. This API creates an amendment quote and order with order actions and
      quote action subtypes.

# Initiate Upgrade (POST)

Move a lower-tier product to a higher-tier product. The change is tracked as an upgrade request with linked asset actions and quote or order line linkage for reporting and auditing. This API creates an amendment quote and order with order actions and quote action subtypes.

The original asset receives an asset action with an Upgrade (or equivalent) business category. This step indicates that the upgrade-from product and the new asset is created with an asset action (upgraded to), with relationships between the two. This step also enables sales reps to process upgrades and makes sure that upgrades are distinguishable in reporting and analytics from cancellations plus new sales.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractId | String | ID of the contract record to upgrade. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record to upgrade. | Optional | 66.0 |
| outputRecordType | String | Record type of the output for the upgrade. | Required | 66.0 |
| swapGroups | Swap Group[] | Groups that contain the asset details for the upgrade. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the upgrade action. | Required | 66.0 |

Response body for POST

[Initiate Upgrade Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_upgrade_output.htm "Output representation of the request to initiate an upgrade action.")

#### See Also

-   [*Salesforce Help*: Swap, Upgrade, or Downgrade Assets](https://help.salesforce.com/s/articleView?id=ind.qocal_swap_upgrade_downgrade_amendments.htm&language=en_US "Salesforce Help: Swap, Upgrade, or Downgrade Assets - HTML (New Window)")

## Code Examples

```
/revenue/transaction-management/assets/actions/upgrade
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/transaction-management/assets/actions/upgrade
```

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
- Initiate Upgrade Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_upgrade_output.htm)
