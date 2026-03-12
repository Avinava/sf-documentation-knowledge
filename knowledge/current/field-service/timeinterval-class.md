---
title: "TimeInterval Class"
domain: field-service
topic: timeinterval-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.631Z
estimatedTokens: 671
namespace: FSL
keywords: [TimeInterval, Holds, interval’s, start, end, times, instance, capturing, scheduling, horizon, process, runs, considers, scheduled, jobs]
---

# TimeInterval Class

> Holds an interval’s start and end times. An instance of this class is
      used when capturing the start and end times of a scheduling horizon, during which a scheduling
      process runs. It considers scheduled jobs and is also used to represent the start and end
      times of an appointment slot or window.

**Namespace:** `FSL`

# TimeInterval Class

Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

-   **[TimeInterval Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_FSL_TimeInterval_properties)**

-   **[TimeInterval Methods](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_FSL_TimeInterval_methods)**


## TimeInterval Properties

TimeInterval contains the following properties.

-   **[start](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_FSL_TimeInterval_start)**
    The start time of the TimeInterval class.
-   **[finish](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_FSL_TimeInterval_finish)**
    The end time of the TimeInterval class.

### start

The start time of the TimeInterval class.

#### Signature

public Datetime start {get; set;}

#### Property Value

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

### finish

The end time of the TimeInterval class.

#### Signature

public Datetime finish {get; set;}

#### Property Value

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

## TimeInterval Methods

TimeInterval includes the following method.

-   **[toString()](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_FSL_TimeInterval_toString)**
    Returns the start and end datetimes as a string.

### toString()

Returns the start and end datetimes as a string.

#### Signature

public String toString()

#### Return Value

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- TimeInterval Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
- TimeInterval Methods (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
- start (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
- finish (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
- toString() (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
