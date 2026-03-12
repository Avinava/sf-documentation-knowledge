---
title: "IServiceProcessConnectFamily Class"
domain: omnistudio
topic: iserviceprocessconnectfamily-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.413Z
estimatedTokens: 958
namespace: ConnectApi
keywords: [IServiceProcessConnectFamily, Create, update, retrieve, service, process., createCaseServiceProcess, serviceProcessRequestData, API, Version, Requires, Chatter, getCaseServiceProcess, svcCatalogRequestId, updateCaseServiceProcesses]
---

# IServiceProcessConnectFamily Class

> Create, update, or retrieve a service process.

**Namespace:** `ConnectApi`

# IServiceProcessConnectFamily Class

Create, update, or retrieve a service process.

## Namespace

[ConnectApi](atlas.en-us.industries_reference.meta/industries_reference/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## IServiceProcessConnectFamily Methods

The following are methods for IServiceProcessConnectFamily. All methods are static.

-   **[createCaseServiceProcess(serviceProcessRequestData)](atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm#apex_ConnectAPI_IServiceProcessConnectFamily_createCaseServiceProcess_1)**
    Create a service process.
-   **[getCaseServiceProcess(svcCatalogRequestId)](atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm#apex_ConnectAPI_IServiceProcessConnectFamily_getCaseServiceProcess_1)**
    Retrieve a service process.
-   **[updateCaseServiceProcesses(serviceProcessRequestData, svcCatalogRequestId)](atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm#apex_ConnectAPI_IServiceProcessConnectFamily_updateCaseServiceProcesses_2)**
    Update a service process.

### createCaseServiceProcess(serviceProcessRequestData)

Create a service process.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ServiceProcessRepresentation createCaseServiceProcess(ConnectApi.ServiceProcessRequestInputRepresentation serviceProcessRequestData)

#### Parameters

serviceProcessRequestData

Type: [ConnectApi.ServiceProcessRequestInputRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_service_process_request.htm "Input for creating or updating a service process.")

Input for creating or updating a service process.

#### Return Value

Type: [ConnectApi.ServiceProcessRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_service_process.htm "Output for creating a service process.")

### getCaseServiceProcess(svcCatalogRequestId)

Retrieve a service process.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ServiceProcessRecordRepresentation getCaseServiceProcess(String svcCatalogRequestId)

#### Parameters

svcCatalogRequestId

Type: String

ID of the related Service Catalog Request. See SvcCatalogRequest.

#### Return Value

Type: [ConnectApi.ServiceProcessRecordRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_service_process_record.htm "Service process record output.")

### updateCaseServiceProcesses(serviceProcessRequestData, svcCatalogRequestId)

Update a service process.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ServiceProcessRepresentation updateCaseServiceProcesses(ConnectApi.ServiceProcessRequestInputRepresentation serviceProcessRequestData, String svcCatalogRequestId)

#### Parameters

serviceProcessRequestData

Type: [ConnectApi.ServiceProcessRequestInputRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_service_process_request.htm "Input for creating or updating a service process.")

Input for creating or updating a service process.

svcCatalogRequestId

Type: String

ID of the related Service Catalog Request. See SvcCatalogRequest.

#### Return Value

Type: [ConnectApi.ServiceProcessRepresentation](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_service_process.htm "Output for creating a service process.")

## Related Topics

- ConnectApi (atlas.en-us.industries_reference.meta/industries_reference/apex_classes_connect_api.htm)
- createCaseServiceProcess(serviceProcessRequestData) (atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm)
- getCaseServiceProcess(svcCatalogRequestId) (atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm)
- updateCaseServiceProcesses(serviceProcessRequestData, svcCatalogRequestId) (atlas.en-us.industries_reference.meta/industries_reference/apex_ConnectAPI_IServiceProcessConnectFamily_static_methods.htm)
- ConnectApi.ServiceProcessRequestInputRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_service_process_request.htm)
- ConnectApi.ServiceProcessRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_service_process.htm)
- ConnectApi.ServiceProcessRecordRepresentation (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_service_process_record.htm)
