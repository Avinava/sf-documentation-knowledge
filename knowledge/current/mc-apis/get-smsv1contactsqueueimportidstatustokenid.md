---
title: "GET /sms/v1/contacts/queueImport/{id}/status/{tokenId}"
domain: mc-apis
topic: get-smsv1contactsqueueimportidstatustokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.994Z
estimatedTokens: 209
keywords: [sms, contacts, queueImport, status, tokenId, Retrieves, import, job, **Overview**, Usage]
---

# GET /sms/v1/contacts/queueImport/{id}/status/{tokenId}

> Retrieves the status of an import job.

# GET /sms/v1/contacts/queueImport/{id}/status/{tokenId}

## **Overview**

Retrieves the status of an import job.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| ListID | string | Required | The ID of the List found in the MobileConnect interface |
| TokenID | string | Required | The unique ID returned when using the ImportQueue operation |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/contacts/queueImport/UEhwdktFWXpFZUs3Z3hRUW45R2dBQTo2Mzow/status/NzY2MTU6NDI6MA
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "tokenId": "NzY2MTU6NDI6MA",
    "status": "Completed",
    "createdDate": "2012-12-19T14:16:16.270Z",
    "type": "Import"
}
```

Last Updated: Jun 8, 2021
