---
title: "Activity Reminder Input"
domain: chatterapi
topic: activity-reminder-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.937Z
estimatedTokens: 120
keywords: [Activity, Reminder, Input, Salesforce, Classic]
---

# Activity Reminder Input

> Activity reminder details in Salesforce Classic.

# Activity Reminder Input

Activity reminder details in Salesforce Classic.

Root XML tag

<activityReminder>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReminderDisplayed | Boolean | Indicates whether the activity reminder is displayed. | Required | 39.0 |
| reminderDateTime | String | Date and time that the activity reminder displays in ISO 8601 format. | Optional | 39.0 |

## Code Examples

```
{
"reminderDateTime": "2016-11-22T16:00:00.000Z",
"isReminderDisplayed": false
}
```
