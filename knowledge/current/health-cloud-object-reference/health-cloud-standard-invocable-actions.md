---
title: "Health Cloud Standard Invocable Actions"
domain: health-cloud-object-reference
topic: health-cloud-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.839Z
estimatedTokens: 1327
keywords: [Health, Cloud, Standard, Invocable, Actions, Manage, healthcare, facilities, REST, API, Developer]
---

# Health Cloud Standard Invocable Actions

> Manage healthcare facilities using invocable actions. For
    more information on standard invocable actions, see REST API Developer Guide and Actions Developer Guide.

# Health Cloud Standard Invocable Actions

Manage healthcare facilities using invocable actions. For more information on standard invocable actions, see **[REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm)** and **[Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm)**.

-   **[Book Appointment Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_book_appointment.htm)**
    Create or book a new appointment.
-   **[Cancel Appointment Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_cancel_appointment.htm)**
    Cancel an existing appointment.
-   **[Create Referral Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_actions_create_referral.htm)**
    Create a patient referral record. A patient referral consists of multiple objects, such as an account, clinical service request, and clinical service request detail.
-   **[Create Quote for Home Visits Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_create_quote_for_home_visits.htm)**
    Create a quote for patient home visits based on the specified visit details.
-   **[Create Template of Service Appointment Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_create_template_appointment_service.htm)**
    Create a service appointment record of Cancelled status that's used as a template for creating the actual service appointment record while scheduling home visits manually.
-   **[Get Data Using Context Definition Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_data_using_context_definition.htm)**
    Get data from a context service using a context definition and the associated context mapping.
-   **[Get Resources Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_resources.htm)**
    Search for available resources, such as healthcare providers or medical assets, based on specified search criteria.
-   **[Get Resources for Manual Scheduling Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_resources_manual_scheduling.htm)**
    Recommend resources to use when you manually schedule a start of care visit or recurring visits.
-   **[Get Slots Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_slots.htm)**
    Retrieve available appointment slots for one or more resources.
-   **[Get Transcript from Conversation Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_transcript_for_conversation.htm)**
    Gets the transcript for a specified conversation record such as voice call, messaging session, or chat transcript.
-   **[Handle Resource Absence Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_handle_resource_absence.htm)**
    Remove a service resource’s visit assignments for a specified period and optionally update the status of the affected visits to a specified value.
-   **[Process Received Document Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_process_received_document.htm)**
    Create a record with the processed results of the specified received document.
-   **[Reschedule Recurring Home Visits Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_reschedule_recurring_home_visits.htm)**
    Reschedule all the home visits based on the recurrence pattern and scheduling policy provided.
-   **[Schedule Group Visits Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_schedule_group_visits.htm)**
    Create visiting records for patient home visits by bundling them into a group and scheduling either a single start-of-care visit or a series of recurring visits associated with the bundled records.
-   **[Schedule Home Visit Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_schedule_home_visit.htm)**
    Schedule a home visit for the patient to assess the condition before scheduling the recurring visits for the patient care.
-   **[Schedule Home Visits Manually Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_schedule_home_visits_manually.htm)**
    Create start of care or recurring home visits and assign care resources that are manually selected by the scheduler to the visits.
-   **[Schedule Recurring Home Visit Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_schedule_recurring_home_visit.htm)**
    Create a set of recurring home healthcare visits and assign service resources to them based on the specified scheduling policy.
-   **[Update Appointment Action](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_update_appointment.htm)**
    Update an existing appointment.

## Related Topics

- Book Appointment Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_book_appointment.htm)
- Cancel Appointment Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_cancel_appointment.htm)
- Create Referral Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_actions_create_referral.htm)
- Create Quote for Home Visits Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_create_quote_for_home_visits.htm)
- Create Template of Service Appointment Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_create_template_appointment_service.htm)
- Get Data Using Context Definition Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_data_using_context_definition.htm)
- Get Resources Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_resources.htm)
- Get Resources for Manual Scheduling Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_resources_manual_scheduling.htm)
- Get Slots Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_slots.htm)
- Get Transcript from Conversation Action (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/actions_obj_get_transcript_for_conversation.htm)
