---
title: "Available Territory Slots Input"
domain: salesforce-scheduler-developer-guide
topic: available-territory-slots-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.288Z
estimatedTokens: 1119
keywords: [Territory, Slots, Input, representation]
---

# Available Territory Slots Input

> Input representation of the available territory slots
    request.

# Available Territory Slots Input

Input representation of the available territory slots request.

Request example

```

```

Request example with only required fields

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the associated account. | Optional | 49.0 |
| allowConcurrent​Scheduling | Boolean | Indicates whether concurrent appointments are allowed (true) or not allowed (false). The default value is false. | Optional | 49.0 |
| correlationId | String | ID to pass custom information to the ServiceResourceScheduleHandler Apex interface. For example, you can use the correlation ID to identify the app, website, or any other external system that calls this Apex interface implementation. If you don’t pass a custom value, a randomly generated identifier is passed. | Optional | 53.0 |
| endTime | String | Latest time that an appointment can end.NoteThe API only returns time slots up to 31 days from the startTime. | Optional | 49.0 |
| engagementChannelTypeIds | String[] | The ID of the engagement channel type record. The resources and their associated time slots are filtered by the specified engagement channel type.NoteThis field supports only one engagement channel type ID.You can use engagement channel types with the available-territory-slots API only if:Schedule Appointments Using Engagement Channels is enabled in Salesforce Scheduler Settings in your Salesforce org.Shifts are defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see Define Shift Rules in Scheduling Policy.NoteEngagement channel types are not supported with operating hours rules in the scheduling policy. | Optional | 56.0 |
| filterByResources | String[] | Comma-separated list of service resource IDs. API returns only eligible service resources that are both in the list and in the selected service territory. The resources are sorted by the order in which the resource IDs are passed.NoteYou can either pass filterByResources or requiredResourceIds in a request. | Optional | 51.0 |
| recordLimit | Integer | The maximum number of earliest available slots across the specified territories. The API outputs the specified number of sorted slots across service territories. | Optional | 63.0 |
| required​ResourceIds | String[] | List of resource IDs that you want to get available time slots for. When you pass more than one resource ID, the API returns all the slots where any of the passed resources are available. For example, suppose that you have three qualified resources: A, B, and C. If you pass resource IDs A and B, the API returns all the slots where:only A is availableonly B is availableboth A and B are availableboth A and C are availableboth B and C are availableA, B, and C are all availableThe API doesn’t return the slots where only C is available.If this field is empty, time slots for all qualified resources are returned.NoteThe API request doesn't show time slots for the resource specified in requiredResourceIds if it does not appear in the list of least utilized resources set for resourceLimitAppointmentDistribution. For example, if you specify a resource A in requiredResourceIds and resourceLimitAppointmentDistribution is set to 15, the request doesn’t show time slots for this resource, as A isn’t among the top 15 least utilized resources. | Optional | 49.0 |
| resourceLimit​ApptDistribution | Integer | Specify the maximum number of service resources that you want to show during appointment scheduling when appointment distribution is enabled. Default value is 10.NoteThe filterByResources field takes precedence over the resourceLimitApptDistribution field. | Optional | 53.0 |
| scheduling​PolicyId | String | ID of the AppointmentSchedulingPolicy object. If not provided, the default configurations are considered. | Optional | 49.0 |
| startTime | String | Earliest time that an appointment can start. Defaults to the current time of the request, if empty. You can also use a time from the past. | Optional | 49.0 |
| territoryIds | String[] | List of IDs of service territories where the specified work is performed. | Required | 49.0 |
| workType | Work Type Input | Type of work performed. | Required if workTypeGroupId isn’t provided | 49.0 |
| workType​GroupId | String | ID of the work type group containing all work types performed. | Required if workType isn’t provided | 49.0 |

## Code Examples

```
{
  "startTime": "2022-07-27T00:00:00.000Z",
  "endTime": "2022-07-29T00:00:00.000Z",
  "workTypeGroupId": "0VSB0000000KyjBOAS",
  "accountId": "001B000000qAUAWIA4",
  "territoryIds": [
    "0HhB0000000TO9WKAW"
  ],
  "schedulingPolicyId": "0VrB0000000KyjB",
  "requiredResourceIds": [
    "0HnB0000000TO8gKAK"
  ],
  "engagementChannelTypeIds": [
    "0eFRM00000000CJ2AY"
  ]
}
```

```
{
  "workType": {
    "id": "08qS70000004DTsIAM"
  },
  "territoryIds": [
    "0HhS70000004DTdKAM"
  ],
  "engagementChannelTypeIds": [
    "0eFRM00000000CJ2AY"
  ]
}
```

## Related Topics

- Work Type Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_work_type_input.htm)
