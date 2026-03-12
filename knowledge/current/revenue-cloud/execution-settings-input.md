---
title: "Execution Settings Input"
domain: revenue-cloud
topic: execution-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.060Z
estimatedTokens: 131
keywords: [Execution, Settings, Input, representation, execution, settings, ramp, deal.]
---

# Execution Settings Input

> Input representation of the execution settings for a ramp deal.

# Execution Settings Input

Input representation of the execution settings for a ramp deal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| execute​ConfigRules | Boolean | Indicates whether to run configuration rules (true) or not (false). The default value is true. | Optional | 62.0 |
| execute​Pricing | Boolean | Indicates whether to run pricing request (true) or not (false). The default value is true. | Optional | 62.0 |

## Code Examples

```
"executionSettings": {
       "executePricing": true,
       "executeConfigRules": false
   }
```
