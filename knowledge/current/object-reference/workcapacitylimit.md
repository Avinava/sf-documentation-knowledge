---
title: "WorkCapacityLimit"
domain: object-reference
topic: workcapacitylimit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.550Z
estimatedTokens: 2447
keywords: [WorkCapacityLimit, capacity, limit, specific, service, territory, workstream, whole, period, API, version, 59.0, later, Calls, Associated]
---

# WorkCapacityLimit

> Represents the capacity limit in a specific service territory for a
         workstream or for the whole service territory in  a given
         period.
      This object is available in API version 59.0 and later.

# WorkCapacityLimit

Represents the capacity limit in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CapacityLimitRelaxation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the relaxation behavior that determines the limit override policy for this limit if the limit override policy is set per limit in Field Service Settings. If the limit override policy isn’t set per limit, this value is ignored. Valid strings are:Empty value - no limit override0 - limit override starts at midnight on the day of servicePositive integer - limit override starts this number of hours after midnight. the maximum value is 23.Negative integer - limit override starts this number of hours before midnight. The maximum value is 336. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the work capacity limit. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the work capacity limit. If no EndDate is set this work capacity limit is without an expiration date. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work capacity limit is active or inactive. When creating a record, save the record, and then activate it. You can't update fields in an active record.The default value is false. |
| IsFriday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Fridays.The default value is false. |
| IsMonday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Mondays.The default value is false. |
| IsSaturday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Saturdays.The default value is false. |
| IsSunday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Sundays.The default value is false. |
| IsSvcTerrOnlyLimit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionApply this work capacity limit to the entire service territory.The default value is false. |
| IsThursday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Thursdays.The default value is false. |
| IsTuesday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Tuesdays.The default value is false. |
| IsWednesday | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the limitation is applied on Wednesdays.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| LimitationUnits | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionUnit of the LimitationValue.Possible values are:HoursPercentageThe default value is Hours. |
| LimitationValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionIf the LimitationUnits is Hours, LimitationValue is the threshold that represents how many hours of total work capacity can be scheduled for a specific workstream in a service territory. Enter the number of hours for the daily limitation as a whole number.If the LimitationUnits is Percentage this threshold represents the percentage of the total work capacity that can be scheduled for a specific workstream in a service territory. Enter the percentage for the daily limitation as a whole number. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the creator of the work capacity limit.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the service territory of the work capacity workstream for which the limit is defined.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the Work Capacity Limit. |
| SvcApptField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWork-specific criteria used to define the capacity limit for the workstream. The service appointment field is set for the organization when the first work capacity limit instance is created.Possible values are:ServiceAppointment.AccountIdServiceAppointment.ActualDuration—Actual duration (in minutes)ServiceAppointment.Duration—DurationServiceAppointment.DurationInMinutesServiceAppointment.FSL__Appointment_Grade__ceServiceAppointment.FSL__Auto_Schedule__cServiceAppointment.FSL__Duration_In_Minutes__c—Scheduled durationServiceAppointment.FSL__Emergency__cServiceAppointment.FSL__GanttColor__cServiceAppointment.FSL__GanttLabel__cServiceAppointment.FSL__InJeopardyReason__cServiceAppointment.FSL__InJeopardy__cServiceAppointment.FSL__IsFillInCandidate__cServiceAppointment.FSL__IsMultiDay__cServiceAppointment.FSL__Last_Updated_Epoch__cServiceAppointment.FSL__MDS_Calculated_length__c—Multiday work calculated lengthServiceAppointment.FSL__Pinned__cServiceAppointment.FSL__Prevent_Geocoding_For_Chatter_Actions__cServiceAppointment.FSL__Related_Service__cServiceAppointment.FSL__Same_Day__cServiceAppointment.FSL__Same_Resource__cServiceAppointment.FSL__Schedule_Mode__cServiceAppointment.FSL__Schedule_over_lower_priority_appointment__cServiceAppointment.FSL__Scheduling_Policy_Used__cServiceAppointment.FSL__Time_Dependency__cServiceAppointment.FSL__UpdatedByOptimization__cServiceAppointment.FSL__Use_Async_Logic__cServiceAppointment.FSL__Virtual_Service_For_Chatter_Action__cServiceAppointment.IsOffsiteAppointmentServiceAppointment.SubjectServiceAppointment.WorkTypeId—Work Type ID |
| SvcApptFieldValDplyNm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe workstream display name of SvcApptFieldValue. If SvcApptField is a lookup to a service appointment, SvcApptFieldValue is an ID and the display name describes the value for the user. |
| SvcApptFieldValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of SvcApptField, the work-specific criteria of the capacity limit. |
| TimePeriod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDuration for defining the capacity limitation on the workstream in the service territory.Possible values are:DayThe default value is Day. |
| WorkCapacityLimitNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. Auto populated, unique identifying number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkCapacityLimitChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[WorkCapacityLimitFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkCapacityLimitHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkCapacityLimitShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkCapacityLimitChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WorkCapacityLimitFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkCapacityLimitHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkCapacityLimitShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
