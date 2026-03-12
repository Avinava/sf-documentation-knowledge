---
title: "GetAppointmentCandidatesInputBuilder Class"
domain: salesforce-scheduler-developer-guide
topic: getappointmentcandidatesinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.147Z
estimatedTokens: 2899
namespace: LxScheduler
keywords: [GetAppointmentCandidatesInputBuilder, build, instance, setAccountId, accountId, setAllowConcurrent, allowConcurrent, setApiVersion, apiVersion, Usage, setCorrelationId, correlationId, setEndTime, endTime, setEngagementChannelTypeIds]
---

# GetAppointmentCandidatesInputBuilder Class

> Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput
    class.

**Namespace:** `LxScheduler`

# GetAppointmentCandidatesInputBuilder Class

Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.

A Builder object is obtained by invoking one of the GetAppointmentCandidatesInputBuilder methods defined by the GetAppointmentCandidatesInput class.

## Namespace

LxScheduler

## GetAppointmentCandidatesInputBuilder Methods

The following are methods for GetAppointmentCandidatesInputBuilder.

### build()

Returns an instance of the lxscheduler.GetAppointmentCandidatesInput object.

#### Signature

public lxscheduler.GetAppointmentCandidatesInput build()

#### Return Value

Type: [lxscheduler.GetAppointmentCandidatesInput](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm#apex_class_lxscheduler_GetAppointmentCandidatesInput "Contains information about the available service resources (appointment candidates) based on work type group and service territories.")

### setAccountId(accountId)

Sets the ID of the associated account for which you want to create the appointments.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setAccountId(String accountId)

#### Parameters

accountId

Type: String

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setAllowConcurrent(allowConcurrent)

Allows the scheduling of concurrent appointments.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setAllowConcurrent(Boolean allowConcurrent)

#### Parameters

allowConcurrent

Type: Boolean

If true, allows scheduling of concurrent appointments in a time slot. The default is false.

Available in API version 47.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setApiVersion(apiVersion)

Sets the API version of the business logic for the getAppointmentCandidates method.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setApiVersion(Double apiVersion)

#### Parameters

apiVersion

Type: Double

#### Usage

The specified parameter must use the correct API version. For example, if API version is set to 45.0 and filterByResources is set (which is available in API version 51.0 and later), then this field is ignored. If no API version or incorrect API version is passed in the request body, by default the latest version is used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

The API is available since version 45.0.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setCorrelationId(correlationId)

Sets the correlation ID.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setCorrelationId(String correlationId)

#### Parameters

correlationId

Type: String

ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed. Available in API version 53.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setEndTime(endTime)

Sets the scheduling end time.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setEndTime(String endTime)

#### Parameters

endTime

Type: String

The latest time that a time slot can end (inclusive).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

If end time is not specified, it defaults to 31 days.

#### Usage

The specified string should use the standard date format “\['yyyy-MM-dd\\’T\\’HH:mm:ssZ'\]” in the local time zone. Defaults to the user’s time zone.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setEngagementChannelTypeIds(engagementChannelTypeIds)

Sets an engagement channel type.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setEngagementChannelTypeIds(List<String\> engagementChannelTypeIds)

#### Parameters

engagementChannelTypeIds

Type: List<String>

The ID of the engagement channel type record. The availability of service resources is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

This field supports only one engagement channel type ID.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

#### Usage

You can use engagement channel types only in these cases:

-   The **Schedule Appointments Using Engagement Channels** setting is enabled in Salesforce Scheduler Settings in your Salesforce org.
-   Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    Engagement channel types are not supported with operating-hours rules in the scheduling policy.


### setFilterByResources(filterByResources)

Enables filtering resources using a comma-separated list of service resource IDs.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setFilterByResources(List<String\> filterByResources)

#### Parameters

filterByResources

Type: List<String>

Gets only eligible resources that are both in the list and in the selected service territory sorted by the order in which the resource IDs are passed. This field is available in API version 51.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setResourceLimitApptDistribution(resourceLimitApptDistribution)

Sets the number of service resources to show during appointment scheduling.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setResourceLimitApptDistribution(Integer resourceLimitApptDistribution)

#### Parameters

resourceLimitApptDistribution

Type: Integer

Specify the maximum number of service resources that you want to show during appointment scheduling when appointment distribution is enabled. Available in API version 53.0 and later.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setSchedulingPolicyId(schedulingPolicyId)

Sets the ID of the AppointmentSchedulingPolicy object.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setSchedulingPolicyId(String schedulingPolicyId)

#### Parameters

schedulingPolicyId

Type: String

The ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setStartTime(startTime)

Sets the scheduling start time to the specified time.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setStartTime(String startTime)

#### Parameters

startTime

Type: String

The earliest time that a time slot can begin (inclusive). You can also use a time from the past.

#### Usage

The specified string should use the standard date format “\['yyyy-MM-dd\\’T\\’HH:mm:ssZ'\]” in the local time zone. Defaults to the user’s time zone.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setTerritoryIds(territoryIds)

Sets the service territory IDs.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setTerritoryIds(List<String\> territoryIds)

#### Parameters

territoryIds

Type: List<String>

List of service territory IDs, where the work that is being requested is performed. This is a required field.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setWorkType(workType)

Sets the type of work to be performed.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setWorkType(lxscheduler.WorkType workType)

#### Parameters

workType

Type: [lxscheduler.WorkType](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm#apex_class_lxscheduler_WorkType "Contains information about the type of work to be performed.")

This method takes input as an instance of the lxscheduler.WorkType class. Build the instance of the input class using the lxscheduler.WorkTypeBuilder class.

Required if workTypeGroupId is not given. If id of the workType is given, the rest of workType fields are optional.

#### Usage

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

### setWorkTypeGroupId(workTypeGroupId)

Sets the ID of the work type group.

#### Signature

public lxscheduler.GetAppointmentCandidatesInputBuilder setWorkTypeGroupId(String workTypeGroupId)

#### Parameters

workTypeGroupId

Type: String

The ID of the work type group containing the work types that are being performed. Required if workType is not given. If workType is given, then you must provide either id or durationInMinutes, but not both.

#### Return Value

Type: [LxScheduler.GetAppointmentCandidatesInputBuilder](#apex_class_lxscheduler_GetAppointmentCandidatesInputBuilder "Contains methods to build an instance of the lxscheduler.GetAppointmentCandidatesInput class.")

## Related Topics

- lxscheduler.GetAppointmentCandidatesInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm)
- lxscheduler.WorkType (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_WorkType.htm)
