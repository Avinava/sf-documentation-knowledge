---
title: "BookAppointmentRequest Class"
domain: health-cloud-object-reference
topic: bookappointmentrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.311Z
estimatedTokens: 1461
keywords: [BookAppointmentRequest, options, book, healthcare, appointment, Usage, appointmentType, serviceType, slot, sourceFacilityId, sourcePatientId, sourcePractitionerId, sourceSystem]
---

# BookAppointmentRequest Class

> Contains set of options to book a healthcare
    appointment.

# BookAppointmentRequest Class

Contains set of options to book a healthcare appointment.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

## Usage

To book an appointment, we need to know the availability of a given practitioner at a given facility. To get this information, Health Cloud queries the specific source EHR system, using the IDs of the practitioner and the facility as stored in that source system.

Practitioner and Facility IDs:

-   The source system ID comes from the Healthcare Practitioner Facility record for the practitioner+facility combination.
-   The source system facility ID comes from an Identifier record that looks up to the Contact record for the practitioner, with the same source system as the Healthcare Practitioner Facility record.
-   The source system facility ID comes from an Identifier record that looks up to the Account record for the facility, with the same source system as the Healthcare Practitioner Facility record.

The source system requires Appointment Type and Service Type codes that are derived from the “visit type” (Work Type record) selected by the call center agent. These codes are configured via Work Type Code Set Bundle records, one per Work Type, with lookups to Code Set Bundle and Code Sets for the Service Type and Appointment Type codes in each Source System the org integrates with.

-   **[BookAppointmentRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_properties)**


## BookAppointmentRequest Properties

The following are properties for BookAppointmentRequest.

-   **[appointmentType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_appointmentType)**
    Represents the type of appointment, such as annual physical or intake examination.
-   **[note](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_note)**
    Represents optional extra information about the appointment.
-   **[serviceType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_serviceType)**
    Specifies the type of service to be performed at the appointment, such as dental cleaning or surgery.
-   **[slot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_slot)**
    Represents the time period slot that’s assigned to the appointment.
-   **[sourceFacilityId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_sourceFacilityId)**
    Represents the ID in the source system of the facility where the encounter will occur.
-   **[sourcePatientId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_sourcePatientId)**
    Represents the ID in the source system of the patient.
-   **[sourcePractitionerId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_sourcePractitionerId)**
    Represents the ID in the source system of the practitioner with whom the encounter will occur.
-   **[sourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm#apex_healthcloudext_BookAppointmentRequest_sourceSystem)**
    Represents the name of the source system the patient record came from.

### appointmentType

Represents the type of appointment, such as annual physical or intake examination.

#### Signature

public String appointmentType {get; set;}

```

```

#### Property Value

Type: String

### note

Represents optional extra information about the appointment.

#### Signature

public String note {get; set;}

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

Represents the ID in the source system of the facility where the encounter will occur.

#### Signature

public String sourceFacilityId {get; set;}

```

```

#### Property Value

Type: String

### sourcePatientId

Represents the ID in the source system of the patient.

#### Signature

public String sourcePatientId {get; set;}

```

```

#### Property Value

Type: String

### sourcePractitionerId

Represents the ID in the source system of the practitioner with whom the encounter will occur.

#### Signature

public String sourcePractitionerId {get; set;}

```

```

#### Property Value

Type: String

### sourceSystem

Represents the name of the source system the patient record came from.

#### Signature

public String sourceSystem {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.BookAppointmentRequest, appointmentType
```

```
healthcloudext.BookAppointmentRequest, note
```

```
healthcloudext.BookAppointmentRequest, serviceType
```

```
healthcloudext.BookAppointmentRequest, slot
```

```
healthcloudext.BookAppointmentRequest, sourceFacilityId
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- BookAppointmentRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- appointmentType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- note (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- serviceType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- slot (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- sourceFacilityId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- sourcePatientId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- sourcePractitionerId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
- sourceSystem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_BookAppointmentRequest.htm)
