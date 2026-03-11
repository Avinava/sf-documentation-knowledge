---
title: "ScheduleService Methods"
domain: field-service
topic: scheduleservice-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.088Z
keywords: [ScheduleService, Methods, Returns, FSL.ScheduleResult, result, scheduling, process., schedule, policy, serviceId, Signature, Parameters, Return, Value, Usage, Example, scheduleExtended, See, getAppointmentInsights]
---

# ScheduleService Methods

> Returns FSL.ScheduleResult
      with the result of the scheduling process.

## ScheduleService Methods

ScheduleService includes the following static methods.

-   **[schedule(policy, serviceId)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_schedule)**  
    Returns FSL.ScheduleResult with the result of the scheduling process.
-   **[scheduleExtended(policy, serviceId)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_schedule_2)**  
    Returns List<FSL.ScheduleResult> with the result of the scheduling process for appointments in a complex work chain.
-   **[getAppointmentInsights](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_getAppointmentInsights)**  
    Returns an AppointmentInsightsResult class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.

### schedule(policy, serviceId)

Returns FSL.ScheduleResult with the result of the scheduling process.

#### Signature

public static FSL.ScheduleResult schedule(Id policy, Id serviceId)

#### Parameters

policy

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

serviceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service appointment being scheduled.

#### Return Value

Type: [FSL.ScheduleResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_class_FSL_ScheduleResult "Represents the result of scheduling a service appointment that is returned by the ScheduleService.schedule method.")

#### Usage

This method schedules the service appointment in the best available slot. If there are no available slots, the appointment isn’t scheduled. This method can be called with only one service appointment at a time. To schedule multiple service appointments, use an Apex batch class. Call this method in batches of one.

If you are using the schedule method with the appointment booking method, perform a time zone conversion. The results of appointment booking are returned in the time zone specified in the method signature. Convert these values back to UTC.

#### Example

```

```

### scheduleExtended(policy, serviceId)

Returns List<FSL.ScheduleResult> with the result of the scheduling process for appointments in a complex work chain.

#### Signature

public static List<FSL.ScheduleResult> scheduleExtended(Id policy, Id serviceId)

#### Parameters

policy

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy that’s used to schedule the service appointment.

serviceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of a service appointment in a complex work chain of service appointments being scheduled.

#### Return Value

Type: [List<FSL.ScheduleResult>](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_class_FSL_ScheduleResult "Represents the result of scheduling a service appointment that is returned by the ScheduleService.schedule method.")

#### Usage

Use this method to schedule two service appointments in a complex work chain. This method respects the complex work setting **Use all-or-none scheduling for related appointments**. If there are no available slots, appointments in the complex work chain aren’t scheduled.

The scheduleExtended method is valid for a chain of two appointments; if the appointment in serviceId has dependencies with more than one other appointment, scheduling results can be different than expected.

This method can be called with only one service appointment at a time, and runs asynchronously. To examine results that the asynchronous method returns, use the streaming API and subscribe to MstCompletedChannel, the channel for the Field Service managed package.

If Enhanced Scheduling and Optimization (ESO) is enabled:

-   The method runs synchronously.
-   The method always uses the ESO behavior, which is **all-or-none** for related appointments scheduling of complex work.
-   The method is valid for a chain of up to five to appointments.

If you’re using the scheduleExtended method with the appointment booking method, perform a time zone conversion. The results of appointment booking are returned in the time zone specified in the method signature. Convert these values back to UTC.

#### See Also

-   [Example: Subscribe to and Replay Events Using a Visualforce Page](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm "Example: Subscribe to and Replay Events Using a Visualforce Page  - HTML (New Window)")
    

### getAppointmentInsights

Returns an [AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm "Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.") class with details about why a service appointment can’t be scheduled on the Gantt, including blocking rules, blocked slots, and resource availability.

#### Signature

public static FSL.AppointmentInsightsResult<FSL.AppointmentInsightsResult> getAppointmentInsights(Id policyId, Id serviceAppointmentId))

#### Parameters

serviceAppointmentId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)

The ID of the appointment for which insights are being requested.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_id.htm)

The ID of the policy under which the appointment is evaluated.

#### Return Value

Type: [FSL.AppointmentInsightsResult](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm "Represents the response returned by the getAppointmentInsights method. AppointmentInsightsResult includes details about why a service appointment can’t be added to the Gantt, including resource availability, blocked slots, and applicable blocking rules.")

#### Example

The following code sample uses the getAppointmentInsights method to return an AppointmentInsightsResult class that provides details about a specific service appointment that can’t be scheduled on the Gantt.

// FSL.ScheduleService class // The getAppointmentInsights method returns a AppointmentInsightsResult result FSL.AppointmentInsightsResult myresult = new FSL.AppointmentInsightsResult(); // static FSL.AppointmentInsightsResult myresult = FSL.ScheduleService.getAppointmentInsights(Service Appointment ID,Scheduling Policy ID); System.debug(myresult);