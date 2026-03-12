---
title: "CnfgItemTypeRelationDef"
domain: agentforce
topic: cnfgitemtyperelationdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.228Z
estimatedTokens: 711
keywords: [CnfgItemTypeRelationDef, how, configuration, items, CMDB, Payroll, Application, RUNS, App1, WebServer, API, version, 65.0, later, SOAP]
---

# CnfgItemTypeRelationDef

> Represents how the configuration items are related to each other within a
         CMDB. For example, Payroll Application RUNS ON App1 WebServer. This object is
      available in API version 65.0 and later.

# CnfgItemTypeRelationDef

Represents how the configuration items are related to each other within a CMDB. For example, Payroll Application RUNS ON App1 WebServer. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CnfgMgmtRelationTypeDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe predefined configuration management relationship type that's used to map a source and a target configuration item type.This field is a relationship field.Relationship NameCnfgMgmtRelationTypeDefRefers ToCnfgMgmtRelationTypeDef |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. When creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the configuration item type relation definition. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this configuration item type relation definition value. This display value is the internal label that doesn't get translated. |
| SourceConfigurationItemTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe source configuration item type that's related to a target configuration item type via a predefined configuration management relationship type.This field is a relationship field.Relationship NameSourceConfigurationItemTypeRefers ToCnfgItemTypeDef |
| TargetConfigurationItemTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe target configuration item type that's related to a source configuration item type via a predefined configuration management relationship type.This field is a relationship field.Relationship NameTargetConfigurationItemTypeRefers ToCnfgItemTypeDef |
