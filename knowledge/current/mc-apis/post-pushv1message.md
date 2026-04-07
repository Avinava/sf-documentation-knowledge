---
title: "POST /push/v1/message"
domain: mc-apis
topic: post-pushv1message
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.005Z
estimatedTokens: 3726
keywords: [POST, push, message, Creates, template, sending, subscribers, audience, inclusion, extension, personalize, subscriber, personalization, strings, AMPscript, lookups, definition, **Overview**, Outbound, Alert, Location, Entry, Exit, Alert+Page, Inbox, Inbox+Alert]
---

> Creates a push message template for sending to a list of subscribers or an audience inclusion list or data extension. You can personalize each message for each subscriber using personalization strings or AMPscript lookups from a data extension within a single push message definition. You can also pa

# POST /push/v1/message

## **Overview**

Creates a push message template for sending to a list of subscribers or an audience inclusion list or data extension. You can personalize each message for each subscriber using personalization strings or AMPscript lookups from a data extension within a single push message definition. You can also pass the text of the message to override the message contents specified in the definition for API-driven personalization.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageType | integer | Required | Indicates the type of message to create using the following integer values: 1 - Outbound (default), 3 - Location Entry, 4 - Location Exit, 5 - Beacon, 8 - Inbox |
| contentType | integer | Required | Indicates the content included within the message using the following integer values: 1 - Alert (default), 2 - Inbox, 3 - Inbox+Alert |
| name | string | Required | Name of the message. Must be 100 or fewer characters. For Content Builder messages, use this format: content name-unique identifier. For example: 'my test content message-0debaa7a11e11b0a00b12345ef384b1z'. |
| application | array | Required | App used to send message |
| application.id | string | Required | The ID of the application |
| application.name | string | Required | The name of the application |
| alert | string |  | Message displayed on the mobile device |
| sound | string |  | Used to override the value on the push message definition. Indicates the sound file to play when the push message arrives on the mobile device. Name must include 100 or less characters. |
| badge | integer |  | Available for both iOS and Android. For iOS SDK version 4.9.5 and newer: Overrides the value on the push message definition. Badge count displays this number in a badge on the app and increments this number by one for each new unread message. For older iOS SDK versions: Overrides the value on the push message definition. Badge count does not increment. |
| content-available | integer |  | Integer value indicating the availability of content for an application enabled to use background push. Set this value to 1 to deliver the message as a silent push. This parameter applies only to apps integrated with the background push functionality available in iOS and Android. Note that you can use background push functionality in all apps with iOS 7 and Newsstand apps in iOS 6. |
| openDirect | string |  | Used to override the value on the push message definition. This value determines the location within the app that an app user views when they open that app via a push message. Assigned values must include 15 or less characters. |
| keys | array |  | Used to override the value on the push message definition. An array of Key/Value pairs that correspond to customer values defined in MobilePush. |
| custom | array |  | Specify the actual request body of the push message to precisely align that request body to your specifications. |
| sendInitiator | integer |  | Indicates the method used to initiate the send for a push message using the following integer values: 0 - UI-based send, 1 - API (default), 2 - Automation, 3 - Journey Builder |
| startDate | date |  | Date and time when the message becomes available for sends. Uses a default value of the message creation time. |
| endDate | date |  | Date and time when the message is no longer available for sends. This optional parameter applies only to messages whose contentType is CloudPage or Alert+CloudPage. endDate must be after startDate. |
| messagesPerPeriod | integer |  | Integer value indicating the number of messages that can send during a specified time period to throttle the volume of users responding to the notification. Use only when sendInitiator value equals 0. |
| minutesPerPeriod | integer |  | Integer value indicating the number of minutes included in a specified time period. Use only when sendInitiator value equals 0. |
| numberOfPeriods | integer |  | Indicates the time span of the period using the following integer values: 1 - Year, 2 - Month, 3 - Week, 4 - Day, 5 - Hour |
| isRollingPeriod | boolean |  | Boolean value indicating whether the limit resets after a rolling time period window or ends at a specified time |
| messageLimit | integer |  | Integer values indicating the total number of times a messages displays on a mobile device |
| title | string |  | The title to be used in place of the message's original title. |
| subtitle | string |  | The subtitle to be used in place of the message's original subtitle. This setting applies only to push notification alerts. |
| mutable-content | boolean |  | If true, rich push functionality is enabled for the message. |
| tzBased | boolean |  | Boolean value indicating whether a send occurs based on the specified time zone for a mobile device, as reflected in the contact record. To ensure timely delivery for each timezone, make sure that any dependent data extensions and audiences are available to be refreshed up to 14 hours prior to the scheduled send time. Uses a default value of false. Use only when sendInitiator value equals 0. |
| tzPastSendAction | string |  | Indicates the action to perform when a time-zone-based send occurs and that send time already passed for some time zones. Uses the following string values: 1 - Send immediately (default), 2 - Send at scheduled time, next day, 3 - Never send |
| scheduleTzOffset | integer |  | Integer value indicating the time zone offset. Uses a default value of -6. |
| scheduledTzSupportsDst | boolean |  | Boolean value indicating whether the scheduled time zone supports Daylight Savings Time. Uses a default value of false. |
| inclusionLists | array |  | Array of list ID values indicating the lists that will receive the send. Use only when sendInitiator value equals 0. |
| exclusionLists | array |  | Array of list ID values indicating the lists excluded from receiving the send. Use only when sendInitiator value equals 0. |
| status | integer |  | Indicates the status of the message using the following integer values:: 1 - Draft, 2 - Active (default), 3 - Inactive, 4 - Deleted |
| pageId | integer |  | Integer values indicating the page associated with the message for CloudPage and Alert+CloudPage sends |
| url | string |  | String value indicating the URL for the page associated with the message for CloudPage and Alert+CloudPage sends |
| subject | string |  | String value indicating the subject line used for the message |
| media | array |  | Rich media to include in the message |
| media.androidUrl | string |  | URL for the media to send to Android devices |
| media.iosUrl | string |  | URL for the media to send to iOS devices |
| media.alt | string |  | Text to display if the message cannot include the specified rich media |
| geofences | array |  | Array of string values indicating the geofences associated with the message send. Use only when sendInitiator value equals 1. |

### Usage

You can create different types of messages using this call. Ensure that you include the correct properties for each message type using the list below.

API Rate Limits: We might enforce a rate limit if you perform more than 100 requests per minute or have more than 1,000 active push message templates. Rather than create a unique push message template for each subscriber, use personalization strings, AMPscript, or message field overrides when sending a push message.

#### Outbound Alert Message

-   messageType
-   contentType
-   name (required)
-   application (required)
-   alert
-   sound
-   badge
-   content-available
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate (required)
-   messagesPerPeriod
-   minutesPerPeriod
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   inclusionDataExtensions
-   exclusionDataExtensions
-   status
-   media
-   title
-   subtitle

#### Location Entry or Exit Alert Message

-   messageType
-   contentType
-   name (required)
-   application (required)
-   alert (required)
-   sound
-   badge
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate (required)
-   messagesPerPeriod
-   numberOfPeriods
-   periodType
-   isRollingPeriod
-   messageLimit
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   geofences (required)
-   status
-   media
-   title
-   subtitle

#### Location Entry or Exit Alert+Page Message

-   messageType
-   contentType
-   name (required)
-   application (required)
-   alert (required)
-   sound
-   badge
-   keys
-   custom
-   sendInitiator
-   startDate (required)
-   messagesPerPeriod
-   numberOfPeriods
-   periodType
-   isRollingPeriod
-   messageLimit
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   geofences (required)
-   status
-   pageId (required)
-   url (required)
-   media
-   title
-   subtitle

#### Inbox Only Message

-   messageType
-   contentType
-   name (required)
-   application (required)
-   keys
-   custom
-   sendInitiator
-   startDate (required)
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   inclusionDataExtensions
-   exclusionDataExtensions
-   status
-   pageId (required)
-   url (required)
-   subject (required)

#### Inbox+Alert Message

-   messageType
-   contentType
-   name (required)
-   application (required)
-   alert (required)
-   sound
-   badge
-   content-available
-   openDirect
-   keys
-   custom
-   sendInitiator
-   startDate (required)
-   messagesPerPeriod
-   minutesPerPeriod
-   tzBased
-   tzPastSendAction
-   scheduledTzOffset
-   scheduledTzSupportsDst
-   inclusionLists
-   exclusionLists
-   inclusionDataExtensions
-   exclusionDataExtensions
-   status
-   pageId (required)
-   url (required)
-   subject (required)
-   media
-   title
-   subtitle

**Example Request**

```json
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/message
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
    "endDate": "2014-04-30T14:55:00Z",
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
    "media": {
      "iosUrl":"https://example.com",
      "androidUrl":"https://example.com",
      "alt":"Example ALT Text"
    },
    "geofences": [
        { "id": "MTIzOjEyODow" },
        { "id": "MzIxOjEyODow" }
    ]
}
```

**Example Response**

If all values in the request are valid, the API returns a response with the message parameters.

```json
HTTP/1.1 201
    {
        "id": "MTIzOjExNDow",
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
        "status":  2
    }
```

If the request was not valid, the API returns a 400 response with details on the error. The example below includes the error for not including any DeviceTokens values:

```json
HTTP/1.1 400 Bad Request
{
    "errors":    [
        "The count of DeviceTokens cannot be zero."
    ]
}
```

**Possible Errors**

| Message | Details |
| --- | --- |
| Message id {0} is not valid. | The messageID value provided in the URL was not in a valid format. |
| Message {0} is not valid for the client. | The messageID value included in the URL does not match a valid value within the account. |
| The status for Message {0} is not set to Active. | The status for the message used in the call must be set to Active. |
| The count of DeviceTokens cannot be zero. | At least one value needs to be passed in the DeviceTokens parameter. |
| One or more DeviceTokens must be specified in order to send a message. | The call does not include a parameter for the DeviceToken value. |
| Message is blank and no override message was provided. | The message definition within the MobilePush interface does not have a message specified so the messageText parameter is required. |
| Cannot override message text with a blank message. | The parameter for Override was set to true, but the value passed for messageText does not contain a value. |
| MessageText is not applicable when Override is false. | The call does not require passing a value for messageText if Override is set to true. |
| {0} is not a valid send time (yyyy-MM-dd HH:mm). | The call includes an invalid send time. |

Last Updated: Jun 8, 2021
