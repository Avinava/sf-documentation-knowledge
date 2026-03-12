---
title: "Reminder Nonrecurring Schedule Input"
domain: omnistudio
topic: reminder-nonrecurring-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.704Z
estimatedTokens: 219
keywords: [Reminder, Nonrecurring, Schedule, Input, representation]
---

# Reminder Nonrecurring Schedule Input

> Input representation of the nonrecurring schedule of a reminder.

# Reminder Nonrecurring Schedule Input

Input representation of the nonrecurring schedule of a reminder.

JSON example

Here’s a sample to configure a nonrecurring reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| firstReminder​Interval | Integer | Number of days after which the first reminder is sent. | Required | 60.0 |
| fourthReminder​Interval | Integer | Number of days after which the fourth reminder must be sent. | Optional | 60.0 |
| secondReminder​Interval | Integer | Number of days after which the second reminder must be sent. | Optional | 60.0 |
| scheduleType | String | Schedule type of the reminder. Valid value is NonRecurring. | Required | 60.0 |
| thirdReminder​Interval | Integer | Number of days after which the third reminder must be sent. | Optional | 60.0 |

## Code Examples

```
{
  "schedule": {
    "scheduleType": "NonRecurring",
    "firstReminderInterval": 1,
    "secondReminderInterval": 3,
    "thirdReminderInterval": 5,
    "fourthReminderInterval": 7
  }
}
```
