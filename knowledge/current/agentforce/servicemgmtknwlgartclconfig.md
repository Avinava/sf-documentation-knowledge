---
title: "ServiceMgmtKnwlgArtclConfig"
domain: agentforce
topic: servicemgmtknwlgartclconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:18.004Z
keywords: [ServiceMgmtKnwlgArtclConfig, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ServiceMgmtKnwlgArtclConfig

# ServiceMgmtKnwlgArtclConfig

Represents a collection of settings to configure Service Management Knowledge. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| KnowledgeArticleRecordType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Salesforce ID for the Knowledge Article record type to use for Service Management Knowledge. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe UI label of the record. |
| RootCauseField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the field where the root cause details are stored for Service Management Knowledge. |
| WorkAroundField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the field where the workaround details are stored for Service Management Knowledge. |