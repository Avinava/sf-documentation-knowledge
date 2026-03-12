---
title: "GetAppointmentSlotsInputBuilder Class"
domain: apex-reference
topic: getappointmentslotsinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.647Z
estimatedTokens: 4055
namespace: LxScheduler
keywords: [GetAppointmentSlotsInputBuilder, Contains, build, instance, lxscheduler.GetAppointmentSlotsInput, class., setAccountId, accountId, setAllowConcurrentScheduling, allowConcurrentScheduling, setApiVersion, apiVersion, Usage, Note, setCorrelationId, correlationId, setEndTime, endTime, setEngagementChannelTypeIds, engagementChannelTypeIds]
---

# GetAppointmentSlotsInputBuilder Class

> Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.

**Namespace:** `LxScheduler`

# GetAppointmentSlotsInputBuilder Class

Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.

A Builder object is obtained by invoking one of the GetAppointmentSlotsInputBuilder methods defined by the GetAppointmentSlotsInput class.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

-   **[GetAppointmentSlotsInputBuilder Methods](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_methods)**


## GetAppointmentSlotsInputBuilder Methods

The following are methods for GetAppointmentSlotsInputBuilder.

-   **[build()](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_build)**
    Returns an instance of the lxscheduler.GetAppointmentSlotsInput object.
-   **[setAccountId(accountId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setAccountId)**
    Sets the ID of the associated account for which you want to create appointments.
-   **[setAllowConcurrentScheduling(allowConcurrentScheduling)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setAllowConcurrentScheduling)**
    Allows the scheduling of concurrent appointments.
-   **[setApiVersion(apiVersion)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setApiVersion)**
    Sets the API version of the business logic for the getAppointmentSlots method.
-   **[setCorrelationId(correlationId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setCorrelationId)**
    Sets the correlation ID.
-   **[setEndTime(endTime)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setEndTime)**
    Sets the scheduling end time.
-   **[setEngagementChannelTypeIds(engagementChannelTypeIds)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setEngagementChannelTypeIds)**
    Sets an engagement channel type.
-   **[setPrimaryResourceId(primaryResourceId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setPrimaryResourceId)**
    Sets the ID of the primary resource.
-   **[setRequiredResourceIds(requiredResourceIds)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setRequiredResourceIds)**
    Sets the resource IDs.
-   **[setSchedulingPolicyId(schedulingPolicyId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setSchedulingPolicyId)**
    Sets the ID of the AppointmentSchedulingPolicy object.
-   **[setStartTime(startTime)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setStartTime)**
    Sets the scheduling start time.
-   **[setTerritoryIds(territoryIds)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setTerritoryIds)**
    Sets the IDs of service territories.
-   **[setWorkType(workType)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setWorkType)**
    Sets the type of work to be performed.
-   **[setWorkTypeGroupId(workTypeGroupId)](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm#apex_lxscheduler_GetAppointmentSlotsInputBuilder_setWorkTypeGroupId)**
    Sets the ID of the work type group.

### build()

Returns an instance of the lxscheduler.GetAppointmentSlotsInput object.

#### Signature

public lxscheduler.GetAppointmentSlotsInput build()

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInput](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInput.htm#apex_class_lxscheduler_GetAppointmentSlotsInput "Contains information about the available appointment time slots for a resource based on given work type group and territories.")

### setAccountId(accountId)

Sets the ID of the associated account for which you want to create appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAccountId(String accountId)

#### Parameters

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the associated account.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setAllowConcurrentScheduling(allowConcurrentScheduling)

Allows the scheduling of concurrent appointments.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setAllowConcurrentScheduling(Boolean allowConcurrentScheduling)

#### Parameters

allowConcurrentScheduling

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, allows scheduling of concurrent appointments in a time slot. If false, concurrent appointments are not allowed. The default is false. Available in API version 47.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setApiVersion(apiVersion)

Sets the API version of the business logic for the getAppointmentSlots method.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setApiVersion(Double apiVersion)

#### Parameters

apiVersion

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Usage

The specified parameter must use the correct API version. For example, if API version is set to 45.0 and primaryResourceId is set (which is available in API version 48.0 and later), then this field is ignored. If no API version or incorrect API version is passed in the request body, by default the latest version is used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

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

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed. Available in API version 53.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setEndTime(endTime)

Sets the scheduling end time.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setEndTime(String endTime)

#### Parameters

endTime

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

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

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The ID of the engagement channel type record. The availability of time slots is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This field supports only one engagement channel type ID.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

#### Usage

You can use engagement channel types only in these cases:

-   The **Schedule Appointments Using Engagement Channels** setting is enabled in Salesforce Scheduler Settings in your Salesforce org.
-   Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

    #### Note

    Engagement channel types are not supported with operating-hours rules in the scheduling policy.


### setPrimaryResourceId(primaryResourceId)

Sets the ID of the primary resource.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setPrimaryResourceId(String primaryResourceId)

#### Parameters

primaryResourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the primary resource in multi-resource scheduling. Required only when multi-resource scheduling is enabled. Available in API version 48.0 and later.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setRequiredResourceIds(requiredResourceIds)

Sets the resource IDs.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setRequiredResourceIds(List<String\> requiredResourceIds)

#### Parameters

requiredResourceIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of resource IDs that must be available during the time slot. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setSchedulingPolicyId(schedulingPolicyId)

Sets the ID of the AppointmentSchedulingPolicy object.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setSchedulingPolicyId(String schedulingPolicyId)

#### Parameters

schedulingPolicyId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If no scheduling policy is passed in the request body, the default configurations are used.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setStartTime(startTime)

Sets the scheduling start time.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setStartTime(String startTime)

#### Parameters

startTime

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

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

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of IDs of service territories, where the work that is being requested is performed. This is a required field.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

### setWorkType(workType)

Sets the type of work to be performed.

#### Signature

public lxscheduler.GetAppointmentSlotsInputBuilder setWorkType(lxscheduler.WorkType workType)

#### Parameters

workType

Type: [lxscheduler.WorkType](atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

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

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the work type group containing the work types that are being performed.

#### Return Value

Type: [lxscheduler.GetAppointmentSlotsInputBuilder](#apex_class_lxscheduler_GetAppointmentSlotsInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentSlotsInput class.")

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- GetAppointmentSlotsInputBuilder Methods (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- build() (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setAccountId(accountId) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setAllowConcurrentScheduling(allowConcurrentScheduling) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setApiVersion(apiVersion) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setCorrelationId(correlationId) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setEndTime(endTime) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setEngagementChannelTypeIds(engagementChannelTypeIds) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
- setPrimaryResourceId(primaryResourceId) (atlas.en-us.apexref.meta/apexref/apex_class_lxscheduler_GetAppointmentSlotsInputBuilder.htm)
