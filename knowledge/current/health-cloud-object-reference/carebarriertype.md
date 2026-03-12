---
title: "CareBarrierType"
domain: health-cloud-object-reference
topic: carebarriertype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.130Z
estimatedTokens: 948
keywords: [CareBarrierType, standard, defined, barriers, maintained, organization, API, version, 45.0, later, Calls, Associated, Objects]
---

# CareBarrierType

> Represents the standard, defined list of barriers maintained by an
         organization. Available in API version 45.0 and later.

# CareBarrierType

Represents the standard, defined list of barriers maintained by an organization. Available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMedical vocabulary code for the barrier. |
| CodeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMedical vocabulary code type for the barrier.Possible values are:ICD-10-CMSNOMED CT |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the barrier. |
| DiagnosisCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code set associated with the care barrier type.This is a polymorphic relationship field.Relationship NameDiagnosisCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| HealthCareDiagnosisId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDiagnosis code for the barrier. HealthCareDiagnosisId may be deprecated in a future release, so use DiagnosisCodeSetId instead.This is a relationship field.Relationship NameHealthCareDiagnosisRelationship TypeLookupRefers ToHealthCareDiagnosis |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this care barrier type is active.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the care barrier type. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareBarrierTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[CareBarrierTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareBarrierTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareBarrierTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareBarrierTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
