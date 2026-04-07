---
title: "Case Programs Input"
domain: nonprofit-cloud
topic: case-programs-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:29.694Z
estimatedTokens: 84
keywords: [Case, Programs, Input, representation, add, benefit, session]
---

# Case Programs Input

> Input representation of the request to add case programs to a benefit
  session.

# Case Programs Input

Input representation of the request to add case programs to a benefit session.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| caseProgramRequest | String[] | The list of case programs to be added. | Required | 57.0 |

## Code Examples

```
{
  "caseProgramRequest": {
    "programIds": [
      "11Wxx0000004F0WEAU",
      "11Wxx0000004F0WEBQ"
    ]
  }
}
```
