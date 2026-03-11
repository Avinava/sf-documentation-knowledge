---
title: "Reminder Decimal Criteria Input"
domain: omnistudio
topic: reminder-decimal-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.502Z
keywords: [Reminder, Decimal, Criteria, Input]
---

# Reminder Decimal Criteria Input

# Reminder Decimal Criteria Input

Input representation of the decimal criteria of a reminder.

JSON example

Here’s a sample of the decimal type criteria to configure the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the criteria field of the reminder. | Required | 60.0 |
| fieldType | String | Criteria field type of the reminder. Valid value is Decimal. | Required | 60.0 |
| operator | String | Operator between field and value properties within the reminder criteria property that’s used to configure the reminder. Valid values are:EqualsGreaterThanGreaterThanOrEqualToLessThanLessThanOrEqualToNotEquals | Required | 60.0 |
| value | Double | Decimal value in the decimal criteria field property of the reminder. | Required | 60.0 |