---
title: "Reminder Update Input"
domain: omnistudio
topic: reminder-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.714Z
estimatedTokens: 106
keywords: [Reminder, Input, representation, definition]
---

# Reminder Update Input

> Input representation of a reminder definition to update the reminder based on the ID of
    the reminder definition.

# Reminder Update Input

Input representation of a reminder definition to update the reminder based on the ID of the reminder definition.

JSON example

Here’s a sample input of a non-recurring reminder to update the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the reminder definition. | Required | 60.0 |

## Code Examples

```
{
  "id": "17jSB00000000eLYAQ",
  "name": "FirstReminder",
  "parentRecordId": "0Kdxx0000004C92CAE",
  "status": "Draft",
  "schedule": {
    "reminderType": "NonRecurring",
    "firstReminderInterval": 1,
    "secondReminderInterval": 5,
    "thirdReminderInterval": 9,
    "fourthReminderInterval": 13
  },
  "reminderChannels": [
    {
      "reminderDefinitionChannelId": "17kSB000000Y4dtYAC",
      "channel": "Email",
      "templateId": "00Xxx000000k1DvEAI",
      "sendFrom": "john.doe@example.com",
      "operationType": "Update"
    }
  ],
  "rule": {
    "criteriaLogic": "Or",
    "criteria": [
      {
        "operator": "Equals",
        "field": "Status",
        "fieldType": "StaticEnum",
        "value": "Completed"
      },
      {
        "operator": "NotEquals",
        "field": "Status",
        "fieldType": "Integer",
        "value": 7
      }
    ]
  }
}
```
