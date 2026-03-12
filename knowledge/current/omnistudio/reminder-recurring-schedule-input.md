---
title: "Reminder Recurring Schedule Input"
domain: omnistudio
topic: reminder-recurring-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.707Z
estimatedTokens: 120
keywords: [Reminder, Recurring, Schedule, Input, representation]
---

# Reminder Recurring Schedule Input

> Input representation of the recurring schedule of a reminder.

# Reminder Recurring Schedule Input

Input representation of the recurring schedule of a reminder.

JSON example

Here’s a sample to configure a recurring reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recurrenceRule | String | Recurrence rule for the reminder. | Required | 60.0 |
| scheduleType | String | Schedule type of the reminder. Valid value is Recurring. | Required | 60.0 |

## Code Examples

```
{
  "schedule": {
    "recurrenceRule": "RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20231130T000000Z;",
    "scheduleType": "Recurring"
  }
}
```
