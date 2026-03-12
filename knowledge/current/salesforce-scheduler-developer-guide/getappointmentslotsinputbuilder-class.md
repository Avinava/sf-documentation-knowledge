---
title: "GetAppointmentSlotsInputBuilder Class"
domain: salesforce-scheduler-developer-guide
topic: getappointmentslotsinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.168Z
estimatedTokens: 2680
namespace: LxScheduler
keywords: [GetAppointmentSlotsInputBuilder, build, instance, lxscheduler.GetAppointmentSlotsInput, setAccountId, accountId, setAllowConcurrentScheduling, allowConcurrentScheduling, setApiVersion, apiVersion, Usage, setCorrelationId, correlationId, setEndTime, endTime]
---

# GetAppointmentSlotsInputBuilder Class

> Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.

**Namespace:** `LxScheduler`

# GetAppointmentSlotsInputBuilder Class

Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.

A Builder object is obtained by invoking one of the GetAppointmentSlotsInputBuilder methods defined by the GetAppointmentSlotsInput class.

## Namespace

LxScheduler

## GetAppointmentSlotsInputBuilder Methods

The following are methods for GetAppointmentSlotsInputBuilder.

### build()

Returns an instance of the lxscheduler.GetAppointmentSlotsInput object.

#### Signature

public lxscheduler.GetAppointmentSlotsInput build()

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInput](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentSlotsInput.htm#apex_class_lxscheduler_GetAppointmentSlotsInput "Contains information about the available appointment time slots for a resource based on given work type group and territories.")

### setAccountId(accountId)

Sets the ID of the associated account for which you want to create appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAccountId(String accountId)

#### Parameters

accountId

Type: String

The ID of the associated account.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setAllowConcurrentScheduling(allowConcurrentScheduling)

Allows the scheduling of concurrent appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAllowConcurrentScheduling(Boolean allowConcurrentScheduling)

#### Parameters

allowConcurrentScheduling

Type: Boolean

If true, allows scheduling of concurrent appointments in a time slot. If false, concurrent appointments are not allowed. The default is false. Available in API version 47.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setApiVersion(apiVersion)

Sets the API version of the business logic for the getAppointmentSlots method.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setApiVersion(Double apiVersion)

#### Parameters

apiVersion

Type: Double

#### Usage

The specified parameter must use the correct API version. For example, if API version is set to 45.0 and primaryResourceId is set (which is available in API version 48.0 and later), then this field is ignored. If no API version or incorrect API version is passed in the request body, by default the latest version is used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

The API is available since version 45.0.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setCorrelationId(correlationId)

Sets the correlation ID.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setCorrelationId(String correlationId)

#### Parameters

correlationId

Type: String

ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed. Available in API version 53.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setEndTime(endTime)

Sets the scheduling end time.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setEndTime(String endTime)

#### Parameters

endTime

Type: String

The latest time that a time slot can end (inclusive). If end time is not specified, it defaults to 31 days.

#### Usage

The specified string should use the standard date format “\['yyyy-MM-dd\\’T\\’HH:mm:ssZ'\]” in the local time zone. Defaults to the user’s time zone.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setEngagementChannelTypeIds(engagementChannelTypeIds)

Sets an engagement channel type.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setEngagementChannelTypeIds(List<String\> engagementChannelTypeIds)

#### Parameters

engagementChannelTypeIds

Type: List<String>

The ID of the engagement channel type record. The availability of time slots is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

This field supports only one engagement channel type ID.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

#### Usage

You can use engagement channel types only in these cases:

-   The **Schedule Appointments Using Engagement Channels** setting is enabled in Salesforce Scheduler Settings in your Salesforce org.
-   Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    Engagement channel types are not supported with operating-hours rules in the scheduling policy.


### setPrimaryResourceId(primaryResourceId)

Sets the ID of the primary resource.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setPrimaryResourceId(String primaryResourceId)

#### Parameters

primaryResourceId

Type: String

The ID of the primary resource in multi-resource scheduling. Required only when multi-resource scheduling is enabled. Available in API version 48.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setRequiredResourceIds(requiredResourceIds)

Sets the resource IDs.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setRequiredResourceIds(List<String\> requiredResourceIds)

#### Parameters

requiredResourceIds

Type: List<String>

List of resource IDs that must be available during the time slot. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setSchedulingPolicyId(schedulingPolicyId)

Sets the ID of the AppointmentSchedulingPolicy object.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setSchedulingPolicyId(String schedulingPolicyId)

#### Parameters

schedulingPolicyId

Type: String

If no scheduling policy is passed in the request body, the default configurations are used.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setStartTime(startTime)

Sets the scheduling start time.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setStartTime(String startTime)

#### Parameters

startTime

Type: String

The earliest time that a time slot can begin (inclusive). Defaults to the current time of the request, if empty.

#### Usage

The specified string should use the standard date format “\['yyyy-MM-dd\\’T\\’HH:mm:ssZ'\]” in the local time zone. Defaults to the user’s time zone.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setTerritoryIds(territoryIds)

Sets the IDs of service territories.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setTerritoryIds(List<String\> territoryIds)

#### Parameters

territoryIds

Type: List<String>

List of IDs of service territories, where the work that is being requested is performed. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setWorkType(workType)

Sets the type of work to be performed.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setWorkType(lxscheduler.WorkType workType)

#### Parameters

workType

Type: [lxscheduler.WorkType](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

This method takes input as an instance of the lxscheduler.WorkType class. Build the instance of the input class using the lxscheduler.WorkTypeBuilder class.

Required if workTypeGroupId is not given.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setWorkTypeGroupId(workTypeGroupId)

Sets the ID of the work type group.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setWorkTypeGroupId(String workTypeGroupId)

#### Parameters

workTypeGroupId

Type: String

The ID of the work type group containing the work types that are being performed.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

## Related Topics

- lxscheduler.GetAppointmentSlotsInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentSlotsInput.htm)
- lxscheduler.WorkType (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm)
