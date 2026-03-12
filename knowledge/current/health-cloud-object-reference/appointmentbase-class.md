---
title: "AppointmentBase Class"
domain: health-cloud-object-reference
topic: appointmentbase-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.253Z
estimatedTokens: 370
keywords: [AppointmentBase, abstract, base, care, provider, practitioner, careProviders]
---

# AppointmentBase Class

> An abstract base class that represents the care provider or the
      practitioner information.

# AppointmentBase Class

An abstract base class that represents the care provider or the practitioner information.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[AppointmentBase Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm#apex_healthcloudext_AppointmentBase_properties)**


## AppointmentBase Properties

The following are properties for AppointmentBase.

-   **[careProviders](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm#apex_healthcloudext_AppointmentBase_careProviders)**
    Represents details about the care provider or the practitioner.

### careProviders

Represents details about the care provider or the practitioner.

#### Signature

public List<healthcloudext.AppointmentProvider> careProviders {get; set;}

```

```

#### Property Value

Type: List<[healthcloudext.AppointmentProvider](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm#apex_class_healthcloudext_AppointmentProvider "Represents additional information about the care provider and an appointment.")\>

## Code Examples

```
healthcloudext.AppointmentBase, careProviders
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- AppointmentBase Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm)
- careProviders (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentBase.htm)
- healthcloudext.AppointmentProvider (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_AppointmentProvider.htm)
