---
title: "GET /hub/v1/campaigns/{id}"
domain: mc-apis
topic: get-hubv1campaignsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.960Z
estimatedTokens: 180
keywords: [hub, campaigns, Retrieves, campaign, **Overview**, Usage]
---

# GET /hub/v1/campaigns/{id}

> Retrieves a campaign.

# GET /hub/v1/campaigns/{id}

## **Overview**

Retrieves a campaign.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | Campaign ID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns/301
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "id": "301",
    "createdDate": "2012-11-29T16:18:31",
    "modifiedDate": "2012-11-29T16:18:30",
    "name": "2012 Master Campaign",
    "description": "This is the Primary Campaign",
    "campaignCode": "master2012",
    "color": "d2e7b8",
    "favorite": false
}
```

Last Updated: Jun 8, 2021
