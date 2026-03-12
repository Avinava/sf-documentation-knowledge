---
title: "Reminder Definition (POST, PATCH)"
domain: omnistudio
topic: reminder-definition-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.277Z
estimatedTokens: 657
keywords: [Reminder, Definition, POST, PATCH, communication, channel, send, reminders, users, occurrences, occasions]
---

# Reminder Definition (POST, PATCH)

> Create and update a reminder definition and a
      communication channel to send reminders to users about important occurrences and
      occasions.

# Reminder Definition (POST, PATCH)

Create and update a reminder definition and a communication channel to send reminders to users about important occurrences and occasions.

Configure a reminder by defining the reminder schedule type, such as recurring and non-recurring. Set rules and communication channels for a reminder to send the desired notifications to the users.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST, PATCH

Request body for POST

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

Response body for POST

[Reminder Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_reminder_create_output.htm "Output representation of the reminder definition request to create or update a reminder.")

Request body for PATCH

JSON example

Here’s a sample input of a non-recurring reminder to update the reminder.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the reminder definition. | Required | 60.0 |

Response body for PATCH

[Reminder Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_reminder_create_output.htm "Output representation of the reminder definition request to create or update a reminder.")

## Code Examples

```
/connect/reminder/reminder-definition
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/reminder/reminder-definition
```

```
{
  "name": "FirstReminder",
  "parentRecordId": "0Kdxx0000004C92CAE",
  "status": "Draft",
  "schedule": {
    "scheduleType": "NonRecurring",
    "firstReminderInterval": 1,
    "secondReminderInterval": 1,
    "thirdReminderInterval": 1,
    "fourthReminderInterval": 1
  },
  "reminderChannels": [
    {
      "channel": "Email",
      "templateId": "00Xxx000000k1DvEAI",
      "sendFrom": "john.doe@example.com"
    }
  ],
  "rule": {
    "criteriaLogic": "And",
    "criteria": [
      {
        "operator": "Equals",
        "field": "Status",
        "fieldType": "StaticEnum",
        "value": "Completed"
      }
    ]
  }
}
```

```
{
  "name": "FirstReminder",
  "parentRecordId": "0Kdxx0000004C92CAE",
  "status": "Draft",
  "schedule": {
    "recurrenceRule": "RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=20231130T000000Z;",
    "scheduleType": "Recurring"
  },
  "reminderChannels": [
    {
      "channel": "Email",
      "templateId": "00Xxx000000k1DvEAI",
      "sendFrom": "john.doe@example.com"
    }
  ],
  "rule": {
    "criteriaLogic": "And",
    "criteria": [
      {
        "operator": "Equals",
        "field": "Status",
        "fieldType": "StaticEnum",
        "value": "Completed"
      }
    ]
  }
}
```

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

## Related Topics

- Reminder Email Channel Input [] (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_email_channel_input.htm)
- Reminder Logical Operation Rule Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_logical_operation_rule_input.htm)
- Reminder Non-Recurrence Schedule Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_non_recurrence_schedule_input.htm)
- Reminder Recurrence Schedule Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_reminder_recurrence_schedule_input.htm)
- Reminder Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_reminder_create_output.htm)
