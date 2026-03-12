---
title: "Managed Content Publish Input"
domain: chatterapi
topic: managed-content-publish-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.042Z
estimatedTokens: 274
keywords: [Managed, Content, Publish, Input]
---

# Managed Content Publish Input

> Managed content publish.

# Managed Content Publish Input

Managed content publish.

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

## Code Examples

```
{
"description": "Test Description",
"contentIds": ["20YRM0000000CPi2AM"]
}
```
