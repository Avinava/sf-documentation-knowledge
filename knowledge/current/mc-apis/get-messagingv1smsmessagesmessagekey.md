---
title: "GET /messaging/v1/sms/messages/{messageKey}"
domain: mc-apis
topic: get-messagingv1smsmessagesmessagekey
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.371Z
estimatedTokens: 665
keywords: [messaging, sms, messages, messageKey, send, status, message, Because, route, rate-limited, infrequent, verification, collect, scale, subscribe, transactional, events, Event, Notification, Service, **Overview**, Sent, Queued, NotSent, HTTP, Responses]
---

> Gets the send status for a message. Because this route is rate-limited, use it for infrequent verification of a messageKey. To collect send status at scale, subscribe to transactional send events using the Event Notification Service.

# GET /messaging/v1/sms/messages/{messageKey}

## **Overview**

Gets the send status for a message. Because this route is rate-limited, use it for infrequent verification of a messageKey. To collect send status at scale, subscribe to transactional send events using the Event Notification Service.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageKey | string | Required | Unique identifier to track message send status. You must provide it in singleton requests using the recipient attribute. Can be up to 100 characters, and there are no restricted characters. To provide message key in batch requests, use the recipients array attribute. If you don’t provide the message key for recipients, it’s generated in the response. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/sms/messages/bcX0qaEp0USGciEnUJTW0w
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response: Sent Status

The message is sent to the outbound SMS service for delivery.

```js
HTTP/1.1 200 OK
{
  "requestId": "77431635-1b6b-44db-a16d-420361a43dc1",
  "eventCategoryType": "TransactionalSendEvents.SMSSent",
  "timestamp": "2018-08-03T13:41:18.55",
  "compositeId": "1F3631D4-5497-E811-80E4-1402EC6B9540.214435.228431.1.231481617",
  "info": {
    "messageKey": "bcX0qaEp0USGciEnUJTW0w",
    "contactKey": "Astro25",
  }
}
```

### Example Response: Queued Status

The message is queued for processing and assigned a sent or notSent status after processing. The message remains in SMSQueued status when the definitionKey is inactive.

```js
HTTP/1.1 200 OK
{
  "requestId": "fcdbb2f9-438b-4d52-a380-2eade2f46396",
  "eventCategoryType": "TransactionalSendEvents.SMSQueued",
  "timestamp": "2018-08-16T10:44:41.2196"
}
```

### Example Response: NotSent Status

The message isn’t sent because of a processing error described in the info object.

```
HTTP/1.1 200 OK
{
  "requestId": "30486456-ed41-46ba-96eb-06c4ff3b95d9",
  "eventCategoryType": "TransactionalSendEvents.SMSNotSent",
  "timestamp": "2018-07-24T06:26:58.463",
  "compositeId": "56941A9F-3A8F-E811-80E0-1402EC6B9529.4647028.622338.1.318768528",
  "info": {
    "messageKey": "9a-zUvWf3UKxLpwwIrqTmQ",
    "contactKey": "ec25a8c8-6d4e-42f0-84c3-4ea23564cbe5",
    "statusCode": 16,
    "statusMessage": "InvalidAttributeValue"
  }
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Success. Review example responses. |
| 400 Bad Request | Invalid request |
| 401 Unauthorized | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
