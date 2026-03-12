---
title: "CMS Space"
domain: chatterapi
topic: cms-space
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.851Z
estimatedTokens: 181
keywords: [CMS, Space, managed, content]
---

# CMS Space

> Get or update a managed content space.

# CMS Space

Get or update a managed content space.

Resource

```

```

Available version

55.0

HTTP methods

GET, PATCH

PATCH is available in version 64.0 and later.

Request body for PATCH

Root XML tag

<ManagedContentSpaceUpdateInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the managed content space. | Optional | 64.0 |
| name | String | Name of the managed content space. | Optional | 64.0 |

Response body for GET and PATCH

[Managed Content Space](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space.htm "Managed content space.")

## Code Examples

```
/connect/cms/spaces/contentSpaceId
```

```
{
"name": "ShoeStoreWorkspaceUpdated",
"description": "To serve shoe store content. Updated."
}
```

## Related Topics

- Managed Content Space (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space.htm)
