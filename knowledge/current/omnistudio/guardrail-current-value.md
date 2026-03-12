---
title: "Guardrail Current Value"
domain: omnistudio
topic: guardrail-current-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.992Z
estimatedTokens: 118
keywords: [Guardrail, Current, Output, representation, guardrails, along, resource]
---

# Guardrail Current Value

> Output representation of the current values of the guardrails along with the resource
    type.

# Guardrail Current Value

Output representation of the current values of the guardrails along with the resource type.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| resource​Type | String | Name of the sObject that the current value of the guardrail is determined from. | Small, 63.0 | 63.0 |
| values | Current Value[] | Row-level current values of the guardrail. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "currentValues": {
    "resourceType": "ExampleResource",
    "values": {
      "currentValue": "50",
      "resourceName": "Resource1"
    }
  }
}
```

## Related Topics

- Current
                  Value[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_current_value.htm)
