---
title: "ScheduleService Class"
domain: field-service
topic: scheduleservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.299Z
estimatedTokens: 2401
namespace: FSL
keywords: [ScheduleService, Represents, scheduling, given, service, appointment, best, slot, based, applied, policy., Usage, Note, schedule, policy, serviceId, Example, scheduleExtended, getAppointmentInsights]
---

# ScheduleService Class

> Represents the scheduling of a given service appointment in the best
      available slot based on the applied scheduling policy.

**Namespace:** `FSL`

# ScheduleService Class

Represents the scheduling of a given service appointment in the best available slot based on the applied scheduling policy.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

This class calls the scheduling engine and schedules the given service appointment in the highest-scoring available slot.

When using Enhanced Scheduling and Optimization, calling this API triggers a callout to the Enhanced Scheduling and Optimization service to retrieve results. When not using Enhanced Scheduling and Optimization, you can make a callout to obtain required travel times when:

-   SLR or point-to-point predictive travel is the selected routing, and
-   Results aren’t stored in the local cache

We recommend that you avoid performing any DML in the same Apex transaction before calling this API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

When scheduling a service appointment, the user scheduling the appointment must have one of four managed package permission sets: Field Service Admin, Field Service Dispatcher, Field Service Agent, Self-Service. If you’re using platform events to schedule appointments, you must explicitly configure the user so that the user has the correct permissions. Without the proper configuration, the platform event runs as the Automated Process system user and doesn’t have the correct permissions to schedule an appointment. To learn more, see [Configure the User and Batch Size for Your Platform Event Trigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_trigger_config.htm).

-   **[ScheduleService Methods](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm#apex_FSL_ScheduleService_methods)**


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

## Code Examples

```apex
// FSL.ScheduleService class
// The Schedule method returns a ScheduleResult result
FSL.ScheduleResult myResult = new FSL.ScheduleResult();

// static FSL.ScheduleResult Schedule(Scheduling Policy ID, Service Appointment ID)
myResult = FSL.ScheduleService.schedule(Scheduling Policy ID,Service Appointment ID);

System.debug(myResult);
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- ScheduleService Methods (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm)
- schedule(policy, serviceId) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm)
- scheduleExtended(policy, serviceId) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm)
- getAppointmentInsights (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleService.htm)
- FSL.ScheduleResult (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- List<FSL.ScheduleResult> (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- AppointmentInsightsResult (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm)
- FSL.AppointmentInsightsResult (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AppointmentInsightsResult.htm)
