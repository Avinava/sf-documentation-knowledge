---
title: "WorkCapacityUsage"
domain: field-service
topic: workcapacityusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:13.102Z
keywords: [WorkCapacityUsage, Supported, Calls, Fields, Associated, Objects]
---

# WorkCapacityUsage

# WorkCapacityUsage

Represents the capacity usage in a specific service territory for a workstream or for the whole service territory in a given period. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AvailCapacityHours | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis value is copied from the AvailCapacityHours of the WorkCapacityAvailability object for the service territory on the same date. |
| CapacityLimitRelaxation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the relaxation behavior that determines the limit override policy for this limit if the limit override policy is set per limit in Field Service Settings. If the limit override policy isn’t set per limit, this value is ignored. Valid strings are:Empty value - no limit override0 - limit override starts at midnight on the day of servicePositive integer - limit override starts this number of hours after midnight. the maximum value is 23.Negative integer - limit override starts this number of hours before midnight. The maximum value is 336. |
| ConsumptionToLimitRatio | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, SortDescription(Time consumed in hours / Limit in hours) * 100Note the following exceptions.If a limit isn’t defined (-1) the ratio is -1 (even if consumption is 0 or higher).If consumption is 0, and the limit is a number greater than 0, then the ration is 0.If consumption is 0 and the limit is 0, the ration is 100% hard-coded.If consumption is greater than 0 and the limit is 0, the ration is calculated as if the limit = 0.99 in order to get a result that’s higher than 100%. |
| EndDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionEnd date of the time period for which the capacity usage is accumulated. |
| IsSvcTerrOnlyLimit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionApplies this work capacity limit to the entire service territory.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| LimitationPercentage | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, SortDescriptionIf the LimitationUnits is Percentage this value is copied from the LimitationValue field of the WorkCapacityLimit object. |
| LimitationUnits | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionDefines whether the limitation for the workstream in the service territory is in hours or as a percentage of all the available hours for all the workstreams for which limitations exist in the service territory on a specific day.Possible values are:HoursPercentageThe default value is Hours. |
| LimitationValue | TypedoublePropertiesCreate, Filter, SortDescriptionThe LimitationValue depends on the LimitationUnit. If the LimitationUnit is Hours the value is copied from LimitationValue in the WorkCapacityLimit object. If the LimitationUnit is Percentage, the percentage is calculated relative to the availability in the WorkCapacityAvailability object. |
| OriginalLimit | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIf the limit value is changed after the work capacity usage was created, this parameter is the original value. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the service territory of the work capacity workstream for which usage is accumulated.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionStart date of the time period for which the capacity usage is accumulated. |
| SvcApptField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionWork-specific criteria used to define the capacity limit for the workstream.Possible values are:ServiceAppointment.AccountIdServiceAppointment.ActualDuration—Actual duration (in minutes)ServiceAppointment.Duration—DurationServiceAppointment.DurationInMinutesServiceAppointment.FSL__Appointment_Grade__ceServiceAppointment.FSL__Auto_Schedule__cServiceAppointment.FSL__Duration_In_Minutes__c—Scheduled durationServiceAppointment.FSL__Emergency__cServiceAppointment.FSL__GanttColor__cServiceAppointment.FSL__GanttLabel__cServiceAppointment.FSL__InJeopardyReason__cServiceAppointment.FSL__InJeopardy__cServiceAppointment.FSL__IsFillInCandidate__cServiceAppointment.FSL__IsMultiDay__cServiceAppointment.FSL__Last_Updated_Epoch__cServiceAppointment.FSL__MDS_Calculated_length__c—Multiday work calculated lengthServiceAppointment.FSL__Pinned__cServiceAppointment.FSL__Prevent_Geocoding_For_Chatter_Actions__cServiceAppointment.FSL__Related_Service__cServiceAppointment.FSL__Same_Day__cServiceAppointment.FSL__Same_Resource__cServiceAppointment.FSL__Schedule_Mode__cServiceAppointment.FSL__Schedule_over_lower_priority_appointment__cServiceAppointment.FSL__Scheduling_Policy_Used__cServiceAppointment.FSL__Time_Dependency__cServiceAppointment.FSL__UpdatedByOptimization__cServiceAppointment.FSL__Use_Async_Logic__cServiceAppointment.FSL__Virtual_Service_For_Chatter_Action__cServiceAppointment.IsOffsiteAppointmentServiceAppointment.SubjectServiceAppointment.WorkTypeId—Work Type ID |
| SvcApptFieldValDplyNm | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWorkstream display name of SvcApptFieldValue. |
| SvcApptFieldValue | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionValue of SvcApptField, the work-specific criteria of the capacity limit. |
| TimeConsumedInHours | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionTime consumed in hours by the workstream in the service territory for the defined period. This value is calculated by dividing TimeConsumedInMinutes by 60. |
| TimeConsumedInMinutes | TypedoublePropertiesCreate, Filter, SortDescriptionTime consumed in minutes by the workstream in the service territory for the defined period. |
| TimePeriod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionDuration for defining the capacity limitation on the workstream in the service territory.Possible values are:DayThe default value is Day. |
| WcuUniqueField1 | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRead-only. Auto populated, unique identifying number. |
| WcuUniqueField2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRead-only. Auto populated, unique identifying number. |
| WorkCapacityUsageNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. Auto populated, unique identifying number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

WorkCapacityUsageFeed

Feed tracking is available for the object.

WorkCapacityUsageShare

Sharing is available for the object.