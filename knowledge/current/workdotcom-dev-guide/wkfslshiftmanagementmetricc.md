---
title: "wkfsl__Shift_Management_Metric__c"
domain: workdotcom-dev-guide
topic: wkfslshiftmanagementmetricc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.574Z
estimatedTokens: 678
keywords: [wkfsl__Shift_Management_Metric__c, Stores, metrics, summarize, shift, data, employees, planned, occupancy, record, calculated, associated, location, scoped, current]
---

# wkfsl__Shift_Management_Metric__c

> Stores metrics that summarize shift data such as available employees and
      planned occupancy. Each record stores calculated shift data associated with a location and
      scoped to the current day. This object is installed as a part of the Shift Management managed
      package. This object is available in API version 48.0 and later.

# wkfsl\_\_Shift\_Management\_Metric\_\_c

Stores metrics that summarize shift data such as available employees and planned occupancy. Each record stores calculated shift data associated with a location and scoped to the current day. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of this metric. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create(). |
| wkfsl__Allocated_Occupancy__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCapacity count from the facility plan on the provided date. |
| wkfsl__Assigned_Shifts__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of active service appointments that are Dispatched, In Progress, Completed, or Accepted on the service territory and its child territories. |
| wkfsl__Available_Employees__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of active employees who submitted availability and stated that they are available. |
| wkfsl__Calculated_as_of__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when this metric was calculated. |
| wkfsl__Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the shift for which we’re calculating data. |
| wkfsl__Eligible_Employees__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of eligible employees. |
| wkfsl__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the location. |
| wkfsl__Maximum_Occupancy__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe maximum occupancy for the location. |
| wkfsl__Service_Territory__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory associated with this metric. |
| wkfsl__Total_Shifts__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of service appointments that were created for the service territory based on the facility plan. This value can include assigned and unassigned shifts and matches the planned occupancy. |
