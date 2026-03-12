---
title: "Shift"
domain: workdotcom-dev-guide
topic: shift
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.550Z
estimatedTokens: 420
keywords: [Shift, service, resource, scheduling, Salesforce, standard, employee’s, availability, their, preferences, constraints, Shifts, created, resources, employees]
---

# Shift

> Represents a shift for service resource scheduling. Shift is a Salesforce
      standard object that represents an employee’s availability based on their preferences and
      constraints. Shifts are created for the service resources (employees) included in a facility
      plan when the planner sends a request for availability. This object is available in API
    version 46.0 and later.

# Shift

Represents a shift for service resource scheduling. Shift is a Salesforce standard object that represents an employee’s availability based on their preferences and constraints. Shifts are created for the service resources (employees) included in a facility plan when the planner sends a request for availability. This object is available in API version 46.0 and later.

For standard fields on the Shift object, see [Object Reference - Shift](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_shift.htm).

A scheduler matches a ServiceAppointment to a ServiceResource object based on a planner’s request for availability. Shifts are linked to a service resource, while service appointments are linked to the facility's planned occupancy.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Custom Fields

| Field | Details |
| --- | --- |
| wkfsl__Facility_Plan__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility plan associated with this shift. This field was added in managed package version 3.0. This field is available in API version 48.0 and later. |
| wkfsl__PlanningPeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNoteThis field has been deprecated in managed package version 3.0 and later.The planning period associated with this shift. Before version 3.0, shifts used a lookup relationship to the wkfsl__PlanningPeriod__c object. This field is available in API version 48.0 and later. |
