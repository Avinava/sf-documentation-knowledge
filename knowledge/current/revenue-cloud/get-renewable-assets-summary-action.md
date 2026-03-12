---
title: "Get Renewable Assets Summary Action"
domain: revenue-cloud
topic: get-renewable-assets-summary-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.021Z
estimatedTokens: 386
keywords: [Renewable, Assets, Summary, Action, Retrieve, order, renewal, opportunities, REST, HTTP, Inputs, Outputs]
---

# Get Renewable Assets Summary Action

> Retrieve details about renewable assets in a given order. You can
            use this information to create renewal opportunities.

# Get Renewable Assets Summary Action

Retrieve details about renewable assets in a given order. You can use this information to create renewal opportunities.

This action gets pricing data from the OrderEntitiesMapping context mapping within the SalesTransactionContext context definition. Before you use this action, edit the context mapping to map the objects and fields used in your pricing procedure to the nodes and attributes in the context definition.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

We recommend adding the same fields and mappings for the Quote and Order objects, and for the Quote Line Item and Order Product objects.

This action is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getRenewableAssetsSummary

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| orderId | TypeidDescriptionRequired.ID of the order related to the assets to check for renewal opportunities. |

## Outputs

| Output | Details |
| --- | --- |
| renewableAssetsSummary | TypeApex-definedDescriptionSummary of the assets associated with the order, including details about renewal opportunities such as renewal pricing information. |

## Example

POST

Here's a sample request for the Get Renewable Assets Summary action.

```

```

Here's a sample response for the Get Renewable Assets Summary action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "orderId": "801xx000003GZ39AAG"
    }
  ]
}
```

```
[
  {
    "actionName": "getRenewableAssetsSummary",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "renewableAssetsSummary": [
        {
          "startDate": "2025-07-22",
          "rootAssetOpportunity": null,
          "renewalPriceDetails": [
            {
              "quantity": 1,
              "netUnitPrice": 0
            }
          ],
          "productId": "01txx0000006i3DAAQ",
          "priceBookId": "01sxx0000005ptpAAA",
          "priceBookEntryId": "01uxx0000008yXCAAY",
          "orderItem": "802xx000001nb1LAAQ",
          "opportunityProductId": null,
          "lastAssetActionSubtype": null,
          "lastAssetAction": "Initial Sale",
          "endDate": "2025-08-21",
          "assetId": "02ixx0000004HKwAAM",
          "account": "001xx000003GZ1XAAW"
        }
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
