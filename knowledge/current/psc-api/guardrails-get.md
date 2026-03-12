---
title: "Guardrails (GET)"
domain: psc-api
topic: guardrails-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.323Z
estimatedTokens: 254
keywords: [Guardrails, Fetches, Business, Rules, Engine, BRE, manage, rate, limits, components]
---

# Guardrails (GET)

> Fetches guardrails from the Business Rules Engine (BRE) to manage rate limits for BRE
    components.

# Guardrails (GET)

Fetches guardrails from the Business Rules Engine (BRE) to manage rate limits for BRE components.

Resource

```

```

Example POST

```

```

Available version

63.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| componentNames | String | BRE component to fetch the guardrails. It contains a comma-separated list of predefined components.Valid component values are:ExpressionSetDecisionTableDecisionMatrixExplainabilityDynamicRulesIf no values are provided, guardrails for all components accessible to the user are returned. | Optional | 63.0 |
| isNotification​Enabled | Boolean | Indicates whether to return only the guardrails with enabled notifications (true) or not (false). | Optional | 63.0 |

Response body for GET

[BRE Guardrails](atlas.en-us.psc_api.meta/psc_api/connect_responses_bre_guardrails.htm "Output representation of the BRE guardrails for each component.")

## Code Examples

```
/connect/business-rules/guardrails
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/business-rules/guardrails
```

## Related Topics

- BRE Guardrails (atlas.en-us.psc_api.meta/psc_api/connect_responses_bre_guardrails.htm)
