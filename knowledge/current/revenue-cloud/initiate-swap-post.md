---
title: "Initiate Swap (POST)"
domain: revenue-cloud
topic: initiate-swap-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:44.649Z
estimatedTokens: 593
keywords: [Initiate, Swap, POST, amendment, trades, quantity, product, another, change, tracked, linked, asset, actions, net-zero, order, total, applicable]
---

> Create an amendment that trades a quantity of one product for another.
      This change is tracked as a swap request with linked asset actions and a net-zero order total
      where applicable.

# Initiate Swap (POST)

Create an amendment that trades a quantity of one product for another. This change is tracked as a swap request with linked asset actions and a net-zero order total where applicable.

Use this API when you must exchange one product for another of equivalent or different value. For example, you can reduce Sales Cloud Enterprise licenses and add Data Cloud Credits in a single amendment.

The API creates an amendment quote and order with swap-specific order actions and quote action subtypes. When the order is assetized, the source asset gets an asset action with business category as Swap (reduced quantity). The new asset is created with an asset action that identifies it as swapped in, with relationships that link the swapped-from and swapped-to assets. These operations make swaps auditable and reportable separately from cancellations and new sales. They also support use cases such as trading unused licenses for credits or moving spend between products while preserving contract intent.

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
| contractId | String | ID of the contract record for the swap action. | Optional | 66.0 |
| opportunityId | String | ID of the opportunity record for the swap action. | Optional | 66.0 |
| outputRecordType | String | Output record type for the swap action. | Required | 66.0 |
| swapGroups | Swap Group[] | List of swap groupings that contain the asset details for the swap action. | Required | 66.0 |
| swapStartDate | String | Amendment start date for the swap action. | Required | 66.0 |

Response body for POST

[Initiate Swap Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_swap_output.htm "Output representation of the request to initiate a swap action. The response includes the ID of the sales transaction that the swap action creates.")

#### See Also

-   [*Salesforce Help*: Swap, Upgrade, or Downgrade Assets](https://help.salesforce.com/s/articleView?id=ind.qocal_swap_upgrade_downgrade_amendments.htm&language=en_US "Salesforce Help: Swap, Upgrade, or Downgrade Assets - HTML (New Window)")

## Code Examples

```
/revenue/transaction-management/assets/actions/swap
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/transaction-management/assets/actions/swap
```

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
- Initiate Swap Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_initiate_swap_output.htm)
