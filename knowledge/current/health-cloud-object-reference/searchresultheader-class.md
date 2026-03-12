---
title: "SearchResultHeader Class"
domain: health-cloud-object-reference
topic: searchresultheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.424Z
estimatedTokens: 1094
keywords: [SearchResultHeader, search, result, metadata, columns, part, developerName, dataType, displayLabel]
---

# SearchResultHeader Class

> Contains information about the search result header field list. This
      list represents the metadata information of the columns that are part of the search
      result.

# SearchResultHeader Class

Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchResultHeader Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_constructors)**

-   **[SearchResultHeader Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_properties)**


## SearchResultHeader Constructors

The following are constructors for SearchResultHeader.

-   **[SearchResultHeader(developerName, dataType, displayLabel)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_ctor)**
    Creates an instance of the [SearchResultHeader](#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.") class with the specified parameter values.
-   **[SearchResultHeader()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_ctor_2)**
    Creates an instance of the [SearchResultHeader](#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.") class.

### SearchResultHeader(developerName, dataType, displayLabel)

Creates an instance of the [SearchResultHeader](#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.") class with the specified parameter values.

#### Signature

public SearchResultHeader(String developerName, String dataType, String displayLabel)

```

```

#### Parameters

developerName

Type: String

Represents the developer name of the field.

dataType

Type: String

Represents the data type of the header field.

displayLabel

Type: String

Represents the label of the field.

### SearchResultHeader()

Creates an instance of the [SearchResultHeader](#apex_class_id_verification_SearchResultHeader "Contains information about the search result header field list. This list represents the metadata information of the columns that are part of the search result.") class.

#### Signature

public SearchResultHeader()

```

```

## SearchResultHeader Properties

The following are properties for SearchResultHeader.

-   **[dataType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_dataType)**
    Represents the data type of the header field.
-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_developerName)**
    Represents the developer name of the field.
-   **[displayLabel](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm#apex_id_verification_SearchResultHeader_displayLabel)**
    Represents the label of the field.

### dataType

Represents the data type of the header field.

#### Signature

public String dataType {get; set;}

```

```

#### Property Value

Type: String

### developerName

Represents the developer name of the field.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### displayLabel

Represents the label of the field.

#### Signature

public String displayLabel {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.SearchResultHeader, newinstance, [String, String, String], id_verification.SearchResultHeader
```

```
id_verification.SearchResultHeader, newinstance, [], id_verification.SearchResultHeader
```

```
id_verification.SearchResultHeader, dataType
```

```
id_verification.SearchResultHeader, developerName
```

```
id_verification.SearchResultHeader, displayLabel
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchResultHeader Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- SearchResultHeader Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- SearchResultHeader(developerName, dataType, displayLabel) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- SearchResultHeader() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- dataType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
- displayLabel (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchResultHeader.htm)
