---
title: "Slot Class"
domain: health-cloud-object-reference
topic: slot-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.359Z
estimatedTokens: 763
keywords: [Slot, time, period, appointment, slotEnd, slotStart, slotStatus, sourceSlotId, sourceSystem]
---

# Slot Class

> Represents the time period slot details for the
    appointment.

# Slot Class

Represents the time period slot details for the appointment.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[Slot Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_properties)**


## Slot Properties

The following are properties for Slot.

-   **[slotEnd](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_slotEnd)**
    Represents the date and time that the appointment time slot ends in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z..
-   **[slotStart](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_slotStart)**
    Represents the date and time that the appointment time slot starts in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z..
-   **[slotStatus](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_slotStatus)**
    Represents the status of the time slot.
-   **[sourceSlotId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_sourceSlotId)**
    Represents the ID of the time slot in the external scheduling system.
-   **[sourceSystem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm#apex_healthcloudext_Slot_sourceSystem)**
    Represents the name of the external scheduling system from which the record was sourced.

### slotEnd

Represents the date and time that the appointment time slot ends in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z..

#### Signature

public String slotEnd {get; set;}

```

```

#### Property Value

Type: String

### slotStart

Represents the date and time that the appointment time slot starts in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z..

#### Signature

public String slotStart {get; set;}

```

```

#### Property Value

Type: String

### slotStatus

Represents the status of the time slot.

#### Signature

public String slotStatus {get; set;}

```

```

#### Property Value

Type: String

The expected value for the string is SlotAvailable, SlotNotAvailable, or ServiceNotAvailable.

### sourceSlotId

Represents the ID of the time slot in the external scheduling system.

#### Signature

public String sourceSlotId {get; set;}

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

## Code Examples

```
healthcloudext.Slot, slotEnd
```

```
healthcloudext.Slot, slotStart
```

```
healthcloudext.Slot, slotStatus
```

```
healthcloudext.Slot, sourceSlotId
```

```
healthcloudext.Slot, sourceSystem
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- Slot Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
- slotEnd (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
- slotStart (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
- slotStatus (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
- sourceSlotId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
- sourceSystem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_Slot.htm)
