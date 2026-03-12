---
title: "Intelligent Appointment Management Operations"
domain: health-cloud-object-reference
topic: intelligent-appointment-management-operations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.147Z
estimatedTokens: 730
keywords: [Intelligent, Appointment, Management, Operations, include, finding, time, slots, determining, status, slot, creating, getting, scheduled, canceling]
---

# Intelligent Appointment Management Operations

> The available operations for Intelligent Appointment Management include finding
    available appointment time slots, determining the status of an appointment slot, creating an
    appointment, getting a scheduled appointment, and canceling an appointment.

# Intelligent Appointment Management Operations

The available operations for Intelligent Appointment Management include finding available appointment time slots, determining the status of an appointment slot, creating an appointment, getting a scheduled appointment, and canceling an appointment.

These APIs calls out to an external system, while the [Appointment Management APIs](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/hc_appointment_management_intro.htm) call into the system.

The URL for each operation is formed from two parts:

Protocol + Domain

This is defined in a Named Credential for appointment management.

-   Create a named credential in Setup.
-   The name of the credential must be Appointment\_Management.
-   Associate the named credential with Intelligent Appointment Management in Setup under Intelligent Appointment Management Configuration.

Path

For each operation this defines the URI path following the value obtained from the Named Credential.

Each operation uses the default URI paths shown below. The default URI path for each operation can be overridden in Setup under **Intelligent Appointment Management URL Configuration**. If you override default URI paths with custom URIs, make corresponding changes in a custom Apex class that connects with your electronic health record (EHR) system’s middleware. Consistency between custom URI paths and custom Apex ensures that data from each endpoint is parsed as expected.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

The comments in these JSON samples are for documentation purposes only and aren’t meant to be valid JSON.

-   **[Find Available Time Slots for an Appointment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_find_slots.htm)**
    When a call center agent wants to schedule an appointment, the first step is to find the available time slots for providers who match the patient’s needs. The call center agent gathers selection criteria and then initiates a search to obtain the available slots for providers who match the criteria.
-   **[Get Slot Status](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_get_slot_status.htm)**

-   **[Create Appointment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_create_appointment.htm)**
    When the patient selects an available slot, the call center agent books the appointment, which triggers a Get Slot Status REST call to the EHR system.
-   **[Cancel Appointment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_cancel_appointment.htm)**

## Related Topics

- Find Available Time Slots for an Appointment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_find_slots.htm)
- Get Slot Status (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_get_slot_status.htm)
- Create Appointment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_create_appointment.htm)
- Cancel Appointment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_operation_cancel_appointment.htm)
