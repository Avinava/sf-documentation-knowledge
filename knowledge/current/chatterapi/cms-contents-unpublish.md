---
title: "CMS Contents Unpublish"
domain: chatterapi
topic: cms-contents-unpublish
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.790Z
estimatedTokens: 309
keywords: [CMS, Contents, Unpublish, content]
---

# CMS Contents Unpublish

> Unpublish content.

# CMS Contents Unpublish

Unpublish content.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

Root XML tag

<ManagedContentUnPublishInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentIds | String[] | IDs of content to unpublish. All variants of the content are unpublished. | Required if variantIds isn’t specified | 55.0 |
| contextContent​SpaceId | String | ID of the context workspace. If specified, content from other workspaces is unpublished if it is shared to the specified workspace. If unspecified, the context workspace is derived from the content’s origin workspace. All content in the request should belong to the same origin workspace. | Optional | 61.0 |
| description | String | Description for unpublish action. | Optional | 55.0 |
| variantIds | String[] | IDs of variants to unpublish. All variants must be from the same content space. | Required if contentIds isn’t specified | 57.0 |

Response body for POST

[Managed Content Unpublish](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_unpublish_output.htm "Managed content unpublish action.")

## Code Examples

```
/connect/cms/contents/unpublish
```

```
{
"description": "Test Description",
"contentIds": ["20YRM0000000CPi2AM"]
}
```

## Related Topics

- Managed Content Unpublish (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_unpublish_output.htm)
