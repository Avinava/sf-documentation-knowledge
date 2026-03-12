---
title: "ConnectApi.ServiceProcessRequestInputRepresentation"
domain: omnistudio
topic: connectapiserviceprocessrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.732Z
estimatedTokens: 195
keywords: [Input, creating, updating, service, process]
---

# ConnectApi.ServiceProcessRequestInputRepresentation

> Input for creating or updating a service process.

# ConnectApi.ServiceProcessRequestInputRepresentation

Input for creating or updating a service process.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, ConnectApi.GenericObject> | Field name-value pairs, object names and field name-value pairs, or both. These fields and objects store base and extended attributes. | Required | 57.0 |
| caseInfo | Map<String, ConnectApi.GenericObject> | Field name-value pairs for the Case object. | Optional | 57.0 |
| documentInfo | List<ConnectApi.​documentInfo​Attributes> | List of documents. | Optional | 57.0 |
| svcCatalogItem​DefApiName | String | API Name of the related Service Catalog Item Definition. See SvcCatalogItemDef. | Required | 57.0 |

## Related Topics

- ConnectApi.GenericObject (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_generic_object.htm)
- ConnectApi.​documentInfo​Attributes (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_service_process_doc_info.htm)
