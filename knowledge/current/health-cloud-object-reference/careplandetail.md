---
title: "CarePlanDetail"
domain: health-cloud-object-reference
topic: careplandetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.423Z
estimatedTokens: 1273
keywords: [CarePlanDetail, additional, associated, care, plan, record, may, things, addressed, contributors, supporting, API, version, 57.0, later]
---

# CarePlanDetail

> Represents additional information associated with a care plan record.
      These details may be things addressed by the care plan, contributors in the care plan,
      supporting information, and so on. This object is available in API version 57.0 and later.

# CarePlanDetail

Represents additional information associated with a care plan record. These details may be things addressed by the care plan, contributors in the care plan, supporting information, and so on. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionReferences the parent care plan record.Relationship NameCarePlanRefers ToCarePlan |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents additional information associated to a care plan. Detail code is used to support the Category detail type.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference record that represents additional information associated to the parent care plan.This field is a polymorphic relationship field.Relationship NameDetailRecordRelationship TypeLookupRefers ToAccount (For the Contributor and Supporting Information detail types)CarePlan (For the Based On, Part Of, and Replaced Care Plan detail types)CareRegisteredDevice (For the Contributor detail type)HealthCondition (For the Addressed Item detail type)HealthcarePractitionerFacility (For the Contributor detail type)HealthcareProvider (For the Contributor detail type) |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of additional information associated to the parent record. For instance, the care plan that the parent care plan is based on, part of, or replaces, and so on.Possible values are:Addressed ItemBased OnCategoryContributorPart ofReplaced Care PlanSupporting Information |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |
| ProblemPriority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor the Addressed Item detail type, indicates the priority of the addressed problem.Possible values are:HighLowNormal |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor the Addressed Item detail type, indicates position of the addressed problem in the list of all addressed problem. |
| TaskJobStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted Picklist, SortDescriptionPossible values are:CompletedFailedInProgress - In ProgressSubmitted |
| TaskJobStatusMessage | TypetextareaPropertiesNillableDescriptionStatus message for the task job. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePlanDetailOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CarePlanDetailShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CarePlanDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePlanDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePlanDetailOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CarePlanDetailShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
