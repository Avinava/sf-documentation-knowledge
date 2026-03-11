---
title: "AppointmentBookingService Methods"
domain: field-service
topic: appointmentbookingservice-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.982Z
keywords: [AppointmentBookingService, Methods, Returns, list, FSL.AppointmentBookingSlot, records., getSlots, serviceID, policyId, operatingHoursId, exactAppointment, Signature, Parameters, Note, Return, Value, Usage, Example, calendar, sortResults]
---

# AppointmentBookingService Methods

> Returns a list of FSL.AppointmentBookingSlot records.

## AppointmentBookingService Methods

AppointmentBookingService includes the following static methods.

-   **[getSlots(serviceID, policyId, operatingHoursId, tz, exactAppointment)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_FSL_AppointmentBookingService_getSlots)**  
    Returns a list of FSL.AppointmentBookingSlot records.
-   **[getSlots(serviceID, policyId, calendar, tz, exactAppointment)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_FSL_AppointmentBookingService_getSlots_2)**  
    Returns a list of FSL.AppointmentBookingSlot records.
-   **[getSlots(serviceID, policyId, calendar, tz, sortResults, exactAppointment)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_FSL_AppointmentBookingService_getSlots_3)**  
    Returns a sorted list of FSL.AppointmentBookingSlot records.
-   **[getSlots(serviceID, policyId, calendar, tz, sortBy, exactAppointment)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_FSL_AppointmentBookingService_getSlots_4)**  
    Returns a sorted list of FSL.AppointmentBookingSlot records.
-   **[getABSlots(serviceID, policyId, calendar, tz, sortBy, exactAppointment)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_FSL_AppointmentBookingService_getSlots_5)**  
    Returns a list of FSL.AppointmentBookingSlot records that respect complex work dependencies for a chain of service appointments.

### getSlots(serviceID, policyId, operatingHoursId, tz, exactAppointment)

Returns a list of FSL.AppointmentBookingSlot records.

#### Signature

public static List<FSL.AppointmentBookingSlot> getSlots(Id serviceID, Id policyId, Id operatingHoursId, System.TimeZone tz, Boolean exactAppointment)

#### Parameters

serviceID

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the service appointment being scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the scheduling policy being used.

operatingHoursId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the operating hours record used to determine time slot intervals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

The TimeZone on the operating hours record is ignored.

tz

Type: [System.TimeZone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_timezone.htm#apex_methods_system_timezone "HTML (New Window)")

Required. The time zone in which the slots are returned. This time zone must be the time zone of the service territory in which the service appointment is performed. If any other timezone is used, the appointment booking slots are converted to the service territory time zone at run time.

exactAppointment

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

Required. Specifies whether the result uses exact appointments or an arrival window. When the getSlots() method is called, the exactAppointment value on the work type is ignored.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list)<[FSL.AppointmentBookingSlot](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_class_FSL_AppointmentBookingSlot "Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.")\>

#### Usage

This method returns a list of appointment booking time slots available for a given service appointment. Results are returned in the time zone sent in the original request.

Appointment windows depend on the operatingHoursId value provided in the call. The operatingHoursId represents various slots offered to the customer during appointment booking (for example, Mondays 9 to 11 AM, 11 AM to 1 PM, 1 to 3 PM; Tuesdays 9 to 11 AM, 12 to 4 PM; and so forth.)

This method only returns available slots and doesn’t schedule the service appointment. After the end user selects the desired slot, update the ArrivalWindowStartTime and ArrivalWindowEndTime properties on the service appointment and call the [FSL.ScheduleService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_methods) method.

To convert dateTime values to UTC before they’re updated in the database, perform a time zone conversion.

#### Example

This example calls the AppointmentBookingService class using the Customer First scheduling policy and the Gold Appointments Calendar operating hours as the desired appointment slots.

```

```

Here’s an implementation suggestion for returning time slots in a different time zone. In this example, we’re returning the time slots in the Europe/Jersey time zone. The code doesn’t take daylight saving time into account, which can cause issues when daylight saving time begins or ends.

```

```

### getSlots(serviceID, policyId, calendar, tz, exactAppointment)

Returns a list of FSL.AppointmentBookingSlot records.

#### Signature

public static List<FSL.AppointmentBookingSlot> getSlots(Id serviceID, Id policyId, OperatingHours calendar, System.TimeZone tz, Boolean exactAppointment)

#### Parameters

serviceID

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the service appointment being scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the scheduling policy being used.

calendar

Type: [OperatingHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/sforce_api_objects_operatinghours.htm "HTML (New Window)") object

Required. The calendar is used to determine time slot intervals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

The TimeZone on the operating hours record is ignored.

tz

Type: [System.TimeZone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_timezone.htm#apex_methods_system_timezone "HTML (New Window)")

Required. The time zone in which the slots are returned. This time zone must be the time zone of the service territory in which the service appointment is performed. If any other timezone is used, the appointment booking slots are converted to the service territory time zone at run time..

exactAppointment

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

Required. Specifies whether the result uses exact appointments or an arrival window. When the getSlots() method is called, the exactAppointment value on the work type is ignored.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list)<[FSL.AppointmentBookingSlot](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_class_FSL_AppointmentBookingSlot "Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.")\>

#### Usage

This method returns a list of appointment booking time slots for a given service appointment. Results are returned in the time zone sent in the original request. The appointment windows (9–11, 11–1, 1–3, and so on) depend on slots returned in a subquery of the OperatingHours object.

This method only returns available slots and does not schedule the service appointment. Update the ArrivalWindowStartTime and ArrivalWindowEndTime properties on the service appointment and call the [FSL.ScheduleService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_methods) method.

Perform a time zone conversion to convert dateTime values to UTC before they are updated in the database.

#### Example

This example shows the use of a subquery to retrieve time slots from calendar, an OperatingHours object.

```

```

### getSlots(serviceID, policyId, calendar, tz, sortResults, exactAppointment)

Returns a sorted list of FSL.AppointmentBookingSlot records.

#### Signature

public static List<FSL.AppointmentBookingSlot> getSlots(Id serviceID, Id policyId, OperatingHours calendar, System.TimeZone tz, FSL.AppointmentBookingService.SortResultsBy sortResults, Boolean exactAppointment)

#### Parameters

serviceID

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the service appointment being scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the scheduling policy being used.

calendar

Type: [OperatingHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/sforce_api_objects_operatinghours.htm "HTML (New Window)") object

Required. The calendar is used to determine time slot intervals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

The TimeZone on the operating hours record is ignored.

tz

Type: [System.TimeZone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_timezone.htm#apex_methods_system_timezone "HTML (New Window)")

Required. The time zone in which the slots are returned. This time zone must be the time zone of the service territory in which the service appointment is performed. If any other timezone is used, the appointment booking slots are converted to the service territory time zone at run time.

sortResults

Type: FSL.AppointmentBookingService.SortResultsBy enumeration

Required. Used to sort AppointmentBookingSlot results that are returned. Possible sort values are Grade, NoSort, and SlotDateTime.

exactAppointment

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

Required. Specifies whether the result uses exact appointments or an arrival window. When the getSlots() method is called, the exactAppointment value on the work type is ignored.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list)<[FSL.AppointmentBookingSlot](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_class_FSL_AppointmentBookingSlot "Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.")\>

#### Usage

This method returns a sorted list of appointment booking time slots for a given service appointment. Results are returned in the time zone sent in the original request. The appointment windows (9–11, 11–1, 1–3, and so on) depend on slots returned in a subquery of calendar, an OperatingHours object.

This method only returns available slots and doesn’t schedule the service appointment. Update the ArrivalWindowStartTime and ArrivalWindowEndTime properties on the service appointment and call the [FSL.ScheduleService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_methods) method.

Perform a time zone conversion to convert dateTime values to UTC before they are updated in the database.

#### Example

This example sorts the returned slots by grade. When using a signature that contains a calendar parameter, use a subquery for time slots in the OperatingHours object.

```

```

### getSlots(serviceID, policyId, calendar, tz, sortBy, exactAppointment)

Returns a sorted list of FSL.AppointmentBookingSlot records.

#### Signature

public static List<FSL.AppointmentBookingSlot> getSlots(Id serviceID, Id policyId, OperatingHours calendar, System.TimeZone tz, String sortBy, Boolean exactAppointment)

#### Parameters

serviceID

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the service appointment being scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Required. The ID of the scheduling policy being used.

calendar

Type: [OperatingHours](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/sforce_api_objects_operatinghours.htm "HTML (New Window)") object

Required. The calendar is used to determine time slot intervals.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

The TimeZone on the operating hours record is ignored.

tz

Type: [System.TimeZone](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_timezone.htm#apex_methods_system_timezone "HTML (New Window)")

Required. The time zone in which the slots are returned. This time zone must be the time zone of the service territory in which the service appointment is performed. If any other timezone is used, the appointment booking slots are converted to the service territory time zone at run time.

sortBy

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Required. Used to sort AppointmentBookingSlot results. Acceptable values are SORT\_BY\_GRADE, SORT\_BY\_DATE, and SORT\_BY\_NO\_SORT.

exactAppointment

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

Required. Specifies whether the result uses exact appointments or an arrival window. When the getSlots() method is called, the exactAppointment value on the work type is ignored.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list)<[FSL.AppointmentBookingSlot](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingSlot.htm#apex_class_FSL_AppointmentBookingSlot "Represents a booking slot available for a given service appointment. An instance of this class is part of the results returned by the AppointmentBookingService and GradeSlotsService classes.")\>

#### Usage

This method returns a sorted list of appointment booking time slots for a given service appointment. Results are returned in the time zone sent in the original request. The appointment windows (9–11, 11–1, 1–3, and so on) depend on slots returned in a subquery of calendar, an OperatingHours object.

This method only returns available slots and doesn’t schedule the service appointment. Update the ArrivalWindowStartTime and ArrivalWindowEndTime properties on the service appointment and call the [FSL.ScheduleService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_methods) method.

Perform a time zone conversion to convert dateTime values to UTC before they are updated in the database.

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