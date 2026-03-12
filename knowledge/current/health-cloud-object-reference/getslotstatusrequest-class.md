---
title: "GetSlotStatusRequest Class"
domain: health-cloud-object-reference
topic: getslotstatusrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.344Z
estimatedTokens: 595
keywords: [GetSlotStatusRequest, options, retrieve, slot, status, slotId, slotSourceSystem, slotSourceSystemId]
---

# GetSlotStatusRequest Class

> Contains set of options to retrieve the slot status.

# GetSlotStatusRequest Class

Contains set of options to retrieve the slot status.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[GetSlotStatusRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_healthcloudext_GetSlotStatusRequest_properties)**


## GetSlotStatusRequest Properties

The following are properties for GetSlotStatusRequest.

-   **[slotId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_healthcloudext_GetSlotStatusRequest_slotId)**
    Unique identifier for the time period slot in the external scheduling system that’s assigned to the appointment.
-   **[slotSourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_healthcloudext_GetSlotStatusRequest_slotSourceSystem)**
    Name of the external scheduling system from which the time period slot record came from. This information comes from Healthcare Practitioner Facility.
-   **[slotSourceSystemId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm#apex_healthcloudext_GetSlotStatusRequest_slotSourceSystemId)**
    Represents the ID of the source system from which the request was sourced.

### slotId

Unique identifier for the time period slot in the external scheduling system that’s assigned to the appointment.

#### Signature

public String slotId {get; set;}

```

```

#### Property Value

Type: String

### slotSourceSystem

Name of the external scheduling system from which the time period slot record came from. This information comes from Healthcare Practitioner Facility.

#### Signature

public String slotSourceSystem {get; set;}

```

```

#### Property Value

Type: String

### slotSourceSystemId

Represents the ID of the source system from which the request was sourced.

#### Signature

public String slotSourceSystemId {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.GetSlotStatusRequest, slotId
```

```
healthcloudext.GetSlotStatusRequest, slotSourceSystem
```

```
healthcloudext.GetSlotStatusRequest, slotSourceSystemId
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- GetSlotStatusRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm)
- slotId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm)
- slotSourceSystem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm)
- slotSourceSystemId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_GetSlotStatusRequest.htm)
