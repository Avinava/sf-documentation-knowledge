---
title: "SearchResult Class"
domain: health-cloud-object-reference
topic: searchresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.417Z
estimatedTokens: 1387
keywords: [SearchResult, contract, search, results, tabular, either, object-based, text-based, searchResultHeaders, searchResultRows]
---

# SearchResult Class

> Contains the contract of search results in tabular format for either
      the object-based or text-based search.

# SearchResult Class

Contains the contract of search results in tabular format for either the object-based or text-based search.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchResult Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_constructors)**

-   **[SearchResult Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_properties)**


## SearchResult Constructors

The following are constructors for SearchResult.

-   **[SearchResult(searchResultHeaders, searchResultRows)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_ctor)**
    Creates an instance of the [SearchResult](#apex_class_id_verification_SearchResult "Contains the contract of search results in tabular format for either the object-based or text-based search.") class with the specified parameter values.
-   **[SearchResult()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_ctor_2)**
    Creates an instance of the [SearchResult](#apex_class_id_verification_SearchResult "Contains the contract of search results in tabular format for either the object-based or text-based search.") class.

### SearchResult(searchResultHeaders, searchResultRows)

Creates an instance of the [SearchResult](#apex_class_id_verification_SearchResult "Contains the contract of search results in tabular format for either the object-based or text-based search.") class with the specified parameter values.

#### Signature

public SearchResult(List<id\_verification.SearchResultHeader> searchResultHeaders, List<id\_verification.SearchResultRow> searchResultRows)

```

```

#### Parameters

searchResultHeaders

Type: List<[id\_verification.SearchResultHeader](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.")\>

Represents the search result header field list that contains the metadata information of the columns that are part of the search result.

searchResultRows

Type: List<[id\_verification.SearchResultRow](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.")\>

Represents the search result row field list that contains the column values for a specific row.

### SearchResult()

Creates an instance of the [SearchResult](#apex_class_id_verification_SearchResult "Contains the contract of search results in tabular format for either the object-based or text-based search.") class.

#### Signature

public SearchResult()

```

```

## SearchResult Properties

The following are properties for SearchResult.

-   **[searchResultHeaders](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_searchResultHeaders)**
    Represents the search result header field list that contains the metadata information of the columns that are part of the search result.
-   **[searchResultRows](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm#apex_id_verification_SearchResult_searchResultRows)**
    Represents the search result row field list that contains the column values for a specific row.

### searchResultHeaders

Represents the search result header field list that contains the metadata information of the columns that are part of the search result.

#### Signature

public List<id\_verification.SearchResultHeader> searchResultHeaders {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.SearchResultHeader](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.")\>

### searchResultRows

Represents the search result row field list that contains the column values for a specific row.

#### Signature

public List<id\_verification.SearchResultRow> searchResultRows {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.SearchResultRow](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.")\>

## Code Examples

```apex
id_verification.SearchResult, newinstance, [List<id_verification.SearchResultHeader>, List<id_verification.SearchResultRow>], id_verification.SearchResult
```

```
id_verification.SearchResult, newinstance, [], id_verification.SearchResult
```

```
id_verification.SearchResult, searchResultHeaders
```

```
id_verification.SearchResult, searchResultRows
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchResult Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- SearchResult Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- SearchResult(searchResultHeaders, searchResultRows) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- SearchResult() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- id_verification.SearchResultHeader (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- id_verification.SearchResultRow (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
- searchResultHeaders (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
- searchResultRows (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResult.htm)
