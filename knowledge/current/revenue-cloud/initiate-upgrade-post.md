---
title: "Initiate Upgrade (POST)"
domain: revenue-cloud
topic: initiate-upgrade-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:01:59.654Z
estimatedTokens: 588
keywords: [Initiate, Upgrade, POST, amendment, moves, lower-tier, product, higher-tier, change, tracked, linked, asset, actions, quote, order]
---

# Initiate Upgrade (POST)

> Create an amendment that moves a lower-tier product to a higher-tier
      product. This change is tracked as an upgrade request with linked asset actions and quote or
      order line linkage for reporting and auditing.

# Initiate Upgrade (POST)

Create an amendment that moves a lower-tier product to a higher-tier product. This change is tracked as an upgrade request with linked asset actions and quote or order line linkage for reporting and auditing.

Use this API to move to a higher-tier or higher-value product. For example, from Sales Cloud Enterprise to Sales Cloud Unlimited, or from a product in an Enterprise edition to an Unlimited edition.

This API creates an amendment quote and order with upgrade-specific order actions and quote action subtypes. After assetization, the original asset receives an asset action with business category as Upgrade (or equivalent). This step indicates that the upgrade-from product and the new asset is created with an asset action (upgraded to), with relationships between the two. This step also enables sales reps to process upgrades and makes sure that upgrades are distinguishable in reporting and analytics from cancellations plus new sales.

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
| contractId | String | ID of the contract record for the upgrade action. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record for the upgrade action. | Optional | 66.0 |
| outputRecordType | String | Output record type for the upgrade action. | Required | 66.0 |
| swapGroups | Swap Group[] | List of swap groupings that contain the asset details for the upgrade action. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the upgrade action. | Required | 66.0 |

Response body for POST

[Initiate Upgrade Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_upgrade_output.htm "Output representation of the request to initiate an upgrade action. The response includes the ID of the sales transaction that the upgrade action creates.")

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
