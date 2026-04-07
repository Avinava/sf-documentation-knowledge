---
title: "GET /push/v1/messageList/{messageId}/deliveries/{tokenId}"
domain: mc-apis
topic: get-pushv1messagelistmessageiddeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.113Z
estimatedTokens: 287
keywords: [push, messageList, messageId, deliveries, tokenId, send, message, API, receive, token, call, retrieve, number, contacts, attempted]
---

# GET /push/v1/messageList/{messageId}/deliveries/{tokenId}

> When you send a push message from the API, you receive a token ID in response. Use the token in this API call to retrieve the number of contacts we attempted to send to, not including those who opted out, for a messageList send job.

# GET /push/v1/messageList/{messageId}/deliveries/{tokenId}

## **Overview**

When you send a push message from the API, you receive a token ID in response. Use the token in this API call to retrieve the number of contacts we attempted to send to, not including those who opted out, for a messageList send job.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| messageID | string | Required | The API key of the message definition. The key is configured in the MobilePush user interface. |
| tokenID | string | Required | The value returned following the send of a push message. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/messageList/ODg5MzoxMMM1MM/deliveries/aa11bb2c-1a03-4b50-9f97-81c88e233274
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200
{
    "messageId": "ODg5MzoxMMM1MM",
    "message": {
        "id": "ODg5MzoxMMM1MM"
    },
    "completeDate": "2018-04-04T09:48:16",
    "count": 4,
    "createDate": "2018-04-04T09:47:58.89",
    "status": "Finished"
}
```

Last Updated: Jun 8, 2021
