---
title: "Reminder Logical Operation Rule Input"
domain: omnistudio
topic: reminder-logical-operation-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.511Z
keywords: [Reminder, Logical, Operation, Rule, Input]
---

# Reminder Logical Operation Rule Input

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