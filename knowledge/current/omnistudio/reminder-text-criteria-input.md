---
title: "Reminder Text Criteria Input"
domain: omnistudio
topic: reminder-text-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.777Z
estimatedTokens: 207
keywords: [Reminder, Text, Criteria, Input, representation, text, criteria, reminder.]
---

# Reminder Text Criteria Input

> Input representation of the text criteria of a reminder.

# Reminder Text Criteria Input

Input representation of the text criteria of a reminder.

JSON example

Here’s a sample of the text type criteria to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the criteria field of the reminder. | Required | 60.0 |
| fieldType | String | Criteria field type of the reminder. Valid values are:TextReferenceStaticEnum | Required | 60.0 |
| operator | String | Operator between the field and value properties within the reminder criteria property that’s used to configure the reminder. Valid values are:ContainsEndsWithEqualsNotEqualsStartsWith | Required | 60.0 |
| value | String | Value of the text criteria field property of the reminder. | Required | 60.0 |

## Code Examples

```
{
  "criteria": [
    {
      "operator": "Contains",
      "field": "TextField",
      "fieldType": "Text",
      "value": "reminder-definition"
    }
  ]
}
```
