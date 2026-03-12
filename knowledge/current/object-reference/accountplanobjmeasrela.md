---
title: "AccountPlanObjMeasRela"
domain: object-reference
topic: accountplanobjmeasrela
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.683Z
estimatedTokens: 723
keywords: [AccountPlanObjMeasRela, junction, account, plan, objective, measure, objects, API, version, 62.0, later, Calls, Associated]
---

# AccountPlanObjMeasRela

> Represents a junction between an account plan objective measure and the related objects. This object is available in API version 62.0 and later.

# AccountPlanObjMeasRela

Represents a junction between an account plan objective measure and the related objects. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanObjectiveMeasureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan objective measure associated with the record.This field is a relationship field.Relationship NameAccountPlanObjectiveMeasureRelationship TypeMaster-detailRefers ToAccountPlanObjectiveMeasure (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan objective measure relation record. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record of the object associated with the account plan objective measure.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToCase, FinancialDeal, Opportunity |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanObjMeasRelaChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanObjMeasRelaHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanObjMeasRelaChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AccountPlanObjMeasRelaHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
