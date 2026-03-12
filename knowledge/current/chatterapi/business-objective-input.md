---
title: "Business Objective Input"
domain: chatterapi
topic: business-objective-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.083Z
estimatedTokens: 132
keywords: [Business, Objective, Input, goal]
---

# Business Objective Input

> A business objective, or goal.

# Business Objective Input

A business objective, or goal.

Root XML tag

BusObjInputRepresentation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| associations | Business Objective Association Input[] | List of business objective associations. | Optional | 59.0 |
| description | String | Description of the business objective. | Optional | 59.0 |
| labelName | String | Label name of the business objective. | Required | 59.0 |

## Code Examples

```
{
    "associations": [
        {
            "type": "Webstore",
            "id": "0w9000000000000000"
        },
        {
            "type": "Webstore",
            "id": "01t000000000000000"
        }
    ],
    "description": "Increase revenue through targeted product recommendations",
    "labelName": "Revenue Growth Initiative"
}
```

## Related Topics

- Business Objective Association Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_bus_obj_associations_input.htm)
