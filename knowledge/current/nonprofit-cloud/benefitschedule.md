---
title: "BenefitSchedule"
domain: nonprofit-cloud
topic: benefitschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.168Z
estimatedTokens: 752
keywords: [BenefitSchedule, plan, delivering, benefit, API, version, 57.0, later, Calls, Associated, Objects]
---

# BenefitSchedule

> Represents information about the plan for delivering the
         benefit. This object is available in API version 57.0 and later.

# BenefitSchedule

Represents information about the plan for delivering the benefit. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the benefit that's associated with the schedule.This field is a relationship field.Relationship NameBenefitRelationship TypeMaster-DetailRefers ToBenefit |
| DefaultBenefitQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe default quantity of benefit that's provided within a session of benefit schedule. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the benefit schedule. |
| FirstSessionEndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the first session ends in the benefit schedule. |
| FirstSessionStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the first session begins in the benefit schedule. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| MaximumParticipantCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of participants in a session. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitScheduleFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.html)

Feed tracking is available for the object.

[BenefitScheduleHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
