---
title: "Schedule Recurring Home Visit Action"
domain: health-cloud-object-reference
topic: schedule-recurring-home-visit-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.218Z
estimatedTokens: 983
keywords: [Schedule, Recurring, Home, Visit, Action, healthcare, visits, assign, service, resources, scheduling, policy, Special, Access, Rules]
---

# Schedule Recurring Home Visit Action

> Create a set of recurring home healthcare visits and assign service
			resources to them based on the specified scheduling policy.

# Schedule Recurring Home Visit Action

Create a set of recurring home healthcare visits and assign service resources to them based on the specified scheduling policy.

This action is available in API version 58.0 and later.

## Special Access Rules

The Schedule Recurring Home Visit action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/scheduleRecurringHomeVisit

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypestringDescriptionRequiredPerson account ID of the patient to schedule the set of recurring visits for. |
| careResourceCount | TypestringDescriptionThe number of care resources required for the home visit. |
| clinicalServiceRequestId | TypestringDescriptionRequiredID of the clinical service request record that's associated with the recurring home visits to be scheduled. |
| firstCareResourceSkillsIdsList | TypestringDescriptionID of the clinical service request record that's associated with the recurring home visits to be scheduled. |
| firstVisitEndDateTime | TypedatetimeDescriptionScheduled date and time for the end of the first home visit. |
| flowInterviewId | TypestringDescriptionThe ID of the flow interview to set the service appointment template's Comment field to when manually scheduling home visits. |
| recurrenceFrequencyType | TypestringDescriptionRequiredDays of recurring home visits. If specified, the selectedDays property is required. Valid values are:DailyWeekly |
| operatingHoursId | TypestringDescriptionID of the operating hours record that specifies the time slots that the patient wants to schedule visits for. |
| schedulingPolicyId | TypestringDescriptionRequiredID of the home health scheduling policy to be used to schedule the home visit. |
| recurringDaysList | TypestringDescriptionComma-delimited list of days to schedule recurring home visits for the patient. For example, Monday, Thursday, Saturday.Required if the frequencyType property is set to Weekly. |
| secondCareResourceSkillsIdsList | TypestringDescriptionA comma-delimited list of skill record IDs required for the second care resource of home visits. |
| serviceAppointmentAddress | TypeStringDescriptionService appointment record that contains the home visit address specified by the user and is used to create the actual service appointment. Available in API version 66.0 and later. |
| serviceTerritoryId | TypestringDescriptionRequiredID of the service territory record that contains the care resources to be assigned to the visits. |
| skillsIdsList | TypeList<String>DescriptionComma-delimited list of record IDs of all skills required for the home visits. |
| firstVisitStartDateTime | TypedatetimeDescriptionRequiredScheduled date and time for the start of the first home visit. |
| usageType | TypestringDescriptionSpecifies the method of scheduling of home visits for the action. Valid value isManual. |
| visitsRequired | TypeintegerDescriptionRequiredNumber of recurring home visits to schedule. |
| visitSourceId | TypestringDescriptionID of the source from where visits are created. |
| workTypeIdsList | TypeList <String>DescriptionA comma-delimited list of work type record IDs associated with the clinical service request of the home visit. |

## Outputs

| Output | Details |
| --- | --- |
| careServiceVisitPlanId | TypestringDescriptionRequiredID of the care service visit plan record that’s associated with the service request. |
| serviceAppointmentId | TypestringDescriptionThe ID of the service appointment that was used as a template to manually schedule home visits. |

## Example

POST

This sample request is for the Schedule Recurring Home Visit action.

```

```

This sample response is for the Schedule Recurring Home Visit action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "schedulingPolicyId":"a0cSG0000002RlxxAE",
      "firstVisitStartDateTime":"2024-07-14T07:00:00.000Z",
      "firstVisitStartEndTime" : "2024-07-15T07:00:00.000Z",
      "visitsRequired" : 2,
      "frequencyType" : "DAILY",
      "selectedDays" : "Monday, Thursday",
      "clinicalServiceRequestId": "0jySG0000000VFxxAM",
      "skillsIdList": ["0C5xx0000004C92, 0C5xx0000004C93"],
      "operatingHoursId": "0OHxx0000004CKKGA2",
      "accountId": "001SG00000LNllxxAT",
      "serviceTerritoryId": "0HxxG00000047xN0AQ",
      "firstCareResourceSkillsIdsList": [0D2xx0000008DC91, 0D2xx0000008DC91],
      "secondCareResourceSkillsIdsList": [0P5xx0000004F16, 0P5xx0000004F16],
      "careResourceCount" : 1,
      "workTypeIdsList": ["08qSG0000002b1xxAA"],
      "visitSourceId": ["0Q0SG000000821R0xx"]
    }
  ]
}
```

```
[ {
  "actionName" : "scheduleRecurringHomeVisit",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
      "careServiceVisitPlanId": "0qExx00000000WHEAY"
      "serviceAppointmentId": "0bZxx00000000yKEDB"
    },
  "version" : 1
} ]
```
