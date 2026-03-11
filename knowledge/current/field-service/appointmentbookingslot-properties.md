---
title: "AppointmentBookingSlot Properties"
domain: field-service
topic: appointmentbookingslot-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.988Z
keywords: [AppointmentBookingSlot, Properties, grade, available, appointment, booking, slot., Signature, Property, Value, interval]
---

# AppointmentBookingSlot Properties

> The grade of the available appointment booking slot.

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