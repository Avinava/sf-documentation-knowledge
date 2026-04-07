---
title: "GET /push/v1/messageTag/{messageId}/deliveries/{tokenId}"
domain: mc-apis
topic: get-pushv1messagetagmessageiddeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.269Z
estimatedTokens: 200
keywords: [push, messageTag, messageId, deliveries, tokenId, Retrieves, delivery, status, previous, send, job, **Overview**]
---

> Retrieves delivery status of a previous messageTag send job.

# GET /push/v1/messageTag/{messageId}/deliveries/{tokenId}

## **Overview**

Retrieves delivery status of a previous messageTag send job.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageID | string | Required | The API key of the message definition. This key is configured in the MobilePush user interface. |
| tokenID | string | Required | The value returned following the send of a push message |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageTag/OEl8ODow/deliveries/98sdkj23
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
"message": "MyPushMessage",
"count": 50,
"createDate": "2012-8-21T11:57:19.247"
}
```

Last Updated: Jun 8, 2021
