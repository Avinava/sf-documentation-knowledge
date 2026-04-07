---
title: "GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery"
domain: mc-apis
topic: get-yoursubdomainauthmarketingcloudapiscomv2discovery
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:21.945Z
estimatedTokens: 296
keywords: [discovery, tenant-specific, REST, authentication, base, URIs, Marketing, Cloud, tenant, associated, provided, username, client, _SUBDOMAIN.auth.marketingcloudapis.com, **Overview**]
---

# GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery

> Gets tenant-specific REST and authentication base URIs for the Marketing Cloud tenant associated with the provided username and client ID.

# GET YOUR\_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery

## **Overview**

Gets tenant-specific REST and authentication base URIs for the Marketing Cloud tenant associated with the provided username and client ID.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| client_id | string | Required | Client ID for the application requesting the tenant-specific URIs. |
| resource | string | Required | Marketing Cloud username that you request base URIs for. Format must be 'acct: open-caret username close-caret', without spaces or quotation marks. Fill in the username. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com
GET /v2/discovery?client_id=123456&resource=acct:username
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "subject": "acct:username",
  "links": [{
    "rel": "auth_instance_url",
    "href": "https://mc563885gzs27c5t9-63k636ttgm.auth.marketingcloudapis.com"
    },
    {
    "rel": "rest_instance_url",
    "href": "https://mc563885gzs27c5t9-63k636ttgm.rest.marketingcloudapis.com"
    }]
}
```

Last Updated: Jun 8, 2021
