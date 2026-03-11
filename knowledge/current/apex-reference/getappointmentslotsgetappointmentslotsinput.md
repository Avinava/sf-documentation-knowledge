---
title: "getAppointmentSlots(getAppointmentSlotsInput)"
domain: apex-reference
topic: getappointmentslotsgetappointmentslotsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.565Z
keywords: [getAppointmentSlots, getAppointmentSlotsInput, Returns, list, available, appointment, time, slots, resource, based, given, work, type, group, service, territories., Signature, Parameters, Return, Value]
---

# getAppointmentSlots(getAppointmentSlotsInput)

> Returns a list of available appointment time slots for a resource
      based on given work type group or work type and service territories.

### getAppointmentSlots(getAppointmentSlotsInput)

Returns a list of available appointment time slots for a resource based on given work type group or work type and service territories.

The appointment time slots are determined based on your Salesforce Scheduler data model configurations. Here are some prerequisites that you can consider while setting up data.

-   Set up Salesforce Scheduler before making your requests. The setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Manage Business Information in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&language=en_US) for more information.
-   Configure a work type mapped for each territory in the request body via Service Territory Work Type. Map the same work type to the work type group, via work type group member.

The following factors affect how time slots are calculated and returned.

-   Timezones that differ across operating hours are handled and results are always returned in UTC.
-   The resource must be marked as a required resource on the assigned resource object.
-   The resource is considered unavailable If the status categories of the resource assigned to service appointments are other than Canceled, Cannot Complete, and Completed.
-   Resource Absences of all types are considered unavailable from start to end.
-   The following fields of Work Type records, if configured, are used to fine-tune time slot requirements. For more information, see [Create Work Types in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_create_work_types.htm&language=en_US).
    
    | Parameter | Description |
    | --- | --- |
    | Timeframe Start | Time slots sooner than current time + Timeframe Start aren’t returned. |
    | Timeframe End | Time slots later than current time + Timeframe End aren’t returned. |
    | Block Time Before Appointment | The time period before the appointment is considered as unavailable. |
    | Block Time After Appointment | The time period after the appointment is considered as unavailable. |
    | Operating Hours | The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots. For more information, see Set Up Operating Hours in Salesforce Scheduler. |
    
-   Only the time slots within the period of 31 days from the start date are returned.
-   Salesforce Scheduler uses multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots, including the earliest and latest appointment slots. See [How Does Salesforce Scheduler Determine Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)").
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)
    
    #### Note
    
    If asset scheduling is enabled, you can provide an asset-based service resource in requiredResourceIds to retrieve available timeslots for the asset resource.
    

#### Signature

public static String getAppointmentSlots(lxscheduler.GetAppointmentSlotsInput getAppointmentSlotsInput)

#### Parameters

getAppointmentSlotsInput

Type: [lxscheduler.GetAppointmentSlotsInput](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInput.htm#apex_class_lxscheduler_GetAppointmentSlotsInput "Contains information about the available appointment time slots for a resource based on given work type group and territories.")

This method takes input as an instance of the lxscheduler.GetAppointmentSlotsInput class. Build the instance of the input class using the lxscheduler.GetAppointmentSlotsInputBuilder class.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")