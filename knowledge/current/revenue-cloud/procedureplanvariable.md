---
title: "ProcedurePlanVariable"
domain: revenue-cloud
topic: procedureplanvariable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:12.843Z
estimatedTokens: 455
keywords: [ProcedurePlanVariable, setup, any, adhoc, user-defined, variable, linked, procedure, plan, definition, record, API, version, 62.0, later]
---

# ProcedurePlanVariable

> Represents the setup for any adhoc user-defined variable that can be
         linked to a procedure plan definition record. This object is available in API version
      62.0 and later.

# ProcedurePlanVariable

Represents the setup for any adhoc user-defined variable that can be linked to a procedure plan definition record. This object is available in API version 62.0 and later.

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
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe data type of the input procedure plan variable. |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for the user-defined procedure plan variable. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the procedure plan variable record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the procedure plan variable. |
| ProcedurePlanVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe procedure plan version associated with the procedure plan variable record.This field is a relationship field.Relationship NameProcedurePlanVersionRelationship TypeMaster-detailRefers ToProcedurePlanDefinitionVersion (the master object) |
