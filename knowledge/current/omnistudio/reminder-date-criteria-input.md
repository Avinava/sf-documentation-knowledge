---
title: "Reminder Date Criteria Input"
domain: omnistudio
topic: reminder-date-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.499Z
keywords: [Reminder, Date, Criteria, Input]
---

# Reminder Date Criteria Input

# Reminder Date Criteria Input

Input representation of the date criteria of a reminder.

JSON example

Here’s a sample of the date criteria to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the criteria field of the reminder. | Required | 60.0 |
| fieldType | String | Criteria field type of the reminder. Valid value is Datetime. | Required | 60.0 |
| operator | String | Operator between the field and value properties within the reminder criteria property that’s used to configure the reminder. Valid values are:EqualsGreaterThanGreaterThanOrEqualToLessThanLessThanOrEqualToNotEquals | Required | 60.0 |
| value | String | The timestamp value in the date criteria field property of the reminder. | Required | 60.0 |