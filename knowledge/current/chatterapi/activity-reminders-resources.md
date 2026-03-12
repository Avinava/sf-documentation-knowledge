---
title: "Activity Reminders Resources"
domain: chatterapi
topic: activity-reminders-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.551Z
estimatedTokens: 330
keywords: [Activity, Reminders, Resources, upcoming, Salesforce, Classic, reminder]
---

# Activity Reminders Resources

> Get upcoming activity reminders in Salesforce Classic. Get, update,
      or delete an activity reminder in Salesforce Classic.

# Activity Reminders Resources

Get upcoming activity reminders in Salesforce Classic. Get, update, or delete an activity reminder in Salesforce Classic.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/reminders/activities | Get a list of upcoming activity reminders in Salesforce Classic. |
| /connect/reminders/activityId | Get information about, update, or delete an activity reminder in Salesforce Classic. |

## Activity Reminders

Get a list of upcoming activity reminders in Salesforce Classic.

Resource

```

```

Available version

39.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxRecordCount | Integer | The number of returned reminders. The maximum allowed is 2,000. The default is 100. | Optional | 39.0 |
| numberOfDays | Integer | Returns reminders due for the next number of days in the future. The default is seven, and the maximum is 365. | Optional | 39.0 |
| type | String | Type of activity. Valid values are:AllEventTaskThe default is All. | Optional | 39.0 |

Response body for GET

[Activity Reminders Resources](# "Get upcoming activity reminders in Salesforce Classic. Get, update, or delete an activity reminder in Salesforce Classic.")

## Related Topics

- /connect/reminders/activityId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_activity_reminder.htm)
