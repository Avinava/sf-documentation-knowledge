---
title: "IdentityVerificationExt Interface"
domain: health-cloud-object-reference
topic: identityverificationext-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.688Z
estimatedTokens: 1236
keywords: [IdentityVerificationExt, verify, caller’s, identity, Usage, getVerifiers, var1, search, Implementation]
---

# IdentityVerificationExt Interface

> The IdentityVerificationExt
      interface enables you to verify a caller’s identity.

# IdentityVerificationExt Interface

The IdentityVerificationExt interface enables you to verify a caller’s identity.

## Namespace

[id\_verification](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm "The id_verification namespace provides an interface and classes for Health Cloud to verify the caller’s identity.")

## Usage

The id\_verification.IdentityVerificationExt interface is called by the Verify Customer Identity flow.

To implement this interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must also provide implementation for the following methods:

```

```

The method you implemented must be declared as global or public.

-   **[IdentityVerificationExt Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm#apex_id_verification_IdentityVerificationExt_methods)**

-   **[IdentityVerificationExt Example Implementation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm#apex_interface_id_verification_IdentityVerificationExt_Example)**


## IdentityVerificationExt Methods

The following are methods for IdentityVerificationExt.

-   **[getVerifiers(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm#apex_id_verification_IdentityVerificationExt_getVerifiers)**
    Returns the verification data that contains the columns to be verified.
-   **[search(var1)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm#apex_id_verification_IdentityVerificationExt_search)**
    Returns the search result that includes the verification data.

### getVerifiers(var1)

Returns the verification data that contains the columns to be verified.

#### Signature

public id\_verification.VerificationContext getVerifiers(id\_verification.VerificationContext var1)

```

```

#### Parameters

var1

Type: [id\_verification.VerificationContext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.")

Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.

#### Return Value

Type: [id\_verification.VerificationContext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm#apex_class_id_verification_VerificationContext "Contains information about the verification context, including the process definition, selected search result, selected verified result, and verified result.")

### search(var1)

Returns the search result that includes the verification data.

#### Signature

public id\_verification.SearchResult search(id\_verification.SearchRequest var1)

```

```

#### Parameters

var1

Type: [id\_verification.SearchRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.")

Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.

#### Return Value

Type: [id\_verification.SearchRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm#apex_class_id_verification_SearchRequest "Contains information about the search request data. The search request represents search filters for object-based search, search terms for text-based search, and the verification context that includes the process definition, process details, and process fields.")

## IdentityVerificationExt Example Implementation

This example shows an implementation of the id\_verification.IdentityVerificationExt interface.

The MockIdentityVerificationExt implements the id\_verification.IdentityVerificationExt interface and MockIdentityVerificationExtHelper contains the logic for each method.

```

```

```

```

The following example tests the implementation:

```

```

## Code Examples

```apex
public class IdentityVerificationExtImpl implements id_verification.IdentityVerificationExt{}
```

```apex
public id_verification.SearchResult search(id_verification.SearchRequest searchRequest){
 //Your code here
}
 
public id_verification.VerificationContext getVerifiers(id_verification.VerificationContext verificationContext){
 //Your code here
}
 
public id_verification.ProcessDetail getProcessDetail(id_verification.ProcessDetail processDetail){
 //Your code here
}
```

```
id_verification.IdentityVerificationExt, getVerifiers, [id_verification.VerificationContext], id_verification.VerificationContext
```

```
id_verification.IdentityVerificationExt, search, [id_verification.SearchRequest], id_verification.SearchResult
```

```apex
public class MockIdentityVerificationExt implements id_verification.IdentityVerificationExt {
    public id_verification.SearchResult search(id_verification.SearchRequest searchRequest) {
        id_verification.SearchResult searchResult = MockIdentityVerificationExtHelper.getDefaultSearchResult(
            searchRequest.searchTerm, searchRequest.searchFilters);
        return searchResult;
    }
    
    public id_verification.VerificationContext getVerifiers(id_verification.VerificationContext verificationContext) {
        id_verification.VerificationContext context = MockIdentityVerificationExtHelper.getVerificationContext();
        return context;
    }
    
    public id_verification.ProcessDetail getProcessDetail(id_verification.ProcessDetail processDetail) {
        return MockIdentityVerificationExtHelper.getAccountProcessDetail(null, null);
    }
}
```

## Related Topics

- id_verification (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_id_verification.htm)
- IdentityVerificationExt Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm)
- IdentityVerificationExt Example Implementation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm)
- getVerifiers(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm)
- search(var1) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_id_verification_IdentityVerificationExt.htm)
- id_verification.VerificationContext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_VerificationContext.htm)
- id_verification.SearchRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_id_verification_SearchRequest.htm)
