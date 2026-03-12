---
title: "CarePlanDetail"
domain: psc-api
topic: careplandetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.730Z
estimatedTokens: 1124
keywords: [CarePlanDetail, additional, associated, care, plan, record, may, things, addressed, contributors, supporting, API, version, 61.0, later]
---

# CarePlanDetail

> Represents additional information associated with a care plan record. These
         details may be things addressed by the care plan, contributors in the care plan, supporting
         information, and so on. This object is available in API version 61.0 and later.

# CarePlanDetail

Represents additional information associated with a care plan record. These details may be things addressed by the care plan, contributors in the care plan, supporting information, and so on. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if care plans are enabled in your org. To access the object, you need the Care Plans Access permission set or the Care Plans permission set license.

## Fields

| Field | Details |
| --- | --- |
| CarePlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the associated care plan.This field is a relationship field.Relationship NameCarePlanRelationship TypeMaster-detailRefers ToCarePlan (the master object) |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents additional information associated with the care plan.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference record that represents additional information associated with the care plan.This field is a polymorphic relationship field.Relationship NameDetailRecordRelationship TypeLookupRefers ToAccount, CareBarrier, CarePlan, HealthcarePractitionerFacility, HealthcareProvider |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of additional information associated with the care plan.Possible values are:Care BarrierInjury |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care plan detail. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| TaskJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the task job.Possible values are:CompletedFailedInProgressSubmitted |
| TaskJobStatusMessage | TypetextareaPropertiesNillableDescriptionThe status message for the task job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanDetailFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanDetailHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePlanDetailOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CarePlanDetailShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CarePlanDetailFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CarePlanDetailHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CarePlanDetailOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- CarePlanDetailShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
