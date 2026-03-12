---
title: "Exit Individuals from a Flow Action"
domain: api-action
topic: exit-individuals-from-a-flow-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.021Z
estimatedTokens: 298
keywords: [Exit, Individuals, Flow, Action, Remove, segment-triggered, automation, event-triggered, on-demand, API, version, 66.0, later, REST, HTTP]
---

# Exit Individuals from a Flow Action

> Remove individuals from a single segment-triggered, automation event-triggered, or
  on-demand flow. This action is available in API version 66.0 and later.

# Exit Individuals from a Flow Action

Remove individuals from a single segment-triggered, automation event-triggered, or on-demand flow. This action is available in API version 66.0 and later.

For example, a flow sends automated reminder emails to an individual to complete a purchase. To prevent redundant communications and maintain a personalized customer journey after the purchase is complete, use this action to remove the individual from the flow.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/custom/exitIndividualsFromFlow/flow\_API\_name

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| individualId | TypestringDescriptionRequired. The ID of the individual data model object (DMO). |
| flowVersionId | TypestringDescriptionThe version ID of the flow from which the individual is removed. If this field isn’t set, then the individual is exited from all running versions of the flow. |
| description | TypestringDescriptionA description of the action, for example, the reason that the individual is removed from the flow. |

## Outputs

None

## Usage

Sample Input

```

```

## Code Examples

```
{
  "inputs": [
    {
      "individualId": "003R000000ExAmPlE",
      "flowVersionId": "301R000000AbCdEfG",
      "description": "Customer completed purchase via external portal."
    }
  ]
}
```
