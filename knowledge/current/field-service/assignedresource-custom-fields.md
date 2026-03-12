---
title: "AssignedResource Custom Fields"
domain: field-service
topic: assignedresource-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.645Z
estimatedTokens: 1027
keywords: [AssignedResource, Custom, associated, service, resource, assigned, appointment, resources, appear, appointments, API, version, 38.0, later, Calls]
---

# AssignedResource Custom Fields

> Custom fields associated with a service resource who is assigned to a service
         appointment in Field Service. Assigned resources appear in the Assigned Resources related
         list on service appointments. This object is available in API version 38.0 and
      later.

# AssignedResource Custom Fields

Custom fields associated with a service resource who is assigned to a service appointment in Field Service. Assigned resources appear in the Assigned Resources related list on service appointments. This object is available in API version 38.0 and later.

The standard fields are documented in the [AssignedResource](https://developer.salesforce.com/docs/atlas.en-us.244.0.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service managed package must be installed.

## Fields

| Field | Details |
| --- | --- |
| FSL__EstimatedTravelDistanceFrom__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel distance from the service resource’s assigned appointment location to their home base. For this field, the assigned appointment location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is 0. |
| FSL__EstimatedTravelDistanceTo__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel distance to the service resource’s assigned appointment location from a service appointment, another resource absence location, or their home base. For this field, the assigned appointment location must have latitude and longitude coordinate. If it doesn’t have latitude and longitude coordinates or the travel calculations are disabled, this field is 0. |
| FSL__EstimatedTravelTimeFrom__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated travel time from the service resource’s assigned appointment location to their home base. For this field, the assigned appointment location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is 0. |
| FSL__Estimated_Travel_Time_From_Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used to calculate the travel time from the service resource’s assigned appointment location to their home base. For this field, the assigned appointment location must have latitude and longitude coordinates and be the last location of the day. If it doesn’t have coordinates, isn’t the last location of the day, or the travel calculations are disabled, this field is None.Possible values are:AerialNonePredictiveSLR |
| FSL__Estimated_Travel_Time_To_Source__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used to calculate the travel time to the service resource’s assigned appointment location from a service appointment, another resource absence location, or their home base. For this field, the assigned appointment location must have latitude and longitude coordinates. If it doesn’t have latitude and longitude coordinates or the travel calculations are disabled, this field is None.Possible values are:AerialNonePredictiveSLR |

## Internal Fields

These internal fields are used by the Field Service managed package. Although they’re publicly accessible, they must only be updated by the managed package.

-   FSL\_\_Last\_Updated\_Epoch\_\_c—Used to prevent the overlapping of multiple concurrent scheduling requests.
-   FSL\_\_UpdatedByOptimization\_\_c—Equals true if the record was updated by the optimization engine.
-   FSL\_\_calculated\_duration\_\_c—Indicates the duration (start to end time) of the service appointment assigned to the resource in minutes.

#### See Also

-   [AssignedResource](https://developer.salesforce.com/docs/atlas.en-us.244.0.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm)
