---
title: "ServiceResourceCapacity Custom Fields"
domain: field-service
topic: serviceresourcecapacity-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.136Z
keywords: [ServiceResourceCapacity, Custom, Fields, Supported, Calls, Special, Access, Rules, See]
---

# ServiceResourceCapacity Custom Fields

# ServiceResourceCapacity Custom Fields

Custom fields associated with the maximum number of scheduled hours or number of service appointments that a capacity-based service resource can complete within a specific time period.

The standard fields are documented in the [ServiceResourceCapacity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresourcecapacity.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__HoursInUse__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total number of hours of scheduled services occupied by the service resource. This is used by the Field Service dispatcher console to show how much resource capacity is used up and by the scheduler to prevent offering resources whose capacity is full. This field is updated when the scheduler runs and updates the FSL__MinutesUsed__c field.This is a calculated field.FormulaFSL__MinutesUsed__c / 60 |
| FSL__Last_Updated_​Epoch__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time, in Epoch format, that the Capacity object was last updated. The Capacity object is updated when a service is scheduled on a capacity-based resource. This field is used by the Field Service dispatcher console. |
| FSL__MinutesUsed__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of minutes of scheduled services occupies by the service resource. This is used by the Field Service dispatcher console to show how much resource capacity is used up and by the scheduler to prevent offering resources whose capacity is full. |
| FSL__Work_Items_​Allocated__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of scheduled service appointments that fill the capacity. This is used by the Field Service dispatcher console to show how much resource capacity is used up. |

#### See Also

-   [Salesforce Object Reference: ServiceResourceCapacity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceresourcecapacity.htm "Salesforce Object Reference: ServiceResourceCapacity - HTML (New Window)")