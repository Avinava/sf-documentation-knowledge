---
title: "Pricing Request Input"
domain: revenue-cloud
topic: pricing-request-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.160Z
estimatedTokens: 104
keywords: [Pricing, Input, representation]
---

# Pricing Request Input

> Input representation of a pricing request.

# Pricing Request Input

Input representation of a pricing request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configuration​Overrides | Configuration Override Input | Parameters to override pricing configuration. | Optional | 60.0 |
| procedure​Name | String | Name of the pricing procedure. | Optional | 60.0 |

## Code Examples

```
{
    "configurationOverrides": {
       "skipWaterfall": true,
       "useSessionScopedContext": true,
       "persistContext": true,
       "taggedData": false
    }
    "procedureName": "ES1"
}
```

## Related Topics

- Configuration Override Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configuration_override_input.htm)
