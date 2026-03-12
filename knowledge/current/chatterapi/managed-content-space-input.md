---
title: "Managed Content Space Input"
domain: chatterapi
topic: managed-content-space-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.053Z
estimatedTokens: 217
keywords: [Managed, Content, Space, Input]
---

# Managed Content Space Input

> Create a managed content space.

# Managed Content Space Input

Create a managed content space.

Root XML tag

<ManagedContentSpaceInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content space. | Optional | 64.0 |
| defaultLanguage | String | Default language of the managed content space. | Optional | 64.0 |
| description | String | Description of the managed content space. | Optional | 64.0 |
| name | String | Name of the managed content space. | Required | 64.0 |
| spaceType | String | Type of managed content space. Values are:ContentMarketing | Optional | 64.0 |

#### See Also

-   [CMS Spaces](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_spaces.htm "Get managed content spaces. Create a managed content space.")

## Code Examples

```
{
"name": "ShoeStoreWorkspace",
"description": "To serve shoe store content.",
"defaultLanguage": "en_US",
"spacetype": "Content",
"apiName": "shoe_store_workspace"
}
```

## Related Topics

- CMS Spaces (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_spaces.htm)
