---
title: "Initiate Cancellation Action"
domain: revenue-cloud
topic: initiate-cancellation-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.659Z
estimatedTokens: 430
keywords: [Initiate, Cancellation, Action, execute, cancellation, asset., Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Initiate Cancellation Action

> Initiate and execute the cancellation of an asset.

# Initiate Cancellation Action

Initiate and execute the cancellation of an asset.

Specify the IDs of the assets that you want to add to cancel by specifying a start date. You can also specify the type of cancellation record that you want to create, such as a quote or an order.

This action is available in API version 60.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/initiateCancellation

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| cancelAssetIds | TypestringDescriptionRequired.The IDs of the assets that you want to cancel.All assets in a request must belong to the same price book. |
| cancelContractId | TypestringDescriptionThe ID of the contract record to sync with the cancellation. |
| cancelOpportunityId | TypestringDescriptionThe ID of the Opportunity record to sync with the cancellation quote. |
| cancelOutputType | TypestringDescriptionRequired.Type of cancellation record to create such as a quote or an order. |
| cancelStartDate | TypedatetimeDescriptionRequired.Effective date of the cancellation. |
| skipPricing | TypebooleanDescriptionIndicates whether the pricing procedure must be skipped (true) or performed (false). Available in API version 64.0 and later. |

## Outputs

| Output | Details |
| --- | --- |
| cancelRecordId | TypestringDescriptionThe ID of the cancellation record that’s created. |
| requestIdentifier | TypestringDescriptionRequest ID that’s used to track the async request. |

## Example

POST

This sample request is for the Initiate Cancellation action.

```

```

This sample response is for the Initiate Cancellation action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "cancelAssetIds": [
                "02iI8000000Lc5fIAC"
            ],
            "cancelStartDate": "2023-11-09T00:00:00",
            "cancelOutputType": "Quote",
            "cancelContractId": "800DU0000000lZlYAI",
            "cancelOpportunityId": "006DU0000025AanYAE",
            "skipPricing": false
        }
    ]
}
```

```
[
    {
        "actionName": "initiateCancellation",
        "errors": null,
        "isSuccess": true,
        "outputValues": {
            "record_id": "0Q0xx0000004P32CAE",
            "requestIdentifier": "16Pxx0000004OTY"
        },
        "version": 1
    }
]
```
