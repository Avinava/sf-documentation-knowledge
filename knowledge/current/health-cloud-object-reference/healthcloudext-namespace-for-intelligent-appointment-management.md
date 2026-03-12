---
title: "HealthCloudExt Namespace for Intelligent Appointment Management"
domain: health-cloud-object-reference
topic: healthcloudext-namespace-for-intelligent-appointment-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.696Z
estimatedTokens: 1014
namespace: HealthCloudExt
keywords: [HealthCloudExt, Intelligent, Appointment, Management, classes, Health, Cloud, integrate, source, electronic, records, EHR, system]
---

# HealthCloudExt Namespace for Intelligent Appointment Management

> The HealthCloudExt namespace provides an
    interface and classes for Health Cloud to integrate with a source electronic health records
    (EHR) system.

**Namespace:** `HealthCloudExt`

# HealthCloudExt Namespace for Intelligent Appointment Management

The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.

The HealthCloudExt namespace includes these classes and interface.

-   **[AppointmentBase Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm#apex_class_healthcloudext_AppointmentBase)**
    An abstract base class that represents the care provider or the practitioner information.
-   **[AppointmentBookingInterop Interface](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm#apex_interface_healthcloudext_AppointmentBookingInterop)**
    Contains default Apex implementation for healthcare appointment availability and booking.
-   **[AppointmentBookingInteropFhirAdapter Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter)**
    Represents the global class that implements the AppointmentBookingInterop interface.
-   **[AppointmentProvider Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_class_healthcloudext_AppointmentProvider)**
    Represents additional information about the care provider and an appointment.
-   **[BookAppointmentRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_class_healthcloudext_BookAppointmentRequest)**
    Contains set of options to book a healthcare appointment.
-   **[BookAppointmentResponse Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_class_healthcloudext_BookAppointmentResponse)**
    Represents the appointment booking details from the external scheduling system.
-   **[CancelAppointmentRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_class_healthcloudext_CancelAppointmentRequest)**
    Contains set of options to cancel the booked appointment.
-   **[CancelAppointmentResponse Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_class_healthcloudext_CancelAppointmentResponse)**
    Represents the appointment cancellation details from the external scheduling system.
-   **[FindSlotsRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_class_healthcloudext_FindSlotsRequest)**
    Contains set of options to find available time slots for providers who match the patient’s needs. This class extends the AppointmentBase class and inherits its properties.
-   **[GetSlotStatusRequest Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_class_healthcloudext_GetSlotStatusRequest)**
    Contains set of options to retrieve the slot status.
-   **[HomeHealth](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_HomeHealth.htm)**
    Contains Apex implementation for Manual Scheduling for healthcare appointments.
-   **[Slot Class](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_class_healthcloudext_Slot)**
    Represents the time period slot details for the appointment.
-   **[BookingStatus Enum](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_enum_healthcloudext_BookingStatus.htm)**
    Represents a possible status of a healthcare appointment.

## Related Topics

- AppointmentBase Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm)
- AppointmentBookingInterop Interface (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_interface_healthcloudext_AppointmentBookingInterop.htm)
- AppointmentBookingInteropFhirAdapter Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- AppointmentProvider Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- BookAppointmentRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- BookAppointmentResponse Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- CancelAppointmentRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- CancelAppointmentResponse Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- FindSlotsRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
- GetSlotStatusRequest Class (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm)
