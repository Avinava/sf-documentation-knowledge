---
title: "Build Custom Appointment Booking Experiences Using Salesforce
      Scheduler APIs"
domain: salesforce-scheduler-developer-guide
topic: build-custom-appointment-booking-experiences-using-salesforce-scheduler-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.550Z
estimatedTokens: 1457
keywords: [Build, Custom, Appointment, Booking, Experiences, Salesforce, Scheduler, APIs, demonstrates, how, seamless, experience, cases, developers, scheduling]
---

# Build Custom Appointment Booking Experiences Using Salesforce
      Scheduler APIs

> This section demonstrates how to build a seamless appointment booking experience using our
      Salesforce Scheduler APIs. With these use cases, developers can learn how to build custom
      scheduling apps with the Salesforce Scheduler APIs.

# Build Custom Appointment Booking Experiences Using Salesforce Scheduler APIs

This section demonstrates how to build a seamless appointment booking experience using our Salesforce Scheduler APIs. With these use cases, developers can learn how to build custom scheduling apps with the Salesforce Scheduler APIs.

The sample application currently shows an example implementation for simple appointment booking, automatic resource assignment, and anonymous appointment booking. It also shows an example of an appointment booking modification. These implementations help development teams understand how to use the APIs and begin their own journey of building amazing appointment booking experiences.

-   **[Schedule an Anonymous Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase2_create_anonymous_appointment.htm)**
    Build a scheduling application using Salesforce Scheduler APIs to book an anonymous appointment by assigning service resources automatically. Account users and guest users don’t always know the name of the service resource, and sometimes they don’t care which resource they’re assigned to. You can automatically assign a service resource based on the time slot that a user selects. To protect users’ privacy, you can also hide their names on the review appointment page.
-   **[Schedule Anonymous Appointments with Appointment Distribution](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase8_create_appointment_with_apptdistribution.htm)**
    Build a scheduling app by using Salesforce Scheduler APIs to book anonymous service appointments via phone calls and video conferences within a large, virtual service territory. For territories with too many associated resources, use Appointment Distribution to show only the least consumed resources.
-   **[Schedule Appointments by Selecting Location First](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase9_show_nearest_available_service_territories.htm)**
    This use case explains how you can build a scheduling app to have the service location selection first in your appointment scheduling experience using Salesforce Scheduler APIs.
-   **[Modify an Anonymous Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase5_modify_anonymous_booking.htm)**
    This use case explains how to change the service resource of an existing anonymous service appointment by using Salesforce Scheduler APIs.
-   **[Create a Single-Resource Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase1_create_single_resource_appointment.htm)**
    This use case explains how you can build a scheduling website to allow users to book service appointments with a single resource using Salesforce Scheduler APIs.
-   **[Modify a Service Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase4_modify_an_appointment.htm)**
    Use Salesforce Scheduler APIs to modify a service appointment. This use case explains how you can change the engagement channel, service resource, time slot, or status of an existing appointment. However, you can also modify other details of the appointment in a similar fashion. For example, to change the service territory, use the service-territories Connect API.
-   **[Create a Multi-Resource Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase3_create_multi_resource_appointment.htm)**
    Build a scheduling application using Salesforce Scheduler APIs to book a multi-resource service appointment. Multi-resource scheduling lets users create appointments that include more than one required service resource.
-   **[Modify a Multi-Resource Service Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase7_modify_multiresource_appointment.htm)**
    Use Salesforce Scheduler APIs to modify a multi-resource service appointment. This use case explains how you can change the secondary service resources or the time slot of an existing multi-resource appointment.
-   **[Create a Concurrent Appointment](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase6_create_concurrent_scheduling.htm)**
    This use case explains how to build a concurrent appointment scheduling application using Salesforce Scheduler APIs.
-   **[Schedule Appointments by Using Sharing Availability](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase10_create_appointments_using_sharing_availability.htm)**
    This use case describes how to create an external website by using the Salesforce Scheduler APIs that your users can use to book appointments using the invitation URL.
-   **[Schedule Appointments with a Dummy Resource and Reassign to Actual Resources](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_schedule_appt_with_dummy_resource_and_reassign_to_actual_resource.htm)**
    Learn how to create concurrent appointments by using a dummy resource and to reassign the appointments to actual resources later in scenarios where appointments are scheduled before actual resources can be assigned. For example, a wealth management advisory desk that accepts 50 or more appointments for various time slots between 10:00 AM and 5:00 PM. The desk can reassign these appointments to the actual resources only two days before the appointment date. Or, a call center whose resources are assigned randomly in real time, but can schedule 50 appointments for various time slots in a day.

## Related Topics

- Schedule an Anonymous Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase2_create_anonymous_appointment.htm)
- Schedule Anonymous Appointments with Appointment Distribution (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase8_create_appointment_with_apptdistribution.htm)
- Schedule Appointments by Selecting Location First (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase9_show_nearest_available_service_territories.htm)
- Modify an Anonymous Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase5_modify_anonymous_booking.htm)
- Create a Single-Resource Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase1_create_single_resource_appointment.htm)
- Modify a Service Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase4_modify_an_appointment.htm)
- Create a Multi-Resource Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase3_create_multi_resource_appointment.htm)
- Modify a Multi-Resource Service Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase7_modify_multiresource_appointment.htm)
- Create a Concurrent Appointment (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase6_create_concurrent_scheduling.htm)
- Schedule Appointments by Using Sharing Availability (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/usecase10_create_appointments_using_sharing_availability.htm)
