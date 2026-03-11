---
title: "CnfgItemAttrDef"
domain: agentforce
topic: cnfgitemattrdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:08:17.966Z
keywords: [CnfgItemAttrDef, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# CnfgItemAttrDef

# CnfgItemAttrDef

Represents the definition of an attribute or a property for a configuration item. For example, CI name, CI owner, Status, and so on. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CnfgItemAttrPicklistDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe attribute picklist definition related to this attribute when the attribute supports multiple possible values.This field is a relationship field.Relationship NameCnfgItemAttrPicklistDefRefers ToCnfgItemAttrPicklistDef |
| CnfgItemTypeColumnName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe column name in the configuration item type data table that corresponds to this attribute. |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of a configuration item attribute, such as integer, text, boolean, or picklist.Possible values are:BooleanDateDoubleIntegerText |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDisplay name of configuration item attribute definition. |
| DisplayOrder | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionThe display order of an attribute that determines the sequence in which the attribute is shown to a user. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether an attribute is active or not.The default value is false. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether it's a custom attribute (true) or a predefined attribute that's shipped out of the box (false). The default is false.The default value is false. |
| IsHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this attribute is hidden from display or not.The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether an attribute is required as mandatory or not.The default value is false. |
| IsUsedForCorrelation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this attribute is used to correlate two configuration item records or not.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the CnfgItemAttrDef. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this CnfgItemAttrDef value. This display value is the internal label that doesn't get translated. |