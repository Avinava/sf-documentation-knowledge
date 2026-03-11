---
title: "Reminder Create Input"
domain: omnistudio
topic: reminder-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.497Z
keywords: [Reminder, Create, Input]
---

# Reminder Create Input

# Reminder Create Input

Input representation of a reminder definition to configure reminders along with the reminder channel.

JSON example

Here’s a sample to create non-recurring reminders.

```

```

This example shows a sample to create recurring reminders.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| event | String | Reserved for future use. | Optional | 60.0 |
| name | String | Name of the reminder definition. | Required | 60.0 |
| parentEntity | String | Reserved for future use. | Optional | 60.0 |
| parentRecordId | String | ID of the record for which the reminder is created. | Required | 60.0 |
| reminder​Channels | Reminder Email Channel Input [] | Communication channel that’s used to send the reminder. | Required | 60.0 |
| rule | Reminder Logical Operation Rule Input[] | Rule that’s used to configure the reminder. | Optional | 60.0 |
| schedule | Reminder Non-Recurrence Schedule InputReminder Recurrence Schedule Input | Schedule that’s used to send the reminder. | Required | 60.0 |
| status | String | Status of the reminder definition. Valid values are:Active—The reminder is operational and is actively providing notifications based on the specified schedule or rule.Draft—The reminder is created but not activated. You can modify the reminder definition if the status is Draft.Inactive—The reminder is either deactivated or expired. | Required | 60.0 |