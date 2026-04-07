---
title: "POST /messaging/v1/sms/messages/{messageKey}"
domain: mc-apis
topic: post-messagingv1smsmessagesmessagekey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.169Z
estimatedTokens: 700
keywords: [POST, messaging, sms, messages, messageKey, message, recipient, via, send, definition, path, **Overview**, HTTP, Responses]
---

> Sends a message to a single recipient via a send definition using a messageKey path parameter.

# POST /messaging/v1/sms/messages/{messageKey}

## **Overview**

Sends a message to a single recipient via a send definition using a messageKey path parameter.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageKey | string | Required | Unique identifier used to track message status. The messageKey can be created automatically when you create a message, or you can provide it as part of the request. Can be up to 100 characters, and there are no restricted characters. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |
| recipient | object | Required | Object that contains parameters and metadata for the recipient, such as send tracking and personalization attributes. Use this parameter to send to one recipient. Use either the recipient or recipients parameter, but not both. |
| recipient.contactKey | string |  | Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address. |
| recipient.to | string | Required | Channel address of the recipient. |
| recipient.attributes | object |  | Information used to personalize the message for the recipient. Written as key:value pairs. The attributes match profile attributes, content attributes, or triggered send data extension attributes. |
| content.message | string |  | Override for message content in the definition that you want sent with each message. Use substitution strings to personalize the content. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/messages/f4fe74b7-c3c0-4e5a-9f49-b63a641109a2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account-reset",
  "recipient": {
    "to": "15555551234",
    "contactKey": "Astro25",
    "attributes": {
      "FirstName": "Astro",
      "password": "1234567890ab"
    }
  },
  "subscriptions": {
    "resubscribe": true
  }
}
```

### Example Response

```js
HTTP/1.1 202 Accepted
{
  "requestId": "239a2bc3-bdcb-4f8a-9e08-28aff9f983b7",
  "errorcode": 0,
  "responses": [
    {
      "messageKey": "f4fe74b7-c3c0-4e5a-9f49-b63a641109a2"
    }
  ]
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 202 Accepted | Request is accepted. Review example response. |
| 400 Bad Request | Invalid request |
| 401 Unauthorized | Failed to pass authorization |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
