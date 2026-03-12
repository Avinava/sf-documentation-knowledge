---
title: "SearchResult"
domain: knowledge-dev
topic: searchresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.770Z
estimatedTokens: 966
keywords: [SearchResult, search, call, SearchRecord, SearchRecordMetadata, SearchSnippet, WholeFields, SearchResultsMetadata, EntitySearchMetadata, FieldLevelSearchMetadata, EntitySearchPromotionMetadata, EntitySpellCorrectionMetadata]
---

# SearchResult

> The search() call returns a SearchResult
  object.

# SearchResult

The search() call returns a SearchResult object.

A SearchResult object has these fields.

| Name | Type | Description |
| --- | --- | --- |
| queryId | string | Unique identifier for the SOSL search. |
| searchRecords | SearchRecord[] | Array of SearchRecord objects, each of which contains an sObject. |
| searchResultsMetadata | SearchResultsMetadata | Metadata for SearchRecords. |

## SearchRecord

Represents an individual record returned from a search.

| Name | Type | Description |
| --- | --- | --- |
| record | sObject | The individual record returned by the search. |
| searchRecordMetadata | SearchRecordMetadata | Metadata for searchRecords. |
| snippet | SearchSnippet | On the search results page, shows terms that match the search string, highlighted within the surrounding text. |

## SearchRecordMetadata

Metadata for search results at the record level.

| Name | Type | Description |
| --- | --- | --- |
| searchPromoted | boolean | Indicates that an article has been promoted in search results. Admins define promoted search terms by adding promoted terms to knowledge articles. Users who search for these keywords see the article first in search results. Available in API version 42.0 and later. |
| spellCorrected | boolean | Indicates that a record matches a spell-corrected search term. Appears in the response only when true. |

## SearchSnippet

Excerpts shown on search results pages for article, case, feed, and idea searches.

| Name | Type | Description |
| --- | --- | --- |
| text | string | The excerpt that contains the match for the search term. |
| wholeFields | WholeFields | The list of highlighted fields. |

## WholeFields

Contains the complete text of each field that contains highlighting for terms that match the search query. The highlighted terms are surrounded by <mark> tags.

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the highlighted field. |
| value | string | The highlighted text. |

## SearchResultsMetadata

Global metadata for the search result.

| Name | Type | Description |
| --- | --- | --- |
| entityMetadata | EntitySearchMetadata | Search results metadata at the object level. |

## EntitySearchMetadata

Metadata for search results at the object level.

| Name | Type | Description |
| --- | --- | --- |
| fieldMetadata | FieldLevelSearchMetadata | Metadata for search results at the field level. |
| searchPromotedMetadata | EntitySearchPromotionMetadata | Metadata for search term promotion at the object level. Available in API version 42.0 and later. |
| spellCorrectionMetadata | EntitySpellCorrectionMetadata | Metadata for spelling correction at the object level. |
| entityName | string | Identifies the object. |

## FieldLevelSearchMetadata

Metadata for search results at the field level.

| Name | Type | Description |
| --- | --- | --- |
| name | string | The field name. |
| label | string | The field label. |
| type | string | The field type. |

## EntitySearchPromotionMetadata

Metadata for search term promotion at the object level. Appears in the response only when at least one article for an object is a promoted result. Available in API version 42.0 and later.

| Name | Type | Description |
| --- | --- | --- |
| promotedResultCount | int | Count of promoted article results at the object level. |

## EntitySpellCorrectionMetadata

Metadata for spelling correction at the object level. Appears in the response only when at least one record for an object matches a spell-corrected search term.

| Name | Type | Description |
| --- | --- | --- |
| correctedQuery | string | The spell-corrected search term. |
| hasNonCorrectedResults | boolean | If true, indicates that the user has access to at least one record that matches a search term that wasn't spell-corrected. Each object sometimes returns a different value. |
