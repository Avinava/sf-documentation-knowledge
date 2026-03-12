---
title: "Change a Lifecycle-Managed Asset"
domain: chatterapi
topic: change-a-lifecycle-managed-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.716Z
estimatedTokens: 350
keywords: [Change, Lifecycle-Managed, Asset, Review, Connect, REST, API, amend, new, lifecycle, event]
---

# Change a Lifecycle-Managed Asset

> Review an example of using Connect REST API to amend an asset after a new lifecycle
  event.

# Change a Lifecycle-Managed Asset

Review an example of using Connect REST API to amend an asset after a new lifecycle event.

## Example

On 10/01, your customer wants to increase number of licenses by 10 from October through December. They make an amendment order that creates the following order product.

Order Product

ID: 1237

Date of Sale: 10/01/20 2:00:00pm PST

Start Date: 10/01/20 9:00:00am PST

End Date: 12/31/20 8:59:59am PST

Amount: $600

Quantity: 10

Build an integration that calls the Change Asset resource and passes an asset action source, asset action, and two asset state periods. The first asset state period represents the period from 07/01 through 09/30, with a license quantity of 20. The second asset state period represents the period from 10/01 through 12/31, with a license quantity of 25. The asset action provides information on what type of change took place, when the change occurred, and the change in quantity, amount, and/or monthly recurring revenue.

Endpoint

/services/data/v50.0/asset-management/assets/02iB00000007bZ6IAI/actions/change

Input

```

```

Output

![Asset change 1](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fchange_asset_ex1.png&folder=chatterapi)

#### See Also

-   [Change Asset](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_change.htm "Amend or renew a lifecycle-managed asset.")

## Code Examples

```
{
"assetStatePeriods":[ {
    "startDate":"2020-07-01T09:00:00+08:00",
    "endDate":"2020-09-30T08:59:59+08:00",
    "quantity":20.0,
    "mrr":200.00,
    "amount":600.00
    },
    {
    "startDate":"2020-10-01T09:00:00+08:00",
    "endDate":"2020-12-31T08:59:59+08:00",
    "quantity":25.0,
    "mrr":250.00,
    "amount":750.00
    }],
    
"assetAction":{
    "category":"Upsells",
    "actionDate":"2020-10-01T14:00:00+08:00",
    "quantityChange":5.0,
    "mrrChange":50.00,
    "amount":150.00
    },
    
"assetActionSources":[{
    "transactionDate":"2020-10-01T14:00:00+08:00",
    "startDate":"2020-10-01T09:00:00+08:00",
    "endDate":"2020-12-31T08:59:59+08:00",
    "quantity":5.0,
    "productAmount":150.00,
    "referenceEntityItem":"1WLB00000003geJOAQ"
    }]
}
```

## Related Topics

- Change Asset (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_change.htm)
