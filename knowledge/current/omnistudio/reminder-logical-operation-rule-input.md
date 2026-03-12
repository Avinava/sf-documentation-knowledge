---
title: "Reminder Logical Operation Rule Input"
domain: omnistudio
topic: reminder-logical-operation-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.764Z
estimatedTokens: 172
keywords: [Reminder, Logical, Operation, Rule, Input, representation, logical, rule, that’s, used, configure, reminder.]
---

# Reminder Logical Operation Rule Input

> Input representation of the logical rule that’s used to configure a reminder.

# Reminder Logical Operation Rule Input

Input representation of the logical rule that’s used to configure a reminder.

JSON example

Here’s a sample of the criteria logic to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Reminder Date Criteria Input[]Reminder Decimal Criteria Input[]Reminder Integer Criteria Input[]Reminder Text Criteria Input[]Reminder Boolean Criteria Input[] | Criteria to send the reminder. | Required | 60.0 |
| criteriaLogic | String | Logic type between each criterion within the criteria property. Valid values are:AndOr | Required | 60.0 |

## Code Examples

```
{
  "rule": {
    "criteriaLogic": "And",
    "criteria": [
      {
        "operator": "Equals",
        "field": "Status",
        "fieldType": "StaticEnum",
        "value": "Completed"
      }
    ]
  }
}
```

## Related Topics

- Reminder Date
                          Criteria Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_date_criteria_input.htm)
- Reminder
                          Decimal Criteria Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_decimal_criteria_input.htm)
- Reminder
                          Integer Criteria Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_integer_criteria_input.htm)
- Reminder Text
                          Criteria Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_text_criteria_input.htm)
- Reminder
                          Boolean Criteria Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_boolean_criteria_input.htm)
