---
title: "SchedulingOption Class"
domain: field-service
topic: schedulingoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.303Z
estimatedTokens: 535
namespace: FSL
keywords: [SchedulingOption, Provides, details, individual, slot, scheduling., Represents, run-time, used, within, context, results, returned, AdvancedGapMatrix, class., grade, interval]
---

# SchedulingOption Class

> Provides the details of an individual slot available for scheduling.
      Represents a run-time object used within the context of the results returned in the AdvancedGapMatrix class.

**Namespace:** `FSL`

# SchedulingOption Class

Provides the details of an individual slot available for scheduling. Represents a run-time object used within the context of the results returned in the AdvancedGapMatrix class.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

-   **[SchedulingOption Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_FSL_SchedulingOption_properties)**


## SchedulingOption Properties

SchedulingOption contains the following properties.

-   **[grade](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_FSL_SchedulingOption_grade)**
    The grade of the available slot.
-   **[interval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_FSL_SchedulingOption_interval)**
    The time frame of the returned slot.

### grade

The grade of the available slot.

#### Signature

public Decimal grade {get; set;}

#### Property Value

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

### interval

The time frame of the returned slot.

#### Signature

public FSL.TimeInterval interval {get; set;}

#### Property Value

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- SchedulingOption Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm)
- grade (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm)
- interval (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm)
- FSL.TimeInterval (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
