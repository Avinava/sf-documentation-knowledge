---
title: "ScheduleResult Class"
domain: field-service
topic: scheduleresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.289Z
estimatedTokens: 1330
namespace: FSL
keywords: [ScheduleResult, Represents, result, scheduling, service, appointment, returned, ScheduleService.schedule, method., Example, breakObject, grade, longOperationId, Usage, partialResults, serviceResource, serviceAppointment]
---

# ScheduleResult Class

> Represents the result of scheduling a service appointment that is
			returned by the ScheduleService.schedule
			method.

**Namespace:** `FSL`

# ScheduleResult Class

Represents the result of scheduling a service appointment that is returned by the ScheduleService.schedule method.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

This example shows the contents of a returned ScheduledResult object.

```

```

-   **[ScheduleResult Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_properties)**


## ScheduleResult Properties

ScheduleResult contains the following properties.

-   **[breakObject](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_breakObject)**
    Not currently in use.
-   **[grade](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_grade)**
    The grade of the slot in which the service appointment was scheduled.
-   **[longOperationId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_longOperationId)**
    This field only applies to scheduling service appointments that don’t use Enhanced Scheduling and Optimization (ESO). Populated when scheduling a group of two dependent service appointments, also known as complex work. An asynchronous call is made to schedule both service appointments in the dependency group. This property contains the FSL\_\_FSL\_Operation\_\_c ID.
-   **[partialResults](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_partialResults)**
    Relevant only when Limit Apex Operations is enabled in the Field Service Admin app. If the processing time of the ScheduleService is about to exceed the maximum CPU limits, partialResultsreturns the results that were already calculated and halts the process. This list contains the details of the partial, processed results.
-   **[serviceResource](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_serviceResource)**
    The service resource assigned to the service appointment.
-   **[serviceAppointment](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm#apex_FSL_ScheduleResult_serviceAppointment)**
    The scheduled service appointment.

### breakObject

Not currently in use.

#### Signature

public ResourceAbsence breakObject {get; set;}

#### Property Value

Type: ResourceAbsence

### grade

The grade of the slot in which the service appointment was scheduled.

#### Signature

public Decimal grade {get; set;}

#### Property Value

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

### longOperationId

This field only applies to scheduling service appointments that don’t use Enhanced Scheduling and Optimization (ESO). Populated when scheduling a group of two dependent service appointments, also known as complex work. An asynchronous call is made to schedule both service appointments in the dependency group. This property contains the FSL\_\_FSL\_Operation\_\_c ID.

#### Signature

public Id longOperationId {get; set;}

#### Property Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

#### Usage

To learn more about scheduling dependencies and complex work, see [Create Scheduling Dependencies Between Service Appointments](https://help.salesforce.com/articleView?id=pfs_complex_work.htm&language=en_US "HTML (New Window)").

To learn about Enhanced Scheduling and Optimization, see [Get Ready for Scheduling and Optimization](https://help.salesforce.com/s/articleView?id=service.pfs_customization.htm&type=5&language=en_US "HTML (New Window)").

### partialResults

Relevant only when Limit Apex Operations is enabled in the Field Service Admin app. If the processing time of the ScheduleService is about to exceed the maximum CPU limits, partialResultsreturns the results that were already calculated and halts the process. This list contains the details of the partial, processed results.

#### Signature

public List<FSL.PartialResultsInfo> partialResults {get; set;}

#### Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list "HTML (New Window)")<FSL.PartialResultsInfo>

### serviceResource

The service resource assigned to the service appointment.

#### Signature

public ServiceResource serviceResource {get; set;}

#### Property Value

Type: ServiceResource

### serviceAppointment

The scheduled service appointment.

#### Signature

public ServiceAppointment serviceAppointment {get; set;}

#### Property Value

Type: ServiceAppointment

## Code Examples

```
[
	BreakObject=null, 
	Grade=100.000000000000000000000000000000, 
	LongOperationId=null, 
	PartialResults=(), 
	Resource=ServiceResource:
	{Id=0Hn4E0000004bucSAA, Name=Crew A, IsActive=true, IsCapacityBased=false, ResourceType=C, ​ServiceCrewId=1cr4E0000004CM7QAM, Contractor_Priority__c=2}, 
	Service=ServiceAppointment:
	{Id=08p4E000000LeMiQAK, Status=None, FSL__Same_Day__c=false, FSL__Same_Resource__c=false, ​AppointmentNumber=SA-6214, DueDate=2018-09-20 17:07:00, EarliestStartTime=2018-09-17 17:07:00, Duration=1.5, DurationType=Hours, Latitude=37.793872000000000, ​Longitude=-122.394865000000000, FSL__InternalSLRGeolocation__Latitude__s=37.793834, FSL__InternalSLRGeolocation__Longitude__s=-122.395123, ServiceTerritoryId=0Hh4E0000000OtPSAU, ​FSL__Schedule_over_lower_priority_appointment__c=false, FSL__Use_Async_Logic__c=false, FSL__IsMultiDay__c=false, ParentRecordId=0WO4E000000Vl6rWAC, FSL__Emergency__c=false, ​SchedStartTime=2018-09-17 17:13:00, SchedEndTime=2018-09-17 18:43:00, FSL__Schedule_Mode__c=Automatic, FSL__Scheduling_Policy_Used__c=a0N4E0000031HPVUA2}
	]
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- ScheduleResult Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- breakObject (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- grade (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- longOperationId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- partialResults (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- serviceResource (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
- serviceAppointment (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ScheduleResult.htm)
