---
title: "ExpressionSet"
domain: omnistudio
topic: expressionset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.977Z
keywords: [ExpressionSet, Supported, Calls, Fields]
---

# ExpressionSet

# ExpressionSet

Represents information about an expression set. An expression set performs a series of calculations using lookups and user-defined variables and constants. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe API name of the expression set. This field is unique within your organization. This is a required field. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the expression set. |
| ExecutionScale | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the scale of the input that an expression set processes. The scale determines where the expression set is executed.Possible values are:HighLow |
| ExpressionSetDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe expression set definition record associated with this expression set. This is a required field.This is a relationship field.Relationship NameExpressionSetDefinitionRelationship TypeLookupRefers ToExpressionSetDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user only accessed this record or list view (LastReferencedDate) but didn't view it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the expression set. This is a required field. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this expression set. Default value is the user logged in to the API to perform the create actionThis is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of industry that’s using the expression set.Possible values are:BreNoteWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other usage types may be available to you depending on your industry solution and permission sets. |