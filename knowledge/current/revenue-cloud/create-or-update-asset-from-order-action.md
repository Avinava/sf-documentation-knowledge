---
title: "Create or Update Asset From Order Action"
domain: revenue-cloud
topic: create-or-update-asset-from-order-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.712Z
estimatedTokens: 277
keywords: [Create, Update, Asset, Order, Action, asset, order, item, specified, order., New, assets, created, new, Modify, existing, change, requests, such, renewal]
---

# Create or Update Asset From Order Action

> Create an asset for each order item in the specified order. New
			assets are created for a new order. Modify existing assets for change order requests,
			such as a renewal or a cancellation.

# Create or Update Asset From Order Action

Create an asset for each order item in the specified order. New assets are created for a new order. Modify existing assets for change order requests, such as a renewal or a cancellation.

When the custom product name for an order line item has a value, the asset name is set to custom product name.

This action is available in API version 60.0 and later.

## Special Access Rules

You need the Assetize Order permission set to use this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createOrUpdateAssetFromOrder

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

This sample request is for the Create or Update Asset From Order action.

```

```

This sample response is for the Create or Update Asset From Order action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "orderId": "801DE000000oJfAYAU"
    }
  ]
}
```

```
[
    {
        "actionName": "createOrUpdateAssetFromOrder",
        "errors": null,
        "isSuccess": true,
        "outputValues": {
            "requestId": "3b89392d-6987-40d9-9190-d18fdb5cb849"
        }
    }
]
```
