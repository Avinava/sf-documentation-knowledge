---
title: "GET /messaging/v1/email/messages/?type=notSent"
domain: mc-apis
topic: get-messagingv1emailmessagestypenotsent
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.124Z
estimatedTokens: 389
keywords: [messaging, email, messages, type=notSent, paginated, were, sent, ordered, oldest, newest, **Overview**, Usage, HTTP, Responses]
---

# GET /messaging/v1/email/messages/?type=notSent

> Gets a paginated list of messages that were not sent, ordered from oldest to newest.

# GET /messaging/v1/email/messages/?type=notSent

## **Overview**

Gets a paginated list of messages that were not sent, ordered from oldest to newest.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| type | string | Required | Only notSent is supported. |
| $pageSize | integer |  | Number of messageKeys (array elements) to return per response page. |
| lastEventId | integer |  | Event ID from which you want the response to start. To obtain the initial event ID, submit a request without a lastEventId. The events in the response are listed top to bottom from oldest to newest. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /messaging/v1/email/messages/?type=notSent&$pagesize=20&lastEventId=35759
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "lastEventID": 35774,
  "messages": [
    {
      "statusCode": 24,
      "statusMessage": "ListDetectiveExclusion",
      "eventCategoryType": "TransactionalSendEvents.EmailNotSent",
      "timestamp": "2018-12-17T13:05:40.947",
      "definitionKey": "technical_deep_dive_1",
      "eventID": 35760,
      "info": {
        "messageKey": "2iQNfGHj2UqTalK9x2gPow"
      }
    }
  ],
  "count": 1
}
```

### HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Success. Review example response. |
| 400 Bad Request | Invalid request |
| 401 Unauthorized | Failed to pass authorization. |
| 500 Server Error | Internal error |

Last Updated: Jun 8, 2021
