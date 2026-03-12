---
title: "BRE Guardrails Result"
domain: psc-api
topic: bre-guardrails-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.678Z
estimatedTokens: 110
keywords: [BRE, Guardrails, Result, Output, representation]
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

- Guardrails (atlas.en-us.psc_api.meta/psc_api/connect_responses_guardrails.htm)
