---
title: "wkfsl__Facility_Plan__c"
domain: workdotcom-dev-guide
topic: wkfslfacilityplanc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.561Z
estimatedTokens: 1160
keywords: [wkfsl__Facility_Plan__c, facility, plan, help, manage, sites, buildings, maximum, occupancy, arrival, window, start, end, times, interval]
---

# wkfsl__Facility_Plan__c

> Represents the facility plan to help you manage your sites and buildings. This
      object has information such as maximum occupancy, arrival window start and end times, and
      arrival interval information for a location. This object is installed as a part of the Shift
      Management managed package. This object is available in API version 48.0 and later.

# wkfsl\_\_Facility\_Plan\_\_c

Represents the facility plan to help you manage your sites and buildings. This object has information such as maximum occupancy, arrival window start and end times, and arrival interval information for a location. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| wkfsl__AvailabilityRequestsSentDate__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the workplace manager sends availability notifications to employees. This field is available in managed package version 3.0 and later. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the facility plan. |
| wkfsl__Capacity_Overide__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to override the planned occupancy for this facility plan. |
| wkfsl__Capacity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum allowed occupancy for this facility plan. This field is calculated from the facility's maximum occupancy and the reduced occupancy percentage. |
| wkfsl__Completion_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe response due date for employees to submit availability. Before the due date, employees can edit availability for the facility plan. After this date, employees can view any scheduled shifts. This field is available in managed package version 3.0 and later. |
| wkfsl__Days_of_the_week__c | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, Restricted picklist, UpdateDescriptionThe days of the week used by this facility.Possible values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday |
| wkfsl__End_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date for this facility plan. |
| wkfsl__Generate_Shift__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether shifts are calculated for this service territory location. The system sets this field to true for the lowest-level service territories. |
| wkfsl__Max_Number_Of_Allowed_Employees__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe occupancy per interval when employee arrivals are staggered. |
| wkfsl__Percentage_Allocation__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reduced occupancy percentage. This value is used to calculate the planned occupancy from the maximum occupancy. |
| wkfsl__Related_Top_Level_Territory__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe top-level service territory associated with the facility plan's service territory. This field is available in package version 1.73 and later. |
| wkfsl__Service_Territory__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service territory associated with this plan. |
| wkfsl__Shifts_Were_Generated__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shifts for a facility plan were generated. If the generation of shifts fails, this value is still true. |
| wkfsl__Stagger_End_Time__c | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEnd time for the stagger period. |
| wkfsl__Stagger_Start_Time__c | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionStart time for the stagger period. |
| wkfsl__Start_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date for this shift. |
| wkfsl__Time_Interval__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe length of the arrival time slot in minutes. |
| wkfsl__Time_To_Stagger__c | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe time when the scheduled job to calculate staggering starts running. |
| wkfsl__Timezone__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time zone for the service territory linked to this facility plan. |
| wkfsl__Work_Type__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom work type associated with this plan. This field is available in package version 1.73 and later. |
