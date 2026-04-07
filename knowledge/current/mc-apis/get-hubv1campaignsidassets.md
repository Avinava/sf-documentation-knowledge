---
title: "GET /hub/v1/campaigns/{id}/assets"
domain: mc-apis
topic: get-hubv1campaignsidassets
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.971Z
estimatedTokens: 301
keywords: [hub, campaigns, assets, Retrieves, collection, campaign, **Overview**, Usage]
---

# GET /hub/v1/campaigns/{id}/assets

> Retrieves a collection of campaign assets.

# GET /hub/v1/campaigns/{id}/assets

## **Overview**

Retrieves a collection of campaign assets.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | Campaign ID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns/301/assets
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "page": 1,
    "pageSize": 50,
    "totalCount": 3,
    "entities": [
        {
            "id": "20",
            "campaignId": 301,
            "type": "TRIGGERED",
            "objectID": "1bef7d61-cb0b-e111-bb7b-1c659d025f52",
            "createdDate": "2012-12-19T14:49:23"
        },
        {
            "id": "19",
            "campaignId": 301,
            "type": "AUTOMATION_DEFINITION",
            "objectID": "5e8baeea-1cf8-4c84-bf09-655a66afa2d5",
            "createdDate": "2012-12-19T14:49:23"
        },
        {
            "id": "17",
            "campaignId": 301,
            "type": "EMAIL",
            "itemID": 7888,
            "createdDate": "2012-12-19T14:49:23"
        }
    ]
}
```

Last Updated: Jun 8, 2021
