---
title: "Create Subscription Records Action"
domain: api-action
topic: create-subscription-records-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.257Z
estimatedTokens: 462
keywords: [Subscription, Records, Action, Creates, orders, containing, products, accepts, either, order, summary, item, IDs, input, filters]
---

# Create Subscription Records Action

> Creates subscription records for orders containing subscription
      products. It accepts either the order summary ID or the order item summary IDs as input,
    filters the subscription products, and creates records to manage them effectively.

# Create Subscription Records Action

Creates subscription records for orders containing subscription products. It accepts either the order summary ID or the order item summary IDs as input, filters the subscription products, and creates records to manage them effectively.

## Special Access Rules

This action is available in API version 63.0 and later for users with system administrator access or the Assetize Order permission set assigned, along with any of the following licenses enabled:

-   B2B Commerce, or D2C Commerce and Revenue Cloud Subscription Management. When this license is enabled in your org, both orderSummaryId and orderItemSummaryIds are supported.
-   B2B Commerce, or D2C Commerce and Revenue Lifecycle Management. When this license is enabled in your org, only orderSummaryId is supported.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/createSubscriptionRecords

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| webStoreId | TypeStringDescriptionRequired.The ID of the web store associated with the order. |
| orderSummaryId | TypeStringDescriptionThe ID of the order summary record.This field is optional if orderItemSummaryIds is specified. |
| orderItemSummaryIds | TypeStringDescriptionThe list of the order item summary IDs.This field is optional if orderSummaryId is specified. |

## Outputs

| Output | Details |
| --- | --- |
| Subscription​ProcessedItems | TypeSTRINGDescriptionAn array of order item summary IDs that are processed and have an associated subscription record created. |

## Example

**Sample Request**

Here’s a sample request with orderSummaryID and webStoreID:

```

```

Here’s a sample request with orderItemSummaryIDs and webStoreID:

```

```

**Sample Response**

```

```

## Code Examples

```
{
  "inputs": [
    {
      "createSubscriptionRecords": {
        "orderSummaryId": "1OsJ3000000Gmd3KAC",
        "webStoreId": "0ZE5i000000PbfKGAS"
      }
    }
  ]
}
```

```
{
  "inputs": [
    {
      "createSubscriptionRecords": {
        "orderItemSummaryIds": [
          "10uJ3000000GmczIAC", "10uJ3000000GmcyIAC"
        ],
        "webStoreId": "0ZE5i000000PbfKGAS"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "createSubscriptionRecords",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "SubscriptionProcessedItems": [
        "10uJ3000000GmczIAC",
        "10uJ3000000GmcyIAC"
      ]
    }
  }
]
```
