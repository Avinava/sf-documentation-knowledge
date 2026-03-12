---
title: "CMS Contents Publish"
domain: chatterapi
topic: cms-contents-publish
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.785Z
estimatedTokens: 336
keywords: [CMS, Contents, Publish, content]
---

# CMS Contents Publish

> Publish content.

# CMS Contents Publish

Publish content.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

Root XML tag

<ManagedContentPublishInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentIds | String[] | IDs of content to publish. All variants of the content are published. | Required if variantIds isn’t specified | 55.0 |
| contextContent​SpaceId | String | ID of the context workspace. If specified, content from other workspaces is published if it is shared to the specified workspace. If unspecified, the context workspace is derived from the content’s origin workspace. All content in the request should belong to the same origin workspace. | Optional | 61.0 |
| description | String | Description for publish action. | Optional | 55.0 |
| includeContent​References | Boolean | Specifies whether to include content references (true) or not (false). | Optional | 57.0 |
| variantIds | String[] | IDs of variants to publish. All variants must be from the same content space. | Required if contentIds isn’t specified | 57.0 |

Response body for POST

[Managed Content Publish](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_publish_output.htm "Managed content publish action.")

## Code Examples

```
/connect/cms/contents/publish
```

```
{
"description": "Test Description",
"contentIds": ["20YRM0000000CPi2AM"]
}
```

## Related Topics

- Managed Content Publish (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_publish_output.htm)
