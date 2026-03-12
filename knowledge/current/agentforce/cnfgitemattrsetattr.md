---
title: "CnfgItemAttrSetAttr"
domain: agentforce
topic: cnfgitemattrsetattr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.549Z
estimatedTokens: 591
keywords: [CnfgItemAttrSetAttr, Specifies, attribute, set, which, belongs., example, Stakeholders, definition, contains, owner., API, version, 65.0, later., Supported, SOAP, Calls, REST, Fields]
---

# CnfgItemAttrSetAttr

> Specifies the attribute set to which an attribute belongs. For example,
         Stakeholders attribute set definition contains the attribute owner. This object is
      available in API version 65.0 and later.

# CnfgItemAttrSetAttr

Specifies the attribute set to which an attribute belongs. For example, Stakeholders attribute set definition contains the attribute owner. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CnfgItemAttrDisplayGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display group to which a configuration item attribute belongs.This field is a relationship field.Relationship NameCnfgItemAttrDisplayGroupRefers ToCnfgItemAttrSetDef |
| ConfigurationItemAttributeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionConfiguration item attribute id of configuration item attribute set attribute.This field is a relationship field.Relationship NameConfigurationItemAttributeRefers ToCnfgItemAttrDef |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration item attribute set attribute. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration item attribute set attribute value. This display value is the internal label that doesn't get translated. |
