---
title: "Group Appointments (POST)"
domain: salesforce-scheduler-developer-guide
topic: group-appointments-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.359Z
estimatedTokens: 546
keywords: [Group, Appointments, POST, along, remaining, attendee, limit]
---

# Group Appointments (POST)

> Get a list of group appointments along with the remaining attendee
      limit.

# Group Appointments (POST)

Get a list of group appointments along with the remaining attendee limit.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endTime | String | Latest end time for the group appointments to be retrieved. | Optional | 61.0 |
| exclude​Associated​Appts | Boolean | Indicates whether the response excludes appointments where the current user is associated as an attendee or assigned resource (true) or not (false). | Optional | 61.0 |
| extended​FieldsToQuery | String[] | List of the extended custom fields to fetch in the output. | Optional | 61.0 |
| filterBy​Engagement​ChannelTypes | String[] | ID of the engagement channel type record. Group appointments are filtered based on the selected engagement channel type. | Optional | 61.0 |
| filterBy​ParentRecords | String[] | The ID of the associated parent record. | Optional | 61.0 |
| filterBy​Resources | String[] | List of the group appointments where all the given resources are present. | Optional | 61.0 |
| filterBy​Territories | String[] | List of IDs of the service territories where the requested work is performed. | Optional | 61.0 |
| filterBy​WorkTypeGroups | String[] | IDs of the work type groups containing the work types that are being performed. | Optional | 61.0 |
| filterBy​WorkTypes | String[] | List of IDs of the work types to be performed. | Optional | 61.0 |
| limit | Integer | Maximum number of records to be fetched. | Optional | 61.0 |
| offset | Integer | Number of records to be skipped. | Optional | 61.0 |
| startTime | String | The earliest start time for the group appointments to be retrieved. If not provided, it defaults to the current time of the request. | Optional | 61.0 |

Response body for POST

[Group Appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_get_group_appointments_output.htm "Output representation of the response that contains the retrieved group appointments.")

## Code Examples

```
/connect/scheduling/group-appointments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/group-appointments
```

```
{
  "startTime": "2024-01-23T00:00:00.000Z",
  "endTime": "2024-02-28T00:00:00.000Z",
  "filterByWorkTypes": [
    "08qRM00000003fkYAA"
  ],
  "filterByResources": [
    "0HnB0000000TO8gKAK"
  ],
  "filterByTerritories": [
    "0HhRM00000003OZ0AY"
  ],
  "filterByParentRecords": [
    "001B000000qAUAWIA4"
  ],
  "filterByEngagementChannelTypes": [
    "0eFRM00000000Bv2AI"
  ],
  "extendedFieldsToQuery": [
    "subject",
    "description"
  ]
}
```

## Related Topics

- Group
              Appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_get_group_appointments_output.htm)
