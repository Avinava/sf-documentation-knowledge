---
title: "Cancel a Lifecycle-Managed Asset"
domain: chatterapi
topic: cancel-a-lifecycle-managed-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:36.846Z
estimatedTokens: 377
keywords: [Cancel, Lifecycle-Managed, Asset, Review, Connect, REST, API, reflect, early, cancellation]
---

# Cancel a Lifecycle-Managed Asset

> Review an example of using Connect REST API to cancel an asset to reflect an early
  cancellation.

# Cancel a Lifecycle-Managed Asset

Review an example of using Connect REST API to cancel an asset to reflect an early cancellation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

A lifecycle-managed asset must have at least one asset state period at least 24 hours long.

## Example

On 12/01, your customer wants to cancel all 25 of their licenses for the rest of the year. The cancel order results in the following order product.

Order Product

ID: 1250

Date of Cancellation: 12/01/20 9:00:00am PST

Start Date: 12/01/20 9:00:00am PST

End Date: 12/31/20 8:59:59am PST

Amount: –$250

Quantity: –25

To represent the cancellation, create an asset state period running from 10/01 through 11/30, but use the same quantity, monthly recurring revenue, and amount as the period that originally ended on 12/31. Because the latest period now runs through 11/30, Customer Asset Lifecycle Management removes all 25 licenses in December from the asset’s total amount. The asset’s Amount field reflects the –$250 in canceled licenses.

Endpoint

/services/data/v50.0/asset-management/assets/02iB00000007bZ6IAI/actions/cancel

Input

```

```

Output

![API output for a sample canceled asset.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fdelete_asset_ex1.png&folder=chatterapi)

#### See Also

-   [Cancel Asset](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_cancel.htm "Cancel a lifecycle-managed asset.")

## Code Examples

```
{
"assetStatePeriod":{
    "startDate":"2020-10-01T09:00:00+08:00",
    "endDate":"2020-11-30T08:59:59+08:00",
    "quantity":25.0,
    "mrr":250.00,
    "amount":500.00
    },
    
"assetAction":{
    "category":"Cancellations",
    "actionDate":"2020-12-01T09:00:00+08:00",
    "quantityChange":5.0,
    "mrrChange":50.00,
    "amount":150.00
    },
    
"assetActionSources":[{
    "transactionDate":"2020-10-01T09:00:00+08:00",
    "startDate":"2020-10-01T09:00:00+08:00",
    "endDate":"2020-12-31T08:59:59+08:00",
    "quantity":-25.0,
    "productAmount":-250.00,
    "referenceEntityItem":"1WLB00000003geJOAQ"
    }]
}
```

## Related Topics

- Cancel Asset (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_cancel.htm)
