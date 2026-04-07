---
title: "POST /hub/v1/dataevents/key:{key}/rowset"
domain: mc-apis
topic: post-hubv1dataeventskeykeyrowset
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.002Z
estimatedTokens: 675
keywords: [POST, hub, dataevents, key, rowset, API, upserts, multiple, data, extension, rows, synchronous, call, maximum, payload]
---

# POST /hub/v1/dataevents/key:{key}/rowset

> The API upserts multiple data extension rows in a single synchronous call. The maximum payload size is 5 MB. As a best practice, post a maximum of 50 columns and 50 records at a time.

# POST /hub/v1/dataevents/key:{key}/rowset

## **Overview**

The API upserts multiple data extension rows in a single synchronous call. The maximum payload size is 5 MB. As a best practice, post a maximum of 50 columns and 50 records at a time.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string | Required | Data extension external key, included in URL as key:your external key value here. Required if an ID is not provided. |
| id | string | Required | Data extension ID, included in URL as your ID value here. Required if a key is not provided. For example: /dataevents/{id}/rowset. |
| keys | object | Required | Key/Value pair of the primary key(s) for each row |
| values | object |  | Column name and value data set for the row being inserted into the data extension |

**Example Request**

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/dataevents/key:SomeKey/rowset
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

or

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/dataevents/11954DDF-28A3-4FE8-BF77-646C37506621/rowset
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

[
    {
        "keys":{
                "Email": "someone@example.com"
                },
        "values":{
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "John",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    },
    {
        "keys": {
                "Email": "someone2@example.com"
                },
        "values":{
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "Jane",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    }
]
```

**Example Response**

```
HTTP/1.1 200 OK
[
    {
        "keys": {
                "Email": "someone@example.com"
                },
        "values": {
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "John",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    },
    {
        "keys": {
                "Email": "someone2@example.com"
                },
        "values": {
                "LastLogin": "2013-05-23T14:32:00Z",
                "IsActive": true,
                "FirstName": "Jane",
                "FollowerCount": 2,
                "LastName": "Smith"
                }
    }
]
```

An invalid request returns the API returns a 400 response with details on the error.

Last Updated: Jun 8, 2021
