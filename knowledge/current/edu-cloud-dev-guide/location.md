---
title: "Location"
domain: edu-cloud-dev-guide
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.540Z
estimatedTokens: 223
keywords: [Location, facility, building, room, region, API, version, 57.0, later, Calls]
---

# Location

> Represents details about a facility, building, room, or region. This
      object is available in API version 57.0 and later.

# Location

Represents details about a facility, building, room, or region. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| MaximumOccupancy | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum occupancy of the location. |
| OwnershipStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of ownership of the facility.Possible values are:LeasedOtherOwnedRented |

For more information, see [Location in Salesforce Platform Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm "HTML (New Window)").
