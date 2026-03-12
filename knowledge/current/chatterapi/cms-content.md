---
title: "CMS Content"
domain: chatterapi
topic: cms-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.774Z
estimatedTokens: 338
keywords: [CMS, Content, piece, managed, enhanced, workspaces, version]
---

# CMS Content

> Get a piece of managed content. In enhanced CMS workspaces, get a
      version of a piece of managed content.

# CMS Content

Get a piece of managed content. In enhanced CMS workspaces, get a version of a piece of managed content.

Resource

```

```

Available version

57.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentVersion | String | Content version of the managed content. | Optional | 66.0 |
| language | String | Language locale of the managed content, for example, en_US. If you don't specify version or if you specify a version corresponding to the latest version, the document is returned in the fallback language, if available, or in the primary language of the workspace. If you specify a version which isn’t the latest version and isn’t available for the language, an error is returned. If you don’t specify a language, the document is returned in the primary language of the workspace. | Optional | 57.0 |
| variantVersion | String | Variant version of the managed content. | Optional | 66.0 |
| version | String | In non-enhanced workspaces, the 18-character ID of the content version. In enhanced workspaces, the version number ID. | Optional | 57.0 |

Response body for GET

[Managed Content Document](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document.htm "Managed content document.")

## Code Examples

```
/connect/cms/contents/contentKeyOrId
```

## Related Topics

- Managed Content Document (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_document.htm)
