---
title: "CalculationMatrix"
domain: omnistudio
topic: calculationmatrix
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.121Z
estimatedTokens: 1054
keywords: [CalculationMatrix, Matches, input, row, row's, output, label, Decision, Matrix, API, version, 53.0, later, Calls, Special]
---

# CalculationMatrix

> Matches input values to a table row and returns the row's output
         values. The label for this object is Decision Matrix. This object is available in API
      version 53.0 and later.

# CalculationMatrix

Matches input values to a table row and returns the row's output values. The label for this object is Decision Matrix. This object is available in API version 53.0 and later.

Decision Matrices are useful for implementing complex rules in a systematic, readable way. There are two types: Standard and Grouped. A Grouped Decision Matrix groups rows in different versions by one or two keys such as geographic region or product code.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Access to Decision Matrices requires Omnistudio licenses.

## Fields

| Field | Details |
| --- | --- |
| DecisionMatrixDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe decision matrix definition record associated with this calculation matrix.This field is a polymorphic relationship field.Relationship NameDecisionMatrixDefinitionRelationship TypeLookupRefers ToDecisionMatrixDefinition, DecisionTable |
| DecisionMatrixType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of lookup table.Possible values are:DecisionMatrixDecisionTableThe default value is DecisionMatrix. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA text description of the Decision Matrix. |
| GroupKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA key for grouping matrix rows in different versions, such as geographic region or product code. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user only accessed this record or list view (LastReferencedDate) but didn't view it. |
| MigrationStatus | TypetextareaPropertiesNillableDescriptionThe status of migrating the data from the Calculation Matrix object to the Decision Matrix Definition object. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe Decision Matrix name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this matrix. Default value is the user logged in to the API to perform the create action.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SubGroupKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA subkey for grouping matrix rows in different versions, such as geographic region or product code. For example, if the GroupKey is Country, the SubGroupKey can be State or Province. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe Decision Matrix type. A Standard Decision Matrix has no special features. A Grouped Decision Matrix groups rows by one or two keys (GroupKey and SubGroupKey) such as geographic region or product code.Possible values are:GroupedStandard |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the record, which is sourced from the value in the Name field of CalculationMatrix (decision matrix). For example, if the name of the calculation matrix is sample matrix, its UniqueName would be sample_matrix. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionA decision matrix’s usage type.Available in API version 59.0 and later.Possible value is:Bre-DefaultWhen Business Rules Engine is enabled on your Salesforce org, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. |

## Usage

Expression Sets, OmniScripts, and Integration Procedures can call Decision Matrices.
