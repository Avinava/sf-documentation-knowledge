---
title: "GET /hub/v1/campaigns/{id}/assets/{assetId}"
domain: mc-apis
topic: get-hubv1campaignsidassetsassetid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.115Z
estimatedTokens: 173
keywords: [hub, campaigns, assets, assetId, Retrieves, campaign, asset, **Overview**]
---

> Retrieves a campaign asset.

# GET /hub/v1/campaigns/{id}/assets/{assetId}

## **Overview**

Retrieves a campaign asset.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | Campaign ID |
| assetid | string | Required | Asset ID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns/301/assets/20
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "id": "20",
    "campaignId": 330,
    "type": "triggered",
    "objectID": "1bef7d61-cb0b-e111-bb7b-1c659d025f52",
    "createdDate": "2012-12-19T14:49:23"
}
```

Last Updated: Jun 8, 2021
