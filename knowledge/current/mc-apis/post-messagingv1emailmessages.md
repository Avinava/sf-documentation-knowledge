---
title: "POST /messaging/v1/email/messages/"
domain: mc-apis
topic: post-messagingv1emailmessages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:24.920Z
estimatedTokens: 1000
keywords: [POST, messaging, email, messages, message, multiple, recipients, send, definition, provide, messageKey, otherwise, automatically, generated, limit]
---

# POST /messaging/v1/email/messages/

> Sends a message to multiple recipients using a send definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response. The limit is 2000 recipients per request. If you send attributes with the recipients, we recommend no more than 500 recip

# POST /messaging/v1/email/messages/

## **Overview**

Sends a message to multiple recipients using a send definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response. The limit is 2000 recipients per request. If you send attributes with the recipients, we recommend no more than 500 recipients per request.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |
| recipients | array | Required | Array of recipient objects that contain parameters and metadata for the recipients, such as send tracking and personalization attributes. Use this parameter to send to multiple recipients in one request. Use either the recipient or recipients parameter, but not both. |
| recipients.contactKey | string | Required | Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address. |
| recipients.to | string |  | Channel address of the recipient. For email, it’s the recipient's email address. |
| recipients.messageKey | string |  | Unique identifier used to track message status. Can be automatically created when you create a message or provided as part of the request. Can be up to 100 characters, and there are no restricted characters. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. |
| recipients.attributes | object |  | Information used to personalize the message for the recipient. Written as key:value pairs. The attributes match profile attributes, content attributes, or triggered send data extension attributes. |
| attributes | object |  | Information used to personalize the message for the request. Written as key:value pairs. The attributes match profile attributes, content attributes, or triggered send data extension attributes. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/email/messages
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "2FA_order_accounts",
  "recipients": [
    {
      "contactKey": "recipient1",
      "to": "recipient1@example.com",
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw",
      "attributes": {
        "RequestAttribute_1": "value_1",
        "RequestAttribute_2": "value_2",
        "Attribute1": "This is one for recipient1",
        "Attribute2": "This is two for recipient1"
      }
    },
    {
      "contactKey": "recipient2",
      "to": "recipient2@example.com",
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
      "attributes": {
        "UserAttribute_3": "value_3",
        "UserAttribute_3": "value_4",
      }
    }
  ],
  "attributes": {
    "UserAttribute_a": "value_a",
    "UserAttribute_b": "value_b"
  }
}
```

### Example Response

```js
HTTP/1.1 202 Accepted
{
  "requestId": "ccdb94bf-fcac-4fef-b194-08f534a2079a",
  "errorcode": 0,
  "responses": [
    {
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw"
    },
    {
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
    }
  ]
}
```

### Example Response: Mixed Responses

```js
HTTP/1.1 202 Accepted
{
  "requestId": "c261d918-e99e-460c-94dc-3bbfda154c88",
  "errorcode": 109001,
  "message": "MCMS_UTM_ResponsesHasErrors: 1 subscribers failed to queue out of 2",
  "responses": [
    {
      "messageKey": "gHQ3VLsfCEOuAC2sl-CV1Q",
      "errorcode": 109106,
      "message": "MCMS_UTM_Validation_MissingRequiredField_to: Invalid subscriber"
    },
    {
      "messageKey": "oixAQE_zFUyr8bT8sJncdw"
    }
  ]
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 202 Accepted | Request is accepted. Review example response. |
| 400 Bad Request | Invalid request |
| 403 Forbidden | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
