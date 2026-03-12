---
title: "CancelAppointmentResponse Class"
domain: health-cloud-object-reference
topic: cancelappointmentresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.334Z
estimatedTokens: 734
keywords: [CancelAppointmentResponse, appointment, cancellation, external, scheduling, system, externalAppointmentId, jsonResponse, serviceAppointmentId, status]
---

# CancelAppointmentResponse Class

> Represents the appointment cancellation details from the external
      scheduling system.

# CancelAppointmentResponse Class

Represents the appointment cancellation details from the external scheduling system.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[CancelAppointmentResponse Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_healthcloudext_CancelAppointmentResponse_properties)**


## CancelAppointmentResponse Properties

The following are properties for CancelAppointmentResponse.

-   **[externalAppointmentId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_healthcloudext_CancelAppointmentResponse_externalAppointmentId)**
    Represents the appointment identifier from the external scheduling system.
-   **[jsonResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_healthcloudext_CancelAppointmentResponse_jsonResponse)**
    Represents the response from the external scheduling system encoded as JSON.
-   **[serviceAppointmentId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_healthcloudext_CancelAppointmentResponse_serviceAppointmentId)**
    Represents the ID of the service appointment that you want to update.
-   **[status](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm#apex_healthcloudext_CancelAppointmentResponse_status)**
    Represents the status of the healthcare appointment.

### externalAppointmentId

Represents the appointment identifier from the external scheduling system.

#### Signature

public String externalAppointmentId {get; set;}

```

```

#### Property Value

Type: String

### jsonResponse

Represents the response from the external scheduling system encoded as JSON.

#### Signature

public String jsonResponse {get; set;}

```

```

#### Property Value

Type: String

### serviceAppointmentId

Represents the ID of the service appointment that you want to update.

#### Signature

public String serviceAppointmentId {get; set;}

```

```

#### Property Value

Type: String

### status

Represents the status of the healthcare appointment.

#### Signature

public healthcloudext.BookingStatus status {get; set;}

```

```

#### Property Value

Type: [healthcloudext.BookingStatus](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_enum_healthcloudext_BookingStatus.htm "Represents a possible status of a healthcare appointment.")

## Code Examples

```
healthcloudext.CancelAppointmentResponse, externalAppointmentId
```

```
healthcloudext.CancelAppointmentResponse, jsonResponse
```

```
healthcloudext.CancelAppointmentResponse, serviceAppointmentId
```

```
healthcloudext.CancelAppointmentResponse, status
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- CancelAppointmentResponse Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- externalAppointmentId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- jsonResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- serviceAppointmentId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- status (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentResponse.htm)
- healthcloudext.BookingStatus (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_enum_healthcloudext_BookingStatus.htm)
