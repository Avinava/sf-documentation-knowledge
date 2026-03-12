---
title: "BRE Guardrails"
domain: omnistudio
topic: bre-guardrails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.624Z
estimatedTokens: 85
keywords: [BRE, Guardrails, Output, representation, guardrails, component.]
---

# BRE Guardrails

> Output representation of the BRE
    guardrails
    for each component.

# BRE Guardrails

Output representation of the BRE guardrails for each component.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | BRE Guardrails Result[] | Guardrails associated with the specified BRE component. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "result": [
    {
      "componentName": "DecisionTable",
      "guardrails": [
        {
          "name": "MaxProcessLimit",
          "guardrailType": "RateLimit",
          "limitValue": "100",
          "currentValue": "50",
          "notificationSupported": true
        }
      ]
    }
  ]
}
```

## Related Topics

- BRE Guardrails Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_bre_guardrails_result.htm)
