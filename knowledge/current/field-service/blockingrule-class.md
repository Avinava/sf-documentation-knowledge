---
title: "BlockingRule Class"
domain: field-service
topic: blockingrule-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.995Z
keywords: [BlockingRule, Class, Namespace, Usage]
---

# BlockingRule Class

# BlockingRule Class

Represents a global class that holds an array of blocking rules. . BlockingRule is a required parameter for [AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm "Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules."), which is the response class for the [getAppointmentInsights](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_getAppointmentInsights "Returns an AppointmentInsightsResult class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.") method of [ScheduleService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_class_FSL_ScheduleService "Represents the scheduling of a given service appointment in the best available slot based on the applied scheduling policy.").

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

BlockingRule is the Apex class type for blockingRules, a required parameter for [FSL.AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_FSL_ScheduleJobsApi_setTerritory "Sets territories for a job returned by getJob and performs various validation checks.").

-   **[BlockingRule Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_BlockingRule_properties.htm)**