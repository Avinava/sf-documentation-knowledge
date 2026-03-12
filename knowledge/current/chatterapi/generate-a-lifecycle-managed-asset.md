---
title: "Generate a Lifecycle-Managed Asset"
domain: chatterapi
topic: generate-a-lifecycle-managed-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.720Z
estimatedTokens: 539
keywords: [Generate, Lifecycle-Managed, Asset, Review, examples, Connect, REST, API, start, tracking, quantity, amount, monthly, recurring, revenue]
---

# Generate a Lifecycle-Managed Asset

> Review examples of using Connect REST API to create an asset and start tracking its
  quantity, amount, and monthly recurring revenue over its lifecycle.

# Generate a Lifecycle-Managed Asset

Review examples of using Connect REST API to create an asset and start tracking its quantity, amount, and monthly recurring revenue over its lifecycle.

## Example

Your sales rep sold a collection of mobile device management subscriptions to a local school district. The order product for the sale has the following values.

Order Product

ID: 1234

Date of Sale: 09/05/19 4:00:00pm PST

Start Date: 01/01/20 9:00:00am PST

End Date: 12/31/20 8:59:59am PST

Amount: $1,200

Quantity: 10

Build an integration that calls the Generate Asset API to generate an asset, asset action source, asset action, and asset state period.

Endpoint

/services/data/v50.0/asset-management/assets/actions/generate

Input

```

```

Output

![Asset creation 1](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fcreate_asset_ex1.png&folder=chatterapi)

## Example

Your sales rep sold a ramped deal for mobile device management subscriptions. The customer has 10 licenses for 01/01 through 06/30 and 20 licenses for 07/01 through 12/31. You want to recognize all the transactions as one asset.

Order Product

ID: 1234

Date of Sale: 09/05/19 4:00:00pm PST

Start Date: 01/01/20 9:00:00am PST

End Date: 06/30/20 8:59:59am PST

Amount: $600

Quantity: 10

Order Product 2

ID: 1235

Date of Sale: 09/05/19 4:00:00pm PST

Start Date: 07/01/20 9:00:00am PST

End Date: 12/31/20 8:59:59am PST

Amount: $1,200

Quantity: 20

In this case, you make one Generate Asset API call that passes in data for two asset state periods. The first asset state period represents the period from 01/01 through 06/30, with a quantity of 10. The second asset state period represents the period from 07/01 through 12/31, with a quantity of 20.

Endpoint

/services/data/v50.0/asset-management/assets/actions/generate

Input

```

```

Output

![Asset creation 2](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fcreate_asset_ex2.png&folder=chatterapi)

#### See Also

-   [Generate Asset](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_create.htm "Create a lifecycle-managed asset.")

## Code Examples

```
{
 "accountId":"001B000001KDI7BIAX",
 "assetName":"MDM Subscription",
 "productId":"01tB0000000q2FFIAY",
 "currencyIsoCode":"USD",

"assetStatePeriods":[ {
    "startDate":"2020-01-01T09:00:00-08:00",
    "endDate":"2020-12-31T08:59:59-08:00",
    "quantity":10.0,
    "mrr":100.00,
    "amount":1200.00
    }],
    
"assetAction":{
    "category":"Initial Sale",
    "actionDate":"2019-09-05T16:00:00-08:00",
    "quantityChange":10.0,
    "mrrChange":100.00,
    "amount":1200.00
    },
    
"assetActionSources":[{
    "transactionDate":"2019-09-05T16:00:00-08:00",
    "startDate":"2020-01-01T09:00:00-08:00",
    "endDate":"2020-12-31T08:59:59-08:00",
    "quantity":10.0,
    "productAmount":1200.00,
    "referenceEntityItem":"1WLB00000003geJOAQ"
    }]
}
```

```
{
 "accountId":"001B000001KDI7BIAX",
 "assetName":"MDM Subscription",
 "productId":"01tB0000000q2FFIAY",
 "currencyIsoCode":"USD",

"assetStatePeriods":[ {
    "startDate":"2020-01-01T09:00:00+08:00",
    "endDate":"2020-06-30T08:59:59+08:00",
    "quantity":10.0,
    "mrr":100.00,
    "amount":600.00
    },
    {
    "startDate":"2020-07-01T09:00:00+08:00",
    "endDate":"2020-12-31T08:59:59+08:00",
    "quantity":20.0,
    "mrr":200.00,
    "amount":1200.00
    }],
    
"assetAction":{
    "category":"Initial Sale",
    "actionDate":"2019-09-05T16:00:00+08:00",
    "quantityChange":20.0,
    "mrrChange":200.00,
    "amount":1800.00
    },
    
"assetActionSources":[{
    "transactionDate":"2019-09-05T16:00:00+08:00",
    "startDate":"2020-01-01T09:00:00+08:00",
    "endDate":"2020-06-30T08:59:59+08:00",
    "quantity":10.0,
    "productAmount":600.00,
    "referenceEntityItem":"1WLB00000003geJOAQ"
    },
    {
    "transactionDate":"2019-09-05T16:00:00+08:00",
    "startDate":"2020-07-01T09:00:00+08:00",
    "endDate":"2020-12-31T08:59:59+08:00",
    "quantity":20.0,
    "productAmount":1200.00,
    "referenceEntityItem":"02iB00000007bYhIAI"
    }]
}
```

## Related Topics

- Generate Asset (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_asset_create.htm)
