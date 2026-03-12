---
title: "CancelAppointmentRequest Class"
domain: health-cloud-object-reference
topic: cancelappointmentrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.327Z
estimatedTokens: 1316
keywords: [CancelAppointmentRequest, options, cancel, booked, appointment, appointmentId, appointmentType, cancelationReason, serviceType, slot, sourceFacilityId, sourcePatientId, sourcePractitionerId, sourceSystem]
---

# CancelAppointmentRequest Class

> Contains set of options to cancel the booked
    appointment.

# CancelAppointmentRequest Class

Contains set of options to cancel the booked appointment.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[CancelAppointmentRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_properties)**


## CancelAppointmentRequest Properties

The following are properties for CancelAppointmentRequest.

-   **[appointmentId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_appointmentId)**
    Unique ID of the appointment in Health Cloud. The appointment ID comes from the ServiceAppointment object.
-   **[appointmentType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_appointmentType)**
    Represents the type of appointment, such as annual physical or intake examination.
-   **[cancelationReason](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_cancelationReason)**
    Represents the reason for canceling the appointment.
-   **[serviceType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_serviceType)**
    Specifies the type of service to be performed at the appointment, such as dental cleaning or surgery.
-   **[slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_slot)**
    Represents the time period slot that’s assigned to the appointment.
-   **[sourceFacilityId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_sourceFacilityId)**
    Represents the healthcare facility where the encounter will occur in the external scheduling system.
-   **[sourcePatientId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_sourcePatientId)**
    Represents the ID of the patient in the external scheduling system.
-   **[sourcePractitionerId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_sourcePractitionerId)**
    ID of the practitioner who is performing care in the encounter.
-   **[sourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm#apex_healthcloudext_CancelAppointmentRequest_sourceSystem)**
    Name of the external scheduling system from which the record was sourced.

### appointmentId

Unique ID of the appointment in Health Cloud. The appointment ID comes from the ServiceAppointment object.

#### Signature

public String appointmentId {get; set;}

```

```

#### Property Value

Type: String

### appointmentType

Represents the type of appointment, such as annual physical or intake examination.

#### Signature

public String appointmentType {get; set;}

```

```

#### Property Value

Type: String

### cancelationReason

Represents the reason for canceling the appointment.

#### Signature

public String cancelationReason {get; set;}

```

```

#### Property Value

Type: String

### serviceType

Specifies the type of service to be performed at the appointment, such as dental cleaning or surgery.

#### Signature

public String serviceType {get; set;}

```

```

#### Property Value

Type: String

### slot

Represents the time period slot that’s assigned to the appointment.

#### Signature

public String slot {get; set;}

```

```

#### Property Value

Type: String

### sourceFacilityId

Represents the healthcare facility where the encounter will occur in the external scheduling system.

#### Signature

public String sourceFacilityId {get; set;}

```

```

#### Property Value

Type: String

### sourcePatientId

Represents the ID of the patient in the external scheduling system.

#### Signature

public String sourcePatientId {get; set;}

```

```

#### Property Value

Type: String

### sourcePractitionerId

ID of the practitioner who is performing care in the encounter.

#### Signature

public String sourcePractitionerId {get; set;}

```

```

#### Property Value

Type: String

### sourceSystem

Name of the external scheduling system from which the record was sourced.

#### Signature

public String sourceSystem {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.CancelAppointmentRequest, appointmentId
```

```
healthcloudext.CancelAppointmentRequest, appointmentType
```

```
healthcloudext.CancelAppointmentRequest, cancelationReason
```

```
healthcloudext.CancelAppointmentRequest, serviceType
```

```
healthcloudext.CancelAppointmentRequest, slot
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- CancelAppointmentRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- appointmentId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- appointmentType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- cancelationReason (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- serviceType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- slot (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- sourceFacilityId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- sourcePatientId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
- sourcePractitionerId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_CancelAppointmentRequest.htm)
