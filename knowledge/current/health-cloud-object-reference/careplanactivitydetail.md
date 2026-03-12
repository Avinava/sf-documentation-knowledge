---
title: "CarePlanActivityDetail"
domain: health-cloud-object-reference
topic: careplanactivitydetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.413Z
estimatedTokens: 1074
keywords: [CarePlanActivityDetail, additional, associated, CarePlanActivity, record, may, outcomes, activity, performers, contributed, reasons, why, necessary, child, API]
---

# CarePlanActivityDetail

> Represents additional information associated with a CarePlanActivity record.
      This information may be outcomes of the activity, the performers who contributed to it,
      or the reasons why the activity was necessary.. This object is a child of CarePlanActivity.
      This object is available in API version 57.0 and later.

# CarePlanActivityDetail

Represents additional information associated with a CarePlanActivity record. This information may be outcomes of the activity, the performers who contributed to it, or the reasons why the activity was necessary.. This object is a child of CarePlanActivity. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanActivityId | TypeLookupPropertiesCreate, Filter, Group, SortDescriptionThe parent care plan activity record that the additional information is associated to.Relationship NameCarePlanActivityRelationship TypeLookupRefers ToCarePlanActivity |
| DetailCodeId | TypePolymorphic LookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the system-defined code that represents the additional information associated to the care plan activity record. This information can be an outcome of the activity or one of the reasons the activity was required. Use this field with the Outcome Code and Reason Code detail types.Relationship NameDetailCodeRefers ToCodeSetCodeSetBundle |
| DetailRecordId | TypePolymorphic LookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical record that represents the additional information associated to the parent care plan activity record. This information can an outcome of the activity, a performer involved in the activity, or the reason why the activity was necessary.This field is a polymorphic relationship field.Relationship NameDetailRecordRefers ToAccount (Performer)CareObservation (Reason Reference)CareRegisteredDevice (Performer)ClinicalEncounter (Outcome Reference)DiagnosticSummary (Reason Reference)HealthCondition (Reason Reference)HealthcarePractitionerFacility (Performer)HealthcareProvider (Performer)PatientMedicalProcedure (Outcome Reference) |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of additional information associated with the parent care plan activity.Possible values are:OutcomeCodeableConcept—Outcome CodeOutcomeReference—Outcome ReferencePerformerReasonCode—Reason CodeReasonReference—Reason Reference |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic LookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanActivityDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanActivityDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePlanActivityDetailShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CarePlanActivityDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePlanActivityDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePlanActivityDetailShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
