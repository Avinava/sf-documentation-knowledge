---
title: "POST /hub/v1/nestedtags"
domain: mc-apis
topic: post-hubv1nestedtags
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.973Z
estimatedTokens: 852
keywords: [POST, hub, nestedtags, Creates, tag, any, Marketing, Cloud, accepts, tagging, contain, unique, nested, tags, **Overview**]
---

> Creates a tag that can be associated with any Marketing Cloud object that accepts tagging. The tag must contain a unique name. The tag can contain a description and a list of one or more nested tags.

# POST /hub/v1/nestedtags

## **Overview**

Creates a tag that can be associated with any Marketing Cloud object that accepts tagging. The tag must contain a unique name. The tag can contain a description and a list of one or more nested tags.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| name | string | Required | Name of the tag, up to 120 characters. The only special characters allowed are period (.) and apostrophe ('). |
| description | string |  | Description of the tag, up to 256 characters. The only special characters allowed are period (.), apostrophe ('), comma (,), and forward slash (/). |
| parentId | string |  | TagId that you want to be the parent of this tag. If you don’t provide a parentId, or if you specify zero as the parentId, the tag is created as a root tag with no parent. |
| tags | string |  | A list of tags to create as nested tags. To include no nested tags, omit this field. You can add and modify nested tags using the Update Nested Tags or Patch Nested Tags requests. |

## Usage

### Example Request

This example creates a tag using only a name.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com

POST /hub/v1/nestedtags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Membership Level"
}
```

### Example Response

```js
HTTP/1.1 202 Accepted
{
  "id": 14,
  "name": "Membership Level",
  "description": "",
  "modifiedDate": "2019-06-14T11:07:00",
  "parentId": 0,
  "tags": []
}
```

### Example Request

This example creates a parent tag with nested tags.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/nestedTags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Membership Level",
    "tags": [
        {
            "name": "Gold",
            "description": "Gold Membership Level"
        },
        {
            "name": "Silver",
            "description": "Silver Membership Level"
        },
        {
            "name": "Bronze",
            "description": "Bronze Membership Level"
        }
    ]
}
```

### Example Response

```js
HTTP/1.1 202 Accepted
{
  "id": 14,
  "name": "Membership Level",
  "description": "",
  "modifiedDate": "2019-06-14T11:07:00",
  "parentId": 0,
  "tags": [
    {
      "id": 15,
      "name": "Bronze",
      "description": "Bronze Membership Level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 16,
      "name": "Gold",
      "description": "Gold Membership Level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 17,
      "name": "Silver",
      "description": "Silver Membership Level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    }
  ]
}
```

### Example Request

This example adds a new nested tag under an existing tag.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /hub/v1/nestedtags
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "name": "Platinum",
    "description": "Platinum Membership Level",
    “parentId”: 14
}
```

### Example Response

```js
HTTP/1.1 200 Accepted
{
  "id": 18,
  "name": "Platinum",
  "description": "Platinum Membership Level",
  "modifiedDate": "2019-06-14T11:58:00",
  "parentId": 14
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Update Nested Tags (atlas.en-us.noversion.mc-apis.meta/mc-apis/updateNestedTags.htm)
- Patch Nested Tags (atlas.en-us.noversion.mc-apis.meta/mc-apis/patchNestedTags.htm)
