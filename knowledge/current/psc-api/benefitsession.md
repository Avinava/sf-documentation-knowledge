---
title: "BenefitSession"
domain: psc-api
topic: benefitsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.212Z
estimatedTokens: 823
keywords: [BenefitSession, instance, planned, benefit, delivery, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BenefitSession

> Represents information about an instance of a planned benefit
         delivery This object is available in API version 58.0 and later.

# BenefitSession

Represents information about an instance of a planned benefit delivery This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Program and Benefit Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BenefitScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the benefit schedule that's associated with the benefit session.This field is a relationship field.Relationship NameBenefitScheduleRelationship TypeLookupRefers ToBenefitSchedule |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the benefit session. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit session. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner facility associated with the benefit session record.Available in API version 59.0 and later.This field is a relationship field.Relationship NamePractitionerFacilityRelationship TypeLookupRefers ToHealthcarePractitionerFacility |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the benefit session. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the benefit session.Possible values are:CancelledCompletedPostponedScheduled |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitSessionFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitSessionHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitSessionFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitSessionHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
