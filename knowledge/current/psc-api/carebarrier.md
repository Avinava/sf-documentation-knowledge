---
title: "CareBarrier"
domain: psc-api
topic: carebarrier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.714Z
estimatedTokens: 1482
keywords: [CareBarrier, obstacle, circumstance, prevents, constituent, getting, care, services, API, version, 61.0, later, Calls, Special, Access]
---

# CareBarrier

> Represents an obstacle or circumstance that prevents a constituent
         from getting the required care or services. This object is available in API version
      61.0 and later.

# CareBarrier

Represents an obstacle or circumstance that prevents a constituent from getting the required care or services. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if care plans are enabled in your org. To access the object, you need the Care Plans Access permission set or the Care Plans permission set license.

## Fields

| Field | Details |
| --- | --- |
| CareBarrierTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID for the associated care barrier type.This field is a relationship field.Relationship NameCareBarrierTypeRelationship TypeLookupRefers ToCareBarrierType |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the associated case.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the care barrier. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the care barrier is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the care barrier is no longer effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the care barrier is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care barrier. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatientId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe affected patient or constituent.This field is a relationship field.Relationship NamePatientRelationship TypeMaster-detailRefers ToAccount (the master object) |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the care barrier.Picklist values aren't predefined for this field. Before you create a record, ensure that your Salesforce admin has defined picklist values based on your organization’s requirement. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care barrier record in the external source system. |
| SourceSystemModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the care barrier record was last modified in the external source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the care barrier.Possible values are:ActiveDisabledInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareBarrierChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CareBarrierFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareBarrierHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareBarrierOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CareBarrierShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareBarrierChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- CareBarrierFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CareBarrierHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CareBarrierOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- CareBarrierShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
