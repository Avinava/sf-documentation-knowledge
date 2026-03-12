---
title: "BenefitSchedule"
domain: psc-api
topic: benefitschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.205Z
estimatedTokens: 935
keywords: [BenefitSchedule, plan, delivering, benefit, API, version, 58.0, later, Calls, Associated, Objects]
---

# BenefitSchedule

> Represents information about the plan for delivering the
         benefit. This object is available in API version 58.0 and later.

# BenefitSchedule

Represents information about the plan for delivering the benefit. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the approval status of the benefit schedule. Available in API version 61.0 and later.Possible values are:ApprovedIn ReviewNot ApplicablePendingRejected |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the benefit that's associated with the schedule.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| DefaultBenefitQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe default quantity of benefit that's provided within a session of benefit schedule. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the benefit schedule. |
| FirstSessionEndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the first session ends in the benefit schedule. |
| FirstSessionStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the first session begins in the benefit schedule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MaximumParticipantCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of participants in a session. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner facility associated with the benefit session record.Available in API version 59.0 and later.This field is a relationship field.Relationship NamePractitionerFacilityRelationship TypeLookupRefers ToHealthcarePractitionerFacility |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitScheduleFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitScheduleHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitScheduleFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitScheduleHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
