---
title: "CareBarrier"
domain: health-cloud-object-reference
topic: carebarrier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.116Z
estimatedTokens: 1157
keywords: [CareBarrier, circumstances, obstacles, affecting, patient, member, API, version, 45.0, later, Calls, Associated, Objects]
---

# CareBarrier

> Represents the circumstances or obstacles affecting a patient or
			member. Available in API version 45.0 and later.

# CareBarrier

Represents the circumstances or obstacles affecting a patient or member. Available in API version 45.0 and later.

## Supported Calls

describeLayout(),describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field Name | Details |
| --- | --- |
| CareBarrierTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIdentifier for the care barrier type for the patient or member.This is a relationship field.Relationship NameCareBarrierTypeRelationship TypeLookupRefers ToCareBarrierType |
| CaseId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated case.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| EffectiveFrom | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date on which the barrier becomes effective. |
| EffectiveTo | TypedatePropertiesFilter, Group, Nillable, SortDescriptionTermination date for the barrier. |
| ExtlProblemDefIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the external problem definition in the source system. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this barrier is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the barrier. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatientId | TypereferencePropertiesFilter, Group, SortDescriptionIdentifier for the patient or member.This is a relationship field.Relationship NamePatientRelationship TypeLookupRefers ToAccount |
| Priority | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of the barrier.The values are:LowNormalHigh |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care barrier record in the external source system. |
| SourceSystemModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the care barrier record was last modified in the external source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, SortDescriptionStatus of the barrier.The values are:OpenAddressed |
| SurveyResponseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier for the survey response related to the barrier. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareBarrierChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 58.0)

Change events are available for the object.

[CareBarrierFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareBarrierHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareBarrierOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareBarrierShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
