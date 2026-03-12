---
title: "Managed Content Document Clone Input"
domain: chatterapi
topic: managed-content-document-clone-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.027Z
estimatedTokens: 247
keywords: [Managed, Content, Document, Clone, Input]
---

# Managed Content Document Clone Input

> Managed content clone input.

# Managed Content Document Clone Input

Managed content clone input.

Root XML tag

<ManagedContentDocumentCloneInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the cloned content. | Optional | 61.0 |
| contentSpaceOr​FolderId | String | ID of the target folder for the cloned content. If unspecified, defaults to the folder of the source content. | Optional | 61.0 |
| includeVariants | Boolean | Specifies whether to include variants (true) or not (false) when cloning the content. If unspecified, default is false. | Optional | 61.0 |
| title | String | Title of the cloned content. If unspecified, “clone of” is appended to the source content’s title. | Optional | 61.0 |

#### See Also

-   [CMS Content Clone](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_content_clone.htm "Clone a piece of managed content.")

## Code Examples

```
{
  "includeVariants": true,
  "contentSpaceOrFolderId": "9Puxx0000004M92CAE",
  "title": "Cloned Content",
  "apiName": "new_api_name"
}
```

## Related Topics

- CMS Content Clone (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_content_clone.htm)
