---
title: "Managed Content Version Collection"
domain: chatterapi
topic: managed-content-version-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.653Z
estimatedTokens: 203
keywords: [Managed, Content, Version, Collection, versions]
---

# Managed Content Version Collection

> Collection of managed content versions.

# Managed Content Version Collection

Collection of managed content versions.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 47.0 | 47.0 |
| items | Managed Content Version[] | List of managed content versions. | Small, 47.0 | 47.0 |
| managedContent​Types | Map<String, Managed Content Type> | Map of managed content types. | Small, 47.0 | 47.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 47.0 | 47.0 |
| total | Integer | Total number of managed content versions. | Small, 47.0 | 47.0 |
| totalTypes | Integer | Total number of managed content types. | Small, 47.0 | 47.0 |

## Related Topics

- Managed Content Version (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_version.htm)
- Managed Content Type (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_type.htm)
