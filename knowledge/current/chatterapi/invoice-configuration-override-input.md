---
title: "Invoice Configuration Override Input"
domain: chatterapi
topic: invoice-configuration-override-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.901Z
estimatedTokens: 180
keywords: [Invoice, Configuration, Override, Input, representation, additional, settings, specify, whether, generation, payment, schedules, schedule, items, skipped]
---

# Invoice Configuration Override Input

> Input representation of the additional configuration settings to specify whether the
    generation of payment schedules and payment schedule items must be skipped.

# Invoice Configuration Override Input

Input representation of the additional configuration settings to specify whether the generation of payment schedules and payment schedule items must be skipped.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| payment​ExclusionReason | String | The reason for the exclusion of the payment for the invoice. | Optional | 63.0 |
| shouldExclude​Payment | Boolean | Indicates whether to exclude the payment during invoice generation and skip creating the payment schedules and payment schedule items for the invoice (true) or not (false). The default value is false. | Optional | 63.0 |

## Code Examples

```
{
  "configurationOverrides": {
    "paymentExclusionReason": "Not applicable.",
    "shouldExcludePayment": true
  }
}
```
