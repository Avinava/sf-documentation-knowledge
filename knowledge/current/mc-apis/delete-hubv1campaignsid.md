---
title: "DELETE /hub/v1/campaigns/{id}"
domain: mc-apis
topic: delete-hubv1campaignsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.354Z
estimatedTokens: 113
keywords: [hub, campaigns, **Overview**, Usage]
---

# DELETE /hub/v1/campaigns/{id}

# DELETE /hub/v1/campaigns/{id}

## **Overview**

Deletes a campaign.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | Campaign ID |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /hub/v1/campaigns/505
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
```

Last Updated: Jun 8, 2021
