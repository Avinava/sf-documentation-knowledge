---
title: "SearchRequest Class"
domain: health-cloud-object-reference
topic: searchrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.409Z
estimatedTokens: 1501
keywords: [SearchRequest, search, data, filters, object-based, terms, text-based, verification, context, includes, process, definition, searchTerm, searchFilters, verificationContext]
---

# SearchRequest Class

> Contains information about the search request data. The search request
      represents search filters for object-based search, search terms for text-based search, and the
      verification context that includes the process definition, process details, and process
      fields.

# SearchRequest Class

Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

-   **[SearchRequest Constructors](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_constructors)**

-   **[SearchRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_properties)**


## SearchRequest Constructors

The following are constructors for SearchRequest.

-   **[SearchRequest(searchTerm, searchFilters, verificationContext)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_ctor)**
    Creates an instance of the [SearchRequest](#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.") class with the specified parameter values.
-   **[SearchRequest()](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_ctor_2)**
    Creates an instance of the [SearchRequest](#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.") class.

### SearchRequest(searchTerm, searchFilters, verificationContext)

Creates an instance of the [SearchRequest](#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.") class with the specified parameter values.

#### Signature

public SearchRequest(String searchTerm, List<id\_verification.FieldValue> searchFilters, id\_verification.VerificationContext verificationContext)

```

```

#### Parameters

searchTerm

Type: String

Required. Specifies the search term for the account to use when performing a search.

searchFilters

Type: List<id\_verification.FieldValue>

Specifies the search criteria used for the object-based search.

verificationContext

Type: id\_verification.VerificationContext

Required. Specifies the object that contains the setup data and context required to perform the search.

### SearchRequest()

Creates an instance of the [SearchRequest](#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.") class.

#### Signature

public SearchRequest()

```

```

## SearchRequest Properties

The following are properties for SearchRequest.

-   **[searchFilters](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_searchFilters)**
    Specifies the search criteria used for the object-based search.
-   **[searchTerm](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_searchTerm)**
    Specifies the search term for the account to use when performing a search.
-   **[verificationContext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_id_verification_SearchRequest_verificationContext)**
    Specifies the object that contains the setup data and context required to perform the search.

### searchFilters

Specifies the search criteria used for the object-based search.

#### Signature

public List<id\_verification.FieldValue> searchFilters {get; set;}

```

```

#### Property Value

Type: List<[id\_verification.FieldValue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm#apex_class_id_verification_FieldValue "Contains a key-value pair represented by the developer name and value of the field. The key-value pair is used for both search results and verification.")\>

### searchTerm

Specifies the search term for the account to use when performing a search.

#### Signature

public String searchTerm {get; set;}

```

```

#### Property Value

Type: String

### verificationContext

Specifies the object that contains the setup data and context required to perform the search.

#### Signature

public id\_verification.VerificationContext verificationContext {get; set;}

```

```

#### Property Value

Type: [id\_verification.VerificationContext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.")

## Code Examples

```apex
id_verification.SearchRequest, newinstance, [String, List<id_verification.FieldValue>, id_verification.VerificationContext], id_verification.SearchRequest
```

```
id_verification.SearchRequest, newinstance, [], id_verification.SearchRequest
```

```
id_verification.SearchRequest, searchFilters
```

```
id_verification.SearchRequest, searchTerm
```

```
id_verification.SearchRequest, verificationContext
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- SearchRequest Constructors (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- SearchRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- SearchRequest(searchTerm, searchFilters, verificationContext) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- SearchRequest() (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- searchFilters (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- searchTerm (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- verificationContext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
- id_verification.FieldValue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_FieldValue.htm)
- id_verification.VerificationContext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
