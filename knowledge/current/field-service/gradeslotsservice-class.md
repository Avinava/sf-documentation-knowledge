---
title: "GradeSlotsService Class"
domain: field-service
topic: gradeslotsservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.541Z
estimatedTokens: 1253
namespace: FSL
keywords: [GradeSlotsService, results, shown, Candidates, quick, action, evaluate, possible, slots, service, appointment, scheduled, Usage, schedulingPolicyId, serviceAppointmentId]
---

# GradeSlotsService Class

> Represents the results shown in the Candidates quick action. Use
            the GradeSlotsService class to evaluate all
            possible slots where a given service appointment can be scheduled.

**Namespace:** `FSL`

# GradeSlotsService Class

Represents the results shown in the Candidates quick action. Use the GradeSlotsService class to evaluate all possible slots where a given service appointment can be scheduled.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

When scheduling a service appointment, the user scheduling the appointment must have one of four managed package permission sets: Field Service Admin, Field Service Dispatcher, Field Service Agent, Self-Service. If you’re using platform events to schedule appointments, you must explicitly configure the user so that the user has the correct permissions. Without the proper configuration, the platform event runs as the Automated Process system user and doesn’t have the correct permissions to schedule an appointment. To learn more, see [Configure the User and Batch Size for Your Platform Event Trigger](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_trigger_config.htm).

-   **[GradeSlotsService Constructors](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_FSL_GradeSlotsService_constructors)**

-   **[GradeSlotsService Methods](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_FSL_GradeSlotsService_methods)**


## GradeSlotsService Constructors

The following are constructors for GradeSlotsService.

-   **[GradeSlotsService(schedulingPolicyId, serviceAppointmentId)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_FSL_GradeSlotsService_ctor)**
    Creates a new instance of the GradeSlotsService class using the specified scheduling policy ID and service appointment ID.

### GradeSlotsService(schedulingPolicyId, serviceAppointmentId)

Creates a new instance of the GradeSlotsService class using the specified scheduling policy ID and service appointment ID.

#### Signature

public GradeSlotsService(Id schedulingPolicyId, Id serviceAppointmentId)

#### Parameters

schedulingPolicyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

serviceAppointmentId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service appointment being scheduled.

## GradeSlotsService Methods

GradeSlotsService includes the following static method.

-   **[getGradedMatrix(i\_ResultsInUserTimeZone)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_FSL_GradeSlotsService_getGradedMatrix)**
    Returns a matrix of resource IDs and graded time slots. The information is similar to that shown in the Candidates quick action.

### getGradedMatrix(i\_ResultsInUserTimeZone)

Returns a matrix of resource IDs and graded time slots. The information is similar to that shown in the Candidates quick action.

#### Signature

public FSL.AdvancedGapMatrix getGradedMatrix(Boolean i\_ResultsInUserTimeZone)

#### Parameters

i\_ResultsInUserTimeZone

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all DateTimes are returned in the user’s time zone. If false, all DateTimes are returned in UTC.

#### Return Value

Type: [FSL.AdvancedGapMatrix](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_class_FSL_AdvancedGapMatrix "Represents a matrix of service resource IDs and graded time slots. An instance of this class is used only within the context of the results returned by the GradeSlotsService class.")

#### Usage

If Enhanced Scheduling and Optimization (ESO) is enabled, this method runs synchronously. If ESO isn’t enabled, this method can be called with only one service appointment at a time, and runs asynchronously. To examine results that the asynchronous method returns, use the streaming API and subscribe to MstCompletedChannel, the channel for the Field Service managed package.

#### Example

This example illustrates how to parse the results in the FSL.AdvancedGapMatrix to extract the service resource ID, start and end times, and grade of each slot.

```

```

## Code Examples

```apex
// FSL.GradeSlotsService class
// The getGradedMatrix method returns a matrix of resource id's AND graded time slots

Id serviceAppointmentId = '08p1N000000qN4sQAE';
Id schedulingPolicyId=[SELECT Id FROM FSL__Scheduling_Policy__c WHERE Name='Customer First' LIMIT 1].Id;

// GENERATE the graded time slots for the service appointment
FSL.GradeSlotsService mySlotService = new FSL.GradeSlotsService(schedulingPolicyId,serviceAppointmentId);

// STORE the matrix of service resource id's and graded time slots
FSL.AdvancedGapMatrix myResultMatrix = mySlotService.getGradedMatrix(true);

Map<Id,FSL.ResourceScheduleData> mySRGradedTimeSlotMap = myResultMatrix.ResourceIDToScheduleData;
for (Id thisresourceid : mySRGradedTimeSlotMap.keySet()){
    for (FSL.SchedulingOption thisso : mySRGradedTimeSlotMap.get(thisresourceid).SchedulingOptions ) {
        system.debug('***** Resource Id' + thisresourceid);
        system.debug('***** Start - ' + thisso.Interval.Start);
        system.debug('***** Finish - ' + thisso.Interval.Finish);
        system.debug('****** Grade - ' + thisso.Grade);
    }
}
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- GradeSlotsService Constructors (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- GradeSlotsService Methods (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- GradeSlotsService(schedulingPolicyId, serviceAppointmentId) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- getGradedMatrix(i_ResultsInUserTimeZone) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- FSL.AdvancedGapMatrix (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
