---
title: "AppointmentInsightsResult Class"
domain: field-service
topic: appointmentinsightsresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.198Z
estimatedTokens: 370
namespace: FSL
keywords: [AppointmentInsightsResult, Represents, response, returned, getAppointmentInsights, method., includes, details, why, service, appointment, can’t, added, Gantt, including, resource, availability, blocked, slots, applicable]
---

# AppointmentInsightsResult Class

> Represents the response returned by the getAppointmentInsights
			method. AppointmentInsightsResult includes details about why a service appointment can’t
			be added to the Gantt, including resource availability, blocked slots, and applicable
			blocking rules.

**Namespace:** `FSL`

# AppointmentInsightsResult Class

Represents the response returned by the [getAppointmentInsights](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_getAppointmentInsights "Returns an AppointmentInsightsResult class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.") method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

This code block represents the output of the getAppointmentInsights method from the Appointment Insights API. It provides a detailed result of an appointment insight operation. The result indicates there are no slots blocked.

```

```

-   **[Appointment Insights Result Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_properties.htm)**

## Code Examples

```
AppointmentInsightsResult:[
blockedSlots=0, 
blockingRules=(BlockingRule:[
    ruleName=Due Date, 
    slotsBlockedByMultipleRules=0, 
    slotsBlockedByRule=0
]), 
horizonEndDate=2024-06-06 14:00:00, 
horizonStartDate=2024-05-27 14:00:00, 
operationTimeStamp=2024-06-16 14:00:53, 
policyId=a0c8B00000638CMQAY, 
resourcesEvaluated=0, 
serviceAppointmentId=08p8B000000jCjBQAU, 
serviceTerritoryId=0Hh8B000000HrctSAC
]
```

## Related Topics

- getAppointmentInsights (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm)
- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- Appointment Insights Result Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_properties.htm)
