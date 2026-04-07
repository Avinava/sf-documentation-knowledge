---
title: "PUT /push/v1/message/{messageId}"
domain: mc-apis
topic: put-pushv1messagemessageid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.920Z
estimatedTokens: 2380
keywords: [PUT, push, message, messageId, Updates, optionally, pass, text, override, definition, **Overview**, Outbound, Alert, Page-Only, Alert+Page, Location, Entry, Exit]
---

> Updates a push message. That request optionally allows you to pass the text of the message to override the message specified in the definition.

# PUT /push/v1/message/{messageId}

## **Overview**

Updates a push message. That request optionally allows you to pass the text of the message to override the message specified in the definition.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageType | integer |  | Indicates the type of message to create using the following integer values: 1 - Outbound (default), 3 - Location Entry, 4 - Location Exit |
| contentType | integer |  | Indicates the content included within the message using the following integer values: 1 - Alert (default), 2 - CloudPage, 3 - Alert+CloudPage |
| name | string |  | String value indicating the name of the message. Must use 100 or less characters. |
| application | array |  | App used to send message |
| application.id | string |  | The ID of the application |
| application.name | string |  | The name of the application |
| alert | string |  | Message displayed on the mobile device |
| sound | string |  | Used to override the value on the push message definition. Indicates the sound file to play when the push message arrives on the mobile device. Name must include 100 or less characters. |
| badge | integer |  | For iOS SDK version 4.9.5 and newer: Overrides the value on the push message definition. Badge count displays this number in a badge on the app and increments this number by one for each new unread message. For older iOS SDK versions: Overrides the value on the push message definition. Badge count does not increment. |
| content-available | integer |  | Integer value indicating the availability of content for an application enabled to use background push. Set this value to 1 to indicate available content. This parameter applies only to apps integrated with the background push functionality available in iOS. Note that you can use background push functionality in all apps with iOS 7 and Newsstand apps in iOS 6. |
| openDirect | string |  | Used to override the value on the push message definition. This value determines the location within the app that an app user views when they open that app via a push message. Assigned values must include 15 or less characters. |
| keys | array |  | Used to override the value on the push message definition. An array of Key/Value pairs that correspond to customer values defined in MobilePush. |
| custom | array |  | Specify the actual request body of the push message to precisely align that request body to your specifications. |
| sendInitiator | integer |  | Indicates the method used to initiate the send for a push message using the following integer values: 0 - UI-based send, 1 - API (default), 2 - Automation, 3 - Journey Builder |
| startDate | date |  | Date value indicating the time when the message becomes available for sends. Uses a default value of the message creation time. |
| messagesPerPeriod | integer |  | Integer value indicating the number of messages that can send during a specified time period. Use only when sendInitiator value equals 0. |
| minutesPerPeriod | integer |  | Integer value indicating the number of minutes included in a specified time period. Use only when sendInitiator value equals 0. |
| numberOfPeriods | integer |  | Indicates the time span of the period using the following integer values: 1 - Year, 2 - Month, 3 - Week, 4 - Day, 5 - Hour |
| isRollingPeriod | boolean |  | Boolean value indicating whether the limit resets after a rolling time period window or ends at a specified time |
| messageLimit | integer |  | Integer values indicating the total number of times a messages displays on a mobile device |
| title | string |  | The title to be used in place of the message's original title. |
| subtitle | string |  | The subtitle to be used in place of the message's original subtitle. |
| mutable-content | boolean |  | If true, rich push functionality is enabled for the message. |
| tzBased | boolean |  | Boolean value indicating whether a send occurs based on the specified time zone for a mobile device. Uses a default value of false. Use only when sendInitiator value equals 0. |
| tzPastSendAction | string |  | Indicates the action to perform when a time-zone-based send occurs and that send time already passed for some time zones. Uses the following string values: 1 - Send immediately (default), 2 - Send at scheduled time, next day, 3 - Never send |
| scheduleTzOffset | integer |  | Integer value indicating the time zone offset. Uses a default value of -6. |
| scheduledTzSupportsDst | boolean |  | Boolean value indicating whether the scheduled time zone supports Daylight Savings Time. Uses a default value of false. |
| inclusionLists | array |  | Array of list ID values indicating the lists that will receive the send. Use only when sendInitiator value equals 0. |
| exclusionLists | array |  | Array of list ID values indicating the lists excluded from receiving the send. Use only when sendInitiator value equals 0. |
| status | integer |  | Indicates the status of the message using the following integer values: 1 - Draft, 2 - Active (default), 3 - Inactive, 4 - Deleted |
| pageId | integer |  | Integer values indicating the page associated with the message for CloudPage and Alert+CloudPage sends |
| url | string |  | String value indicating the URL for the page associated with the message for CloudPage and Alert+CloudPage sends |
| subject | string |  | String value indicating the subject line used for the message |
| geofences | array |  | Array of string values indicating the geofences associated with the message send. Use only when sendInitiator value equals 0. |

### Usage

You don't have to include all values for the message, but you must ensure that any updates to the existing message provide all required parameters for the message. Use the following information as a reference:

#### Outbound Alert Message

-   messageType
-   contentType
-   name
-   application
-   alert
-   sound
-   badge
-   content-available
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate
-   messagesPerPeriod
-   minutesPerPeriod
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   status

#### Outbound Page-Only Message

-   messageType
-   contentType
-   name
-   application
-   keys
-   custom
-   sendInitiator
-   startDate
-   messagesPerPeriod
-   minutesPerPeriod
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   status
-   pageId
-   url
-   subject

#### Outbound Alert+Page Message

-   messageType
-   contentType
-   name
-   application
-   alert
-   sound
-   badge
-   content-available
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate
-   messagesPerPeriod
-   minutesPerPeriod
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   status
-   pageId
-   url

#### Location Entry or Exit Alert Message

-   messageType
-   contentType
-   name
-   application
-   alert
-   sound
-   badge
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate
-   messagesPerPeriod
-   numberOfPeriods
-   periodType
-   isRollingPeriod
-   messageLimit
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   geofences
-   status

#### Location Entry or Exit Alert+Page Message

-   messageType
-   contentType
-   name
-   application
-   alert
-   sound
-   badge
-   keys
-   custom
-   sendInitiator
-   startDate
-   messagesPerPeriod
-   numberOfPeriods
-   periodType
-   isRollingPeriod
-   messageLimit
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   geofences
-   status
-   pageId
-   url

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /push/v1/message/mjK54s3RT
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageType": 1,
    "contentType": 1,
    "name": "My Message Name",
    "application": {
        "id": "237690ac-41ff-4d3f-82f2-9c7efd89185f",
        "name": "MyApplication"
    },
    "alert": "Alert message to show on device",
    "sound": "Sound to play, or 'default'",
    "badge": "+1",
    "content-available": 1,
    "openDirect": "OD001",
    "keys": [
        { "key": "key01", "value": "value01" },
        { "key": "key02", "value": "value02" },
        { "key": "key03", "value": "value03" }
    ],
    "custom": {
        "customA": 1,
        "customB": "custom text b",
        "customC": {
            "cC": "custom text c"
        }
    },
    "sendInitiator": 0,
    "startDate": "2014-04-30T14:50:00Z",
    "messagesPerPeriod": 1000,
    "minutesPerPeriod": 60,
    "numberOfPeriods": 24,
    "periodType": 5,
    "isRollingPeriod": false,
    "messageLimit": 1,
    "tzBased": true,
    "tzPastSendAction": 0,
    "scheduledTzOffset": -4.0,
    "scheduledTzSupportsDst": true,
    "inclusionLists": [
        { "id": "listID01" },
        { "id": "listID02" },
        { "id": "listID03" }
    ],
    "exclusionLists": [
        { "id": "listID04" },
        { "id": "listID05" },
        { "id": "listID06" }
    ],
    "status":  2,
    "pageId": 456,
    "url": "http://www.example.com",
    "subject": "My inbox subject line",
    "geofences": [
        { "id": "MTIzOjEyODow" },
        { "id": "MzIxOjEyODow" }
    ]
}
```

**Example Response**

```json
HTTP/1.1 200
{
    200 (OK)
}
```

If the request includes invalid values, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
