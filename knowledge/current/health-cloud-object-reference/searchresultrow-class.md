---
title: "SearchResultRow Class"
domain: health-cloud-object-reference
topic: searchresultrow-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.430Z
estimatedTokens: 1031
keywords: [SearchResultRow, search, result, row, column, specific, part, searchResultFieldValues]
---

# SearchResultRow Class

> Contains information about the search result row field list. This list
      represents the column values for a specific row that are part of the search
    result.

# SearchResultRow Class

Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchResultRow Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_id_verification_SearchResultRow_constructors)**

-   **[SearchResultRow Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_id_verification_SearchResultRow_properties)**


## SearchResultRow Constructors

The following are constructors for SearchResultRow.

-   **[SearchResultRow(searchResultFieldValues)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_id_verification_SearchResultRow_ctor)**
    Creates an instance of the [SearchResultRow](#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.") class with the specified parameter values.
-   **[SearchResultRow()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_id_verification_SearchResultRow_ctor_2)**
    Creates an instance of the [SearchResultRow](#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.") class.

### SearchResultRow(searchResultFieldValues)

Creates an instance of the [SearchResultRow](#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.") class with the specified parameter values.

#### Signature

public SearchResultRow(List<id\_verification.FieldValue> searchResultFieldValues)

```

```

#### Parameters

searchResultFieldValues

Type: List<[id\_verification.FieldValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.")\>

A list of object record fields on which the data has been verified.

### SearchResultRow()

Creates an instance of the [SearchResultRow](#apex_class_id_verification_SearchResultRow "Contains information about the search result row field list. This list represents the column values for a specific row that are part of the search result.") class.

#### Signature

public SearchResultRow()

```

```

## SearchResultRow Properties

The following are properties for SearchResultRow.

-   **[searchResultFieldValues](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm#apex_id_verification_SearchResultRow_searchResultFieldValues)**
    A list of object record fields on which the data has been verified.

### searchResultFieldValues

A list of object record fields on which the data has been verified.

#### Signature

public List<id\_verification.FieldValue> searchResultFieldValues {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.FieldValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.")\>

## Code Examples

```apex
id_verification.SearchResultRow, newinstance, [List<id_verification.FieldValue>], id_verification.SearchResultRow
```

```
id_verification.SearchResultRow, newinstance, [], id_verification.SearchResultRow
```

```
id_verification.SearchResultRow, searchResultFieldValues
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchResultRow Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
- SearchResultRow Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
- SearchResultRow(searchResultFieldValues) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
- SearchResultRow() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
- id_verification.FieldValue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- searchResultFieldValues (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultRow.htm)
