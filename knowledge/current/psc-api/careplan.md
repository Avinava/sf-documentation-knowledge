---
title: "CarePlan"
domain: psc-api
topic: careplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.374Z
estimatedTokens: 1072
keywords: [CarePlan, instantiation, care, plan, template, particular, individual, order, reach, specific, goals, API, version, 55.0, later]
---

# CarePlan

> Represents an instantiation of a care plan template for a particular
         individual in order to reach specific goals.  This object is available in API version
      55.0 and later.

# CarePlan

Represents an instantiation of a care plan template for a particular individual in order to reach specific goals. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care plan template associated with the care plan.This is a relationship field.Relationship NameCarePlanTemplateRelationship TypeLookupRefers ToCarePlanTemplate |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe case associated with the care plan.This is a relationship field.Relationship NameCaseRelationship TypeMaster-DetailRefers ToCase |
| CaseProceedingResultId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outcome of a legal case for a participant.This field is a relationship field.Available with a Public Sector Solutions license and in API version 58.0 and later.Relationship NameCaseProceedingResultRelationship TypeLookupRefers ToCaseProceedingResult |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim with which the care plan is associated.Available with a Public Sector Solutions license and in API version 59.0 and later.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description for the care plan record. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date until when the care plan is effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the care plan record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account associated with the care plan.This is a polymorphic relationship field.Relationship NameParticipantRelationship TypeLookupRefers ToAccount, Contact |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the care plan is effective. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the care plan.Possible values are:ActiveCancelledCompletedDraftProposed |
| TaskJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the task in the task queue.Possible values are:CompletedFailedInProgressSubmitted |
| TaskJobStatusMessage | TypetextareaPropertiesNillableDescriptionThe message that describes the status of the task in the queue. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CarePlanFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CarePlanHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
