---
title: "AppointmentBookingSlot Class"
domain: field-service
topic: appointmentbookingslot-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.531Z
estimatedTokens: 615
namespace: FSL
keywords: [AppointmentBookingSlot, booking, slot, service, appointment, instance, part, results, AppointmentBookingService, GradeSlotsService, classes, grade, interval]
---

# AppointmentBookingSlot Class

> Represents a booking slot available for a given service appointment.
      An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.

**Namespace:** `FSL`

# AppointmentBookingSlot Class

Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

The debug log shows the relevant parts of the result: Grade and Interval. The BestSlotGrades parameters are private and inaccessible via code.

```

```

-   **[AppointmentBookingSlot Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_FSL_AppointmentBookingSlot_properties)**


## AppointmentBookingSlot Properties

AppointmentBookingSlot contains the following properties.

-   **[grade](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_FSL_AppointmentBookingSlot_grade)**
    The grade of the available appointment booking slot.
-   **[interval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_FSL_AppointmentBookingSlot_interval)**
    The time frame of the returned appointment booking slot.

### grade

The grade of the available appointment booking slot.

#### Signature

public Decimal grade {get; set;}

#### Property Value

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

### interval

The time frame of the returned appointment booking slot.

#### Signature

public FSL.TimeInterval interval {get; set;}

#### Property Value

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

## Code Examples

```
AppointmentBookingSlot:
[
Grade=85.1851851851851851851851851851852,
Interval=TimeInterval:
[
2018-01-26 09:00:00,2018-01-26 11:00:00
]
]
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- AppointmentBookingSlot Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm)
- grade (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm)
- interval (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm)
- FSL.TimeInterval (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm)
