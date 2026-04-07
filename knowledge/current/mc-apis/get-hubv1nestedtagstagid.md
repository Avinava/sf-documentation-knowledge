---
title: "GET /hub/v1/nestedtags/{tagId}"
domain: mc-apis
topic: get-hubv1nestedtagstagid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.131Z
estimatedTokens: 496
keywords: [hub, nestedtags, tagId, tag, associated, **Overview**, Usage]
---

# GET /hub/v1/nestedtags/{tagId}

> Returns the tag associated with the specified tagId.

# GET /hub/v1/nestedtags/{tagId}

## **Overview**

Returns the tag associated with the specified tagId.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| depth | number |  | The number of nesting levels to retrieve. The default depth is 0. |

## Usage

### Example Request

This example gets a tag by ID.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/nestedtags/14
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "id": 14,
    "name": "Membership Level",
    "description": "",
    "modifiedDate": "2019-06-14T11:07:00",
    "parentId": 0,
    "tags": []
}
```

### Example Request

This example gets a tag by ID and includes its nested tags one level deep.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/nestedtags/14?depth=1
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
    "id": 14,
    "name": "Membership Level",
    "description": "",
    "modifiedDate": "2019-06-14T11:07:00",
    "parentId": 0,
    "tags": [
      {
        "id": 15,
        "name": "Bronze",
        "description": "Bronze Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 16,
        "name": "Gold",
        "description": "Gold Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 17,
        "name": "Silver",
        "description": "Silver Membership Level",
        "modifiedDate": "2019-06-14T11:07:00",
        "parentId": 14,
        "tags": []
      },
      {
        "id": 18,
        "name": "Platinum",
        "description": "Platinum Membership Level",
        "modifiedDate": "2019-06-14T11:58:00",
        "parentId": 14,
        "tags": []
      }
    ]
}
```

Last Updated: Jun 8, 2021
