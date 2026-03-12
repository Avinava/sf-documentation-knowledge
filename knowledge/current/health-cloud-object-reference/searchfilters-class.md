---
title: "SearchFilters Class"
domain: health-cloud-object-reference
topic: searchfilters-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.403Z
estimatedTokens: 988
keywords: [SearchFilters, data, filters, applied, object-based, search, searchFilterList, isSetSearchFilterList]
---

# SearchFilters Class

> Contains a list of data filters to be applied for object-based
      search.

# SearchFilters Class

Contains a list of data filters to be applied for object-based search.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchFilters Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_constructors)**

-   **[SearchFilters Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_properties)**


## SearchFilters Constructors

The following are constructors for SearchFilters.

-   **[SearchFilters(searchFilterList)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_ctor)**
    Creates an instance of the [SearchFilters](#apex_class_id_verification_SearchFilters "Contains a list of data filters to be applied for object-based search.") class with the specified parameter value.
-   **[SearchFilters()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_ctor_2)**
    Creates an instance of the [SearchFilters](#apex_class_id_verification_SearchFilters "Contains a list of data filters to be applied for object-based search.") class.

### SearchFilters(searchFilterList)

Creates an instance of the [SearchFilters](#apex_class_id_verification_SearchFilters "Contains a list of data filters to be applied for object-based search.") class with the specified parameter value.

#### Signature

public SearchFilters(List<id\_verification.SearchFilter> searchFilterList)

```

```

#### Parameters

searchFilterList

Type: List<[id\_verification.SearchFilter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.")\>

Specifies the list of data filters that can be applied in object-based search.

### SearchFilters()

Creates an instance of the [SearchFilters](#apex_class_id_verification_SearchFilters "Contains a list of data filters to be applied for object-based search.") class.

#### Signature

public SearchFilters()

```

```

## SearchFilters Properties

The following are properties for SearchFilters.

-   **[isSetSearchFilterList](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_isSetSearchFilterList)**
    Indicates whether a list of data filters is set in object-based search.
-   **[searchFilterList](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm#apex_id_verification_SearchFilters_searchFilterList)**
    Specifies the list of data filters that can be applied in object-based search.

### isSetSearchFilterList

Indicates whether a list of data filters is set in object-based search.

#### Signature

public Boolean isSetSearchFilterList {get; set;}

```

```

#### Property Value

Type: Boolean

### searchFilterList

Specifies the list of data filters that can be applied in object-based search.

#### Signature

public List<id\_verification.SearchFilter> searchFilterList {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.SearchFilter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.")\>

## Code Examples

```apex
id_verification.SearchFilters, newinstance, [List<id_verification.SearchFilter>], id_verification.SearchFilters
```

```
id_verification.SearchFilters, newinstance, [], id_verification.SearchFilters
```

```
id_verification.SearchFilters, isSetSearchFilterList
```

```
id_verification.SearchFilters, searchFilterList
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchFilters Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- SearchFilters Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- SearchFilters(searchFilterList) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- SearchFilters() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- id_verification.SearchFilter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- isSetSearchFilterList (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
- searchFilterList (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilters.htm)
