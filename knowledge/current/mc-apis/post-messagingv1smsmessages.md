---
title: "POST /messaging/v1/sms/messages/"
domain: mc-apis
topic: post-messagingv1smsmessages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.162Z
estimatedTokens: 1023
keywords: [POST, messaging, sms, messages, message, multiple, recipients, send, definition, provide, messageKey, otherwise, automatically, generated, **Overview**, Mixed, Responses, HTTP]
---

> Sends a message to multiple recipients using a send definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response.

# POST /messaging/v1/sms/messages/

## **Overview**

Sends a message to multiple recipients using a send definition. You can provide a messageKey in the request; otherwise, the messageKey is automatically generated in the response.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |
| recipients | array | Required | Array of recipient objects that contain parameters and metadata for the recipients, such as send tracking and personalization attributes. Use this parameter to send to multiple recipients in one request. Use either the recipient or recipients parameter, but not both. |
| recipients.contactKey | string |  | Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address. |
| recipients.to | string | Required | Channel address of the recipient. |
| recipients.messageKey | string |  | Unique identifier used to track message status. The messageKey can be created automatically when you create a message, or you can provide it as part of the request. Can be up to 100 characters, and there are no restricted characters. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected. |
| recipients.attributes | object |  | Information used to personalize the message for the recipient. Written as key:value pairs. The attributes match profile attributes, content attributes, or triggered send data extension attributes. |
| subscriptions.resubscribe | boolean |  | Forces the message send request to subscribe the mobile number back into a short code if a user may have requested STOP. Often used to ensure that critical transactional messages are delivered irrespective of a mobile number subscriber status. |
| content.message | string |  | Override for message content in the definition that you want sent with each message. Use substitution strings to personalize the content. |
| attributes | object |  | Information used to personalize the message for the request. Written as key:value pairs. The attributes match profile attributes, content attributes, or triggered send data extension attributes. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /messaging/v1/sms/messages
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "definitionKey": "account_rest",
  "recipients": [
    {
      "contactKey": "Astro25",
      "to": "15555551234",
      "messageKey": "nFL4ULgheUeaGbPIMzJJSw",
      "attributes": {
        "FirstName": "Astro",
        "Password": "1234567"
      }
    },
    {
      "contactKey": "Codey36",
      "to": "15555554321",
      "messageKey": "GV1LhQ6NFkqFUAE1IsoQ9Q"
      "attributes": {
        "FirstName": "Code",
        "Password": "2345678"
      }
    }
  ],
  "attributes": {
    "RequestTrackingAttribute": "2",
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
