---
title: "Guardrails"
domain: psc-api
topic: guardrails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.073Z
estimatedTokens: 300
keywords: [Guardrails, Output, representation, guardrail, includes, manage, system, thresholds, notifications, BRE, components]
---

# Guardrails

> Output representation of each guardrail that includes information to manage system
    thresholds and notifications in BRE components.

# Guardrails

Output representation of each guardrail that includes information to manage system thresholds and notifications in BRE components.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentValue | String | Current value of the guardrail. | Small, 63.0 | 63.0 |
|  | Guardrail Current Value | Resource type and the row-level current values of the guardrail. For future use only. | Small, 63.0 | 63.0 |
| guardrail​Type | Guardrail Type (enumeration of type string) | Type of guardrail.Valid values are:RateLimitOrgValueLimit | Small, 63.0 | 63.0 |
| limitValue | String | Default or configured value of the given guardrail | Small, 63.0 | 63.0 |
|  | String | Maximum value of the given guardrail. For future use only. | Small, 63.0 | 63.0 |
| multiValue | Boolean | Specifies details if the current values are determined by an org level or aggregation of row levels. | Small, 63.0 | 63.0 |
| name | String | Name of the guardrail. | Small, 63.0 | 63.0 |
| notification​Supported | Boolean | Indicates whether the guardrail supports notifications (true) or not (false). | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "guardrails": {
    "name": "MaxProcessLimit",
    "guardrailType": "RateLimit",
    "limitValue": "100",
    "currentValue": "50",
    "notificationSupported": true
  }
}
```

## Related Topics

- Guardrail Current Value (atlas.en-us.psc_api.meta/psc_api/connect_responses_guardrail_current_value.htm)
