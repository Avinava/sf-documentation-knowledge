---
title: "Get Resources for Manual Scheduling Action"
domain: health-cloud-object-reference
topic: get-resources-for-manual-scheduling-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.113Z
estimatedTokens: 1037
keywords: [Resources, Manual, Scheduling, Action, Recommend, manually, schedule, start, care, visit, recurring, visits, Special, Access, Rules]
---

# Get Resources for Manual Scheduling Action

> Recommend resources to use when you manually schedule a start of
            care visit or recurring visits.

# Get Resources for Manual Scheduling Action

Recommend resources to use when you manually schedule a start of care visit or recurring visits.

This action is available in API version 61.0 and later.

## Special Access Rules

The Get Resources for Manual Scheduling action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getResourcesForMnlScheduling

Formats

JSON, XML

HTTP Methods

GET

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| operatingHoursId | TypeStringDescriptionID of the operating hours record that specifies the time slots to schedule a home visit. |
| recurringDaysList | TypeList <String>DescriptionComma-delimited list of days to schedule recurring home visits. For example, Monday, Thursday, and Saturday. If recurrenceFrequencyType parameter is set to Weekly, the recurringDaysList parameter is required. |
| recurrenceFrequencyCount | TypeIntegerDescriptionNumber of recurring home visits to be scheduled Weekly or Daily, based on the value specified in the recurrenceFrequencyType parameter.When recurrenceFrequencyType parameter value is Weekly, the recurrenceFrequencyCount parameter value specifies the number of home visits to schedule per week. When recurrenceFrequencyType parameter value is Daily, the recurrenceFrequencyCount parameter value specifies the number of home visits to schedule per day. |
| recurrenceFrequencyType | TypeStringDescriptionRequiredType of recurring home visits. Valid values are:DailyWeeklyIf the value is set to Weekly, the recurringDaysList parameter is required. |
| resourceRecommendationCount | TypeIntegerDescriptionRequiredMaximum number of resource recommendations to be shown to the scheduler. |
| schedulingPolicyId | TypeStringDescriptionRequiredID of the home health scheduling policy to be used to identify care resources available for the home visits. |
| serviceAppointmentId | TypeStringDescriptionRequiredID of a service appointment record that’s used to get the eligible resources for the home visits. |
| visitsRequired | TypeIntegerDescriptionRequiredNumber of recurring home visits to schedule. |
| visitType | TypeStringDescriptionRequiredType of home visit to fetch the resources for. Valid values are:Start of CareRecurring |
| workTypeId | TypeStringDescriptionID of the work type record used to get the resources for the home visit. |

## Outputs

| Output | Details |
| --- | --- |
| endDateTime | TypeDatetimeDescriptionScheduled end for the returned slot. |
| grade | TypeIntegerDescriptionGrade for the resource recommendation. |
| manualSchedulingRecommendations | TypeJSONDescriptionJSON collection of the resourceRecommendations parameter that contains resource details such as resource name, resource ID, and their available time intervals. |
| recommendationGrade | TypeIntegerDescriptionGrade for the resource and slot combination. |
| resourceId | TypeStringDescriptionID of the selected service resource. |
| resourceName | TypeStringDescriptionName of the selected service resource. |
| resourceRecommendations | TypeJSONDescriptionJSON collection for each resource that contains resource details such as resource name, resource ID, their available time slots, and the grade for the resource recommendation. |
| sequence | TypeIntegerDescriptionSequence of this interval in the returned list of resources. |
| startDateTime | TypeDatetimeDescriptionScheduled start for the returned slot. |
| scheduleIntervalRecommendations | TypeJSONDescriptionJSON that contains time interval details for the recommended resource. The details include start date, end date, grade for the time slot, and the sequence number in which the service appointment gets scheduled. |
| visitType | TypeStringDescriptionType of home visit to fetch the resources for. Valid values are:Start of CareRecurring |

## Example

GET

This sample request is for the Get Resources for Manual Scheduling action.

```

```

This sample response is for the Get Resources for Manual Scheduling action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "visitType": "Recurring",
            "schedulingPolicyId": "a0cSGxx0000CD37YAG",
            "workTypeId": "08qSG0000004zBNYxx",
            "recurrenceFrequencyType": "WEEKLY",
            "recurrenceFrequencyCount": 2,
            "visitsRequired": 2,
            "recurringDaysList": "Monday,Tuesday",
            "resourceRecommendationCount": 3,
            "operatingHoursId": "0OHSG00000xxSUH4A4",
            "serviceAppointmentId": "08pSG00000xxUrdYAG"
        }
    ]
}
```

```
{
    {
        "visitType": "Recurring",
        "manualSchedulingRecommendations": [
            {
                "resourceRecommendations": [
                    {
                        "scheduleIntervalRecommendations": [
                            {
                                "startDateTime": "2024-08-05T12:59:59.000Z",
                                "sequence": 1,
                                "grade": "100",
                                "endDateTime": "2024-08-05T01:00:00.000Z"
                            },
                            {
                                "startDateTime": "2024-08-06T05:15:00.000Z",
                                "sequence": 2,
                                "grade": "0",
                                "endDateTime": "2024-08-06T02:00:00.000Z"
                            }
                        ],
                        "resourceName": "Allen Smith",
                        "resourceId": "0HnSG00000085yb0xx"
                    }
                ],
                "recommendationGrade": "85"
            }
        ]
    }
}
```
