---
title: "RecurringAppointmentsManager Methods"
domain: field-service
topic: recurringappointmentsmanager-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.055Z
keywords: [RecurringAppointmentsManager, Methods, Returns, list, RecurringSequence, appointments., getRecurringAppointmentsSlots, Signature, Parameters, Important, Return, Value, Usage, Example, Execution, Script, Method]
---

# RecurringAppointmentsManager Methods

> Returns a list of RecurringSequence appointments.

## RecurringAppointmentsManager Methods

RecurringAppointmentsManager includes the following static method.

-   **[getRecurringAppointmentsSlots](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringAppointmentsManager.htm#apex_FSL_RecurringAppointmentsManager_getRecurringAppointmentsSlots)**  
    Returns a list of RecurringSequence appointments.

### getRecurringAppointmentsSlots

Returns a list of [RecurringSequence](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringSequence.htm "Represents the result of using the getRecurringAppointmentsSlots method to return a pattern of appointments that recur daily, weekly, or monthly.") appointments.

#### Signature

static List getRecurringAppointmentsSlots

#### Parameters

ServiceID

Type: Id

Required. The ID of a service appointment that represents a recurring visit. This record defines the scheduling requirements and constraints for each appointment in the recurring visits sequence. All visits use the location, required resources, skill requirements, and other constraints that are associated with this service appointment.

PolicyID

Type: Id

Required. The policy to be used to get the relevant work rules and objectives for the operation.

CalendarOperatingHoursId

Type: Id

Required. The ID of the operating hours used to determine the structure of the slots returned by the API.

RecurringPattern

Type: RecurringPattern Class

Required. This class instance is sent as a parameter that contains all the required details from the recurring pattern.

SchedulingOptionsCount

Type: Integer

Required. Indicates how many sets of scheduling options the API returns. You can have between one and three sets of options for the recurring appointment. If you select three, but fewer than three sets of recurrence scheduling options are available, you receive however many options are found given your constraints.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

As of API version 60.0, SchedulingOptionsCount is hard coded to 3.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.244.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list) RecurringSequence

#### Usage

This method returns a list of recurring appointments to repeat weekly.

This method only returns a list of potential scheduling options in the [RecurringSequence](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringSequence.htm "Represents the result of using the getRecurringAppointmentsSlots method to return a pattern of appointments that recur daily, weekly, or monthly.") class and doesn’t schedule the recurring appointments. Similar to the getSlots method for [AppointmentBookingService](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentBookingService.htm#apex_class_FSL_AppointmentBookingService "Represents the appointment booking scheduling process in field service. Appointment booking returns the available slots for a service appointment, while considering scheduling policies, work rules, and service objectives. For example, we can schedule an appointment tomorrow between 9 and 11 AM, or next Monday between 4 and 6 PM.") , you use the response from getRecurringAppointmentsSlots to create a list of records to insert, and then schedule the appointments.

The time constraint fields on ServiceAppointment that you pass into the API are used for all appointments within the recurrence and determine the availability of scheduling options. Ensure that there’s a significant difference between EarliestStartTime and DueDate fields. For example, if you must schedule six appointments, and your customer only has visiting hours on Monday, you need six weeks to schedule all visits. Therefore, make sure you set EarliestStartTime and DueDate to at least six weeks apart. Don’t set other time constraint fields on the appointment that are more restrictive, such as **ArrivalWindowStartTime** and ArrivalWindowEndTime, which can further limit scheduling options.

If you need service to occur within a given time frame, for example 8 AM to 10 AM on a Monday, set the DaysOfWeek to Monday. Then, set the time frame using the visiting hours record that has operating hours time slots during your required time frame.

See the [ServiceAppointment](atlas.en-us.field_service_dev.meta/field_service_dev/sforce_api_objects_serviceappointment.htm "Represents an appointment to complete work for a customer in Field Service, Lightning Scheduler,Intelligent Appointment Management, and Virtual Care.This object is available in API version 38.0 and later.") object reference for more information on time constraint fields.

#### Example 1: Using an Execution Script

The following code sample creates an instance of the [RecurringPattern](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_RecurringPattern.htm#apex_class_FSL_RecurringPattern "Represents a global sharing class that is a required parameter for RecurringAppointmentsManager to return a pattern of appointments that recur weekly.") class. Then, it sets the properties for that recurring pattern. In this case, the code creates a recurring pattern that excludes weekends, and considers that the customer isn’t available on Tuesdays, needs two visits per week, and requires six total visits. It requests that the API return three scheduling options.

```

```

#### Example 2: Using a Method

This code sample uses a method to create the same recurring pattern.

```

```