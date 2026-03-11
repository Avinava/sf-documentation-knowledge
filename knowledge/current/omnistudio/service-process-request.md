---
title: "Service Process Request"
domain: omnistudio
topic: service-process-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.539Z
keywords: [Service, Process, Request]
---

# Service Process Request

# Service Process Request

Input for creating or updating a service process.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, Generic Object> | Field name-value pairs, object names and field name-value pairs, or both. The attributes property populates the base and extended attributes defined in Service Process Studio and must match their structure. | Required | 57.0 |
| caseInfo | Map<String, Generic Object> | Field name-value pairs for the Case object. | Optional | 57.0 |
| documentInfo | Document Info Attributes[] | List of documents. | Optional | 57.0 |
| svcCatalogItem​DefApiName | String | API Name of the related Service Catalog Item Definition. See SvcCatalogItemDef. | Required | 57.0 |