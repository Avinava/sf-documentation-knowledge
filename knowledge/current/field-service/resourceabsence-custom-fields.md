---
title: "ResourceAbsence Custom Fields"
domain: field-service
topic: resourceabsence-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.117Z
keywords: [ResourceAbsence, Custom, Fields, Supported, Calls, Special, Access, Rules, Internal, See]
---

# ResourceAbsence Custom Fields

# ResourceAbsence Custom Fields

Custom fields associated with a time period in which a service resource is unavailable to work in Field Service.

The standard fields are documented in the [ResourceAbsence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_resourceabsence.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__Approved__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen this field is true and the Activate approval confirmation on resource absences setting is enabled, the resource absence appears in the dispatcher console’s Gantt chart and is considered by the scheduler. When this field is false and the setting is enabled, the resource absence doesn’t appear in the Gantt chart and is ignored by the scheduler.The default value is false.For more info, view the View Resource Absences on the Gantt and Map Help article. |
| FSL__Duration_In​​_Minutes__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe duration of the resource absence in minutes. This field is automatically populated after the resource absence is created.This is a calculated field.FormulaIF (ISBLANK(Start), 0, (End - Start)*24*60) |
| FSL__EstTravelTime​From__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel time from the service resource’s absence location to their home base. For this field, the absence location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is 0. |
| FSL__EstTravelTime__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated time to the service resource’s absence location from a service appointment or another resource absence location. For this field, the absence location must have latitude and longitude coordinates. If it doesn’t have latitude and longitude coordinates or the travel calculations are disabled, this field is 0. |
| FSL__EstimatedTravel​DistanceFrom__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel distance from the service resource’s absence location to their home base. For this field, the absence location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is 0. |
| FSL__EstimatedTravel​DistanceTo__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel distance to service resource’s absence location from a service appointment or another resource absence location. For this field, the absence location must have latitude and longitude coordinate. If it doesn’t have latitude and longitude coordinates or the travel calculations are disabled, this field is 0. |
| FSL__Estimated_Travel_​Time_From_Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used to calculate the travel time from the service resource’s absence location to a service appointment or another resource absence location. For this field, the absence location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is None.Possible values are:AerialNonePredictiveSLR |
| FSL__Estimated_Travel_​Time_To_Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used to calculate the travel time to this service resource’s absence location from a service appointment or another resource absence location. For this field, the absence location must have latitude and longitude coordinates. If it doesn’t have latitude and longitude coordinates or the travel calculations are disabled, this field is None.Possible values are:AerialNonePredictiveSLR |
| FSL__GanttLabel__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label of the resource absence in the Field Service dispatcher console’s Gantt chart and resource calendar. This replaces the resource absence’s number in the chart. |
| FSL__Gantt_Color__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Hex color of the resource absence in Field Service dispatcher console’s Gantt chart and resource calendar. |
| FSL__Scheduling_​Policy_Used__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA scheduling policy used by the scheduler for the service appointment. This policy overrides the default one in the Field Service Settings page or the one that the scheduler would otherwise select. This is used for travel calculations.This is a relationship field.Relationship NameFSL__Scheduling_Policy_Used__rRelationship TypeLookupRefers ToFSL__Scheduling_Policy__c |

## Internal Fields

These internal fields are used by the Field Service managed package for Street Level Routing calculations. Although they’re publicly accessible, they must only be updated by the managed package.

-   FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s
-   FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s
-   FSL\_\_InternalSLRGeolocation\_\_c

#### See Also

-   [Salesforce Object Reference: ResourceAbsence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_resourceabsence.htm "Salesforce Object Reference: ResourceAbsence - HTML (New Window)")
    
-   [Salesforce Help: View Resource Absences on the Gantt and Map](https://help.salesforce.com/articleView?id=service.pfs_approved_absences.htm&type=5&language=en_US "Salesforce Help: View Resource Absences on the Gantt and Map - HTML (New Window)")