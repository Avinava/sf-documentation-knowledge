---
title: "Clone Options Input"
domain: revenue-cloud
topic: clone-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.879Z
estimatedTokens: 237
keywords: [Clone, Options, Input, representation, options, clone, sales, transaction.]
---

# Clone Options Input

> Input representation of the options to clone a sales transaction.

# Clone Options Input

Input representation of the options to clone a sales transaction.

JSON example

This is a sample request to clone all line items in a ramped group within a sales transaction.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordTypeId | String | ID of the record type related to the record to clone. | Optional | 65.0 |
| lineScope | String | Specifies the scope for cloning a ramp segment. You can clone only the last ramp segment. This property determines which line items must be cloned and added to the cloned segment. Valid values are:AllLines—Specifies whether all line items in a ramped group must be cloned.RampedLinesOnly—Specifies whether only the ramped line items must be cloned.A segment identifier is created for the newly cloned line items, ensuring date continuity between the existing and cloned segment. | Optional | 65.0 |

## Code Examples

```
{
  "recordIds": ["0QLxx0000004CBYGA2"],
  "salesTransactionId": "0Q0xx0000004CE0CAM",
  "options": {
    "lineScope": "AllLines"
  }
}
```
