---
title: "CMS Search"
domain: chatterapi
topic: cms-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.847Z
estimatedTokens: 523
keywords: [CMS, Search, managed, content, items, including, variants, spaces, folders]
---

# CMS Search

> Search for managed content items, including variants, in spaces and
      folders.

# CMS Search

Search for managed content items, including variants, in spaces and folders.

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
| contentSpaceOr​FolderIds | String | IDs of managed content spaces (key prefix 0Zu) and folders (key prefix 9Pu) in which to search. In version 57.0, exactly one space is required and one folder in that space is allowed. | Required | 57.0 |
| contentTypeFQN | String | Fully qualified name of the content type used to restrict the search. | Optional | 57.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 57.0 |
| languages | String[] | List of up to 10 languages or All to search for all languages. Specify each language as a language only, such as en, or as a language and locale, such as en_US. Search returns only exact matches and only languages that are supported by the workspace. If unspecified, the workspace default language is used.NoteIn version 57.0, search returns all languages by default. In version 58.0 and later, use languages=All to get all the languages. | Optional | 58.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 57.0 |
| queryTerm | String | List of up to 50 space separated search terms. The search terms must contain at least two characters that aren’t wildcards. | Required | 57.0 |
| scope | String | Text search scope for items. Values are:AllTitleOnlyIf unspecified, defaults to All.NoteIf you specify a folder ID, you can’t restrict the search scope. | Optional | 57.0 |

Response body for GET

[Managed Content Search Result Items Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_items_collection.htm "Paginated collection of CMS keyword-based search result items.")

## Code Examples

```
/connect/cms/items/search
```

## Related Topics

- wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Managed Content Search Result Items Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_search_result_items_collection.htm)
