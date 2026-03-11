---
title: "ConnectApi.ServiceProcessRequestInputRepresentation"
domain: omnistudio
topic: connectapiserviceprocessrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.791Z
keywords: [ConnectApi.ServiceProcessRequestInputRepresentation]
---

# ConnectApi.ServiceProcessRequestInputRepresentation

# ConnectApi.ServiceProcessRequestInputRepresentation

Input for creating or updating a service process.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, ConnectApi.GenericObject> | Field name-value pairs, object names and field name-value pairs, or both. These fields and objects store base and extended attributes. | Required | 57.0 |
| caseInfo | Map<String, ConnectApi.GenericObject> | Field name-value pairs for the Case object. | Optional | 57.0 |
| documentInfo | List<ConnectApi.​documentInfo​Attributes> | List of documents. | Optional | 57.0 |
| svcCatalogItem​DefApiName | String | API Name of the related Service Catalog Item Definition. See SvcCatalogItemDef. | Required | 57.0 |