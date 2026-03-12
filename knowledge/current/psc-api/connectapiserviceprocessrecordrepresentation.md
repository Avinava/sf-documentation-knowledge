---
title: "ConnectApi.ServiceProcessRecordRepresentation"
domain: psc-api
topic: connectapiserviceprocessrecordrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.702Z
estimatedTokens: 184
keywords: [Service, process, record, output]
---

# ConnectApi.ServiceProcessRecordRepresentation

> Service process record output.

# ConnectApi.ServiceProcessRecordRepresentation

Service process record output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributes | ConnectApi.ServiceCatalog​ItemAttributes | Attributes defined by Service Catalog Item Attribute records, which are part of the related Service Catalog Item Definition. For the property details, see ServiceCatalogItemAttribute in SvcCatalogItemDef. | 57.0 |
| caseId | String | Case ID. | 57.0 |
| caseNumber | String | Case number. | 57.0 |
| svcCatalogItem​DefApiName | String | API Name of the related Service Catalog Item Definition. | 57.0 |
| svcCatalog​RequestId | String | ID of the related Service Catalog Request. See SvcCatalogRequest. | 57.0 |

## Related Topics

- ConnectApi.ServiceCatalog​ItemAttributes (atlas.en-us.psc_api.meta/psc_api/apex_connectapi_output_service_catalog_item_attribute.htm)
