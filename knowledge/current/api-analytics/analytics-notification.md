---
title: "Analytics Notification"
domain: api-analytics
topic: analytics-notification
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.588Z
estimatedTokens: 2368
keywords: [Analytics, Notification, save, changes, PUT, specific]
---

# Analytics Notification

> Get information about (GET), save changes to
      (PUT) or delete (DELETE) a specific analytics notification.

# Analytics Notification

Get information about (GET), save changes to (PUT) or delete (DELETE) a specific analytics notification.

## Syntax

URI

/services/data/vXX.X/analytics/notifications/analytics notification ID

Formats

JSON

HTTP methods

| Method | Description |
| --- | --- |
| GET | Returns information about a specific notification. |
| PUT | Save changes to the analytics notification as specified in the request body. |
| DELETE | Delete the analytics notification. Deleted notifications can't be recovered. |

Parameters

| Parameter | Description |
| --- | --- |
| source | Required for GET calls. Specifies what type of analytics notification to return. Valid values are:lightningDashboardSubscribe — dashboard subscriptionslightningReportSubscribe — report subscriptionswaveNotification — Analytics notifications |
| ownerId | Optional for GET calls. Allows users with Manage Analytics Notifications permission to get notifications for another user with the specified ownerId. |
| recordId | Optional. Return notifications for a single record. Valid values are:reportId— Unique report IDlensId— Unique Analytics lens ID |

## GET Response Body

| Property | Type | Description |
| --- | --- | --- |
| active | Boolean | Indicates whether the notification is being sent (true) or not (false). |
| configuration | WaveConfiguration[] | Describes details of a Analytics notification. Only applicable when source is waveNotification. |
| createdDate | DateTime | Date and time when the notification was created (in ISO 8601 format). |
| deactivateOnTrigger | Boolean | Indicates whether the notification is deactivated after it's sent (true) or not (false). Deactivation doesn't delete the notification.The default value is false. |
| id | String | Unique notification ID. |
| lastModifiedDate | DateTime | Date and time when the notification was last modified (in ISO 8601 format). |
| name | String | Display name of the notification. |
| recordId | String | Unique ID of the record that the notification describes. Valid values are:reportIdlensId |
| runAs | runAs | The person who runs the report in a report subscription. Report recipients see data in the emailed report that this person has access to in Salesforce.Available in API version 40.0 and later. Only appears if you have the “Subscribe to Reports: Add Recipients” user perm. |
| schedule | Schedule | Details about the notification's schedule. |
| source | String | Indicates the type of notification. Possible values are:lightningSubscribe — report subscriptionslightningDashboardSubscribe — dashboard subscriptionslightningReportSubscribe — report subscriptionswaveNotification — Analytics notifications |
| thresholds | Threshold[] | Specifies what happens when the notification runs. For example, sending an email with report results. |

runAs

| Property | Type | Description |
| --- | --- | --- |
| id | String | The person’s unique Salesforce user ID. |
| name | String | The person’s first and last name. |

Schedule

| Property | Type | Description |
| --- | --- | --- |
| frequency | String | How frequently the notification is invoked. Possible values are:daily — Every dayweekly — One or more days each weekmonthly — One or more days each month |
| frequencyType | String | Only necessary when frequency is monthly. Possible values are:relative — Days which can change month-to-month, as described by details.specific — Fixed monthly dates, as described by details. |
| details | ScheduleDetail[] | Describes the notification schedule. Varies depending on whether frequency is daily, weekly, or monthly. |

ScheduleDetail (frequency is daily)

| Property | Type | Description |
| --- | --- | --- |
| time | Integer | The hour of the day at which the notification is invoked. Possible values are integers from 0 to 23. |

ScheduleDetail (frequency is weekly)

| Property | Type | Description |
| --- | --- | --- |
| time | Integer | The hour of the day at which the notification is invoked. Possible values are integers from 0 to 23. |
| daysOfWeek | String[] | The days of the week on which the notification is invoked. Possible values are:mon — Mondaytue — Tuesdaywed — Wednesdaythu — Thursdayfri — Fridaysat — Saturdaysun — Sunday |

ScheduleDetail (frequency is monthly, frequencyType is relative)

| Property | Type | Description |
| --- | --- | --- |
| time | Integer | The hour of the day at which the notification is invoked. Possible values are integers from 0 to 23. |
| weekInMonth | String | The week in the month during which the notification is invoked. Possible values are:first — First weeksecond — Second weekthird — Third weekfourth — Fourth week |
| dayInWeek | String | The day of the week on which the notification is invoked. Possible values are:mon — Mondaytue — Tuesdaywed — Wednesdaythu — Thursdayfri — Fridaysat — Saturdaysun — Sundayweekday — Weekdayweekend — Weekend day |

ScheduleDetail (frequency is monthly, frequencyType is specific)

| Property | Type | Description |
| --- | --- | --- |
| time | Integer | The hour of the day at which the notification is invoked. Possible values are integers from 0 to 23. |
| daysOfMonth | Integer[] | The days of the month on which the notification is invoked. Possible values are integers from 1 to 31, and -1 (which represents the last day of the month). |

Threshold

| Property | Type | Description |
| --- | --- | --- |
| actions | Action[] | Specifies what action is taken when the notification is invoked. |
| conditions | Condition[] | Describes conditions that govern when the notification is invoked. |
| type | String | Specifies when the notification is invoked (other than date and time criteria). Possible values are:always — Always invoke the notificationonError — Invoke the notification when there is an errorcondition — Invoke the notification based on criteria described by conditions |

Condition

| Property | Type | Description |
| --- | --- | --- |
| colName | String | The data field which is operated on. |
| value | String | The comparison value which is used by the operation. |
| operation | String | The operation which is used to evaluate the condition. Possible values are:equal — colName and value are equalnotEqual — colName and value are not equalgreaterThan — colName is greater than valuelessThan — colName is less than valuegreaterThanEqual — colName is greater than or equal to valuelessThanEqual — colName is less than or equal to value |

Action

| Property | Type | Description |
| --- | --- | --- |
| type | String | The type of action to perform when the notification is invoked. Possible values are:postToSlack — Post to a Slack channelsendEmail — Send an email to recipients |
| configuration | Configuration[] | Specifies important attributes for resources related to the notification. |

Configuration

| Property | Type | Description |
| --- | --- | --- |
| attachment | String | Specifies whether a Lightning Experience report subscription includes an attachment. If it includes an attachment, also specifies the file attachment.There is only one valid value:excel—Attach report results to the email as a spreadsheet formatted as a .XLSX file. Do not include record-level details in the subscription email.If the Lightning report subscription does not include an attachment, then the attachment property is not returned. When the attachment property is not returned, HTML-formatted report results are included directly in the subscription email body. |
| recipients | Recipient[] | A list of users, roles, and groups who receive the notification. |
| summaryOnly | Boolean | Applies when threshold type is condition and source=LightningReportSubscribe.. If true, emails the notification summary without the report table. If false or null, emails the summary and report table. |
| team | Team | The team of notification recipients. |

Recipient

| Property | Type | Description |
| --- | --- | --- |
| id | String | Specifies who receives the notification. Valid values are the unique id of a user, role, or group. |
| displayName | String | The displayName of the user, role, or group. |
| type | String | Type of recipient. Possible values are:collaborationRoom — A collaboration room.user — A individual user. |

Team

| Property | Type | Description |
| --- | --- | --- |
| platformId | String | Specifies the id of the Slack platform. |

WaveConfiguration

| Property | Type | Description |
| --- | --- | --- |
| anchor | String | Optional. The Id of the Analytics dashboard widget to which the notification is anchored. |
| filter | String | Optional. Description of selected filters at the time of notification creation. |
| query | String | Required. SAQL query which is run when the notification is invoked. |
| datasets | WaveDataset[] | Required. Collection of Analytics datasets referenced by the notification. |

WaveDataset

| Property | Type | Description |
| --- | --- | --- |
| id | String | Required. Id of the Analytics dataset. |
| name | String | Optional. Developer name of the Analytics dataset. |
| namespace | String | Optional. Namespace of the Analytics dataset. |

## PUT Request Body

A notification object with desired changes.

Uses the same format as the GET response body.

## PUT Response Body

An analytics notification object reflecting saved changes.

Uses the same format as the GET response body.

## DELETE Response Body

The analytics notification is deleted, and can't be recovered.

Returns an empty response body.
