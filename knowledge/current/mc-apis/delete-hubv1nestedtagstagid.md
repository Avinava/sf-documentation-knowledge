---
title: "DELETE /hub/v1/nestedtags/{tagId}"
domain: mc-apis
topic: delete-hubv1nestedtagstagid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.546Z
estimatedTokens: 127
keywords: [hub, nestedtags, tagId, Deletes, tag, nested, tags, **Overview**]
---

> Deletes an existing tag and all of its nested tags.

# DELETE /hub/v1/nestedtags/{tagId}

## **Overview**

Deletes an existing tag and all of its nested tags.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tagId | number | Required | ID of the tag to delete. |

## Usage

### Example Request

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
DELETE /hub/v1/nestedtags/14
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Example Response

```js
HTTP/1.1 204 No Content
```

Last Updated: Jun 8, 2021
