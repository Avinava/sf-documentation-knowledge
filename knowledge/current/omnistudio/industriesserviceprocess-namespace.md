---
title: "industriesserviceprocess Namespace"
domain: omnistudio
topic: industriesserviceprocess-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.923Z
estimatedTokens: 362
namespace: The
keywords: [industriesserviceprocess, preprocessor, transforms, validates, data, custom, attributes, Service, Catalog, Connect, REST, API]
---

# industriesserviceprocess Namespace

> The industriesserviceprocess namespace provides
    an interface for a preprocessor class that transforms and validates data for custom attributes
    in the Service Catalog Connect REST API.

**Namespace:** `The`

# industriesserviceprocess Namespace

The industriesserviceprocess namespace provides an interface for a preprocessor class that transforms and validates data for custom attributes in the Service Catalog Connect REST API.

| Available in: Lightning Experience |
| --- |
| Available when admin settings for Service Process Studio are enabled. The Salesforce org must have the CRM Plus license and the product’s CRM license. |


The following are the interface and its supporting class in the industriesserviceprocess namespace.

-   **[ServiceProcessRequestPreProcessor Interface](atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm#apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor)**
    Implement the ServiceProcessRequestPreProcessor interface to create a preprocessor class that transforms and validates data for custom attributes in the Service Catalog Connect REST API. Using a preprocessor is optional.
-   **[ServiceProcessPreProcessorResponse Class](atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm#apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse)**
    The ServiceProcessPreProcessorResponse class defines the response type of the processServiceProcessRequest method in the ServiceProcessRequestPreProcessor interface.

## Related Topics

- ServiceProcessRequestPreProcessor Interface (atlas.en-us.industries_reference.meta/industries_reference/apex_interface_industriesserviceprocess_ServiceProcessRequestPreProcessor.htm)
- ServiceProcessPreProcessorResponse Class (atlas.en-us.industries_reference.meta/industries_reference/apex_class_industriesserviceprocess_ServiceProcessPreProcessorResponse.htm)
