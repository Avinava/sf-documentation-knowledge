---
title: "POST /push/v1/messageContact/{messageId}/send"
domain: mc-apis
topic: post-pushv1messagecontactmessageidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.048Z
estimatedTokens: 1018
keywords: [POST, push, messageContact, messageId, send, message, mobile, devices, push-enabled, app, **Overview**, Usage]
---

# POST /push/v1/messageContact/{messageId}/send

> Sends a message to the specified mobile devices of a push-enabled app.

# POST /push/v1/messageContact/{messageId}/send

## **Overview**

Sends a message to the specified mobile devices of a push-enabled app.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageID | string | Required | The ID of the triggered send definition configured for MessageSend sending used for the send |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| inclusionTags | array |  | Tags used to identify contacts that will receive the message |
| exclusionTags | array |  | Tags used to identify contacts that will not receive the message |
| deviceTokens | array |  | The device tokens of the mobile devices that will receive the message (5000 max.). This value is required if subscriberKeys are not set. |
| subscriberKeys | array |  | The subscriber keys of the mobile devices that will receive the message (5000 max.). This value is required if deviceTokens are not set. |
| override | boolean |  | If true, the contact receives the messageText, title, and subtitle as provided instead of the message's original text. |
| messageText | string |  | The text value to be used in place of the message's original text. This value is required if deviceTokens are not set. |
| title | string |  | The title to be used in place of the message's original title. |
| subtitle | string |  | The subtitle to be used in place of the message's original subtitle. |
| mutable-content | boolean |  | If true, rich push functionality is enabled for the message. |
| sendTime | date |  | Date formatted yyyy-MM-dd HH:mm specifying a time in the future to send the message, referencing UTC-6. |
| blackoutWindow | string |  | Blackout window definition used to delay message sending outside a given windowStart and windowEnd and utcOffset. |
| MessageCategory | object |  | Used to specify the Interactive Notification category for a given send. Sending a messageCategory triggers the mobile device to the display buttons the application has defined and associated with that category name. Each Push application can have one or more categories. |
| MessageCategory.Name | string |  | A name is required when including the MessageCategory object. |
| sound | string |  | Sound filename to be played on the device |
| badge | string |  | For iOS SDK version 4.9.5 and newer: Overrides the value on the push message definition. Badge count displays this number in a badge on the app and increments this number by one for each new unread message. For older iOS SDK versions: Overrides the value on the push message definition. Badge count does not increment. |
| openDirect | string |  | Value used as the open direct destination |
| customPayload | string |  | Custom definition in escaped JSON. |
| customKeys | array |  | An array of key/value pairs used as custom keys to be sent with the message request body |
| content-available | integer |  | Indicates the availability of content for an application enabled to use silent push. Set this value to 1 to indicate available content. This parameter applies only to apps integrated with the background push functionality available in iOS. |

### Usage

## Example Request

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageContact/OEl8ODow/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "DeviceTokens": [
    "DeviceToken1",
    "DeviceToken2",
    "DeviceToken3"
  ],
  "InclusionTags": [
    "Midwest"
  ],
  "ExclusionTags": [
    "Indiana",
    "Ohio"
  ],
  "Override": true,
  "MessageText": "New information available!",
  "title": "Boost your winnings!",
  "subtitle": "Check your app to see what else is in store.",
  "mutable-content": 1,
  "SendTime": "2012-10-31 09:00",
  "MessageCategory": {
    "Name": "ETubeDemo"
  },
  "Sound": "MyFile.caf",
  "Badge": "+1",
  "OpenDirect": "OD01",
  "CustomKeys": {
    "keyA": "keyA_value",
    "keyB": "keyB_value"
  },
  "CustomPayload": {
    "customA": "customA_value"
  }
}
```

## Example Response

```
HTTP/1.1 200
{
    "tokenId": "TokenIDValue"
}
```

Last Updated: Jun 8, 2021
