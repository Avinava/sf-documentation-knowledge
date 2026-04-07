---
title: "POST /hub/v1/campaigns"
domain: mc-apis
topic: post-hubv1campaigns
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.917Z
estimatedTokens: 313
keywords: [POST, hub, campaigns, **Overview**]
---

# POST /hub/v1/campaigns

## **Overview**

Creates a campaign.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | Name of the campaign with a maximum length of 128 characters |
| description | string | Required | Description of the campaign with a maximum length of 512 characters |
| campaignCode | string | Required | Unique identifier for the campaign with a maximum length of 36 characters |
| color | string | Required | Hex color value |
| favorite | boolean | Required | Determines if the campaign will be flagged as a favorite |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/campaigns
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Annual Sale 2012",
    "description": "Yearly sale",
    "campaignCode": "annual2012",
    "color": "0000ff",
    "favorite": false
}
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "id": "505",
    "createdDate": "2012-12-12T09:59:42",
    "modifiedDate": "2012-12-12T09:59:42",
    "name": "Annual Sale 2012",
    "description": "Yearly sale",
    "campaignCode": "annual2012",
    "color": "0000ff",
    "favorite": false
}
```

Last Updated: Jun 8, 2021
