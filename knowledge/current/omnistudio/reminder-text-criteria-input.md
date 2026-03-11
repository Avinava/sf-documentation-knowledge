---
title: "Reminder Text Criteria Input"
domain: omnistudio
topic: reminder-text-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.520Z
keywords: [Reminder, Text, Criteria, Input]
---

# Reminder Text Criteria Input

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