---
title: "CarePlanActivity"
domain: health-cloud-object-reference
topic: careplanactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.345Z
estimatedTokens: 2517
keywords: [CarePlanActivity, planned, action, that’s, part, care, plan, knowledge, campaigns, physiotherapy, appointments, medication, regimens, etc, child, activity, CarePlan, API, version, 56.0]
---

# CarePlanActivity

> Represents a planned action that’s part of a care plan. For example,
         knowledge campaigns, physiotherapy appointments, medication regimens, etc. This object
      is a child object of CarePlan. This object is available in API version 56.0 and later.

# CarePlanActivity

Represents a planned action that’s part of a care plan. For example, knowledge campaigns, physiotherapy appointments, medication regimens, etc. This object is a child object of CarePlan. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents an activity.TipYou can either specify your care plan activity using a generic code with the ActivityCodeId field, or you use the ReferenceRecordId field to reference a record in your system that represents the specific instance of the activity.This field is a polymorphic relationship field.Relationship NameActivityCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| ActivityTimingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe schedule prescribed for the activity. You can use use an ActivityTiming record to specifiy how long and how often the activy has to be repeated.This field is a relationship field.NoteYou use the ActivityTimingId field if you want to represent the activity’s schedule as a timing value, the ScheduleDescription field if you want to use a text value, and the ScheduledPeriodStartDateTime and ScheduledPeriodEndDateTime fields if you want to use a period value. You can pick any one of these data types, but you can’t use more than one in the same record.Relationship NameActivityTimingRelationship TypeLookupRefers ToActivityTiming |
| ActivityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the activity.Possible values are:AppointmentCommunication RequestDevice RequestMedication RequestMedication StatementNutrition OrderService RequestTaskVision Prescription |
| AdministeredProductCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the product that’s administered as part of the activity.NoteYou can’t use both the AdministeredProductCodeId and AdministeredProductId fields together in the same record.This field is a polymorphic relationship field.Relationship NameAdministeredProductCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| AdministeredProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the product in that’s administered as part of the activity.NoteYou can’t use both the AdministeredProductCodeId and AdministeredProductId fields together in the same record.This field is a relationship field.Relationship NameAdministeredProductRelationship TypeLookupRefers ToMedication |
| CarePlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent care plan that the activity is a part of.This field is a relationship field.Relationship NameCarePlanRelationship TypeMaster-DetailRefers ToCarePlan |
| DailyDoseQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of product that’s administered or consumed each day as part of the activity. |
| DailyDoseUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the values specified in DailyDoseQuantity.This field is a relationship field.Relationship NameDailyDoseUnitRelationship TypeLookupRefers ToUnitOfMeasure |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the activity. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place where the activity is intended to happen. This could be provider facility, the patient’s home, etc.This field is a polymorphic relationship field.Relationship NameLocationRelationship TypeLookupRefers ToHealthcareFacility, Location |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record. Available in API version 57.0.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| ProhibitedActivity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the activity described in the record is prescribed as something that the patient should avoid doing. Use the Default value if you’d rather not specify this as true or false.Possible values are:DefaultFalseTrue |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe activity that’s prescribed as part of the care plan.TipYou can either specify your care plan activity using a generic code with the ActivityCodeId field, or you use the ReferenceRecordId field to reference a record in your system that represents the specific instance of the activity.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToClinicalServiceRequest, MedicationRequest, MedicationStatement |
| ScheduleDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe schedule for when the activty is intended to be performed.NoteYou use the ActivityTimingId field if you want to represent the activity’s schedule as a timing value, the ScheduleDescription field if you want to use a text value, and the ScheduledPeriodStartDateTime and ScheduledPeriodEndDateTime fields if you want to use a period value. You can pick any one of these data types, but you can’t use more than one in the same record. |
| ScheduledPeriodEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the activity’s prescribed time period ends.NoteYou use the ActivityTimingId field if you want to represent the activity’s schedule as a timing value, the ScheduleDescription field if you want to use a text value, and the ScheduledPeriodStartDateTime and ScheduledPeriodEndDateTime fields if you want to use a period value. You can pick any one of these data types, but you can’t use more than one in the same record. |
| ScheduledPeriodStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the activity’s prescribed time period starts.NoteYou use the ActivityTimingId field if you want to represent the activity’s schedule as a timing value, the ScheduleDescription field if you want to use a text value, and the ScheduledPeriodStartDateTime and ScheduledPeriodEndDateTime fields if you want to use a period value. You can pick any one of these data types, but you can’t use more than one in the same record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the activity.Possible values are:CancelledCompletedEntered-In-ErrorIn ProgressNot StartedOn HoldScheduledStoppedUnknown |
| StatusReasonCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the reason for why the value specified in Status is valid.This field is a polymorphic relationship field.Relationship NameStatusReasonCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| SuppliedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of product that’s supplied, administered, or consumed as part of the activity during the course of the care plan. |
| SuppliedQuantityUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the value specified in SuppliedQuantity.This field is a relationship field.Relationship NameSuppliedQuantityUnitRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanActivityFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanActivityHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePlanActivityOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 57.0)

Sharing rules are available for the object.

[CarePlanActivityShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 57.0)

Sharing is available for the object.

## Related Topics

- CarePlanActivityFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePlanActivityHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePlanActivityOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CarePlanActivityShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
