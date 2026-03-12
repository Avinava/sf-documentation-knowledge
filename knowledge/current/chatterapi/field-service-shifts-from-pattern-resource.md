---
title: "Field Service Shifts from Pattern Resource"
domain: chatterapi
topic: field-service-shifts-from-pattern-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.331Z
estimatedTokens: 419
keywords: [Service, Shifts, Pattern, Resource, Preview]
---

# Field Service Shifts from Pattern Resource

> Preview and create up to 2,000 shifts from a
    pattern.

# Field Service Shifts from Pattern Resource

Preview and create up to 2,000 shifts from a pattern.

Resource

```

```

Available version

51.0

HTTP methods

GET, POST

Request body for GET and POST

Use GET to preview the shifts created from a pattern. Use POST to create shifts from a pattern.

Root XML tag

<shiftsFromPattern>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| schedulingEnd​Date | String | Scheduling end date in YYYY-MM-DD format.Provide schedulingEndDate or schedulingOccurrences. Don’t provide both. | Required if scheduling​Occurrences isn’t provided | 51.0 |
| scheduling​Occurrences | Integer | Number of scheduling occurrences.Provide schedulingEndDate or schedulingOccurrences. Don’t provide both. | Required if schedulingEnd​Date isn’t provided | 51.0 |
| schedulingStart​Date | String | Scheduling start date in YYYY-MM-DD format. | Required | 51.0 |
| serviceResource​Id | String | ID of the service resource to assign shifts to.In version 53.0 and later, use serviceResourceIdList. | Optional | 51.0–52.0 |
| serviceResource​IdList | String[] | List of service resource IDs to assign shifts to. | Optional | 53.0 |
| serviceTerritory​Id | String | ID of the service territory to assign shifts to. | Optional | 51.0 |
| shiftStatus | String | Status of the shifts. Default values are:ConfirmedPublishedTentativeAdditional status values can be created. | Optional | 52.0 |

Response body for GET and POST

[Shifts from Pattern](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_new_shifts_from_pattern.htm "Shifts created from a pattern.")

## Code Examples

```
/connect/field-service/shift-patterns/shiftPatternId/shifts
```

```
{
"schedulingStartDate": "2020-11-01"
"schedulingEndDate": "2020-12-01"
}
```

## Related Topics

- Shifts from Pattern (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_new_shifts_from_pattern.htm)
