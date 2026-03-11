---
title: "updateCaseServiceProcesses(serviceProcessRequestData, svcCatalogRequestId)"
domain: omnistudio
topic: updatecaseserviceprocessesserviceprocessrequestdata-svccatalogrequestid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.554Z
keywords: [updateCaseServiceProcesses, serviceProcessRequestData, svcCatalogRequestId, Update, service, process., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateCaseServiceProcesses(serviceProcessRequestData, svcCatalogRequestId)

> Update a service process.

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