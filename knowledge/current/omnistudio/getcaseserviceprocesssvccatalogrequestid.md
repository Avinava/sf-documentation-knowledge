---
title: "getCaseServiceProcess(svcCatalogRequestId)"
domain: omnistudio
topic: getcaseserviceprocesssvccatalogrequestid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.554Z
keywords: [getCaseServiceProcess, svcCatalogRequestId, Retrieve, service, process., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCaseServiceProcess(svcCatalogRequestId)

> Retrieve a service process.

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