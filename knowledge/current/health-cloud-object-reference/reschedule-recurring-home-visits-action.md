---
title: "Reschedule Recurring Home Visits Action"
domain: health-cloud-object-reference
topic: reschedule-recurring-home-visits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.167Z
estimatedTokens: 488
keywords: [Reschedule, Recurring, Home, Visits, Action, recurrence, pattern, scheduling, policy, provided, Special, Access, Rules, REST, HTTP]
---

# Reschedule Recurring Home Visits Action

> Reschedule all the home visits based on the recurrence pattern and
   scheduling policy provided.

# Reschedule Recurring Home Visits Action

Reschedule all the home visits based on the recurrence pattern and scheduling policy provided.

This action is available in API version 60.0 and later.

## Special Access Rules

The Schedule Recurring Home Visit action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/rescheduleRecurringHomeVisits

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| schedulingPolicyId | TypestringDescriptionRequired.ID of the home health scheduling policy to be used to schedule the home visit. |
| firstVisitStartDateTime | TypedatetimeDescriptionRequired.Rescheduled date and time for the start of the first recurring home visit. |
| firstVisitEndDateTime | TypedatetimeDescriptionRescheduled date and time for the end of the first recurring home visit. |
| recurrenceFrequencyType | TypestringDescriptionRequired.Days of recurring home visits. If specified, the selectedDays property is required. Valid values are:DailyWeekly |
| recurringDaysList | TypestringDescriptionComma-delimited list of days to reschedule recurring home visits for the patient. For example, Monday, Thursday, Saturday. If recurrenceFrequencyType is set to Weekly, recurringDaysList is required. |
| operatingHoursId | TypestringDescriptionID of the operating hours record that specifies the time slots that the patient wants to reschedule recurring visits for. |
| serviceAppointmentId | TypestringDescriptionRequired.ID of the service appointment record that's associated with the first recurring home visit to be rescheduled. |

## Outputs

None.

## Example

POST

This sample request is for the Reschedule Recurring Home Visit action.

```

```

This sample response is for the Reschedule Recurring Home Visit action.

```

```

## Code Examples

```
{ 
  "inputs" : [
    {
      "schedulingPolicyId" : "001SG000005OtxxYA0",
      "serviceAppointmentId" : "0jyxx0000000001AAA",
      "firstVisitStartDateTime" : "2024-03-16T07:00:00.000Z",
      "firstVisitEndDateTime" : "2024-03-17T01:00:00.000Z",
      "operatingHoursId" : "0OHxx0000004CKKGA2",
      "recurrenceFrequencyType" : "WEEKLY",
      "recurringDaysList" : "Monday, Thursday"
    }
  ]
}
```

```
[ {
  "actionName" : "rescheduleRecurringHomeVisits",
  "errors" : null,
  "isSuccess" : true,
  "version" : 1
} ]
```
