---
title: "POST /hub/v1/objects/{objectTypeName}/tags/delete"
domain: mc-apis
topic: post-hubv1objectsobjecttypenametagsdelete
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.583Z
estimatedTokens: 377
keywords: [POST, hub, objectTypeName, tags, resource, multiple, tag, associations, time, **Overview**, Items]
---

> Use this resource to delete multiple tag associations at one time.

# POST /hub/v1/objects/{objectTypeName}/tags/delete

## **Overview**

Use this resource to delete multiple tag associations at one time.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| objectTypeName | string | Required | Designates the type of object to delete tags from. Possible values include:campaign - deletes tags from a campaignInteractionStudio.DefinitionInfo - deletes tags from a journeymedia - deletes tags from a media asset |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| ObjectIds | string | Required | The ObjectIds are the unique IDs for the objects. Each tag is deleted from the ObjectId specified in the payload. For Journey Builder, the ObjectIds are the are the OriginalDefinitionId of the journeys. |
| TagNames | string | Required | Name of the tag to delete. For each tag/object pair, the association is deleted only if the association exists. If a tag name is specified that does not exist, it is ignored. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST hub/v1/objects/InteractionStudio.DefinitionInfo/tags/delete
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
{
    "objectIds": [
        "B8A7B1AB-71E0-4B45-BC0E-96FBE41BB0A4",
        "58A39C56-2FF4-4091-B84E-FA926A1098D5"
    ],
    "tagNames": [
        "Fun Run",
        "5K"
    ]
}
```

## Related Items

[Tag your Journeys](atlas.en-us.noversion.mc-apis.meta/mc-apis/journey-tags.htm)

Last Updated: Jun 8, 2021

## Related Topics

- Tag your Journeys (atlas.en-us.noversion.mc-apis.meta/mc-apis/journey-tags.htm)
