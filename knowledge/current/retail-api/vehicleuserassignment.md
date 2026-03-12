---
title: "VehicleUserAssignment"
domain: retail-api
topic: vehicleuserassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.964Z
estimatedTokens: 653
keywords: [VehicleUserAssignment, assignment, vehicle, driver, moving, location, API, version, 51.0, later, Calls, Associated, Objects]
---

# VehicleUserAssignment

> Represents the assignment of a vehicle to a driver. Vehicle is a moving
      location. This object is available in API version 51.0 and later.

# VehicleUserAssignment

Represents the assignment of a vehicle to a driver. Vehicle is a moving location. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual end time of the assignment. |
| ActualStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual start time of a driver's association with a vehicle. |
| DriverId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the driver. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the association. |
| PlannedEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned end time of a driver's association with a vehicle. |
| PlannedStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe planned start time of a driver's association with a vehicle. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of a vehicle assignment.Possible values are:AssignedCompletedInProgress |
| VehicleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the van. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[VehicleUserAssignmentFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[VehicleUserAssignmentHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- VehicleUserAssignmentFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- VehicleUserAssignmentHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
