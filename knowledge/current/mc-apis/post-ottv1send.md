---
title: "POST /ott/v1/send"
domain: mc-apis
topic: post-ottv1send
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.039Z
estimatedTokens: 5186
keywords: [POST, ott, send, message, recipient, networks, Facebook, Messenger, LINE, **Overview**, Success, Error, Possible, Errors, Samples, Different, Content, Text, Image, Video, Audio, Native]
---

> Send an OTT message to the recipient. Supported OTT networks are Facebook Messenger and LINE.

# POST /ott/v1/send

## **Overview**

Send an OTT message to the recipient. Supported OTT networks are Facebook Messenger and LINE.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageKey | string | Required | User-defined message identifier. |
| messageGroupKey | string |  | User-defined message identifier to group a number of send requests. |
| from | object | Required | Object containing the senderType and senderId. |
| from.senderType | string | Required | Indicates the name of the OTT network the resource is being registered with values: line, messenger. |
| from.senderId | string | Required | Indicates the identifier of the OTT resource sending the message: LINE Channel Id, Messenger Page Id. |
| to | object | Required | Message Recipient details. For Messenger: Either ottId or userReference is required. If both ottId and userReference are provided, userReference is used for the send request. For LINE: ottId is required. If both ottId and userReference are provided, userReference is used for send request. |
| to.ottId | string |  | Recipient ID of the user. For LINE, if userReference is invalid, a retry is attempted with ottId as senderId. |
| to.userReference | string |  | Alternate Recipient ID of the user. For Messenger: user_ref can be passed as userReference. For LINE, reply_token can be passed as userReference. |
| message | object | Required | Message contents of the send request. |
| message.subject | string |  | Message name |
| message.contents | array | Required | Message content blocks of the send message request. For messenger, only 1 content block is allowed. For LINE, upto 5 content blocks are allowed. |
| message.contents.type | string | Required | Indicates the message content type of the send request with values: text, image, audio, video, native. |
| message.contents.text | string |  | Message text to be sent out to the recipient. Required for 'text' type message content. |
| message.contents.url | string |  | URL of the multimedia attachment to be sent out to the recipient. Required for 'image, audio, video' type message content. |
| message.contents.altUrl | string |  | Alternate URL of the multimedia attachment to be sent out to the recipient. Required for LINE for 'image, video' type message content. |
| message.contents.duration | string |  | Length of the audio multimedia attachment to be sent out to the recipient. Required for LINE for 'audio' type message content. |
| message.contents.nativePayload | object |  | Ott-network-specific blob of JSON payload passed in message request. |
| message.contents.isReusable | boolean |  | Indicates if a multimedia attachment can be reused for future messages. Only supported for Messenger. |
| message.contents.attachmentId | string |  | Attachment Id of a reusable multimedia asset. Only supported for Messenger. |
| message.customKeys | array |  | Custom keys to pass-through in the message payload. |
| message.customKeys.messagingType | string |  | Indicates the messaging_type of a messenger send request with values: RESPONSE, UPDATE, MESSAGE_TAG. Required for Messenger send requests. |
| message.customKeys.tag | string |  | Message Tag of a messenger send request. Required for Messenger send request if messagingType = Message_TAG. |
| message.customKeys.notificationType | string |  | Indicates the push notification type for message send request with values: REGULAR, SILENT_PUSH, NO_PUSH. Required for Messenger. Optional for Messenger send requests. |
| validityPeriod | string | Required | Time period for which the request is valid. This field is not yet supported. |

## Usage

### Example Request: Messenger Message Send

-   For the `to` object, either `ottId` or `userReference` is required. If both `ottId` and `userReference` are provided, `userReference` is used for send request.
-   The `message.contents` array cannot contain more than 1 object.
-   For the `message.customKeys` array, `messagingType` is required. If the `messagingType` is `MESSAGE_TAG`, then `message.customKeys.tag` is required. `notificationType` is an optional custom key.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

### Example Request: LINE Message Send

-   For the `to` object, `ottId` is required. If both `ottId` and `userReference` are provided, `userReference` is used for send request. If `userReference` is invalid, a retry is attempted with `ottId` as `senderId`.
-   The `message.contents` array can contain up to 5 content objects.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "CanBeAGUIDorAny100UnicodeCharString",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "2145435435632435"
    },
    "to": {
        "ottId": "U42348yafsd8y3248yfsq8cy9088934d",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "Thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

### Example Success Response

```js
HTTP/1.1 201 Created

{
    "ottRequestId": "w5f397e-3464-53h6-4535-5345359f567h546"
}
```

### Example Error Response

```
HTTP/1.1 400 Bad Request

{
    "message": "Please fix the following errors",
    "errorcode": 10006,
    "documentation": "",
    "validationErrors": [
        {
            "message": "Message contents must be provided",
            "errorcode": 10002,
            "documentation": ""
        }
    ]
}
```

#### Possible Errors

| Message | Details |
| --- | --- |
| From object must be provided | The send message request payload is missing a from object. |
| Sender Id must be provided | senderId is empty or missing in the from object in the send message request payload. |
| Sender Type must be provided | senderType is empty or missing in the from object in the send message request payload. |
| Sender Id provided is either unregistered or inactive Unknown | senderId provided in the send message request payload is unregistered or inactive Unknown. |
| To object must be provided | The send message request payload is missing a to object. |
| Message object must be provided | The send message request payload is missing a message object. |
| Message contents must be provided | The send message request payload is missing a contents property within message object or contents array is empty. |
| Content Type for all message contents must be provided | type is empty or missing in at least one of the content objects in contents property within message object. |
| Text attribute must be provided for Text type Message Content | text is empty or missing for a content object with type text in contents property within message object. |
| Url attribute must be provided for Image, File, Audio and Video type Message Content | url is empty or missing for a content object with type image, audio, video, file in contents property within message object. |
| Validity Period must be provided | validityPeriod is empty or missing in the from object in the send message request payload. |
| Message object cannot contain more than {0} message objects | contents array in message contains more objects that supported for a specific OTT network. For Messenger, contents array cannot contain more than 1 object. For LINE, contents array cannot contain more than 5 objects. |
| MessagingType must be provided as a Custom Key | MESSENGER only: messagingType property is empty or missing in customKeys. |
| Tag must be provided as a Custom Key when MessagingType is provided as MESSAGE_TAG | MESSENGER only: tag property is empty or missing in customKeys, if the messagingType is set to MESSAGE_TAG. |
| Either OttId or UserReference must be provided in the To object | MESSENGER only: Both ottId and userReference are empty or missing in the to object in the send message request payload. At least one of the fields should be provided. |
| OttId must be provided in the To object | LINE only: ottId is empty or missing in the to object in the send message request payload. |

### Samples for Different Messenger Content Types

#### Text Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

#### Image Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "image",
            "url": "https://example.com/original.jpg",
            "alturl": "https://example.com/preview.jpg",
            "isreusable": true,
            "attachmentid": 12345
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

#### Video Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "video",
            "url": "https://example.com/original.mp4"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

#### Audio Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "audio",
            "url": "https://example.com/original.m4a"
        }],
        "customKeys": [{
            "messagingType": "RESPONSE"
        }]
    },
    "validityPeriod": 30
}
```

#### Native Message

Use a native message content type to send an OTT network-specific content other than Text, Image, Audio, or Video. For Messenger, the native content type can be used to send File, Templates including Generic template, button template, receipt template, and list template. To send a native message, use a content type of `native` and provide the OTT network-specific message object into `payload` property.

For more information about Messenger sends, see the [Facebook Messenger Send API Reference](https://developers.facebook.com/docs/messenger-platform/reference/send-api/).

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
   "MessageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
   "From": {
      "SenderType": "messenger",
      "SenderId": "503868699681937"
   },
   "To": {
      "OttId": "FBfacdb735074f7c492c0bf190fa99020"
   },
   "Message": {
      "Subject": "Message Name",
      "Contents": [
         {
            "type": "native",
            "nativePayload": {
               "attachment": {
                  "type": "template",
                  "payload": {
                     "template_type": "generic",
                     "elements": [
                        {
                           "title": "Welcome!",
                           "image_url": "https://example.com/company_image.png",
                           "subtitle": "We have the right hat for everyone.",
                           "default_action": {
                              "type": "web_url",
                              "url": "https://example.com/view?item=103",
                              "messenger_extensions": false,
                              "webview_height_ratio": "tall",
                              "fallback_url": "https://example.com/"
                           },
                           "buttons": [
                              {
                                 "type": "web_url",
                                 "url": "https://example.com",
                                 "title": "View Website"
                              },
                              {
                                 "type": "postback",
                                 "title": "Start Chatting",
                                 "payload": "DEVELOPER_DEFINED_PAYLOAD"
                              }
                           ]
                        }
                     ]
                  }
               }
            }
         }
      ],
      "CustomKeys": [
         {
            "messagingType": "RESPONSE"
         }
      ]
   },
   "ValidityPeriod": 30
}
```

### Samples for Different LINE Content Types

#### Text Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
                "type": "text",
                "text": "thanks for purchase"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```

#### Image Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "image",
            "url": "https://example.com/original.jpg",
            "alturl": "https://example.com/preview.jpg"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```

#### Video Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "video",
            "url": "https://example.com/original.mp4",
            "alturl": "https://example.com/preview.jpg"
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```

#### Audio Message

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "messenger",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "audio",
            "url": "https://example.com/original.m4a",
            "duration": 13141
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```

#### Native Message

Use a native message content type to send an OTT network-specific content other than Text, Image, Audio, or Video. For LINE, the native content type can be used to send Sticker, Location, ImageMap, Button Template, Confirm Template, Carousal Template and Image Carousal Template. To send a native message, use a content type of `native` and provide the OTT network-specific message object into `payload` property.

For more information about LINE sends, see the [LINE API Reference](https://developers.line.me/en/docs/messaging-api/reference/#message-objects).

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /ott/v1/send
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "messageKey": "e1c35141-6e5c-4bc2-813b-60f969e52b0d",
    "messageGroupKey": "CanBeAGUIDorAny100UnicodeCharString",
    "from": {
        "senderType": "line",
        "senderId": "503868699681937"
    },
    "to": {
        "ottId": "FBfacdb735074f7c492c0bf190fa99020",
        "userReference": "1938cd4d34cc4db0b109756b8a9b14ff"
    },
    "message": {
        "subject": "Message Name",
        "contents": [{
            "type": "native",
            "payload": {
                   "type": "template",
                   "altText": "this is a buttons template",
                   "template": {
                       "type": "buttons",
                       "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
                       "title": "Menu",
                       "text": "Please select",
                       "actions": [{
                               "type": "postback",
                               "label": "Buy",
                               "data": "action=buy&itemid=123"
                           },
                           {
                               "type": "postback",
                               "label": "Add to cart",
                               "data": "action=add&itemid=123"
                           },
                           {
                               "type": "uri",
                               "label": "View detail",
                               "uri": "http://example.com/page/123"
                           }
                       ]
                   }
               }
           }],
        }],
        "customKeys": []
    },
    "validityPeriod": 30
}
```

Last Updated: Jun 8, 2021
