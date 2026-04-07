---
title: "POST /sms/v1/keyword"
domain: mc-apis
topic: post-smsv1keyword
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.835Z
estimatedTokens: 220
keywords: [POST, sms, keyword, Creates, account, **Overview**, Usage]
---

# POST /sms/v1/keyword

> Creates a keyword on an account.

# POST /sms/v1/keyword

## **Overview**

Creates a keyword on an account.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| longCode | string |  | The long code that the keyword will be created on |
| shortCode | string |  | The short code that the keyword will be created on |
| keyword | string |  | The keyword that will be created |
| countryCode | string |  | The two letter country code specifying the country that short code belongs to |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/keyword
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ShortCode": "88976",
    "CountryCode": "US",
    "Keyword": "EXAMPLEONE"
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "KeywordId": "alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow"
}
```

Last Updated: Jun 8, 2021
