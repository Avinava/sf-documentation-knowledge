---
title: "PATCH /hub/v1/nestedtags/{tagId}"
domain: mc-apis
topic: patch-hubv1nestedtagstagid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.061Z
estimatedTokens: 529
keywords: [PATCH, hub, nestedtags, tagId, Updates, tag, Provide, changed, **Overview**]
---

> Updates an existing tag. Provide only the tag fields to be changed.

# PATCH /hub/v1/nestedtags/{tagId}

## **Overview**

Updates an existing tag. Provide only the tag fields to be changed.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tagId | number | Required | ID of the tag to patch. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | TagId of the tag to update. |
| name | string |  | Name of the tag, up to 120 characters. The only special characters allowed are period (.) and apostrophe ('). |
| description | string |  | Description of the tag, up to 256 characters. The only special characters allowed are period (.), apostrophe ('), comma (,), and forward slash (/). If you don’t provide a description, the existing description is not changed. |
| parentId | number |  | TagId that you want to be the parent of this tag. If you don’t provide a parentId, the parentId is not changed. |
| tags | object |  | A list of tags to create as nested tags. If you don’t provide a list of tags, the existing nested tags are not changed. |

## Usage

### Example Request

This example patches a nested tag to update its description field.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /hub/v1/nestedtags/18
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "id": 18,
    "description": "Platinum Membership Level - the highest level"
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level - the highest level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 14
}
```

### Example Request

This example changes a nested tag into a root tag with no parent.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PATCH /hub/v1/nestedtags/18
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "id": 18,
    "parentId": 0
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level - the highest level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 0
}
```

Last Updated: Jun 8, 2021
