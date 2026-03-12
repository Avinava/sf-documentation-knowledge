---
title: "BRE Guardrails Result"
domain: omnistudio
topic: bre-guardrails-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.627Z
estimatedTokens: 110
keywords: [BRE, Guardrails, Result, Output, representation, result.]
---

# BRE Guardrails Result

> Output representation of the BRE Guardrails result.

# BRE Guardrails Result

Output representation of the BRE Guardrails result.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| component​Name | String | Name of the BRE component that the guardrail is fetched for. | Small, 63.0 | 63.0 |
| guardrails | Guardrails[] | Specify the guardrails for the provided BRE component. | Small, 63.0 | 63.0 |

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

- Guardrails (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_guardrails.htm)
