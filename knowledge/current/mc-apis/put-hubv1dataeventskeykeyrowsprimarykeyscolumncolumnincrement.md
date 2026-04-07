---
title: "PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}/column/{column}/increment"
domain: mc-apis
topic: put-hubv1dataeventskeykeyrowsprimarykeyscolumncolumnincrement
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.383Z
estimatedTokens: 364
keywords: [PUT, hub, dataevents, key, rows, primaryKeys, column, increment, Increments, extension, external, **Overview**]
---

> Increments a column value by data extension external key.

# PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}/column/{column}/increment

## **Overview**

Increments a column value by data extension external key.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string | Required | Data extension external key, included in URL as key:your external key value here. Required if an ID is not provided. |
| id | string | Required | Data extension ID, included in URL as id:your ID value here or just the ID. Required if a key is not provided. |
| primaryKeys | array | Required | Key/Value pair of the primary key(s) for the row |
| column | string | Required | Column name to be incremented |
| step | integer |  | Increment amount. If not present, default is 1. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:mydataextension/rows/Email:someone@exacttarget.com/column/FollowerCount/increment?step=10
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

or

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/11954DDF-28A3-4FE8-BF77-646C37506621/rows/Email:someone@exacttarget.com/column/FollowerCount/increment?step=10
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200 OK
```

If the request was not valid, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
