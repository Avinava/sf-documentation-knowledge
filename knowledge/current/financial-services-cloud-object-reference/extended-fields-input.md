---
title: "Extended Fields Input"
domain: financial-services-cloud-object-reference
topic: extended-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.318Z
estimatedTokens: 93
keywords: [Extended, Input, representation]
---

# Extended Fields Input

> Input representation for extended fields.

# Extended Fields Input

Input representation for extended fields.

Root XML tag

<extendedFields>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the custom field. | Optional | 48.0 |
| value | String | Value of the custom field. | Optional | 48.0 |

## Code Examples

```
{
  "extendedFields": [
    {
      "name": "assigned_to",
      "value": "abcd"
    },
    {
      "name": "ownership",
      "value": true
    }
  ]
}
```
