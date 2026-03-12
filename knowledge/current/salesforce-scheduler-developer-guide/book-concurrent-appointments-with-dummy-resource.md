---
title: "Book Concurrent Appointments with Dummy Resource"
domain: salesforce-scheduler-developer-guide
topic: book-concurrent-appointments-with-dummy-resource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.970Z
estimatedTokens: 751
keywords: [Book, Concurrent, Appointments, Dummy, Resource, scheduling, feature, Salesforce, Scheduler, easily, schedule, multiple, service, time, slot]
---

# Book Concurrent Appointments with Dummy Resource

> Use the concurrent scheduling feature of Salesforce Scheduler to
      easily schedule multiple service appointments in the same time slot. An event is created for
      each service appointment. Create concurrent appointments by using the dummy resource for the
      various time slots available for the day.

# Book Concurrent Appointments with Dummy Resource

Use the concurrent scheduling feature of Salesforce Scheduler to easily schedule multiple service appointments in the same time slot. An event is created for each service appointment. Create concurrent appointments by using the dummy resource for the various time slots available for the day.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

A concurrent time slot can have 2 to 1,000 appointments.

Here’s a high-level overview of how to build a concurrent scheduling app.![A representation of the create concurrent scheduling flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fflow_create_concurrent_scheduling.png&folder=salesforce_scheduler_developer_guide)

-   **[Get Work Type Groups](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_work_type_groups.htm)**
    A work type group represents a general appointment category or topic, such as a home loan or investment. Show your users your work type groupson the landing page of your app by retrieving the list of work type groups from your Salesforce instance. Your users can select a work type group from the list while booking appointments.
-   **[Get Service Territories](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_service_territories.htm)**
    A service territory represents a branch or office location where your service resources (appointment attendees) operate from or meet customers. Show your users your available service territorieson the next page on your website by retrieving a list of active service territories from your Salesforce instance. Your users can search for service territories based on user-entered name, city, postal code, or state. Users can also view the distance between two locations, such as between a service territory and the user's current location.
-   **[Get Dummy Service Resource](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_appointment_candidates.htm)**
    Show your users the dummy resource and its availability based on the selected work type group and service territory.
-   **[Create Service Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_appointment.htm)**
    Show your users the details of a service appointment—an appointment booked through Salesforce Scheduler—so that users can review and create the appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_setup_scheduler.htm "Set Up Salesforce Scheduler")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_reassign_appts_to_actual_resources.htm "Modify Appointments to Reassign to Actual Resources")

## Related Topics

- Get Work Type Groups (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_work_type_groups.htm)
- Get Service Territories (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_service_territories.htm)
- Get Dummy Service Resource (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_get_appointment_candidates.htm)
- Create Service Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_create_service_appointment.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_setup_scheduler.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_reassign_appts_to_actual_resources.htm)
