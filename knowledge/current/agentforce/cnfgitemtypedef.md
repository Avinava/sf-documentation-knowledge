---
title: "CnfgItemTypeDef"
domain: agentforce
topic: cnfgitemtypedef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.223Z
estimatedTokens: 759
keywords: [CnfgItemTypeDef, definition, configuration, item, category, classify, items, components, share, common, characteristics, server, application, network, device]
---

# CnfgItemTypeDef

> Represents the definition of a configuration item type. A configuration item
         type represents a category that is used to classify configuration items. The components
         share common characteristics. For example, server, application, and network device.
      This object is available in API version 65.0 and later.

# CnfgItemTypeDef

Represents the definition of a configuration item type. A configuration item type represents a category that is used to classify configuration items. The components share common characteristics. For example, server, application, and network device. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of a configuration item type definition. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDisplay name of configuration item type definition. |
| IsComponent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a configuration item type is a component (true) or not. A component item type cannot exist as a standalone item.The default value is false. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe description of a configuration item type definition.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration item type definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration item type definition value. This display value is the internal label that doesn't get translated. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of a configuration item type definition in relation to other records where it's referenced. This field is used internally to identify configuration item types which may be active or inactive but no actual configuration items were created using that type and are still in use.Possible values are:UnusedUsed |
