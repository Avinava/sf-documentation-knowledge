---
title: "ApiStatusRepresentation Class"
domain: revenue-cloud
topic: apistatusrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.720Z
estimatedTokens: 584
keywords: [ApiStatusRepresentation, Stores, API, execution, messages, status, code, message, statusCode, statusMessage]
---

# ApiStatusRepresentation Class

> Stores details of the API request such as execution messages, status code, and status
    message.

# ApiStatusRepresentation Class

Stores details of the API request such as execution messages, status code, and status message.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ApiStatusRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm#apex_runtime_industries_cpq_ApiStatusRepresentation_properties)**
    Contains properties to include the API response details.

## ApiStatusRepresentation Properties

Contains properties to include the API response details.

The ApiStatusRepresentation class includes these properties.

-   **[messages](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm#apex_runtime_industries_cpq_ApiStatusRepresentation_messages)**
    Get the status messages of the API execution.
-   **[statusCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm#apex_runtime_industries_cpq_ApiStatusRepresentation_statusCode)**
    Get the status code of the API execution.
-   **[statusMessage](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm#apex_runtime_industries_cpq_ApiStatusRepresentation_statusMessage)**
    Get the display label for the API status.

### messages

Get the status messages of the API execution.

#### Signature

public List<ConnectApi.CpqMessageOutputRepresentation> messages {get; set;}

#### Property Value

Type: List<ConnectApi.CpqMessageOutputRepresentation>

### statusCode

Get the status code of the API execution.

#### Signature

public String statusCode {get; set;}

#### Property Value

Type: String

### statusMessage

Get the display label for the API status.

#### Signature

public String statusMessage {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ApiStatusRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm)
- messages (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm)
- statusCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm)
- statusMessage (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ApiStatusRepresentation.htm)
