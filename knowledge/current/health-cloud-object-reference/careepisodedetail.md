---
title: "CareEpisodeDetail"
domain: health-cloud-object-reference
topic: careepisodedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.373Z
estimatedTokens: 960
keywords: [CareEpisodeDetail, additional, associated, CareEpisode, record, may, referral, requests, episode, care, started, diagnoses, meant, address, API]
---

# CareEpisodeDetail

> Represents additional information associated with a CareEpisode record.
      This information may be the referral requests that an episode of care started from or the
      diagnoses that the episode of care is meant to address. This object is available in API
      version 57.0 and later.

# CareEpisodeDetail

Represents additional information associated with a CareEpisode record. This information may be the referral requests that an episode of care started from or the diagnoses that the episode of care is meant to address. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareEpisodeId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionThe parent care episode that the detail is associated to.This field is a relationship field.Relationship NameCareEpisodeRefers ToCareEpisode |
| DetailRecordId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe detail record that associates additional information to the parent care episode.Relationship NameDetailRecordRefers ToClinicalServiceRequest (For referral requests)HealthCondition (For diagnoses) |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of detail represented in the record.Possible values are:diagnosis—DiagnosisreferralRequest—Referral Request |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymophic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe name of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen the detail type is a diagnosis, specifies the rank of the recorded diagnosis in the set of diagnoses that’s part of the episode of care. |
| RoleCodeId | TypePolymorphic lookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen the detail type is a diagnosis, specifies the role of the recorded diagnoses in the episode of care. This value is a system-defined code.This field is a polymorphic relationship field.Relationship NameRoleCodeRelationship TypeLookupRefers ToCodeSetCodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareEpisodeDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareEpisodeDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CareEpisodeDetailShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CareEpisodeDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CareEpisodeDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CareEpisodeDetailShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
