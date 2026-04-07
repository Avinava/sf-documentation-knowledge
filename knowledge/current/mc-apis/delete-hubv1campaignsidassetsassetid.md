---
title: "DELETE /hub/v1/campaigns/{id}/assets/{assetId}"
domain: mc-apis
topic: delete-hubv1campaignsidassetsassetid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.554Z
estimatedTokens: 141
keywords: [hub, campaigns, assets, assetId, Disassociates, asset, campaign, **Overview**, Usage]
---

# DELETE /hub/v1/campaigns/{id}/assets/{assetId}

> Disassociates an asset from a campaign.

# DELETE /hub/v1/campaigns/{id}/assets/{assetId}

## **Overview**

Disassociates an asset from a campaign.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | request parameter | Required | Campaign ID |
| assetid | request parameter | Required | Asset ID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /hub/v1/campaigns/301/assets/30
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
```

Last Updated: Jun 8, 2021
