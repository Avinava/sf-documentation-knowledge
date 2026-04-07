---
title: "GET /sms/v1/queueMO/history/{tokenId}"
domain: mc-apis
topic: get-smsv1queuemohistorytokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.160Z
estimatedTokens: 288
keywords: [sms, queueMO, history, tokenId, Retrieves, tracking, queued, **Overview**, Usage]
---

# GET /sms/v1/queueMO/history/{tokenId}

> Retrieves the tracking history of a queued MO.

# GET /sms/v1/queueMO/history/{tokenId}

## **Overview**

Retrieves the tracking history of a queued MO.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tokenId | string | Required | Token Id returned for the queued MO |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/queueMO/history/OXFoN2ZtT2xWazJLSFZkOVY3MGNZQTo3Njow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
  "count": 5,
  "createDate": "2013-12-19T14:35:35.51",
  "status": "Active",
  "history": [
    {
      "type": "MT",
      "message": "Send your first name!",
      "date": "2013-12-19T14:35:35.51"
    },
    {
      "type": "MO",
      "message": "Anna",
      "date": "2013-12-19T14:36:36.04"
    },
    {
      "type": "MT",
      "message": "Text your ZIP code!",
      "date": "2013-12-19T14:36:36.6"
    },
    {
      "type": "MO",
      "message": "46202",
      "date": "2013-12-19T14:37:03.8"
    },
    {
      "type": "MT",
      "message": "Thanks!",
      "date": "2013-12-19T14:37:03.88"
    }
  ]
}
```

Last Updated: Jun 8, 2021
