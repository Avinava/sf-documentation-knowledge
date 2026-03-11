---
title: "Context Service Tooling API Objects"
domain: omnistudio
topic: context-service-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.953Z
keywords: [Context, Service, Tooling, API, Objects]
---

# Context Service Tooling API Objects

# Context Service Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata.

For more information about Tooling API objects and to find a complete reference of all the supported objects, see [Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm "HTML (New Window)")

-   **[ContextAttrHydrationDetail](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextattrhydrationdetail.htm)**  
    Represents the SOQL (database) queries that fetch data for a chosen attribute from the input schema. This object is available in API version 59.0 and later.
-   **[ContextAttribute](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextattribute.htm)**  
    Represents information about an attribute used to describe a context node. Each node can have one or many attributes associated with it. This object is available in API version 59.0 and later.
-   **[ContextAttributeMapping](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextattributemapping.htm)**  
    Represents the relationship between the attribute defined in the context and the values in the related objects. This object is available in API version 59.0 and later.
-   **[ContextDefinition](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextdefinition.htm)**  
    Represents information about a context definition. The context definition describes the relationship between the node structures within a context. This object is available in API version 59.0 and later.
-   **[ContextDefinitionReference](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextdefinitionreference.htm)**  
    Represents information about reference from one Context Definition to another Context Definition. This object is available in API version 60.0 and later.
-   **[ContextDefinitionSync](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextdefinitionsync.htm)**  
    Stores information for the sync operation of the custom definition with the standard definition. This object is available in API version 62.0 and later.
-   **[ContextDefinitionVersion](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextdefinitionversion.htm)**  
    Represents information about the context definition version. Only one version can be active at a time. This object is available in API version 59.0 and later.
-   **[ContextMapping](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextmapping.htm)**  
    Represents the mapping of both attributes and nodes to related objects. This object is available in API version 59.0 and later.
-   **[ContextMappingIntent](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextmappingintent.htm)**  
    Represents the purpose associated to a context mapping. This object is available in API version 61.0 and later.
-   **[ContextNode](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextnode.htm)**  
    Represents information about the structure of the nodes within the context. Within a structure, each node can have other nodes related to them and attributes to describe the object. A hierarchy for the nodes can also be defined here. This object is available in API version 59.0 and later.
-   **[ContextNodeAttrDictionary](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextnodeattrdictionary.htm)**  
    Represents the relationship between the ContextNodeMapping and ContextDictionary objects as a junction table. This object is available in API version 62.0 and later.
-   **[ContextNodeMapping](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contextnodemapping.htm)**  
    Represents the relationship between the node in the context and values in the input schema. This object is available in API version 59.0 and later.
-   **[ContextTag](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_contexttag.htm)**  
    Represents a shortened name of an attribute or node instead of its fully qualified tag structure name. This object is available in API version 59.0 and later.
-   **[CtxAttrHydrationCtx](atlas.en-us.industries_reference.meta/industries_reference/tooling_api_objects_ctxattrhydrationctx.htm)**  
    Represents the queries that fetch the data for a chosen attribute from the input schema for context-to-context mapping This object is available in API version 61.0 and later.