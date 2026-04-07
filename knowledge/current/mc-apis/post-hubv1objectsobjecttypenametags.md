---
title: "POST /hub/v1/objects/{objectTypeName}/tags/"
domain: mc-apis
topic: post-hubv1objectsobjecttypenametags
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.053Z
estimatedTokens: 436
keywords: [POST, hub, objectTypeName, tags, add, via, API, Marketing, Cloud, help, identify, categorize, different, multiple, tag, resource, creates, association, pair, payload, includes, **Overview**, Items]
---

> You can add tags via the API to Marketing Cloud to help identify and categorize different objects. An object can have multiple tags, and a tag can be associated with multiple objects. This resource creates an association for each tag/object pair. For example, if the payload includes 10 tags and 20 o

# POST /hub/v1/objects/{objectTypeName}/tags/

## **Overview**

You can add tags via the API to Marketing Cloud to help identify and categorize different objects. An object can have multiple tags, and a tag can be associated with multiple objects. This resource creates an association for each tag/object pair. For example, if the payload includes 10 tags and 20 object IDs, the API call creates 200 associations.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| objectTypeName | string | Required | Designates the type of object to assign tags to. Possible values include:campaign - adds tags to a campaignInteractionStudio.DefinitionInfo - adds tags to a journeymedia - adds tags to a media asset |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| ObjectIds | string | Required | The ObjectIds are the unique IDs for the objects. Each ObjectId is associated with each tag specified in the payload. For Journey Builder, the ObjectIds are the are the OriginalDefinitionId of the journeys. |
| TagNames | string | Required | Name of the tag to delete. If a tag name is specified that does not exist, the tag will be created. Tag names for journeys are limited to 128 characters. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST hub/v1/objects/InteractionStudio.DefinitionInfo/tags/
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
