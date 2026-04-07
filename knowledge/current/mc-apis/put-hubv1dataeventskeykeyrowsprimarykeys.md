---
title: "PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}"
domain: mc-apis
topic: put-hubv1dataeventskeykeyrowsprimarykeys
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.175Z
estimatedTokens: 456
keywords: [PUT, hub, dataevents, key, rows, primaryKeys, Upserts, data, extension, row, **Overview**, Usage]
---

# PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}

> Upserts a data extension row by key.

# PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}

## **Overview**

Upserts a data extension row by key.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string | Required | Data extension external key, included in URL as key:your external key value here. Required if an ID is not provided. |
| id | string | Required | Data extension ID, included in URL as id:your ID value here or just the ID. Required if a key is not provided. |
| primaryKeys | array |  | Key/Value pair of the primary key(s) for the row |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| values | object |  | Column name and value data set for the row being inserted into the data extension |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:{key}/rows/Email:example@example.com
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

or

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/dataevents/key:11954DDF-28A3-4FE8-BF77-646C37506621/rows/Email:example@example.com
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "values":{
            "LastLogin":"2013-05-23T14:32:00Z",
            "IsActive":true,
            "FirstName":"John",
            "FollowerCount":2,
            "LastName":"Smith"
             }
}
```

**Example Response**

```js
HTTP/1.1 200 OK
{
    "keys":{
            "Email":"someone@exacttarget.com"
            },
    "values":{
            "LastLogin":"2013-05-23T14:32:00Z",
            "LastName":"John",
            "IsActive":true,
            "FollowerCount":2,
            "FirstName":"Smith"
            }
}
```

If the request was not valid, the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
