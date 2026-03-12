---
title: "Invoke Rating Service Action"
domain: revenue-cloud
topic: invoke-rating-service-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.899Z
estimatedTokens: 484
keywords: [Invoke, Rating, Service, Action, rating, service, rate, usage, records., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Invoke Rating Service Action

> Invoke the rating service to rate the usage records.

# Invoke Rating Service Action

Invoke the rating service to rate the usage records.

The Invoke Rating Service action acts as a connector between batch management and the rating service. This action is available in API version 62.0 and later.

## Special Access Rules

The Invoke Rating Service action is available in Enterprise, Unlimited, and Developer Editions where Rate Management is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/invokeRatingService

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| attributeRateCardID | TypestringDescriptionID of the rate card that’s used to define adjustments based on the attributes that impact the rate. |
| baseRateCardID | TypestringDescriptionID of the rate card that includes the base rate for the resource to be rated, based on its consumption. |
| contextDefinitionId | TypestringDescriptionRequired.ID of the context definition that’s used to create the context instance. |
| contextMappingID | TypestringDescriptionID of the context mapping that maps a standard object, context definition object, or any other input data source to the node that’s defined in the context definition. |
| isSkipWaterfall | TypebooleanDescriptionIndicates whether to skip the generation of price waterfall data (true) or not (false). |
| procedureName | TypestringDescriptionName of the rating procedure that’s used to calculate the rates. |
| recordID | TypereferenceDescriptionRequired.ID of the usage ratable summary record to be rated. |
| tierRateCardID | TypestringDescriptionID of the rate card that’s used to define adjustments for different tiers of a resource. |

## Outputs

None

## Example

POST

This example shows a sample request for the Invoke Rating Service action.

```

```

This example shows a sample response for the Invoke Rating Service action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "recordIDs": "56jSB000002Bn12CXC",
      "contextMappingId": "11jSB000002Bn13YAC",
      "contextDefinitionId": "11OSB0000000WSv2AM",
      "procedureName": "Invoke Rate",
      "isSkipWaterfall": false,
      "baseRateCardID": "11jSB000002Bn13YAC",
      "tierRateCardID": "fgjjSB0sdf987dsf",
      "attributeRateCardID": "asdfgh563034lk"
    }
  ]
}
```

```
[
    {
        "actionName": "invokeRatingService",
        "errors": null,
        "isSuccess": true,
        "outputValues": {}
    }
]
```
