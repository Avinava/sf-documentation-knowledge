---
title: "Initiate Renewal Action"
domain: revenue-cloud
topic: initiate-renewal-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.970Z
estimatedTokens: 467
keywords: [Initiate, Renewal, Action, execute, renewal, asset., Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Initiate Renewal Action

> Initiate and execute the renewal of an asset.

# Initiate Renewal Action

Initiate and execute the renewal of an asset.

Specify IDs of the assets that you want to add to renew by specifying a start date. You can also specify the type of renewal record that you want to create such as a quote or an order.

This action is available in API version 60.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/initiateRenewal

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| renewAssetIds | TypestringDescriptionRequired.The IDs of the assets that you want to renew. |
| renewContractId | TypestringDescriptionThe ID of the contract record to be synced with the renewal. |
| renewEndDate | TypedatetimeDescriptionEffective end date of the renewal. Available in API version 62.0 and later. |
| renewOpportunityId | TypestringDescriptionThe ID of the Opportunity record to be synced with the renewal quote. |
| renewOutputType | TypestringDescriptionRequired.Type of renewal record to create such as a quote or an order. |
| renewStartDate | TypedatetimeDescriptionOptionalEffective start date of the renewal. Required for early asset renewals and renewing expired assets, using today’s date or a future date. Available in API version 62.0 and later. |
| skipPricing | TypebooleanDescriptionIndicates whether the pricing procedure must be skipped (true) or performed (false). Available in API version 64.0 and later. |

## Outputs

| Output | Details |
| --- | --- |
| renewRecordId | TypestringDescriptionThe ID of the amendment record that’s created. |
| requestIdentifier | TypestringDescriptionRequest ID that’s used to track the async request. |

## Example

POST

This sample request is for the Initiate Renewal action.

```

```

This sample response is for the Initiate Renewal action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "renewAssetIds": ["02ixx0000004LMwAAM"],
            "renewOutputType": "Quote",
            "renewContractId": "800DU0000000lZlYAI",
            "renewOpportunityId": "006DU0000025AanYAE",
            "renewStartDate": "2023-10-21T00:00:00.000Z",
            "renewEndDate": "2024-10-21T00:00:00.000Z",
            "skipPricing": false
        }
    ]
}
```

```
[
    {
        "actionName": "initiateRenewal",
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
