---
title: "wkfsl__PlanningPeriod__c"
domain: workdotcom-dev-guide
topic: wkfslplanningperiodc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.568Z
estimatedTokens: 490
keywords: [wkfsl__PlanningPeriod__c, deprecated, Shift, Management, managed, package, version, 3.0, wkfsl__Facility_Plan__c, manage, requests, employee, availability, due, date]
---

# wkfsl__PlanningPeriod__c

> This object has been deprecated in Shift Management managed package version
      3.0. Use the wkfsl__Facility_Plan__c object to manage requests for employee availability and
      set a response due date in version 3.0 and later. This object is installed as a part of
    the Shift Management managed package. This object is available in API version 48.0 and
    later.

# wkfsl\_\_PlanningPeriod\_\_c

This object has been deprecated in Shift Management managed package version 3.0. Use the wkfsl\_\_Facility\_Plan\_\_c object to manage requests for employee availability and set a response due date in version 3.0 and later. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of this planning period. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create(). |
| wkfsl__State__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis field is reserved for future use. |
| wkfsl__Trigger_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is reserved for future use. |
| wkfsl__Weekdays__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionThe weekdays selected by the planner.Possible values are:MondayTuesdayWednesdayThursdayFridaySaturdaySunday |
| wkfsl__completionDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the employee submits availability. After this date, the system assumes that the employee is unavailable. |
| wkfsl__endDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe planning period end date. |
| wkfsl__startDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe planning period start date. |
