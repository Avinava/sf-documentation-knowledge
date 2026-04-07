---
title: "GET /hub/v1/campaigns"
domain: mc-apis
topic: get-hubv1campaigns
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.977Z
estimatedTokens: 494
keywords: [hub, campaigns, Retrieves, collection, **Overview**, Usage]
---

# GET /hub/v1/campaigns

> Retrieves a collection of campaigns.

# GET /hub/v1/campaigns

## **Overview**

Retrieves a collection of campaigns.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| page | integer |  | Page number of data returned. The default value is 1. |
| pageSize | integer |  | Number of records per page. The maximum and default value is 50. |
| orderBy | string |  | Defines the order of the data (Default value of ModifiedDate DESC). Valid values include ModifiedDate, Name, CreatedDate, ID. All values must include either ASC (for ascending) or DESC (for descending) following the actual value. ASC and DESC indicate the order in which the specified information appears. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /hub/v1/campaigns?$page=1&$pageSize=2&$orderBy=Name ASC
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 202 Accepted
{
    "page": 1,
    "pageSize": 2,
    "count": 2,
    "links": {
        "self": {
            "href": "/v1/campaigns?$page=1&$pagesize=2&$orderby=Name ASC&$orderBy=Name+Asc"
        },
        "next": {
            "href": "/v1/campaigns?$page=2&$pagesize=2&$orderby=Name ASC&$orderBy=Name+Asc"
        }
    },
    "items": [
        {
            "id": "301",
            "createdDate": "2012-11-29T16:18:31",
            "modifiedDate": "2012-11-29T16:18:30",
            "name": "2012 Master Campaign",
            "description": "This is the Primary Campaign",
            "campaignCode": "master2012",
            "color": "d2e7b8",
            "favorite": false
        },
        {
            "id": "310",
            "createdDate": "2012-11-29T16:18:31",
            "modifiedDate": "2012-11-29T16:18:30",
            "name": "East Coast",
            "description": "East Coast Only",
            "campaignCode": "EASTCOAST",
            "color": "d2e7b8",
            "favorite": false
        }
    ]
}
```

Last Updated: Jun 8, 2021
