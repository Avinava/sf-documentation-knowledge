---
title: "Initiate Amendment Action"
domain: revenue-cloud
topic: initiate-amendment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.815Z
estimatedTokens: 444
keywords: [Initiate, Amendment, Action, execute, asset, REST, HTTP, Inputs, Outputs]
---

# Initiate Amendment Action

> Initiate and execute the amendment of an asset.

# Initiate Amendment Action

Initiate and execute the amendment of an asset.

Specify IDs of the assets that you want to add to amend by specifying a start date and any changes to quantity. You can also specify the type of amendment record that you want to create such as a quote or an order.

This action is available in API version 60.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/initiateAmendment

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| amendAssetIds | TypestringDescriptionRequired.The IDs of the assets that you want to amend. |
| amendContractId | TypestringDescriptionThe ID of the contract record to be synced with the amendment. |
| amendStartDate | TypedatetimeDescriptionRequired.Effective start date of the amendment. |
| amendOpportunityId | TypestringDescriptionThe ID of the Opportunity record to be synced with the amendment quote. |
| amendOutputType | TypestringDescriptionRequired.Type of amendment record to create such as a quote or an order. |
| quantityChange | TypedoubleDescriptionRequired.Quantity to add to or reduce from the asset's existing quantity. |
| skipPricing | TypebooleanDescriptionIndicates whether the pricing procedure must be skipped (true) or performed (false). Available in API version 64.0 and later. |

## Outputs

| Output | Details |
| --- | --- |
| amendRecordId | TypestringDescriptionThe ID of the amendment record that’s created. |
| requestIdentifier | TypestringDescriptionRequest ID that’s used to track the async request. |

## Example

POST

This sample request is for the Initiate Amendment action.

```

```

This sample response is for the Initiate Amendment action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "amendAssetIds": ["02iI8000000HPzXIAW"],
            "amendStartDate": "2023-10-21T00:00:00.000Z",
            "quantityChange": 5,
            "amendOutputType": "Quote",
            "amendContractId": "800DU0000000lZlYAI",
            "amendOpportunityId": "006DU0000025AanYAE",
            "skipPricing": false
        }
    ]
}
```

```
[
    {
        "actionName": "initiateAmendment",
        "errors": null,
        "isSuccess": true,
        "outputValues": {
            "record_id": "0Q0xx0000004NsSCAU",
            "requestIdentifier": "16Pxx0000004NIy"
        },
        "version": 1
    }
]
```
