---
title: "AppointmentInsightsResult Class"
domain: field-service
topic: appointmentinsightsresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.992Z
keywords: [AppointmentInsightsResult, Class, Namespace, Example]
---

# AppointmentInsightsResult Class

# AppointmentInsightsResult Class

Represents the response returned by the [getAppointmentInsights](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_getAppointmentInsights "Returns an AppointmentInsightsResult class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.") method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

This code block represents the output of the getAppointmentInsights method from the Appointment Insights API. It provides a detailed result of an appointment insight operation. The result indicates there are no slots blocked.

```

```

-   **[Appointment Insights Result Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_properties.htm)**