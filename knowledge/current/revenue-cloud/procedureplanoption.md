---
title: "ProcedurePlanOption"
domain: revenue-cloud
topic: procedureplanoption
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.904Z
estimatedTokens: 974
keywords: [ProcedurePlanOption, Represents, selection, criteria, how, procedure, configured, selected, plan, section, record., API, version, 62.0, later., Important, Supported, SOAP, Calls, REST]
---

# ProcedurePlanOption

> Represents the selection criteria of how a procedure can be
         configured for a selected procedure plan section record. This object is available in
      API version 62.0 and later.

# ProcedurePlanOption

Represents the selection criteria of how a procedure can be configured for a selected procedure plan section record. This object is available in API version 62.0 and later.

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
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class associated with the procedure plan option record.This field is a relationship field.Relationship NameApexClassRefers ToApexClass |
| ApexClassName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Apex class associated with the procedure plan option record. |
| CriteriaLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe computation logic for the various conditions applied to an option. |
| CtxDefinitionOutputFieldId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe context definition field that’s associated with the decision table.This field is a relationship field.Relationship NameCtxDefinitionOutputFieldRefers ToDecisionTableParameter |
| CtxMappingOutputFieldId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe context mapping field that’s associated with the decision table.This field is a relationship field.Relationship NameCtxMappingOutputFieldRefers ToDecisionTableParameter |
| DecisionTableId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe decision table associated with the pricing procedure.This field is a relationship field.Relationship NameDecisionTableRefers ToDecisionTable |
| ExpressionSetApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the expression set. |
| ExpressionSetDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expression set definition associated with the procedure plan option record.This field is a relationship field.Relationship NameExpressionSetDefinitionRefers ToExpressionSetDefinition |
| ExpressionSetLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the expression set definition. |
| ExpressionSetOutputFieldId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe expression set output field that’s associated with the decision table.This field is a relationship field.Relationship NameExpressionSetOutputFieldRefers ToDecisionTableParameter |
| PrimaryObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe procedure plan definition associated with the procedure plan option record. |
| Priority | TypeintPropertiesCreate, Filter, Group, SortDescriptionThe order in which the options are executed. |
| ProcedurePlanSectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe procedure plan section associated with the procedure plan option record.This field is a relationship field.Relationship NameProcedurePlanSectionRelationship TypeMaster-detailRefers ToProcedurePlanSection (the master object) |
| ReadContextMapping | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe read context mapping used to read from the mapped object and populate the context definition. |
| SaveContextMapping | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe save context mapping used to save from the context definition and populate the mapped object. |
