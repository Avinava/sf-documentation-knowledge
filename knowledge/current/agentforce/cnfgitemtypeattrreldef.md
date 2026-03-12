---
title: "CnfgItemTypeAttrRelDef"
domain: agentforce
topic: cnfgitemtypeattrreldef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.565Z
estimatedTokens: 1045
keywords: [CnfgItemTypeAttrRelDef, Represents, definition, relationship, between, configuration, item, attribute, that's, applicable, type., exampe, server, attributes, manufacturer, name, address., API, version, 65.0]
---

# CnfgItemTypeAttrRelDef

> Represents the definition of a relationship between a configuration item type
         and an attribute that's applicable for the item type. For exampe, a server configuration
         item type has the attributes manufacturer, name, and IP address. This object is
      available in API version 65.0 and later.

# CnfgItemTypeAttrRelDef

Represents the definition of a relationship between a configuration item type and an attribute that's applicable for the item type. For exampe, a server configuration item type has the attributes manufacturer, name, and IP address. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CnfgItemAttrDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies if the relationship between an attribute and a configuration type is active or not.This field is a relationship field.Relationship NameCnfgItemAttrDefRefers ToCnfgItemAttrDef |
| CnfgItemTypeDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies if an attribute is public or hidden for access for a specific configuration item type or not.This field is a relationship field.Relationship NameCnfgItemTypeDefRefers ToCnfgItemTypeDef |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the benefit action is active.The default value is false. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the configuration Item type attribute definition was created specifically in your org.The default value is false. |
| IsHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether an attribute is used to determine relationships between two configuration items or not. While some attributes when related to an item type can be used in determining relationship mappings, other attributes are not used for this purpose.The default value is false. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether an attribute is a primary attribute for a specific configuration item type or not.The default value is false. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether it's a ReadOnly attribute (true) or Can be Editted by Customer (false).The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether an attribute is a required attribute for a specific configuration item type or not.The default value is false. |
| IsUsedInRelMap | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether it's a ReadOnly attribute (true) or Can be Editted by Customer (false)The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration Item type attribute definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration Item type attribute definition value. This display value is the internal label that doesn't get translated. |
