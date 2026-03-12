---
title: "ActivityTiming"
domain: health-cloud-object-reference
topic: activitytiming
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.580Z
estimatedTokens: 2188
keywords: [ActivityTiming, detailed, activity, that’s, repeated, regular, intervals, over, period, time, API, version, 52.0, later, Calls]
---

# ActivityTiming

> Represents detailed information about an activity that’s repeated in regular
         intervals over a period of time. This object is available in API version 52.0 and
      later.

# ActivityTiming

Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityCountPerRepetition | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe recommended number of times the activity should be performed in a repetition cycle. |
| ActivityDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe length of time that the activity should be performed during each occurrence. |
| ActivityDurationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the length of time that the activity should be performed during each occurrence.This is a relationship field.Referenced ObjectUnitOfMeasure |
| ActivityTime | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe approximate time of day or a daily event that acts as a point of reference for when the activity should be performed.Possible values are:Default |
| ActivityTimeOffset | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of minutes before or after the reference point specified in ActivityTime when the activity should be performed. |
| CountInPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recommended number of times the activity should be performed in the specified period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed th reecord. |
| MaxActivityCountPerRepetition | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times the activity should be performed in a repetition cycle. |
| MaxActivityDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum length of time that the activity should be performed during each occurrence. |
| MaxCountInPeriod | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of times the activity should be performed in the specified period. |
| MaxRepetitionCycleLength | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum length of each cycle of repetition. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ActivityTiming record. This value is generated automatically. |
| OwnerId | TypePolymorphic referencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the ActivityTiming record.Relationship NameOwnerRelationship TypeLookupReferenced ObjectGroup, User |
| PeriodEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the period during which this activity should be performed. |
| PeriodLength | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe length of the period during which this activity should be performed. |
| PeriodLengthLowerLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lower limit of the length of the period during which this activity should be performed. |
| PeriodLengthUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the period's length. This field is used to specify the unit for PeriodLength, PeriodLengthLowerLimit, and PeriodLengthUpperLimit.Referenced ObjectUnitOfMeasure |
| PeriodLengthUpperLimit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe upper limit of the length of the period during which this activity should be performed. |
| PeriodStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the period during which this activity should be performed. |
| RepetitionCycleLength | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe recommended length of each cycle of repetition. |
| RepetitionCycleUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of the length of each cycle of repetition.Referenced ObjectUnitOfMeasure |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system the record came from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last changed in the source system. |
| TimingCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the timing information of an activity. This code is expected to be a complete statement of what is specified in the other fields of this object, and either this code or the data in the other fields may be used to interpret the timing of an activity.This is a relationship field.Referenced ObjectCodeSet |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of activity the timing information is used for.Possible values are:CareObservation—Care ObservationClinicalServiceRequest—Clinical Service RequestMedicationDosage—Medication Dosage |
| WeeklyActivityTimeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe day and time of the week when this activity should be performed.Referenced ObjectOperatingHours |

## Usage

ActivityTiming records are referenced from MedicationDosage records to specify the timing of their activities. Here’s an example of an activity’s timing information and how an ActivityTiming record would represent that information.

**Scenario:** Let’s say your doctor tells you that you have to run for 10 minutes every 2 days, 30 minutes after your meals. You need to run at least 5 times in the span of those 2 days. You have to do this for 3 to 4 weeks. You’re also told that you shouldn’t run for more than 15 minutes at a time, and that you shouldn’t do it more than 7 times in 3 days. So in those 3-4 weeks, you should run somewhere between 60-84 times.

**Sample Record:**

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActivityTimingChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[ActivityTimingFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActivityTimingHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActivityTimingShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
Id: 1CDR00000000006OAA
OwnerId: 005R0000000dNImIAM
IsDeleted: false
Name: AT-3147
CreatedDate: 2021-04-15T10:48:14.000+0000
CreatedById: 005R0000000dNImIAM
LastModifiedDate: 2021-04-15T10:49:47.000+0000
LastModifiedById: 005R0000000dNImIAM
SystemModstamp: 2021-04-15T10:49:47.000+0000
LastViewedDate: 2021-04-15T11:14:26.000+0000
LastReferencedDate: 2021-04-15T11:14:26.000+0000
TimingCodeId: null
PeriodStartDateTime: null
PeriodEndDateTime: null
PeriodLength: null
PeriodLengthLowerLimit: 3
PeriodLengthUpperLimit: 4
PeriodLengthUnitId: 0hER0000000001VMAQ
CountInPeriod: 60
MaxCountInPeriod: 84
ActivityDuration: 10
MaxActivityDuration: 15
ActivityDurationUnitId: 0hER0000000001aMAA
ActivityCountPerRepetition: 5
MaxActivityCountPerRepetition: 7
RepetitionCycleLength: 2
MaxRepetitionCycleLength: 3
RepetitionCycleUnitId: 0hER0000000001fMAA
ActivityTime: AfterMeal
ActivityTimeOffset: 30
WeeklyActivityTimeId: 0OHR00000000HanOAE
UsageType: MedicationDosage
SourceSystem: WWHR
SourceSystemIdentifier: 763851
SourceSystemModified: 2021-04-05T23:00:00.000+0000
```

## Related Topics

- ActivityTimingChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ActivityTimingFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ActivityTimingHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ActivityTimingShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
