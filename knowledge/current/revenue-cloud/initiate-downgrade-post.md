---
title: "Initiate Downgrade (POST)"
domain: revenue-cloud
topic: initiate-downgrade-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:01:59.641Z
estimatedTokens: 570
keywords: [Initiate, Downgrade, POST, amendment, moves, higher-tier, product, lower-tier, change, tracked, linked, asset, actions, quote, order]
---

# Initiate Downgrade (POST)

> Create an amendment that moves a higher-tier product to a lower-tier
      product. This change is tracked as a downgrade request with linked asset actions and quote or
      order line linkage for reporting and auditing.

# Initiate Downgrade (POST)

Create an amendment that moves a higher-tier product to a lower-tier product. This change is tracked as a downgrade request with linked asset actions and quote or order line linkage for reporting and auditing.

Use this API to move to a lower-tier or lower-value product. For example, from Sales Cloud Unlimited to Sales Cloud Enterprise, or to a product in a restricted-use or professional edition.

This API creates an amendment quote and order with downgrade-specific order actions and quote action subtypes. After assetization, the original asset receives an asset action with business category as Downgrade (or equivalent). This step indicates that the downgrade-from product and the new asset is created with an asset action (downgraded to), with relationships between the two. This step also enables sales reps to process downgrades and makes sure that downgrades are auditable and reportable separately from cancellations and new sales.

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
| contractId | String | ID of the contract record for the downgrade action. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record for the downgrade action. | Optional | 66.0 |
| outputRecordType | String | Output record type for the downgrade action. | Required | 66.0 |
| swapGroups | Swap Group[] | List of swap groupings that contain the asset details for the downgrade action. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the downgrade action. | Required | 66.0 |

Response body for POST

[Initiate Downgrade Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_downgrade_output.htm "Output representation of the request to initiate a downgrade action.")

#### See Also

-   [*Salesforce Help*: Swap, Upgrade, or Downgrade Assets](https://help.salesforce.com/s/articleView?id=ind.qocal_swap_upgrade_downgrade_amendments.htm&language=en_US "Salesforce Help: Swap, Upgrade, or Downgrade Assets - HTML (New Window)")

## Code Examples

```
/revenue/transaction-management/assets/actions/downgrade
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/transaction-management/assets/actions/downgrade
```

```
{
  "swapStartDate": "2025-12-01T00:00:00Z",
  "outputRecordType": "Quote",
  "swapGroups": {
    "groups": [
      {
        "referenceId": "DOWNGRADE-001",
        "outGroup": {
          "swapAssets": [
            {
              "assetId": "02ixx0000004HOAAA2",
              "quantity": 1
            }
          ]
        },
        "inGroup": {
          "graphId": "downgradeRequest",
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
- Initiate Downgrade Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_downgrade_output.htm)
