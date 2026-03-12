---
title: "AppointmentBookingInteropFhirAdapter Class"
domain: health-cloud-object-reference
topic: appointmentbookinginteropfhiradapter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.261Z
estimatedTokens: 1426
keywords: [AppointmentBookingInteropFhirAdapter, implements, AppointmentBookingInterop, bookAppointment, cancelAppointment, findSlots, getSlotStatus]
---

# AppointmentBookingInteropFhirAdapter Class

> Represents the global class that implements the AppointmentBookingInterop interface.

# AppointmentBookingInteropFhirAdapter Class

Represents the global class that implements the AppointmentBookingInterop interface.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[AppointmentBookingInteropFhirAdapter Methods](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_healthcloudext_AppointmentBookingInteropFhirAdapter_methods)**


## AppointmentBookingInteropFhirAdapter Methods

The following are methods for AppointmentBookingInteropFhirAdapter.

-   **[bookAppointment(request)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_healthcloudext_AppointmentBookingInteropFhirAdapter_bookAppointment)**
    Contains set of options to book a healthcare appointment with the external scheduling system.
-   **[cancelAppointment(request)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_healthcloudext_AppointmentBookingInteropFhirAdapter_cancelAppointment)**
    Contains set of options to cancel the booked appointment from the external scheduling system.
-   **[findSlots(request)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_healthcloudext_AppointmentBookingInteropFhirAdapter_findSlots)**
    Contains set of options to find available time slots for healthcare providers who match the patient’s needs.
-   **[getSlotStatus(request)](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm#apex_healthcloudext_AppointmentBookingInteropFhirAdapter_getSlotStatus)**
    Contains set of options to retrieve the slot status.

### bookAppointment(request)

Contains set of options to book a healthcare appointment with the external scheduling system.

#### Signature

public healthcloudext.BookAppointmentResponse bookAppointment(healthcloudext.BookAppointmentRequest request)

```

```

#### Parameters

request

Type: [healthcloudext.BookAppointmentRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_class_healthcloudext_BookAppointmentRequest "Contains set of options to book a healthcare appointment.")

#### Return Value

Type: [healthcloudext.BookAppointmentResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_class_healthcloudext_BookAppointmentResponse "Represents the appointment booking details from the external scheduling system.")

### cancelAppointment(request)

Contains set of options to cancel the booked appointment from the external scheduling system.

#### Signature

public healthcloudext.CancelAppointmentResponse cancelAppointment(healthcloudext.CancelAppointmentRequest request)

```

```

#### Parameters

request

Type: [healthcloudext.CancelAppointmentRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_class_healthcloudext_CancelAppointmentRequest "Contains set of options to cancel the booked appointment.")

#### Return Value

Type: [healthcloudext.CancelAppointmentResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_class_healthcloudext_CancelAppointmentResponse "Represents the appointment cancellation details from the external scheduling system.")

### findSlots(request)

Contains set of options to find available time slots for healthcare providers who match the patient’s needs.

#### Signature

public Map<String,List<healthcloudext.Slot>> findSlots(healthcloudext.FindSlotsRequest request)

```

```

#### Parameters

request

Type: [healthcloudext.FindSlotsRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_class_healthcloudext_FindSlotsRequest "Contains set of options to find available time slots for providers who match the patient’s needs. This class extends the AppointmentBase class and inherits its properties.")

#### Return Value

Type: Map<String,List<[healthcloudext.Slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_class_healthcloudext_Slot "Represents the time period slot details for the appointment.")\>>

### getSlotStatus(request)

Contains set of options to retrieve the slot status.

#### Signature

public healthcloudext.Slot getSlotStatus(healthcloudext.GetSlotStatusRequest request)

```

```

#### Parameters

request

Type: [healthcloudext.GetSlotStatusRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_class_healthcloudext_GetSlotStatusRequest "Contains set of options to retrieve the slot status.")

#### Return Value

Type: [healthcloudext.Slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_class_healthcloudext_Slot "Represents the time period slot details for the appointment.")

## Code Examples

```
healthcloudext.AppointmentBookingInteropFhirAdapter, bookAppointment, [healthcloudext.BookAppointmentRequest], healthcloudext.BookAppointmentResponse
```

```
healthcloudext.AppointmentBookingInteropFhirAdapter, cancelAppointment, [healthcloudext.CancelAppointmentRequest], healthcloudext.CancelAppointmentResponse
```

```apex
healthcloudext.AppointmentBookingInteropFhirAdapter, findSlots, [healthcloudext.FindSlotsRequest], Map<String,List<healthcloudext.Slot>>
```

```
healthcloudext.AppointmentBookingInteropFhirAdapter, getSlotStatus, [healthcloudext.GetSlotStatusRequest], healthcloudext.Slot
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- AppointmentBookingInteropFhirAdapter Methods (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- bookAppointment(request) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- cancelAppointment(request) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- findSlots(request) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- getSlotStatus(request) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBookingInteropFhirAdapter.htm)
- healthcloudext.BookAppointmentRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- healthcloudext.BookAppointmentResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- healthcloudext.CancelAppointmentRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- healthcloudext.CancelAppointmentResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
