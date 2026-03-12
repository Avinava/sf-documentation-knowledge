---
title: "BenefitSession"
domain: nonprofit-cloud
topic: benefitsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.177Z
estimatedTokens: 878
keywords: [BenefitSession, instance, planned, benefit, delivery, API, version, 57.0, later, Calls, Associated, Objects]
---

# BenefitSession

> Represents information about an instance of a planned benefit
         delivery This object is available in API version 57.0 and later.

# BenefitSession

Represents information about an instance of a planned benefit delivery This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AbsenteesCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of participants who didn't attend the benefit session.This field is available from API version 65.0 and later. |
| AttendanceRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of participants who attended the benefit session.The value of this field is calculated by a formula: (Attendees Count) / (Attendees Count + Absentees Count)This field is available from API version 65.0 and later. |
| AttendeesCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total number of participants who attended a benefit session.This field is available from API version 65.0 and later. |
| BenefitScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the benefit schedule that's associated with the benefit session.This field is a relationship field.Relationship NameBenefitScheduleRelationship TypeMaster-DetailRefers ToBenefitSchedule |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date and time of the benefit session. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the benefit session. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the benefit session record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date and time of the benefit session. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the benefit session.Possible values are:CancelledCompletedPostponedScheduled |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitSessionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.html)

Feed tracking is available for the object.

[BenefitSessionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
