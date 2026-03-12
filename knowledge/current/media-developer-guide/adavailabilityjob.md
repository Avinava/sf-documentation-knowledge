---
title: "AdAvailabilityJob"
domain: media-developer-guide
topic: adavailabilityjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.354Z
estimatedTokens: 635
keywords: [AdAvailabilityJob, batch, job, populate, data, aggregate, tables, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# AdAvailabilityJob

> Represents the batch job details that populate data in other
         aggregate tables. This object is available in API version 59.0 and later.

# AdAvailabilityJob

Represents the batch job details that populate data in other aggregate tables. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorTrace | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe error message indicating the reason for the failed job. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the job processed successfully (true) or not (false).The default value is false. |
| JobEndedAt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the job ended. |
| JobStartedAt | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the job started. |
|  |  |
|  |  |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of ad availability job. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the current job.Possible values are:CompletedFailedIn ProgressPaused |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdAvailabilityJobFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdAvailabilityJobHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdAvailabilityJobShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
