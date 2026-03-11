---
title: "ScheduleResult Properties"
domain: field-service
topic: scheduleresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.079Z
keywords: [ScheduleResult, Properties, currently, use., breakObject, Signature, Property, Value, grade, longOperationId, Usage, partialResults, serviceResource, serviceAppointment]
---

# ScheduleResult Properties

> Not currently in use.

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