---
title: "POST /push/v1/messageBatch/{messageid}/send"
domain: mc-apis
topic: post-pushv1messagebatchmessageidsend
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.025Z
estimatedTokens: 1379
keywords: [POST, push, messageBatch, messageid, send, unique, messages, devices, API, call, batch, include, maximum, subscriber, key]
---

# POST /push/v1/messageBatch/{messageid}/send

> Sends unique messages to devices within the same API call. Each batch can include a maximum of 5000 subscriber key or device token values, depending on which value the call uses.

# POST /push/v1/messageBatch/{messageid}/send

## **Overview**

Sends unique messages to devices within the same API call. Each batch can include a maximum of 5000 subscriber key or device token values, depending on which value the call uses.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageID | string |  | The ID of the message to update |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| deviceTokens | array | Required | Device tokens of the mobile devices that will receive the message. Required if subscriberKeys are not set. |
| subscriberKeys | array | Required | Subscriber keys of the mobile devices that will receive the message. Required if deviceTokens are not set. |
| inclusionTags | array |  | Tags used to identify contacts that will receive the message |
| exclusionTags | array |  | Tags used to identify contacts that will not receive the message |
| sendTime | date |  | Date formatted yyyy-MM-dd HH:mm specifying a time in the future to send the message |
| message | array | Required | Components of the message to include in the send |
| message.alert | string | Required | Message text displayed on the mobile device |
| message.sound | string |  | A sound filename to be played on the device |
| message.badge | string |  | For iOS SDK version 4.9.5 and newer: Overrides the value on the push message definition. Badge count displays this number in a badge on the app and increments this number by one for each new unread message. For older iOS SDK versions: Overrides the value on the push message definition. Badge count does not increment. |
| message.openDirect | string |  | Value used as the OpenDirect destination |
| message.custom | array |  | Custom definition in escaped JSON |
| message.keys | array |  | An array of key/value pairs used as custom keys to be sent with the message request body |
| title | string |  | The title to be used in place of the message's original title. |
| subtitle | string |  | The subtitle to be used in place of the message's original subtitle. |
| mutable-content | boolean |  | If true, rich push functionality is enabled for the message. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/messageBatch/MToxMTQ6MA/send?access_token=av77znk73nr87tgfgb9xky5r HTTP/1.1
Content-Type: application/json
Content-Length: 671
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "DeviceTokens": [
            "DeviceToken1",
            "DeviceToken2"
        ],
        "InclusionTags": [
            "footballTeam"
        ],
        "Message": {
            "Alert": "Your team WINS!",
            "badge": "+1",
            "sound": "default",
            "custom": {
                "6": "20"
            }
        }
    },
    {
        "SubscriberKeys": [
            "SubscriberKey1"
        ],
        "InclusionTags": [
            "baseballTeam"
        ],
        "Message": {
            "Alert": "Good game team!",
            "badge": "+1",
            "sound": "default",
            "custom": {
                "6": "20"
            }
        }
    }
]
```

**Example Response**

```js
HTTP/1.1 200 OK
content-type: application/json
Date: Fri, 11 Jul 2014 15:05:11 GMT
Server: Mashery Proxy
Vary: Origin
X-Mashery-Message-ID: ec897e40-814d-4651-8ba3-54a70429eff3
X-Mashery-Responder: prod-j-worker-us-east-1c-37.mashery.com
Content-Length: 255
Connection: keep-alive

[
    {
        "tokenId": "1200f5da-d4b2-4b8d-89ff-68f9b3a97f06",
        "deviceTokens": [
            "DeviceToken1"
        ]
    },
    {
        "tokenId": "8984c0a9-83e7-4df0-98bc-7245debdb320",
        "subscriberKeys": [
            "SubscriberKey1"
        ]
    }
]
```

**Additional Example Request**

This request includes custom keys as an additional parameter. The mobile app must already include custom keys as part of the available functionality. The custom key name values must match between the message and application or the values will not update.

```js
[
    {
        "DeviceTokens": [
            "20tegf407161501332582300700000000"
        ],
        "InclusionTags": [
            "all"
        ],
        "Message": {
            "Alert": "messageBatch1_20140716152550170",
            "badge": "+1",
            "sound": "save1.wav",
            "Keys": [
                {
                    "Key": "key01",
                    "Value": "value01"
                },
                {
                    "Key": "key02",
                    "Value": "value02"
                },
                {
                    "Key": "key03",
                    "Value": "value03"
                }
            ],
            "Custom": {
                "customA": "customA_value"
            },
            "OpenDirect": "OD01"
        }
    },
    {
        "DeviceTokens": [
            "jtcPUSHDeviceId_20rtrtdsg906150137331"
        ],
        "InclusionTags": [
            "all"
        ],
        "Message": {
            "Alert": "messageBatch2",
            "badge": "+1",
            "sound": "save2.wav",
            "CustomKeys": [
                {
                    "Key": "key01",
                    "Value": "value01"
                },
                {
                    "Key": "key02",
                    "Value": "value02"
                }
            ],
            "Custom": {
                "customB": "customB_value"
            },
            "OpenDirect": "OD02"
        }
    }
]
```

Last Updated: Jun 8, 2021
