---
title: "Retrigger Entitlement Creation Process Action"
domain: revenue-cloud
topic: retrigger-entitlement-creation-process-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.106Z
estimatedTokens: 307
keywords: [Retrigger, Entitlement, Creation, Process, Action, failed, unprocessed, assets, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Retrigger Entitlement Creation Process Action

> Retrigger entitlement creation process for failed or unprocessed
            assets.

# Retrigger Entitlement Creation Process Action

Retrigger entitlement creation process for failed or unprocessed assets.

Trigger the entitlement creation process again in these scenarios.

-   Process failed assets in the asset to entitlement journey.
-   Assetize or create wallets for assets without corresponding records in Usage Management.

This action is available in API version 65.0 and later.

## Special Access Rules

The Retrigger Entitlement Creation Process action is available in Enterprise, Developer, and Unlimited Editions where Usage Management is enabled. To use this action, you need the Usage Management Run Time User permission.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/retriggerEntlCreaProc

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| assetId | TypestringDescriptionRequired.ID of the asset for which you want to trigger the asset to entitlement process again. |

## Outputs

None.

## Example

POST

Here's a sample request for the Retrigger Entitlement Creation Process action.

```

```

Here's a sample response for the Retrigger Entitlement Creation Process action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "assetId": "02iSB000000JzZFYA0"
    }
  ]
}
```

```
[
  {
    "actionName": "retriggerEntlCreaProc",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": null,
    "sortOrder": -1,
    "version": 1
  }
]
```
