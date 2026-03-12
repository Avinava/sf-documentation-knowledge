---
title: "Create Template of Service Appointment Action"
domain: health-cloud-object-reference
topic: create-template-of-service-appointment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.081Z
estimatedTokens: 669
keywords: [Template, Service, Appointment, Action, record, Cancelled, status, that's, creating, actual, scheduling, home, visits, manually, REST]
---

# Create Template of Service Appointment Action

> Create a service appointment record of Cancelled status that's used as
      a template for creating the actual service appointment record while scheduling home visits
      manually.

# Create Template of Service Appointment Action

Create a service appointment record of Cancelled status that's used as a template for creating the actual service appointment record while scheduling home visits manually.

This action is available in API version 66.0 and later for users with the Home Health enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createTemplateOfServiceAppt

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypeStringDescriptionRequired. The person account ID of the patient to schedule the visits for. |
| clinicalServiceRequestId | TypeStringDescriptionRequired. The ID of the clinical service request record that's associated with the home visits to be scheduled. |
| firstVisitEndDateTime | TypeDateTimeDescriptionThe date and time when the first recurring home visit ends. |
| firstVisitStartDateTime | TypeDateTimeDescriptionRequired. The scheduled date and time for the start of the first recurring home visit. |
| flowInterviewId | TypeStringDescriptionRequired. The ID of the flow interview to set the service appointment template's Comment field to when manually scheduling home visits. |
| operatingHoursId | TypeStringDescriptionThe ID of the operating hours record that specifies the time slots to schedule the home visit for. |
| recurrenceFrequencyType | TypePicklistDescriptionRequired. Specifies the type of recurring home visits. If Weekly is specified, Recurring Days List is required. Valid values are Daily and Weekly. |
| recurringDaysList | TypeStringDescriptionThe comma-delimited list of days to schedule recurring home visits for the patient. For example, Monday, Thursday, and Saturday. |
| schedulingPolicyId | TypeStringDescriptionRequired. The ID of the home health scheduling policy to be used to identify care resources available for the home visits. |
| serviceAppointmentAddress | TypeSObjectDescriptionRequired. The service appointment record that contains the home visit address specified by the user and is used to create the actual service appointment. |
| serviceTerritoryId | TypeStringDescriptionRequired. The ID of the service territory record that contains the care resources to be assigned to the visits. |
| skillsIdsList | TypeStringDescriptionThe comma-delimited list of record IDs of all skills required for the home visits. |
| visitsRequired | TypeIntegerDescriptionRequired. The number of recurring home visits to be scheduled. |
| workTypeId | TypeIDDescriptionThe ID of the work type record that's associated with the clinical service request of the home visit. |
