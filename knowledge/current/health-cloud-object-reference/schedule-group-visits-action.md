---
title: "Schedule Group Visits Action"
domain: health-cloud-object-reference
topic: schedule-group-visits-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.182Z
estimatedTokens: 766
keywords: [Schedule, Group, Visits, Action, visiting, records, patient, home, bundling, scheduling, either, start-of-care, visit, series, recurring]
---

# Schedule Group Visits Action

> Create visiting records for patient home visits by bundling them into a
   group and scheduling either a single start-of-care visit or a series of recurring visits
   associated with the bundled records.

# Schedule Group Visits Action

Create visiting records for patient home visits by bundling them into a group and scheduling either a single start-of-care visit or a series of recurring visits associated with the bundled records.

This action is available in API version 60.0 and later.

## Special Access Rules

The Schedule Group Visits action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/scheduleGroupVisits

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| schedulingPolicyId | TypestringDescriptionRequired.ID of the home health scheduling policy to be used to schedule the group visits. |
| appointmentBundlePolicyId | TypestringDescriptionRequired.ID of the home health appointment bundle policy to be used to create the patient visit records. |
| workTypeId | TypestringDescriptionRequired.ID of the work type that represents the care service that the visits are being scheduled for. |
| serviceTerritoryId | TypestringDescriptionRequired.ID of the service territory record that contains the care resources to be assigned to the visits. |
| firstVisitStartDateTime | TypedatetimeDescriptionRequired.Scheduled date and time for the start of the first group visit. |
| firstVisitEndDateTime | TypedatetimeDescriptionDate and time when the first group visit ends. |
| operatingHoursId | TypestringDescriptionID of the operating hours record that specifies the time slots to schedule the group visit for. |
| skillsIdsList | TypestringDescriptionA comma-delimited list of record IDs of all skills required for the group visits. |
| isRecurringVisit | TypebooleanDescriptionIndicates whether recurring visits are scheduled. If false, then a single start-of-care group visit is scheduled. |
| recurrenceFrequencyType | TypestringDescriptionRequired.Specifies the type of recurring group visits. If specified, the selectedDays property is required. Valid values are:DailyWeekly |
| recurringDaysList | TypestringDescriptionComma-delimited list of days to schedule recurring group visits for patients. For example, Monday, Thursday, Saturday. If recurrenceFrequencyType is set to Weekly, recurringDaysList is required. |
| visitsRequired | TypeintegerDescriptionThe number of recurring group visits to be scheduled. |
| groupVisitAddress | TypeApex-defined(Input example of apex type:{“street":"123 Main St","city":"Cityville","state":"CA","zip":"12345"})DescriptionAn Apex GroupVisitAddress record that specifies the address where the group visit for the selected patients is scheduled. |
| clinicalServiceRequestIdsList | TypestringDescriptionComma-delimited list of record IDs of all clinical service requests of the selected patients in the group visit. |

## Outputs

None.

## Example

POST

This sample request is for the Schedule Group Visits action.

```

```

This sample response is for the Schedule Group Visits action.

```

```

## Code Examples

```
{ 
  "inputs" : [
    {
      "schedulingPolicyId" : "001SG000005OtxxYA0",
      "appointmentBundlePolicyId" : "0jyxx0000000001AAA",
     ."workTypeId" : "0jyxx0000000001AAA",
      "serviceTerritoryId" : "0HxxG00000015dZ0AQ",
      "serviceTerritoryId" : "0HxxG00000015dZ0AQ",
      "firstVisitStartDateTime" : "2024-03-16T07:00:00.000Z",
      "isRecurringVisit" : "false",
      "operatingHoursId" : "0OHxx0000004CKKGA2",
      "recurrenceFrequencyType" : "WEEKLY",
      "recurringDaysList" : "Monday, Thursday",
      "clinicalServiceRequestIdsList" :["0jxxG0000000b1BYAQ","0jyxx0000000b1KYAQ"],
      "groupVisitAddress" :{ "city" : "Hyderabad" }
    }
  ]
}
```

```
[ {
  "actionName" : "scheduleGroupVisits",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
      "careServiceVisitPlanId": "null"
      "bundleStatusMessage": "Group visit request has been submitted"
    },
  "version" : 1
} ]
```
