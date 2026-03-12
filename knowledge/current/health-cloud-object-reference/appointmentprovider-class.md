---
title: "AppointmentProvider Class"
domain: health-cloud-object-reference
topic: appointmentprovider-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.268Z
estimatedTokens: 1147
keywords: [AppointmentProvider, additional, care, provider, appointment, appointmentTypeCode, careProviderId, npi, practitionerFacilityId, serviceTypeCode, sourceFacilityId, sourcePractitionerId, sourceSystem]
---

# AppointmentProvider Class

> Represents additional information about the care provider and an
      appointment.

# AppointmentProvider Class

Represents additional information about the care provider and an appointment.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[AppointmentProvider Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_properties)**


## AppointmentProvider Properties

The following are properties for AppointmentProvider.

-   **[appointmentTypeCode](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_appointmentTypeCode)**
    Represents the code for the appointment type.
-   **[careProviderId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_careProviderId)**
    Represents the ID of the care provider.
-   **[npi](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_npi)**
    Represents the unique National Provider Identifier that is assigned to each facility and licensed practitioner.
-   **[practitionerFacilityId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_practitionerFacilityId)**
    Represents the facility ID of the practitioner.
-   **[serviceTypeCode](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_serviceTypeCode)**
    Represents the code of the service type to be performed at the appointment.
-   **[sourceFacilityId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_sourceFacilityId)**
    Represents the ID in the source system of the facility where the encounter will occur.
-   **[sourcePractitionerId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_sourcePractitionerId)**
    Represents the ID in the source system of the practitioner with whom the encounter will occur.
-   **[sourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_healthcloudext_AppointmentProvider_sourceSystem)**
    Represents the name of the source system the provider record came from.

### appointmentTypeCode

Represents the code for the appointment type.

#### Signature

public String appointmentTypeCode {get; set;}

```

```

#### Property Value

Type: String

### careProviderId

Represents the ID of the care provider.

#### Signature

public String careProviderId {get; set;}

```

```

#### Property Value

Type: String

### npi

Represents the unique National Provider Identifier that is assigned to each facility and licensed practitioner.

#### Signature

public String npi {get; set;}

```

```

#### Property Value

Type: String

### practitionerFacilityId

Represents the facility ID of the practitioner.

#### Signature

public String practitionerFacilityId {get; set;}

```

```

#### Property Value

Type: String

### serviceTypeCode

Represents the code of the service type to be performed at the appointment.

#### Signature

public String serviceTypeCode {get; set;}

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

### sourcePractitionerId

Represents the ID in the source system of the practitioner with whom the encounter will occur.

#### Signature

public String sourcePractitionerId {get; set;}

```

```

#### Property Value

Type: String

### sourceSystem

Represents the name of the source system the provider record came from.

#### Signature

public String sourceSystem {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.AppointmentProvider, appointmentTypeCode
```

```
healthcloudext.AppointmentProvider, careProviderId
```

```
healthcloudext.AppointmentProvider, npi
```

```
healthcloudext.AppointmentProvider, practitionerFacilityId
```

```
healthcloudext.AppointmentProvider, serviceTypeCode
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- AppointmentProvider Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- appointmentTypeCode (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- careProviderId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- npi (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- practitionerFacilityId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- serviceTypeCode (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- sourceFacilityId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- sourcePractitionerId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
- sourceSystem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
