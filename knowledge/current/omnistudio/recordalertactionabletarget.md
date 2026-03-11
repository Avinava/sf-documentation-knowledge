---
title: "RecordAlertActionableTarget"
domain: omnistudio
topic: recordalertactionabletarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.128Z
keywords: [RecordAlertActionableTarget, Important, Supported, Calls, Fields]
---

# RecordAlertActionableTarget

# RecordAlertActionableTarget

Represents the action associated with the parent record alert. This object is available in API version 63.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. 

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn't null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record alert actionable target. |
| RecordAlertId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent record alert associated with the record alert actionable target.This field is a relationship field.Relationship NameRecordAlertRelationship TypeMaster-detailRefers ToRecordAlert (the master object) |
| TargetObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the target object that's used to create a record on the parent record alert. Applicable when users specify create in the type field. |
| TargetRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the target record that a user is navigated to. Applicable when users specify view in the type field. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the record alert actionable target, such as create or view.Possible values are:CreateView |