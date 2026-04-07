---
title: "DELETE /messaging/v1/sms/definitions/{definitionKey}/queue"
domain: mc-apis
topic: delete-messagingv1smsdefinitionsdefinitionkeyqueue
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.426Z
estimatedTokens: 224
keywords: [messaging, sms, definitions, definitionKey, queue, Deletes, send, definition, inactive, status, **Overview**, Usage, Error]
---

# DELETE /messaging/v1/sms/definitions/{definitionKey}/queue

> Deletes the queue for a send definition. The send definition must be in inactive status.

# DELETE /messaging/v1/sms/definitions/{definitionKey}/queue

## **Overview**

Deletes the queue for a send definition. The send definition must be in inactive status.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| definitionKey | string | Required | Unique identifier of the definition. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /messaging/v1/sms/definitions/2FA_order_accounts/queue
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "requestId":"bf27b84b-72e8-4244-8bdb-93e5de5fc7d8",
  "message":"Queued"
}
```

### Error Response

```js
HTTP/1.1 400 Bad Request
{
  "message":"MCMS_UTM_Runtime_InvalidOperation: Definition status must be inactive to delete queue",
  "errorcode":30001,
  "documentation":""
}
```

Last Updated: Jun 8, 2021
