---
title: "CnfgItemAttrSetDef"
domain: agentforce
topic: cnfgitemattrsetdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:17.982Z
keywords: [CnfgItemAttrSetDef, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# CnfgItemAttrSetDef

# CnfgItemAttrSetDef

Represents the definition of a logical grouping of configuration item attributes that's used to display similar attributes together. For example, Stakeholder attribute set has the attributes owner, business owner, escalation group, and support group This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDisplay name of configuration item attribute set definition. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration item attribute display group is active (true) or not (false).The default value is false. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration item attribute set definition was created specifically in your org.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration item attribute set definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration item attribute set definition value. This display value is the internal label that doesn't get translated. |
| Sequence | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionSequence of configuration item attribute set definition. |