---
title: "Create or Update Asset From Order Item Action"
domain: revenue-cloud
topic: create-or-update-asset-from-order-item-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.871Z
estimatedTokens: 283
keywords: [Asset, Order, Item, Action, assets, individual, items, Track, line, reach, certain, stage, their, lifecycle, submitted]
---

# Create or Update Asset From Order Item Action

> Create assets from individual order items within an order. Track
			assets after the individual line items of an order reach a certain stage in their
			lifecycle, such as submitted, fulfilled, or provisioned. If the order item is part of a
			renewal, an amendment, or a cancellation, existing assets are changed.

# Create or Update Asset From Order Item Action

Create assets from individual order items within an order. Track assets after the individual line items of an order reach a certain stage in their lifecycle, such as submitted, fulfilled, or provisioned. If the order item is part of a renewal, an amendment, or a cancellation, existing assets are changed.

This action is available in API version 60.0 and later.

## Special Access Rules

You need the Assetize Order permission set to use this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createOrUpdateAssetFromOrderItem

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| orderId | TypestringDescriptionRequired.ID of the order. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionID of the request to create an asset. |

## Example

POST

This sample request is for the Create or Update Asset From Order Item action.

```

```

This sample response is for the Create or Update Asset From Order Item action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "orderItemIds": ["802SG000002HixxYAC"]
        }
    ]
}
```

```
{
  "actionName": "createOrUpdateAssetFromOrderItem",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "requestId": "b2a2b4b9-845b-4078-980a-759308389604"
  },
  "version": 1
}
```
