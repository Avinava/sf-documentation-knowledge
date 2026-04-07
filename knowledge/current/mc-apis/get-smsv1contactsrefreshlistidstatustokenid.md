---
title: "GET /sms/v1/contacts/refreshList/{id}/status/{tokenId}"
domain: mc-apis
topic: get-smsv1contactsrefreshlistidstatustokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.329Z
estimatedTokens: 208
keywords: [sms, contacts, refreshList, status, tokenId, Retrieves, refresh, **Overview**]
---

> Retrieves the refresh list status.

# GET /sms/v1/contacts/refreshList/{id}/status/{tokenId}

## **Overview**

Retrieves the refresh list status.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ListID | string | Required | The ID of the list found in the MobileConnect interface |
| TokenID | string | Required | The unique ID returned when using the RefreshList operation |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/contacts/refreshList/ENGam1FZUtNX0p/status/NDo8NDow
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

If the request was not valid, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
