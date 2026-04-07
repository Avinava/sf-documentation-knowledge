---
title: "POST /sms/v1/contacts/refreshList/{id}"
domain: mc-apis
topic: post-smsv1contactsrefreshlistid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.103Z
estimatedTokens: 202
keywords: [POST, sms, contacts, refreshList, **Overview**, Usage]
---

# POST /sms/v1/contacts/refreshList/{id}

# POST /sms/v1/contacts/refreshList/{id}

## **Overview**

Refreshes a list.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| listId | string | Required | The Id of the list to refresh |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST //sms/v1/contacts/refreshList/bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "ListId": "bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow"
}
```

**Example Response** If all values in the request are valid, the API returns a token that can be used to make a follow-up call to check the status of the request.

```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NDo8NDow",
    "lastPublishDate": "2012-12-18T15:38:12.030Z"
}
```

Last Updated: Jun 8, 2021
