---
title: "Reminder Integer Criteria Input"
domain: omnistudio
topic: reminder-integer-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.760Z
estimatedTokens: 214
keywords: [Reminder, Criteria, Input, representation, criteria, reminder.]
---

# Reminder Integer Criteria Input

> Input representation of the integer criteria of a reminder.

# Reminder Integer Criteria Input

Input representation of the integer criteria of a reminder.

JSON example

Here’s a sample of the integer type criteria to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the criteria field of the reminder. | Required | 60.0 |
| fieldType | String | Criteria field type of the reminder. Valid value is Integer. | Required | 60.0 |
| operator | String | Operator between the field and value properties within the reminder criteria property that’s used to configure the reminder. Valid values are:EqualsGreaterThanGreaterThanOrEqualToLessThanLessThanOrEqualToNotEquals | Required | 60.0 |
| value | Integer | Integer value of the field property of the reminder criteria. | Required | 60.0 |

## Code Examples

```
{
  "criteria": [
    {
      "operator": "Equals",
      "field": "IntegerField",
      "fieldType": "Integer",
      "value": "10"
    }
  ]
}
```
