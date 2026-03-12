---
title: "AccountPlanObjectiveMeasure"
domain: object-reference
topic: accountplanobjectivemeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.658Z
estimatedTokens: 1177
keywords: [AccountPlanObjectiveMeasure, performance, target, metrics, objective, associated, account, plan, API, version, 62.0, later, Calls, Special, Access]
---

# AccountPlanObjectiveMeasure

> Represents the performance of target metrics for an objective associated with
         the account plan. This object is available in API version 62.0 and later.

# AccountPlanObjectiveMeasure

Represents the performance of target metrics for an objective associated with the account plan. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if sales account plans are turned on.

## Fields

| Field | Details |
| --- | --- |
| AccountPlanObjMeasCalcDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account plan objective calculation definition associated with the measure.This field is a relationship field. Available in API version 63.0 and later.Relationship NameAccountPlanObjMeasCalcDefRefers ToAccountPlanObjMeasCalcDef |
| AccountPlanObjectiveId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan objective associated with the measure.This field is a relationship field.Relationship NameAccountPlanObjectiveRelationship TypeMaster-detailRefers ToAccountPlanObjective |
| CurrentCurrencyValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe current value in currency for a measure associated with the account plan objective. |
| CurrentNumberValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe current numerical value for a measure associated with the account plan objective. |
| CurrentPercentValue | TypepercentPropertiesFilter, Nillable, SortDescriptionThe current value in percentage for a measure associated with the account plan objective. |
| CurrentValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current value for a measure associated with the account plan objective. |
| CurrentValueTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time that the current value was last updated. This field is available in API version 63.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the account plan objective measure. |
| TargetCurrencyValue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe target value in currency for a measure associated with the account plan objective. |
| TargetNumberValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe target numerical value for a measure associated with the account plan objective. |
| TargetPercentValue | TypepercentPropertiesFilter, Nillable, SortDescriptionThe target value in percentage for a measure associated with the account plan objective. |
| TargetValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe target value for a measure associated with the account plan objective. |
| ValueType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of value that's measured.Possible values are:CurrencyNumberPercent |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanObjectiveMeasureChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanObjectiveMeasureHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanObjectiveMeasureChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AccountPlanObjectiveMeasureHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
