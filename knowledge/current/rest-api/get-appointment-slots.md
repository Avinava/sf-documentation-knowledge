---
title: "Get Appointment Slots"
domain: rest-api
topic: get-appointment-slots
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.197Z
keywords: [Get, Appointment, Slots, Syntax, Note, Example]
---

# Get Appointment Slots

# Get Appointment Slots

Returns a list of available appointment time slots for a resource based on given work type group or work type and service territories.

The appointment time slots are determined based on your Salesforce Scheduler data model configurations. Here are some prerequisites that you can consider while setting up data.

-   Set up Salesforce Scheduler before making your requests. The setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Manage Business Information in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&language=en_US) for more information.
-   Configure a work type mapped for each territory in the request body via Service Territory Work Type. Map the same work type to the work type group, via work type group member.

The following factors affect how time slots are calculated and returned.

-   Timezones that differ across operating hours are handled and results are always returned in UTC.
-   The resource must be marked as a required resource on the assigned resource object.
-   The resource is considered unavailable If the status categories of the resource assigned to service appointments are other than Canceled, Cannot Complete, and Completed.
-   Resource Absences of all types are considered unavailable from start to end.
-   The following fields of Work Type records, if configured, are used to fine-tune time slot requirements. For more information, see [Create Work Types in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_create_work_types.htm&language=en_US).
    
    | Parameter | Description |
    | --- | --- |
    | Timeframe Start | Time slots sooner than current time + Timeframe Start aren’t returned. |
    | Timeframe End | Time slots later than current time + Timeframe End aren’t returned. |
    | Block Time Before Appointment | The time period before the appointment is considered as unavailable. |
    | Block Time After Appointment | The time period after the appointment is considered as unavailable. |
    | Operating Hours | The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots. For more information, see Set Up Operating Hours in Salesforce Scheduler. |
    
-   Only the time slots within the period of 31 days from the start date are returned.
-   Salesforce Scheduler uses multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots, including the earliest and latest appointment slots. See [How Does Salesforce Scheduler Determine Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)").
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)
    
    #### Note
    
    If asset scheduling is enabled, you can provide an asset-based service resource in requiredResourceIds to retrieve available timeslots for the asset resource.
    

## Syntax

URI

/services/data/vXX.X/scheduling/getAppointmentSlots

Available version

45.0

Formats

JSON, XML

HTTP methods

POST

Authentication

Authorization: Bearer token

Request body

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | No | String | The ID of the associated account. |
| allowConcurrentScheduling | No | Boolean | If true, allows scheduling of concurrent appointments in a time slot. If false, concurrent appointments aren’t allowed. The default is false.Available in API version 47.0 and later. |
| correlationId | No | String | The ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed.This field is available in API version 53.0 and later. |
| endTime | No | String | The latest time that a time slot can end (inclusive). |
| engagementChannelTypeIds | No | String[] | The ID of the engagement channel type record. The availability of time slots is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.NoteThis field supports only one engagement channel type ID.You can use engagement channel types with the getAppointmentSlots API only if:The Schedule Appointments Using Engagement Channels setting is enabled in Salesforce Scheduler Settings in your Salesforce org.Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see Define Shift Rules in Scheduling Policy.NoteEngagement channel types are not supported with operating hours rules in the scheduling policy. |
| primaryResourceId | No | String | The ID of the primary resource in multi-resource scheduling. This field is available in API version 48.0 and later.NoteThis field is required only when multi-resource scheduling is enabled. |
| requiredResourceIds | Yes | String[] | List of resource IDs that must be available during the time slot. |
| schedulingPolicyId | No | String | The ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. The only scheduling policy configuration that is used in determining time slots is the enforcement of account visiting hours. |
| startTime | No | String | The earliest time that a time slot can begin (inclusive). Defaults to the current time of the request, if empty. |
| territoryIds | Yes | String[] | List of IDs of service territories, where the work that is being requested is performed. |
| workType | Required if workTypeGroupId isn’t specified. | Work Type | The type of the work to be performed. |
| workTypeGroupId | Required if workType isn’t given. | String | The ID of the work type group containing the work types that are being performed. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

To determine the required fields in your request body, consider the following points:

-   Provide either the workTypeGroupId or workType parameter in your request body, but not both.
-   If the workType parameter is specified, then you must provide either the id or durationInMinutes parameter.
-   If id of the workType parameter is specified, then the rest of the workType fields are optional.

Response Body

Execution of a successful request returns the response body containing a list of available time slots.

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| timeSlots | Yes | TimeSlots[] | List of time slots included in each territory. |

## Example

Example Request Body

Using workTypeGroupId:

```

```

Using workType:

```

```

Example Response Body

```

```