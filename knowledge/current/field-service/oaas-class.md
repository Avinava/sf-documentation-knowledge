---
title: "OAAS Class"
domain: field-service
topic: oaas-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.033Z
keywords: [OAAS, Class, Returns, optimization, request, details, call., method, runs, resource, schedule, optimization—the, single, service, resource’s, schedule—using, parameters, provided., resourceDayOptimization, resourceId]
---

# OAAS Class

> Returns the optimization request ID with the details of the
      optimization call. This method runs resource schedule optimization—the optimization of
      a single service resource’s schedule—using the parameters provided.

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