---
title: "Managed Content Space Update Input"
domain: chatterapi
topic: managed-content-space-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.057Z
estimatedTokens: 152
keywords: [Managed, Content, Space, Input]
---

# Managed Content Space Update Input

> Update the name or description of a managed content space.

# Managed Content Space Update Input

Update the name or description of a managed content space.

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

#### See Also

-   [CMS Space](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space.htm "Get or update a managed content space.")

## Code Examples

```
{
"name": "ShoeStoreWorkspaceUpdated",
"description": "To serve shoe store content. Updated."
}
```

## Related Topics

- CMS Space (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space.htm)
