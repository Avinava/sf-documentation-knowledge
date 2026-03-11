---
title: "AppointmentBookingSlot Class"
domain: field-service
topic: appointmentbookingslot-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:11.988Z
keywords: [AppointmentBookingSlot, Class, time, frame, returned, appointment, booking, slot., interval, Signature, Property, Value]
---

# AppointmentBookingSlot Class

> The time frame of the returned appointment booking
    slot.

### interval

The time frame of the returned appointment booking slot.

#### Signature

public FSL.TimeInterval interval {get; set;}

#### Property Value

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")