---
title: "GET /sms/v1/queueMO/deliveries/{tokenId}"
domain: mc-apis
topic: get-smsv1queuemodeliveriestokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.155Z
estimatedTokens: 168
keywords: [sms, queueMO, deliveries, tokenId, Retrieves, delivery, status, queued, **Overview**, Usage]
---

# GET /sms/v1/queueMO/deliveries/{tokenId}

> Retrieves the delivery status of a queued MO.

# GET /sms/v1/queueMO/deliveries/{tokenId}

## **Overview**

Retrieves the delivery status of a queued MO.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tokenId | string | Required | Token Id returned for the queued MO |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/queueMO/deliveries/OXFoN2ZtT2xWazJLSFZkOVY3MGNZQTo3Njow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
  "tracking": [
    {
      "mobileNumber": "15555555555",
      "statusCode": "200",
      "message": "Carrier Success"
    }
  ]
}
```

Last Updated: Jun 8, 2021
