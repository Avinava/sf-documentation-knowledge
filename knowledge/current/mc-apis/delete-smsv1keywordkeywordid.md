---
title: "DELETE /sms/v1/keyword/{keywordId}"
domain: mc-apis
topic: delete-smsv1keywordkeywordid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.515Z
estimatedTokens: 168
keywords: [sms, keyword, keywordId, Deletes, account, **Overview**]
---

> Deletes a keyword on an account given a keyword Id.

# DELETE /sms/v1/keyword/{keywordId}

## **Overview**

Deletes a keyword on an account given a keyword Id.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| keywordId | string | Required | Encoded Id of keyword that will be deleted |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /sms/v1/keyword/alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "Status": "SUCCESS Keyword with id alm5LXNSSktGMGluRznRb1Rb1R5MDZFQTo4Njow was successfully delete."
}
```

Last Updated: Jun 8, 2021
