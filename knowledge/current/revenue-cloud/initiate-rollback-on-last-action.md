---
title: "Initiate Rollback on Last Action"
domain: revenue-cloud
topic: initiate-rollback-on-last-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.883Z
estimatedTokens: 396
keywords: [Initiate, Rollback, Last, Action, reversal, last, action, asset, rectify, any, transactional, errors, meet, changing, business, requirements., Supported, REST, HTTP, Inputs]
---

# Initiate Rollback on Last Action

> Initiate the reversal of the last action on an asset to rectify any
            transactional errors or to meet changing business requirements.

# Initiate Rollback on Last Action

Initiate the reversal of the last action on an asset to rectify any transactional errors or to meet changing business requirements.

Use this action to revert the last amendment or renewal on a particular asset, restoring the asset to its previous state. This action creates a quote or an order based on the specified output type. Use the created reversal quote to verify the reversal and convert the quote into an order.

Keep these considerations in mind when you use this action.

-   You can roll back only future dated transactions.
-   Rollback action isn't supported for legacy assets.
-   The rollback operation is supported for amendment and renewal only.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/initiateRollBackLastAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| assetIds | TypestringDescriptionRequired.List of asset IDs to include in the last action rollback. |
| outputType | TypestringDescriptionRequired.The type of record to create for reversal. Valid values are:Quote—Creates a reversal quote.Order—Creates a reversal order. |

## Outputs

| Output | Details |
| --- | --- |
| recordId | TypeidDescriptionThe ID of the created quote or order. |

## Example

POST

This example shows a sample request that initiates the rollback action on an asset and converts it into a quote.

```

```

This example shows a sample successful response.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "assetIds": [
        "02iDU0000006UisYAE"
      ],
      "outputType": "Quote"
    }
  ]
}
```

```
{
  "actionName": "initiateRollBackLastAction",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "recordId": "0Q0xx0000004NsSCAU"
  },
  "version": 1
}
```
