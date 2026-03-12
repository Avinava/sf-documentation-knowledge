---
title: "SearchFilter Class"
domain: health-cloud-object-reference
topic: searchfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.397Z
estimatedTokens: 1091
keywords: [SearchFilter, data, filters, applied, object-based, search, developerName, isSetDeveloperName, isSetValue]
---

# SearchFilter Class

> Contains data filters that is applied in object-based
    search.

# SearchFilter Class

Contains data filters that is applied in object-based search.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchFilter Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_constructors)**

-   **[SearchFilter Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_properties)**


## SearchFilter Constructors

The following are constructors for SearchFilter.

-   **[SearchFilter(developerName, value)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_ctor)**
    Creates an instance of the [SearchFilter](#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.") class with the specified parameter values.
-   **[SearchFilter()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_ctor_2)**
    Creates an instance of the [SearchFilter](#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.") class.

### SearchFilter(developerName, value)

Creates an instance of the [SearchFilter](#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.") class with the specified parameter values.

#### Signature

public SearchFilter(String developerName, String value)

```

```

#### Parameters

developerName

Type: String

Specifies the developer name of the field that must be searched in object-based search.

value

Type: String

Specifies the value filter to be applied on the field to be searched in object-based search.

### SearchFilter()

Creates an instance of the [SearchFilter](#apex_class_id_verification_SearchFilter "Contains data filters that is applied in object-based search.") class.

#### Signature

public SearchFilter()

```

```

## SearchFilter Properties

The following are properties for SearchFilter.

-   **[developerName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_developerName)**
    Specifies the developer name of the field that must be searched in object-based search.
-   **[isSetDeveloperName](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_isSetDeveloperName)**
    Indicates whether the developer name of the field is used as a search filter.
-   **[isSetValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_isSetValue)**
    Indicates whether the value of a field is used as a search filter.
-   **[value](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm#apex_id_verification_SearchFilter_value)**
    Specifies the value filter to be applied on the field to be searched in object-based search.

### developerName

Specifies the developer name of the field that must be searched in object-based search.

#### Signature

public String developerName {get; set;}

```

```

#### Property Value

Type: String

### isSetDeveloperName

Indicates whether the developer name of the field is used as a search filter.

#### Signature

public Boolean isSetDeveloperName {get; set;}

```

```

#### Property Value

Type: Boolean

### isSetValue

Indicates whether the value of a field is used as a search filter.

#### Signature

public Boolean isSetValue {get; set;}

```

```

#### Property Value

Type: Boolean

### value

Specifies the value filter to be applied on the field to be searched in object-based search.

#### Signature

public String value {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
id_verification.SearchFilter, newinstance, [String, String], id_verification.SearchFilter
```

```
id_verification.SearchFilter, newinstance, [], id_verification.SearchFilter
```

```
id_verification.SearchFilter, developerName
```

```
id_verification.SearchFilter, isSetDeveloperName
```

```
id_verification.SearchFilter, isSetValue
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchFilter Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- SearchFilter Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- SearchFilter(developerName, value) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- SearchFilter() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- developerName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- isSetDeveloperName (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- isSetValue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
- value (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchFilter.htm)
