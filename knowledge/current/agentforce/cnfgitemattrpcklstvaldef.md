---
title: "CnfgItemAttrPcklstValDef"
domain: agentforce
topic: cnfgitemattrpcklstvaldef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.537Z
estimatedTokens: 638
keywords: [CnfgItemAttrPcklstValDef, Represents, specific, configuration, item, attribute., example, high, medium, low, picklist, values, attribute, Business, Criticality., API, version, 65.0, later., Supported]
---

# CnfgItemAttrPcklstValDef

> Represents a specific value for a configuration item attribute. For example,
         high, medium, and low are picklist values of the attribute Business Criticality. This
      object is available in API version 65.0 and later.

# CnfgItemAttrPcklstValDef

Represents a specific value for a configuration item attribute. For example, high, medium, and low are picklist values of the attribute Business Criticality. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CnfgItemAttrPicklistDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe iD of the configuration item attribute picklist value definition related to this record..This field is a relationship field.Relationship NameCnfgItemAttrPicklistDefRefers ToCnfgItemAttrPicklistDef |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration item attribute picklist value definition was created specifically in your org.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration item attribute picklist value definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration item attribute picklist value definition value. This display value is the internal label that doesn't get translated. |
| PicklistValueName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the configuration item attribute picklist value. |
