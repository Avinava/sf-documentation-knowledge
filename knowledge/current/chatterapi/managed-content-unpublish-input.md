---
title: "Managed Content Unpublish Input"
domain: chatterapi
topic: managed-content-unpublish-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.068Z
estimatedTokens: 245
keywords: [Managed, Content, Unpublish, Input]
---

# Managed Content Unpublish Input

> Managed content unpublish.

# Managed Content Unpublish Input

Managed content unpublish.

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

## Code Examples

```
{
"description": "Test Description",
"contentIds": ["20YRM0000000CPi2AM"]
}
```
