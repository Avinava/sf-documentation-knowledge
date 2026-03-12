---
title: "Activity Reminder"
domain: chatterapi
topic: activity-reminder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.545Z
estimatedTokens: 450
keywords: [Activity, Reminder, Salesforce, Classic]
---

# Activity Reminder

> Get information about, update, or delete an activity reminder in Salesforce Classic.

# Activity Reminder

Get information about, update, or delete an activity reminder in Salesforce Classic.

Resource

```

```

Available version

39.0

HTTP methods

GET, PATCH, PUT, DELETE

Request body for PATCH and PUT

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

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReminderDisplayed | Boolean | Indicates whether the activity reminder has been displayed. | Required | 39.0 |
| reminderDateTime | String | The date and time that the activity reminder displays in ISO 8601 format. | Optional | 39.0 |

Request parameters for PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| reminderDateTime | String | The date and time that the activity reminder displays in ISO 8601 format. | Optional | 39.0 |

Response body for GET, PATCH, and PUT

[Activity Reminder](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity_reminder.htm "An activity reminder in Salesforce Classic.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/reminders/activityId
```

```
{
"reminderDateTime": "2016-11-22T16:00:00.000Z",
"isReminderDisplayed": false
}
```

## Related Topics

- Activity Reminder (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity_reminder.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Platform Action Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link_group.htm)
