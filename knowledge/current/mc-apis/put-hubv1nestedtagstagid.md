---
title: "PUT /hub/v1/nestedtags/{tagId}"
domain: mc-apis
topic: put-hubv1nestedtagstagid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:20.904Z
estimatedTokens: 821
keywords: [PUT, hub, nestedtags, tagId, Updates, tag, provide, entire, payload, because, modifies, modify, Patch, Nested, Tags, instead, **Overview**]
---

> Updates an existing tag. You must provide the entire tag payload because this request modifies the entire tag. To provide only the fields to modify, use the Patch Nested Tags request instead.

# PUT /hub/v1/nestedtags/{tagId}

## **Overview**

Updates an existing tag. You must provide the entire tag payload because this request modifies the entire tag. To provide only the fields to modify, use the [Patch Nested Tags](atlas.en-us.noversion.mc-apis.meta/mc-apis/patchNestedTags.htm) request instead.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tagId | number | Required | ID of the tag to update. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | number | Required | TagId of the tag to update. |
| name | string | Required | Name of the tag, up to 120 characters. The only special characters allowed are period (.) and apostrophe ('). |
| description | string |  | Description of the tag, up to 256 characters. The only special characters allowed are period (.), apostrophe ('), comma (,), and forward slash (/). If you don’t provide a description, any existing description is erased. |
| parentId | number |  | TagId that you want to be the parent of this tag. If you don’t provide a parentId, the parentId (if non-zero) is replaced by zero, meaning no parent tag. |
| tags | object |  | A list of tags to create as nested tags. If you don’t provide a list of tags, any existing tags are removed. |

## Usage

### Example Request

This example renames descriptions of all tags nested under a parent tag ID.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /hub/v1/nestedtags/14
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "id": 14,
  "name": "Membership Level",
  "description": "Corporate Membership Levels"
  "tags": [
    {
      "id": 15,
      "name": "Bronze",
      "description": "Bronze Membership Level - the lowest level",
      "parentId": 14
    },
    {
      "id": 16,
      "name": "Gold",
      "description": "Gold Membership Level - the second-highest level",
      "parentId": 14
    },
    {
      "id": 17,
      "name": "Silver",
      "description": "Silver Membership Level - the third-highest level",
      "parentId": 14
    },
    {
      "id": 18,
      "name": "Platinum",
      "description": "Platinum Membership Level - the highest level",
      "parentId": 14
    }
  ]
}
```

### Example Response

```js
HTTP/1.1 200 OK
{
  "id": 14,
  "name": "Membership Level",
  "description": "Corporate Membership Levels",
  "modifiedDate": "2019-06-14T11:07:00",
  "parentId": 0,
  "tags": [
    {
      "id": 15,
      "name": "Bronze",
      "description": "Bronze Membership Level - the lowest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 16,
      "name": "Gold",
      "description": "Gold Membership Level - the second-highest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 17,
      "name": "Silver",
      "description": "Silver Membership Level - the third-highest level",
      "modifiedDate": "2019-06-14T11:07:00",
      "parentId": 14,
      "tags": []
    },
    {
      "id": 18,
      "name": "Platinum",
      "description": "Platinum Membership Level - the highest level",
      "modifiedDate": "2019-06-14T11:58:00",
      "parentId": 14,
      "tags": []
    }
  ]
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Patch Nested Tags (atlas.en-us.noversion.mc-apis.meta/mc-apis/patchNestedTags.htm)
