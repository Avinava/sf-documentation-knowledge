---
title: "FSL Apex Namespace"
domain: field-service
topic: fsl-apex-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.635Z
estimatedTokens: 1751
keywords: [FSL, Apex, Service, classes, Visualforce, pages, custom, objects, managed, package, allow, access, elements, assign, permission]
---

# FSL Apex Namespace

> The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and
    custom objects within the Field Service managed package. To allow access to namespace elements,
    assign the FSL custom permission set that's appropriate for the user's persona. For example, to
    allow a user to book appointments, assign the FSL Agent custom permission set.

# FSL Apex Namespace

The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.

-   **[AdvancedGapMatrix Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_class_FSL_AdvancedGapMatrix)**
    Represents a matrix of service resource IDs and graded time slots. An instance of this class is used only within the context of the results returned by the GradeSlotsService class.
-   **[AppointmentBookingService Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_class_FSL_AppointmentBookingService)**
    Represents the appointment booking scheduling process in field service. Appointment booking returns the available slots for a service appointment, while considering scheduling policies, work rules, and service objectives. For example, we can schedule an appointment tomorrow between 9 and 11 AM, or next Monday between 4 and 6 PM.
-   **[AppointmentBookingSlot Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_class_FSL_AppointmentBookingSlot)**
    Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.
-   **[GradeSlotsService Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_class_FSL_GradeSlotsService)**
    Represents the results shown in the Candidates quick action. Use the GradeSlotsService class to evaluate all possible slots where a given service appointment can be scheduled.
-   **[AppointmentInsightsResult Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm)**
    Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.
-   **[BlockingRule Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_BlockingRule.htm)**
    Represents a global class that holds an array of blocking rules. . BlockingRule is a required parameter for AppointmentInsightsResult, which is the response class for the getAppointmentInsights method of ScheduleService.
-   **[GroupData Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm#apex_class_FSL_GroupData)**
    Represents a global class that combines a group policy ID and a list of service territory IDs. GroupData is a required input parameter for FSL.ScheduleJobsApi.getJob.setTerritory.
-   **[OAAS Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_class_FSL_OAAS)**
    Contains all the methods used in the available optimization services, such as global or in-day optimizations, reshuffle operations, and resource schedule optimizations.
-   **[OAASRequest Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_class_FSL_OAASRequest)**
    Represents the request sent in the OAAS.Optimize() method. This class contains all the details of a global optimization call.
-   **[PolygonUtils Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm#apex_class_FSL_PolygonUtils)**
    Represents the result of using the getTerritoryIdByPolygons method to return a service territory record ID using latitude and longitude geolocation values.
-   **[RecurringAppointmentsManager Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_class_FSL_RecurringAppointmentsManager)**
    Represents the result of using the [getRecurringAppointmentSlots](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_FSL_RecurringAppointmentsManager_getRecurringAppointmentsSlots "Returns a list of RecurringSequence appointments.") method to return a pattern of appointments that recur weekly.
-   **[RecurringPattern Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_class_FSL_RecurringPattern)**
    Represents a global sharing class that is a required parameter for RecurringAppointmentsManager to return a pattern of appointments that recur weekly.
-   **[RecurringSequence Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringSequence.htm)**
    Represents the result of using the getRecurringAppointmentsSlots method to return a pattern of appointments that recur daily, weekly, or monthly.
-   **[ResourceScheduleData Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_class_FSL_ResourceScheduleData)**
    Contains all the details of a service resource’s available slots for a given service appointment. An instance of this class is used only within the context of the results returned by the AdvancedGapMatrix class.
-   **[ScheduleJobsApi Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleJobsApi.htm#apex_class_FSL_ScheduleJobsApi)**
    Represents configurations to the Territory tab that is available for all scheduled jobs that are categorized under Enhanced Optimization.
-   **[ScheduleResult Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_class_FSL_ScheduleResult)**
    Represents the result of scheduling a service appointment that is returned by the ScheduleService.schedule method.
-   **[ScheduleService Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_class_FSL_ScheduleService)**
    Represents the scheduling of a given service appointment in the best available slot based on the applied scheduling policy.
-   **[SchedulingOption Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_class_FSL_SchedulingOption)**
    Provides the details of an individual slot available for scheduling. Represents a run-time object used within the context of the results returned in the AdvancedGapMatrix class.
-   **[TimeInterval Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval)**
    Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.

## Related Topics

- AdvancedGapMatrix Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- AppointmentBookingService Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm)
- AppointmentBookingSlot Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm)
- GradeSlotsService Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- AppointmentInsightsResult Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm)
- BlockingRule Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_BlockingRule.htm)
- GroupData Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GroupData.htm)
- OAAS Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm)
- OAASRequest Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm)
- PolygonUtils Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm)
