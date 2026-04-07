---
title: "POST /push/v1/contacts/refreshList/{id}"
domain: mc-apis
topic: post-pushv1contactsrefreshlistid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.283Z
estimatedTokens: 152
keywords: [POST, push, contacts, refreshList, **Overview**]
---

# POST /push/v1/contacts/refreshList/{id}

## **Overview**

Refreshes a list.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| listId | string | Required | The Id of the list to refresh |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /push/v1/contacts/refreshList/bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NDo8NDow",
    "lastPublishDate": "2012-12-18T15:38:12.030Z"
}
```

Last Updated: Jun 8, 2021
