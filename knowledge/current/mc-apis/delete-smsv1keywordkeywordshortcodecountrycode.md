---
title: "DELETE /sms/v1/keyword/{keyword}/{shortCode}/{countryCode}"
domain: mc-apis
topic: delete-smsv1keywordkeywordshortcodecountrycode
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.390Z
estimatedTokens: 232
keywords: [sms, keyword, shortCode, countryCode, Deletes, account, short, code, country, **Overview**, Usage]
---

# DELETE /sms/v1/keyword/{keyword}/{shortCode}/{countryCode}

> Deletes a keyword on an account given a keyword, short code, and country code.

# DELETE /sms/v1/keyword/{keyword}/{shortCode}/{countryCode}

## **Overview**

Deletes a keyword on an account given a keyword, short code, and country code.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| keyword | string |  | The keyword that will be deleted |
| shortCode | string |  | The short code of the keyword that will be deleted |
| countryCode | string |  | The two letter country code specifying the country that short code belongs to |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /sms/v1/keyword
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ShortCode": "89239",
    "Keyword": "TEST",
    "CountryCode": "US"
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "Status": "SUCCESS Keyword with id alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow was successfully delete."
}
```

Last Updated: Jun 8, 2021
