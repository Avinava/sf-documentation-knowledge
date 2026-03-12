---
title: "FindSlotsRequest Class"
domain: health-cloud-object-reference
topic: findslotsrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.339Z
estimatedTokens: 746
keywords: [FindSlotsRequest, options, time, slots, providers, match, patient’s, needs, extends, AppointmentBase, inherits, slotRangeEnd, slotRangeStart, isNextAvailSlot, patientId]
---

# FindSlotsRequest Class

> Contains set of options to find available time slots for providers who
      match the patient’s needs. This class extends the AppointmentBase class and inherits its properties.

# FindSlotsRequest Class

Contains set of options to find available time slots for providers who match the patient’s needs. This class extends the AppointmentBase class and inherits its properties.

## Namespace

[healthcloudext](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm "The HealthCloudExt namespace provides an interface and classes for Health Cloud to integrate with a source electronic health records (EHR) system.")

-   **[FindSlotsRequest Properties](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_healthcloudext_FindSlotsRequest_properties)**


## FindSlotsRequest Properties

The following are properties for FindSlotsRequest.

-   **[slotRangeEnd](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_healthcloudext_FindSlotsRequest_slotRangeEnd)**
    Represents the start of date range for slots in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z.
-   **[slotRangeStart](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_healthcloudext_FindSlotsRequest_slotRangeStart)**
    Represents the end of date range for slots in ISO 8601 format, for example , 2021-02-25T18:24:31.000Z.
-   **[isNextAvailSlot](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_healthcloudext_FindSlotsRequest_isNextAvailSlot)**
    In the default Apex class, if the property is set to True, gets a provider's next 160 available slots for appointment scheduling. If set to False, gets the next 500 available slots of providers in general.
-   **[patientId](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm#apex_healthcloudext_FindSlotsRequest_patientId)**
    Represents a patient's AccountId.

### slotRangeEnd

Represents the start of date range for slots in ISO 8601 format, for example, 2021-02-26T21:24:31.000Z.

#### Signature

public String slotRangeEnd {get; set;}

```

```

#### Property Value

Type: String

### slotRangeStart

Represents the end of date range for slots in ISO 8601 format, for example , 2021-02-25T18:24:31.000Z.

#### Signature

public String slotRangeStart {get; set;}

```

```

#### Property Value

Type: String

### isNextAvailSlot

In the default Apex class, if the property is set to True, gets a provider's next 160 available slots for appointment scheduling. If set to False, gets the next 500 available slots of providers in general.

#### Signature

public Boolean isNextAvailSlot {get; set;}

```

```

#### Property Value

Type: Boolean

### patientId

Represents a patient's AccountId.

#### Signature

public Boolean patientId {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
healthcloudext.FindSlotsRequest, slotRangeEnd
```

```
healthcloudext.FindSlotsRequest, slotRangeStart
```

```
healthcloudext.FindSlotsRequest, isNextAvailSlot
```

```
healthcloudext.FindSlotsRequest, patientId
```

## Related Topics

- healthcloudext (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_namespace_healthcloudext.htm)
- FindSlotsRequest Properties (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
- slotRangeEnd (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
- slotRangeStart (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
- isNextAvailSlot (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
- patientId (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/apex_class_healthcloudext_FindSlotsRequest.htm)
