---
title: "Service Process Update"
domain: omnistudio
topic: service-process-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.989Z
keywords: [Service, Process, Update]
---

# Service Process Update

# Service Process Update

Retrieve or update a service process.

Resource

```

```

Available version

57.0

Requires Chatter

No

HTTP methods

GET PATCH

Response body for GET

[Service Process Record](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_service_process_record.htm "Service process record output.")

Request body for PATCH

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

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| serviceProcessRequestData | Object | Top-level parameter for the request body. | Required | 58.0 |

Response body for PATCH

[Service Process Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_service_process2.htm "Output for creating a service process.")