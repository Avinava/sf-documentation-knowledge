---
title: "DELETE /sms/v1/keyword/{keyword}/{longCode}"
domain: mc-apis
topic: delete-smsv1keywordkeywordlongcode
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.380Z
estimatedTokens: 191
keywords: [sms, keyword, longCode, Deletes, account, long, code, **Overview**, Usage]
---

# DELETE /sms/v1/keyword/{keyword}/{longCode}

> Deletes a keyword on an account given a keyword and long code.

# DELETE /sms/v1/keyword/{keyword}/{longCode}

## **Overview**

Deletes a keyword on an account given a keyword and long code.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| keyword | string |  | The keyword that will be deleted |
| longCode | string |  | The long code of the keyword that will be deleted |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /sms/v1/keyword
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "LongCode": "5550003232",
    "Keyword": "TEST"
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
