---
title: "POST /push/v1/messageApp/{messageId}/send"
domain: mc-apis
topic: post-pushv1messageappmessageidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.203Z
estimatedTokens: 651
keywords: [POST, push, messageApp, messageId, send, Broadcasts, message, users, push-enabled, app, **Overview**]
---

> Broadcasts a message to all users of a push-enabled app.

# POST /push/v1/messageApp/{messageId}/send

## **Overview**

Broadcasts a message to all users of a push-enabled app.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageID | string | Required | The ID of the triggered send definition configured for MessageSend sending used for the send |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| override | boolean |  | A flag indicating the contact is to receive the messageText as provided instead of the message's original text. |
| messageText | string |  | The text value to be used in place of the message's original text. This field is required when override is true. |
| title | string |  | The title to be used in place of the message's original title. |
| subtitle | string |  | The subtitle to be used in place of the message's original subtitle. |
| mutable-content | boolean |  | If true, rich push functionality is enabled for the message. |
| sendTime | date |  | Date formatted yyyy-MM-dd HH:mm specifying a time in the future to send the message. |
| blackoutWindow | string |  | Blackout window definition used to delay message sending outside a given windowStart and windowEnd and utcOffset. |
| sound | string |  | Sound filename to be played on the device. |
| badge | string |  | For iOS SDK version 4.9.5 and newer: Overrides the value on the push message definition. Badge count displays this number in a badge on the app and increments this number by one for each new unread message. For older iOS SDK versions: Overrides the value on the push message definition. Badge count does not increment. |
| openDirect | string |  | Value used as the open direct destination |
| customPayload | string |  | Custom definition in escaped JSON. |
| customKeys | array |  | An array of key/value pairs used as custom keys to be sent with the message request body. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageApp/OEl8ODow/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "Override": true,
    "MessageText": "New information available!",
    "title": "Boost your winnings!",
    "subtitle": "Check your app to see what else is in store.",
    "mutable-content": 1,
    "SendTime": "2012-10-31 09:00",
    "Sound": "MyFile.caf",
    "Badge": "+1",
    "OpenDirect": "OD01",
    "CustomKeys": {
        "keyA": "keyA_value",
        "keyB": "keyB_value"
    },
    "CustomPayload": { "customA": "customA_value" }
}
```

**Example Response**

```js
{
    "tokenId": "TokenIDValue"
}
```

Last Updated: Jun 8, 2021
