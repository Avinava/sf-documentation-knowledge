---
title: "AppointmentBookingService Class"
domain: field-service
topic: appointmentbookingservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.982Z
keywords: [AppointmentBookingService, Class, Returns, list, FSL.AppointmentBookingSlot, records, respect, complex, work, dependencies, chain, service, appointments., getABSlots, serviceID, policyId, calendar, sortBy, exactAppointment, Signature]
---

# AppointmentBookingService Class

> Returns a list of FSL.AppointmentBookingSlot records that respect complex work dependencies for a
      chain of service appointments.

### getABSlots(serviceID, policyId, calendar, tz, sortBy, exactAppointment)

Returns a list of FSL.AppointmentBookingSlot records that respect complex work dependencies for a chain of service appointments.

#### Signature

public static FSL.ABSlotsResponse getABSlots(Id serviceID, Id policyId, OperatingHours calendar, System.TimeZone tz, String sortBy, Boolean exactAppointment)

#### Parameters

serviceID

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the service appointment being scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the scheduling policy being used.

calendar

Type: [OperatingHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/sforce_api_objects_operatinghours.htm "HTML (New Window)") object and related [TimeSlot](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_timeslot.htm) object

Required. The calendar is used to determine time slot intervals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

The TimeZone on the operating hours record is ignored.

tz

Type: [System.TimeZone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_timezone.htm#apex_methods_system_timezone "HTML (New Window)")

Required. The time zone in which the slots are returned. This time zone must be the time zone of the service territory in which the service appointment is performed. If any other timezone is used, the appointment booking slots are converted to the service territory time zone at run time.

sortBy

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Required. Used to sort the results. Acceptable values are SORT\_BY\_GRADE, SORT\_BY\_DATE, and SORT\_BY\_NO\_SORT.

exactAppointment

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

Required. Specifies whether the result uses exact appointments or an arrival window. When this method is called, the exactAppointment value on the work type is ignored.

#### Return Value

Type: FSL.ABSlotsResponse

#### Usage

This method is used to retrieve appointment booking slots for a complex work chain of two appointments. This method respects the complex work setting **Use all-or-none scheduling for related appointments**.

The appointment booking slots returned by this method are for the service appointment that was sent to the API.

If Enhanced Scheduling and Optimization (ESO) is enabled:

-   The method runs synchronously.
-   The method always uses the ESO behavior, which is all-or-none for related appointments scheduling of complex work.
-   The method is valid for a chain of up to five to appointments.

If ESO isn’t enabled, this method is asynchronous. To examine results that the asynchronous method returns, use the streaming API and subscribe to MstCompletedChannel, the channel for the Field Service managed package.

This method only returns available slots and doesn’t schedule the service appointment. Update the ArrivalWindowStartTime and ArrivalWindowEndTime properties on the service appointment and call the [scheduleExtended](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_schedule_2 "Returns List<FSL.ScheduleResult> with the result of the scheduling process for appointments in a complex work chain.") method of the FSLScheduleService class.

Perform a time zone conversion to convert dateTime values to UTC before they’re updated in the database.

#### Example

This code example retrieves data related to a specific service appointment, including details about the appointment, scheduling policy, and operating hours. It then uses this data to fetch available appointment slots based on the user's timezone and logs the details of these slots for debugging purposes.

```

```

#### See Also

-   [Example: Subscribe to and Replay Events Using a Visualforce Page](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm "Example: Subscribe to and Replay Events Using a Visualforce Page  - HTML (New Window)")