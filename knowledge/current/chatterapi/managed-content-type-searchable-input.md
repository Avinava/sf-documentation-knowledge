---
title: "Managed Content Type Searchable Input"
domain: chatterapi
topic: managed-content-type-searchable-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:08.989Z
estimatedTokens: 157
keywords: [Managed, Content, Searchable, status]
---

> Update the searchable status of a managed content
    type.

# Managed Content Type Searchable Input

Update the searchable status of a managed content type.

Root XML tag

<ManagedContentTypeSearchableInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSearchable | Boolean | Specifies whether to set the managed content type to searchable (true) or not (false). | Required | 49.0 |
| name | String | Developer name of the managed content type. In version 63.0 and later, specify the fully qualified name for content types that are package-installed. | Required | 49.0 |

## Code Examples

```
{
"name": "Media",
"isSearchable": "false"
}
```
