---
title: "ServiceAppointment"
domain: workdotcom-dev-guide
topic: serviceappointment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.538Z
estimatedTokens: 544
keywords: [ServiceAppointment, shifts, workplace, confirmed, service, resources, appointments, linked, planned, occupancy, resource, person, API, version, 38.0]
---

# ServiceAppointment

> Represents available shifts for a workplace and confirmed shifts for service
      resources. Service appointments are linked to planned occupancy and, when confirmed, to a
      service resource (a person). This object is available in API version 38.0 and later.

# ServiceAppointment

Represents available shifts for a workplace and confirmed shifts for service resources. Service appointments are linked to planned occupancy and, when confirmed, to a service resource (a person). This object is available in API version 38.0 and later.

For standard fields on the ServiceAppointment object, see [Object Reference - ServiceAppointment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceappointment.htm).

The following Status values are relevant to Shift Management:

-   None—The initial state; the appointment is not linked to a service resource and it represents an available shift.
-   Scheduled—The appointment is linked to a service resource (through the [AssignedResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm) junction object). The appointment represents a shift that is tentatively filled by that service resource.
-   Dispatched—The appointment is now shared with the service resource and the service resource is notified that they are assigned to that shift.
-   In Progress—The service resource accepted the shift.

The service resource can also reject a shift. In that case, the [AssignedResource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_assignedresource.htm) record is deleted and the appointment represents an available shift again.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Custom Fields

| Field | Details |
| --- | --- |
| wkfsl__Facility_Plan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility plan. This has information such as maximum occupancy information for a location. This field is available in API version 48.0 and later. |
| wkfsl__Reject_type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field is reserved for future use. |
