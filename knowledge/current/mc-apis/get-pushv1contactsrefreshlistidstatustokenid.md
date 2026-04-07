---
title: "GET /push/v1/contacts/refreshList/{id}/status/{tokenId}"
domain: mc-apis
topic: get-pushv1contactsrefreshlistidstatustokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.170Z
estimatedTokens: 181
keywords: [push, contacts, refreshList, status, tokenId, refresh, **Overview**, Usage]
---

# GET /push/v1/contacts/refreshList/{id}/status/{tokenId}

> Gets the refresh list status.

# GET /push/v1/contacts/refreshList/{id}/status/{tokenId}

## **Overview**

Gets the refresh list status.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ListID | string | Required | The ID of the list in MobileConnect |
| TokenID | string | Required | The unique ID returned when using the RefreshList operation |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /push/v1/contacts/refreshList/ENGam1FZUtNX0p/status/NDo8NDow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{

    "tokenId": "NDo8NDow",
    "publishDate": "2012-12-18T15:42:15.080Z"
}
```

Last Updated: Jun 8, 2021
