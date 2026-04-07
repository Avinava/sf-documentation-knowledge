---
title: "DELETE /asset/v1/content/assets/{id}"
domain: mc-apis
topic: delete-assetv1contentassetsid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.484Z
estimatedTokens: 191
keywords: [asset, content, assets, **Overview**]
---

# DELETE /asset/v1/content/assets/{id}

## **Overview**

Deletes an asset.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | The ID of the asset to delete |
| isCDNDelete | Boolean |  | Permanently deletes the file and its URL in Akamai when the associated file is deleted in Content Builder. A value of 1 permanently deletes the file. If isCDNDelete is unspecified or if the value is 0, it doesn’t permanently delete the file. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /asset/v1/content/assets/{id}?isCdnDelete=1
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 200 OK
```

Last Updated: Jun 8, 2021
