---
title: "Custom Fields Input"
domain: omnistudio
topic: custom-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.208Z
estimatedTokens: 121
keywords: [Custom, Input, representation, creating, engagement, interaction, topic, attendee, record, digital, lending]
---

# Custom Fields Input

> Input representation for creating an engagement interaction, topic, or attendee record with a custom field.

# Custom Fields Input

Input representation for creating an engagement interaction, topic, or attendee record with a custom field.

Root XML tag

<customFields>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| key | String | The name of a custom field in a Salesforce object. | Optional | 56.0 |
| value | Object | The value of a custom field in a Salesforce object. | Optional | 56.0 |

## Code Examples

```
{
  "customFieldsList": {
    "key": "sampledata",
    "value": "test"
  }
}
```
