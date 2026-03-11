---
title: "Reminder Boolean Criteria Input"
domain: omnistudio
topic: reminder-boolean-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.492Z
keywords: [Reminder, Boolean, Criteria, Input]
---

# Reminder Boolean Criteria Input

# Reminder Boolean Criteria Input

Input representation of the boolean criteria of a reminder.

JSON example

Here’s a sample of the boolean criteria to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the criteria field of the reminder. | Required | 60.0 |
| fieldType | String | Type of the criteria field of the reminder. Valid value is Boolean. | Required | 60.0 |
| operator | String | Operator between the field and value properties within the reminder criteria property that’s used to configure the reminder. Valid values are:EqualsNotEquals | Required | 60.0 |
| value | Boolean | Boolean value in the criteria field property of the reminder. | Required | 60.0 |