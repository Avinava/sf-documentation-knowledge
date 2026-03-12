---
title: "BookAppointmentResponse Class"
domain: health-cloud-object-reference
topic: bookappointmentresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.320Z
estimatedTokens: 1400
keywords: [BookAppointmentResponse, appointment, booking, external, scheduling, system, appointmentId, jsonResponse, patientId, slotEnd, slotStart, sourceAppointmentId, sourcePatientId, sourceSystem, status]
---

# BookAppointmentResponse Class

> Represents the appointment booking details from the external
      scheduling system.

# BookAppointmentResponse Class

Represents the appointment booking details from the external scheduling system.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[BookAppointmentResponse Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_properties)**


## BookAppointmentResponse Properties

The following are properties for BookAppointmentResponse.

-   **[appointmentId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_appointmentId)**
    Represents the unique identifier of the appointment in Health Cloud.
-   **[jsonResponse](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_jsonResponse)**
    Represents the response from the external scheduling system encoded as JSON.
-   **[note](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_note)**
    Represents optional extra information added to the appointment.
-   **[patientId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_patientId)**
    Represents the unique identifier of the patient in Health Cloud.
-   **[slotEnd](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_slotEnd)**
    Represents the date and time that the available time slot ends.
-   **[slotStart](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_slotStart)**
    Represents the date and time that the available time slot starts.
-   **[sourceAppointmentId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_sourceAppointmentId)**
    Represents the unique identifier of the appointment in the source system.
-   **[sourcePatientId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_sourcePatientId)**
    Represents the ID of the patient in the source system.
-   **[sourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_sourceSystem)**
    Represents the name of the external scheduling system from which the record was sourced.
-   **[status](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm#apex_healthcloudext_BookAppointmentResponse_status)**
    Represents the status of the appointment.

### appointmentId

Represents the unique identifier of the appointment in Health Cloud.

#### Signature

public String appointmentId {get; set;}

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

### note

Represents optional extra information added to the appointment.

#### Signature

public String note {get; set;}

```

```

#### Property Value

Type: String

### patientId

Represents the unique identifier of the patient in Health Cloud.

#### Signature

public String patientId {get; set;}

```

```

#### Property Value

Type: String

### slotEnd

Represents the date and time that the available time slot ends.

#### Signature

public String slotEnd {get; set;}

```

```

#### Property Value

Type: String

### slotStart

Represents the date and time that the available time slot starts.

#### Signature

public String slotStart {get; set;}

```

```

#### Property Value

Type: String

### sourceAppointmentId

Represents the unique identifier of the appointment in the source system.

#### Signature

public String sourceAppointmentId {get; set;}

```

```

#### Property Value

Type: String

### sourcePatientId

Represents the ID of the patient in the source system.

#### Signature

public String sourcePatientId {get; set;}

```

```

#### Property Value

Type: String

### sourceSystem

Represents the name of the external scheduling system from which the record was sourced.

#### Signature

public String sourceSystem {get; set;}

```

```

#### Property Value

Type: String

### status

Represents the status of the appointment.

#### Signature

public healthcloudext.BookingStatus status {get; set;}

```

```

#### Property Value

Type: [healthcloudext.BookingStatus](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_enum_healthcloudext_BookingStatus.htm "Represents a possible status of a healthcare appointment.")

## Code Examples

```
healthcloudext.BookAppointmentResponse, appointmentId
```

```
healthcloudext.BookAppointmentResponse, jsonResponse
```

```
healthcloudext.BookAppointmentResponse, note
```

```
healthcloudext.BookAppointmentResponse, patientId
```

```
healthcloudext.BookAppointmentResponse, slotEnd
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BookAppointmentResponse Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- appointmentId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- jsonResponse (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- note (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- patientId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- slotEnd (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- slotStart (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- sourceAppointmentId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
- sourcePatientId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentResponse.htm)
