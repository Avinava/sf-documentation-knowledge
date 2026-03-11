---
title: "OAAS Methods"
domain: field-service
topic: oaas-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.033Z
keywords: [OAAS, Methods, Returns, optimization, request, global, process, triggered., scheduling, policy, includes, in-day, Boolean, that’s, set, true, triggers, optimization., optimize, Signature]
---

# OAAS Methods

> Returns the optimization request ID of the global optimization process
      that was triggered. If the scheduling policy includes an in-day optimization Boolean that’s
      set to true, the request triggers an in-day optimization.

## OAAS Methods

OAAS includes the following methods.

-   **[optimize(request)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_optimize)**  
    Returns the optimization request ID of the global optimization process that was triggered. If the scheduling policy includes an in-day optimization Boolean that’s set to true, the request triggers an in-day optimization.
-   **[reshuffle(serviceId, policyId)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_reshuffle)**  
    Returns the optimization request ID of a reshuffle operation that has begun on a given service appointment.
-   **[resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSasFields, unschedulableServicesField, maxOptRuntime)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_resourceDayOptimization)**  
    Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.
-   **[resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSasFields, unschedulableServicesField, maxOptRuntime, nowTimeOnSchedule)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_resourceDayOptimization_2)**  
    Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.
-   **[resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSas, unschedulableServices, maxOptRuntime)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_resourceDayOptimization_3)**  
    Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.
-   **[resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSas, unschedulableServices, maxOptRuntime, nowTimeOnSchedule)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAAS.htm#apex_FSL_OAAS_resourceDayOptimization_4)**  
    Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.

### optimize(request)

Returns the optimization request ID of the global optimization process that was triggered. If the scheduling policy includes an in-day optimization Boolean that’s set to true, the request triggers an in-day optimization.

#### Signature

public static Id optimize(FSL.OAASRequest request)

#### Parameters

request

Type: [FSL.OAASRequest](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_OAASRequest.htm#apex_class_FSL_OAASRequest "Represents the request sent in the OAAS.Optimize() method. This class contains all the details of a global optimization call.")

The optimization request.

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

#### Example

This example creates an instance of the OAASRequest class that holds all the details of the optimization call being initiated. Next, the example calls the optimize method and passes in the request.

```

```

### reshuffle(serviceId, policyId)

Returns the optimization request ID of a reshuffle operation that has begun on a given service appointment.

#### Signature

public static Id reshuffle(Id serviceId, Id policyId)

#### Parameters

serviceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service appointment that must be scheduled.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

#### Usage

The Reshuffle action is used when a high-priority service appointment must be scheduled within a full schedule. It runs a “mini-optimization” that attempts to reshuffle the schedule to accommodate the appointment.

To learn more about the Reshuffle action, see [Reschedule Service Appointments](https://help.salesforce.com/articleView?id=pfs_rescheduling.htm&language=en_US "HTML (New Window)").

#### Example

```

```

### resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSasFields, unschedulableServicesField, maxOptRuntime)

Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.

#### Signature

public static Id resourceDayOptimization(Id resourceId, Id policyId, FSL.TimeInterval horizon, Boolean includeAllTasks, Boolean includeOnlyResourceFutureSA, Decimal radius, String candidateSasFields, String unschedulableServicesField, Decimal maxOptRuntime)

#### Parameters

resourceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service resource whose schedule is being optimized.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

horizon

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

The time frame used to run resource schedule optimization.

includeAllTasks

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all relevant service appointments within the time frame are considered during optimization. If false, only unscheduled service appointments are considered, and all scheduled service appointments are pinned (unmovable).

includeOnlyResourceFutureSA

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, only service appointments that are already assigned to the service resource are considered during optimization. If false, service appointments assigned to other service resources are also considered.

radius

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

The suggested distance between required service appointments and adjacent appointments. Required appointments are defined by the unschedulableServicesField parameter. Resource schedule optimization tries to group service appointments so that their distance from a required appointment is less than this radius. Appointments that are further from a required appointment can still be scheduled, but are deprioritized. If null, the data is not filtered based on the radius.

candidateSasFields

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Boolean service appointment field that indicates which appointments are candidates to be scheduled.

unschedulableServicesField

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Boolean service appointment field that indicates whether a service appointment is required (pinned), meaning it must remain on the schedule during resource schedule optimization.

maxOptRuntime

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

Total time in seconds during which the optimization results must be returned. This parameter only enforces the optimization time, and does not include optimization queue or Apex job queue times. If null, the default value of 30 seconds is used.

#### Usage

To learn more about resource schedule optimization, see [Optimize a Single Resource’s Schedule](https://help.salesforce.com/articleView?id=pfs_resource_optimization_user.htm&language=en_US "HTML (New Window)").

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

### resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSasFields, unschedulableServicesField, maxOptRuntime, nowTimeOnSchedule)

Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.

#### Signature

public static Id resourceDayOptimization(Id resourceId, Id policyId, FSL.TimeInterval horizon, Boolean includeAllTasks, Boolean includeOnlyResourceFutureSA, Decimal radius, String candidateSasFields, String unschedulableServicesField, Decimal maxOptRuntime, Datetime nowTimeOnSchedule)

#### Parameters

resourceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service resource whose schedule is being optimized.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

horizon

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

The time frame used to run resource schedule optimization.

includeAllTasks

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all relevant service appointments within the time frame are considered during optimization. If false, only unscheduled service appointments are considered, and all scheduled service appointments are pinned (unmovable).

includeOnlyResourceFutureSA

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, only service appointments that are already assigned to the service resource are considered during optimization. If false, service appointments assigned to other service resources are also considered.

radius

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

The suggested distance between required service appointments and adjacent appointments. Required appointments are defined by the unschedulableServicesField and nowTimeOnSchedule parameters. Resource schedule optimization tries to group service appointments so that their distance from a required appointment is less than this radius. Appointments that are further from a required appointment can still be scheduled, but are deprioritized. If null, the data is not filtered based on the radius.

candidateSasFields

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Boolean service appointment field that indicates which appointments are candidates to be scheduled.

unschedulableServicesField

Type: [String](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_string.htm#apex_methods_system_string "HTML (New Window)")

Boolean service appointment field that indicates whether a service appointment is required (pinned), meaning it must it must remain on the schedule during resource schedule optimization.

maxOptRuntime

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

Total time in seconds during which the optimization results must be returned. This parameter only enforces the optimization time, and does not include optimization queue or Apex job queue times. If null, the default value of 30 seconds is used.

nowTimeOnSchedule

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

An appointment whose scheduled start time is earlier than this time is considered required and isn’t updated during resource schedule optimization. Because resource schedule optimization is asynchronous, this parameter indicates when optimization was initiated. For example, if nowTimeOnSchedule is set to April 17, 2018, 10:30, appointments with an earlier scheduled start time are considered required and excluded from resource schedule optimization.

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

#### Usage

To learn more about resource schedule optimization, see [Optimize a Single Resource’s Schedule](https://help.salesforce.com/articleView?id=pfs_resource_optimization_user.htm&language=en_US "HTML (New Window)").

#### Example

To use this code sample, replace the ID placeholders—for example, Service Appointment ID—with record IDs from your org. Surround the IDs with single quotes: '08p4E00000017Gq'.

```

```

### resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSas, unschedulableServices, maxOptRuntime)

Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.

#### Signature

public static Id resourceDayOptimization(Id resourceId, Id policyId, FSL.TimeInterval horizon, Boolean includeAllTasks, Boolean includeOnlyResourceFutureSA, Decimal radius, Set<String\> candidateSas, Set<String\> unschedulableServices, Decimal maxOptRuntime)

#### Parameters

resourceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service resource whose schedule is being optimized.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

horizon

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

The time frame used to run resource schedule optimization.

includeAllTasks

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all relevant service appointments within the time frame are considered during optimization. If false, only unscheduled service appointments are considered, and all scheduled service appointments are pinned (unmovable).

includeOnlyResourceFutureSA

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, only service appointments that are already assigned to the service resource are considered during optimization. If false, service appointments assigned to other service resources are also considered.

radius

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

The suggested distance between required service appointments and adjacent appointments. Required appointments are defined by the unschedulableServices parameter. Resource schedule optimization tries to group service appointments so that their distance from a required appointment is less than this radius. Appointments that are further from a required appointment can still be scheduled, but are deprioritized. If null, the data is not filtered based on the radius.

candidateSas

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_set.htm#apex_methods_system_set "HTML (New Window)")<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")\>

Set of IDs of service appointments that are candidates for scheduling.

unschedulableServices

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_set.htm#apex_methods_system_set)<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")\>

Set of IDs of service appointments that are required (pinned), meaning they must remain on the schedule during resource schedule optimization

maxOptRuntime

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

Total time in seconds during which the optimization results must be returned. This parameter only enforces the optimization time, and does not include optimization queue or Apex job queue times. If null, the default value of 30 seconds is used.

#### Usage

To learn more about resource schedule optimization, see [Optimize a Single Resource’s Schedule](https://help.salesforce.com/articleView?id=pfs_resource_optimization_user.htm&language=en_US "HTML (New Window)").

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

### resourceDayOptimization(resourceId, policyId, horizon, includeAllTasks, includeOnlyResourceFutureSA, radius, candidateSas, unschedulableServices, maxOptRuntime, nowTimeOnSchedule)

Returns the optimization request ID with the details of the optimization call. This method runs resource schedule optimization—the optimization of a single service resource’s schedule—using the parameters provided.

#### Signature

public static Id resourceDayOptimization(Id resourceId, Id policyId, FSL.TimeInterval horizon, Boolean includeAllTasks, Boolean includeOnlyResourceFutureSA, Decimal radius, Set<String\> candidateSas, Set<String\> unschedulableServices, Decimal maxOptRuntime, Datetime nowTimeOnSchedule)

#### Parameters

resourceId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service resource whose schedule is being optimized.

policyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

horizon

Type: [FSL.TimeInterval](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_TimeInterval.htm#apex_class_FSL_TimeInterval "Holds an interval’s start and end times. An instance of this class is used when capturing the start and end times of a scheduling horizon, during which a scheduling process runs. It considers scheduled jobs and is also used to represent the start and end times of an appointment slot or window.")

The time frame used to run resource schedule optimization.

includeAllTasks

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all relevant service appointments within the time frame are considered during optimization. If false, only unscheduled service appointments are considered, and all scheduled service appointments are pinned (unmovable).

includeOnlyResourceFutureSA

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, only service appointments that are already assigned to the service resource are considered during optimization. If false, service appointments assigned to other service resources are also considered.

radius

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

The suggested distance between required service appointments and adjacent appointments. Required appointments are defined by the unschedulableServices and nowTimeOnSchedule parameters. Resource schedule optimization tries to group service appointments so that their distance from a required appointment is less than this radius. Appointments that are further from a required appointment can still be scheduled, but are deprioritized. If null, the data is not filtered based on the radius.

candidateSas

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_set.htm#apex_methods_system_set "HTML (New Window)")<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")\>

Set of IDs of service appointments that are candidates for scheduling.

unschedulableServices

Type: [Set](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_set.htm#apex_methods_system_set "HTML (New Window)")<[Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")\>

Set of IDs of service appointments that are required, meaning they must remain on the schedule during resource schedule optimization. These appointments may be moved to a different time slot, but they will continue to comply with their Earliest Start Permitted and Due Date values.

maxOptRuntime

Type: [Decimal](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_decimal.htm#apex_methods_system_decimal "HTML (New Window)")

Total time in seconds during which the optimization results must be returned. This parameter only enforces the optimization time, and does not include optimization queue or Apex job queue times. If null, the default value of 30 seconds is used.

nowTimeOnSchedule

Type: [Datetime](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_datetime.htm#apex_methods_system_datetime "HTML (New Window)")

Optional. An appointment whose scheduled start time is earlier than this time is considered required and isn’t updated during resource schedule optimization. Because resource schedule optimization is asynchronous, this parameter indicates when optimization was initiated. For example, if nowTimeOnSchedule is set to April 17, 2018, 10:30, appointments with an earlier scheduled start time are considered required and excluded from resource schedule optimization.

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

Record ID of the optimization request.

#### Usage

To learn more about resource schedule optimization, see [Optimize a Single Resource’s Schedule](https://help.salesforce.com/articleView?id=pfs_resource_optimization_user.htm&language=en_US "HTML (New Window)").

#### Example

```

```