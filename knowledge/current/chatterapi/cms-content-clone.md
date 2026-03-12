---
title: "CMS Content Clone"
domain: chatterapi
topic: cms-content-clone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.780Z
estimatedTokens: 271
keywords: [CMS, Content, Clone, piece, managed]
---

# CMS Content Clone

> Clone a piece of managed content.

# CMS Content Clone

Clone a piece of managed content.

Resource

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Managed Content Document Clone](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document_clone.htm "Managed content document clone.")

## Code Examples

```
/connect/cms/contents/contentKeyOrId/clone
```

```
{
  "includeVariants": true,
  "contentSpaceOrFolderId": "9Puxx0000004M92CAE",
  "title": "Cloned Content",
  "apiName": "new_api_name"
}
```

## Related Topics

- Managed Content Document Clone (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document_clone.htm)
