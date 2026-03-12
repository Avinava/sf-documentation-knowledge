---
title: "Get Appointment Candidates"
domain: rest-api
topic: get-appointment-candidates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.172Z
estimatedTokens: 1580
keywords: [Appointment, Candidates, service, resources, work, group, territories, Examples]
---

# Get Appointment Candidates

> Returns a list of service resources (appointment candidates) based on work type group
    or work type and service territories.

# Get Appointment Candidates

Returns a list of service resources (appointment candidates) based on work type group or work type and service territories.

Set up Salesforce Scheduler before making requests. This setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Set Up Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&type=5&language=en_US "HTML (New Window)") for more information.

The appointment time slots are determined based on multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots. See [How Salesforce Scheduler Determines Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)") for more information.

The following factors are considered for returning start time and end time of resources.

Resource Availability

Determined using service territory member, service territory, work type, and account operating hours fields.

Resource Unavailability

Determined by resource absences, existing appointments that the resource is assigned to. The resource must be marked as a required resource for the appointment with a status that isn’t in closed, canceled, or completed.

Appointment Start Time Interval in the Scheduling Policy

Appointment start time interval field in the Scheduling Policy is used to determine when the appointment can start. This interval can be 5, 10, 15, 20, 30, or 60. By default, it’s set to 15.

Work Type Duration

The end time is calculated as start time + duration of the work type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

If asset scheduling is enabled, the response also includes asset-based candidates.

## Syntax

URI

/services/data/vXX.X/scheduling/getAppointmentCandidates

Available version

45.0

Formats

JSON, XML

HTTP methods

POST

Request body

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | No | String | The ID of the associated account. |
| allowConcurrentScheduling | No | Boolean | If true, allows scheduling of concurrent appointments in a time slot. If false, concurrent appointments aren’t allowed. The default is false.This field is available in API version 47.0 and later. |
| correlationId | No | String | The ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed.This field is available in API version 53.0 and later. |
| endTime | No | String | The latest time that a time slot can end (inclusive).NoteThe API only returns time slots up to 31 days from the startTime. |
| engagementChannelTypeIds | No | String[] | The ID of the engagement channel type record. The availability of service resources is filtered based on the engagement channel type selected. This field is available in API version 56.0 and later.This field supports only one engagement channel type ID.You can use engagement channel types with the getAppointmentCandidates API only if:The Schedule Appointments Using Engagement Channels setting is enabled in Salesforce Scheduler Settings in your Salesforce org.Shifts are defined in the scheduling policy. For more information on setting up shifts in scheduling policy, see Define Shift Rules in Scheduling Policy.NoteEngagement channel types are not supported with operating hours rules in the scheduling policy. |
| filterByResources | No | String[] | A comma-separated list of service resource IDs. API returns only eligible service resources that are both in the list and in the selected service territory. The resources are sorted by the order in which the resource IDs are passed. Available in API version 51.0 and later.NoteScheduler doesn’t support appointment Distribution when you’ve specified a list of resource IDs in the filterByResources parameter. |
| resourceLimitApptDistribution | No | Integer | Specify the maximum number of service resources that you want to show during appointment scheduling when appointment distribution is enabled. Available in API version 53.0 and later.NoteThe filterByResources field takes precedence over the resourceLimitApptDistribution field. |
| startTime | No | String | The earliest time that a time slot can begin (inclusive). Defaults to the current time of the request, if empty. You can also use a time from the past. |
| schedulingPolicyId | No | String | The ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. All Scheduling Policy Configurations are considered when using this API. |
| territoryIds | Yes | String[] | List of service territory IDs, where the work that is being requested is performed. |
| workType | Required if workTypeGroupId isn’t given. | Work Type | The type of the work to be performed. |
| workTypeGroupId | Required if workType isn’t given. | String | The ID of the work type group containing the work types that are being performed. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

To determine the required fields in your request body, consider the following points:

-   Provide either the workTypeGroupId or workType parameter in your request body, but not both.
-   If the workType parameter is specified, then you must provide either the id or durationInMinutes parameter.
-   If id of the workType parameter is specified, then the rest of the workType fields are optional.

Response Body

Execution of a successful request returns the response body containing a list of available appointment resources.

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| candidates | Yes | Candidates[] | List of available appointment candidates. |

## Examples

Example Request Body

Using workTypeGroupId:

```

```

Using workTypeId:

```

```

Example Response Body

```

```

## Code Examples

```
{
  "startTime": "2019-01-23T00:00:00.000Z",
  "endTime": "2019-02-30T00:00:00.000Z",
  "workTypeGroupId": "0VSB0000000KyjBOAS",
  "accountId": "001B000000qAUAWIA4",
  "territoryIds": [
    "0HhB0000000TO9WKAW"
  ],
  "schedulingPolicyId": "0VrB0000000KyjB",
  "engagementChannelTypeIds": [
    "0eFRM00000000Bv2AI"
  ]
}
```

```
{
  "startTime": "2019-01-23T00:00:00.000Z",
  "endTime": "2019-02-30T00:00:00.000Z",
  "workType": {
    "id": "08qRM00000003fkYAA"
  },
  "territoryIds": [
    "0HhRM00000003OZ0AY"
  ],
  "accountId": "001B000000qAUAWIA4",
  "schedulingPolicyId": "0VrB0000000KyjB",
  "engagementChannelTypeIds": [
    "0eFRM00000000Bv2AI"
  ]
}
```

```
{
  "candidates": [
    {
      "endTime": "2019-01-23T19:15:00.000+0000",
      "resources": [
        "0HnB0000000D2DsKAK"
      ],
      "startTime": "2019-01-23T16:15:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeIds": [
        "0eFRM00000000Bv2AI"
      ]
    },
    {
      "endTime": "2019-01-23T19:30:00.000+0000",
      "resources": [
        "0HnB0000000D2DsKAK"
      ],
      "startTime": "2019-01-23T16:30:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeIds": [
        "0eFRM00000000Bv2AI"
      ]
    },
    {
      "endTime": "2019-01-23T19:45:00.000+0000",
      "resources": [
        "0HnB0000000D2DsKAK"
      ],
      "startTime": "2019-01-23T16:45:00.000+0000",
      "territoryId": "0HhB0000000TO9WKAW",
      "engagementChannelTypeIds": [
        "0eFRM00000000Bv2AI"
      ]
    }
  ]
}
```

## Related Topics

- Work Type (atlas.en-us.api_rest.meta/api_rest/request_body_ls_worktype.htm)
- Candidates (atlas.en-us.api_rest.meta/api_rest/responses_ls_candidates.htm)
