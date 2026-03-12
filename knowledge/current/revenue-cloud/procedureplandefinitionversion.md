---
title: "ProcedurePlanDefinitionVersion"
domain: revenue-cloud
topic: procedureplandefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.894Z
estimatedTokens: 811
keywords: [ProcedurePlanDefinitionVersion, Represents, versions, procedure, plan, definition., Multiple, under, definition, must, active, time, which, resolved, run, rank, field., API, version, 62.0]
---

# ProcedurePlanDefinitionVersion

> Represents the versions for a procedure plan definition. Multiple
         versions under a procedure plan definition must be active at a time, which can be resolved
         at run
         time
         using the rank field. This object is available in API version 62.0 and
      later.

# ProcedurePlanDefinitionVersion

Represents the versions for a procedure plan definition. Multiple versions under a procedure plan definition must be active at a time, which can be resolved at run time using the rank field. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ContextDefinition | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe context definition associated with the procedure plan definition record.Valid values are:11ODU00000007Zx2AI11ODU000000084F2AQCollectionPlanEvent__stdctxCommerceCartContextDefinition__stdctxSalesTransactionContext__stdctxTestContextService__stdctxTestDynamicAttribute__stdctxTestExtendedDefinition__stdctx |
| DefaultReadContextMapping | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default read context mapping used to read from the mapped object and populate the context definition. |
| DefaultSaveContextMapping | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe save context mapping used to save from the context definition and populate the mapped object. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the procedure plan definition version record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the procedure plan definition comes into effect. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the procedure plan definition is no longer in effect. |
| InheritedFrom | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, SortDescriptionThe template from which this procedure plan definition is created. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this procedure plan definition version is active (true) or not (false).The default value is false. |
| ProcedurePlanDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe procedure plan definition associated with this procedure plan definition version record.This field is a relationship field.Relationship NameProcedurePlanDefinitionRelationship TypeMaster-detailRefers ToProcedurePlanDefinition (the master object) |
| Rank | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe current rank of the procedure plan definition version that’s used to determine which procedure plan definition version is executed . |
