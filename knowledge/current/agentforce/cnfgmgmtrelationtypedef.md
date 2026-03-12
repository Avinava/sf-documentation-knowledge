---
title: "CnfgMgmtRelationTypeDef"
domain: agentforce
topic: cnfgmgmtrelationtypedef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.585Z
estimatedTokens: 880
keywords: [CnfgMgmtRelationTypeDef, Represents, relationship, between, configuration, item, types, items, defined, CMDB., example, Depends, Connected, to., API, version, 65.0, later., Supported, SOAP]
---

# CnfgMgmtRelationTypeDef

> Represents the relationship between configuration item types or configuration
         items as defined in the CMDB. For example, Depends on or Connected to. This object is
      available in API version 65.0 and later.

# CnfgMgmtRelationTypeDef

Represents the relationship between configuration item types or configuration items as defined in the CMDB. For example, Depends on or Connected to. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ColorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA specific color value such as hex, RGB, or named assigned to visually represent the relationship type for easier identification and categorization. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DirectRelationshipName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe main name assigned to the relationship type for consistent labeling and referencing. |
| InverseRelationshipName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAn alternative or mirrored name of the relationship type, used for reverse lookup, searching, or display purposes. For example, the inverse of Runs on is Hosts. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies if the relationship type is a custom relationship type as defined by the user (true) or a ready-to-use relationship type that's predefined and shipped out of the box (false). The default value is false.The default value is false. |
| IsInternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the field is for internal use only.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration management relationship type definition. |
| LineStrokeSpecification | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the width, style, or color of a line element for consistent visual rendering. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration management relationship type definition value. This display value is the internal label that doesn't get translated. |
| UsageStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the current usage status of the relationship type, specifying whether it is actively referenced by CI relationships.Possible values are:UnusedUsed |
