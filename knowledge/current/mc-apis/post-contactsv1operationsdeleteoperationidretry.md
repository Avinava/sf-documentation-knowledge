---
title: "POST /contacts/v1/operations/delete/{operationID}/retry"
domain: mc-apis
topic: post-contactsv1operationsdeleteoperationidretry
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.023Z
estimatedTokens: 194
keywords: [POST, contacts, operations, operationID, retry, failed, contact, operation, **Overview**, Usage]
---

# POST /contacts/v1/operations/delete/{operationID}/retry

> Retry failed contact delete operation.

# POST /contacts/v1/operations/delete/{operationID}/retry

## **Overview**

Retry failed contact delete operation.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| operationID | string |  | undefined |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /contacts/v1/operations/delete/10315/retry
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
    "operationID": 10315,
    "operationRestarted": true,
    "requestServiceMessageID": "fb8daeca-deea-4009-bb4a-2c8b5251c2a6",
    "responseDateTime": "2018-06-05T10:03:09.5032301-06:00",
    "resultMessages": [],
    "serviceMessageID": "77f33340-84a1-46d2-af5c-8195156f89b9"
}
```

Last Updated: Jun 8, 2021
