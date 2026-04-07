---
title: "GET /push/v1/messageContact/{messageId}/deliveries/{tokenId}"
domain: mc-apis
topic: get-pushv1messagecontactmessageiddeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.088Z
estimatedTokens: 240
keywords: [push, messageContact, messageId, deliveries, tokenId, Retrieves, delivery, status, previous, send, job, **Overview**, Usage]
---

# GET /push/v1/messageContact/{messageId}/deliveries/{tokenId}

> Retrieves delivery status of a previous messageContact send job.

# GET /push/v1/messageContact/{messageId}/deliveries/{tokenId}

## **Overview**

Retrieves delivery status of a previous messageContact send job.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageId | string | Required | Message Id provided for the messageContact |
| tokenId | string | Required | Token Id returned for the messageContact in the form of a GUID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageContact/OEl8ODow/deliveries/1b1a8ca8-ee31-4f50-9ab3-efb30efef72d
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "messageId": "OEl8ODow",
    "message": {
      "id: "OEl8ODow"
    },
    "count": 50,
    "createDate": "2012-8-21T11:57:19.247",
    "scheduledDate":"2017-06-26T12:14:03.45",
    "status":"Finished",
    "triggeredSendStatus": "Active"
}
```

Last Updated: Jun 8, 2021
