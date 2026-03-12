---
title: "Build Product Territory Detailed Availability Action"
domain: life-sciences-dev-guide
topic: build-product-territory-detailed-availability-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.812Z
estimatedTokens: 289
keywords: [Build, Product, Territory, Detailed, Availability, Action, records, REST, HTTP, Inputs, Outputs]
---

# Build Product Territory Detailed Availability Action

> Build Product Territory Detailed Availability records using existing
            Product Territory Availability records.

# Build Product Territory Detailed Availability Action

Build Product Territory Detailed Availability records using existing Product Territory Availability records.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/buildProdTerrDtlAvlAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| productTerritoryAvailabilityId | TypeStringDescriptionRequiredID of the Product Territory Availability record for the action to execute on. |

## Outputs

| Output | Details |
| --- | --- |
| resultText | TypeStringDescriptionMessage indicating the result of the action. |
| success | TypeBooleanDescriptionIndicates if the action was successful (true) or not (false). |

## Example

This sample request is for the Build Product Territory Detailed Availability action.

```

```

This sample input is for calling the Build Product Territory Detailed Availability action from the Apex code.

```

```

This sample response is for the Build Product Territory Detailed Availability action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "productTerritoryAvailabilityId": "1Kwxx0000004CxxCAE"
    }
  ]
}
```

```apex
Invocable.Action action = Invocable.Action.createStandardAction('buildProdTerrDtlAvlAction');
action.setInvocationParameter('ProductTerritoryAvailabilityId', '1Kwxx0000004CxxCAE');
List<Invocable.Action.Result> results = action.invoke();
```

```
[
  {
    "outputValues": {
      "success": true,
      "resultText": "Product Territory Detailed Availabilities built successfully."
    }
  }
]
```
