---
title: "Schedule Home Visits Manually Action"
domain: health-cloud-object-reference
topic: schedule-home-visits-manually-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.205Z
estimatedTokens: 955
keywords: [Schedule, Home, Visits, Manually, Action, start, care, recurring, assign, resources, selected, scheduler, Special, Access, Rules]
---

# Schedule Home Visits Manually Action

> Create start of care or recurring home visits and assign care
         resources that are manually selected by the scheduler to the visits.

# Schedule Home Visits Manually Action

Create start of care or recurring home visits and assign care resources that are manually selected by the scheduler to the visits.

This action is available in API version 61.0 and later.

## Special Access Rules

Schedule Home Visits Manually action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/scheduleHomeVisitsManually

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypeStringDescriptionRequiredPersonal account ID of the patient for whom the visit is to be scheduled. For each API call, you can send only one account ID in the payload. |
| clinicalServiceRequestId | TypeStringDescriptionRequiredID of the clinical service request record that's associated with the home visits to be scheduled. |
| firstVisitEndDateTime | TypeDatetimeDescriptionDate and time when the first recurring home visit ends. |
| firstVisitStartDateTime | TypeDatetimeDescriptionRequiredDate and time when the first recurring home visit starts. |
| operatingHoursId | TypeStringDescriptionID of the operating hours record that specifies the time slots to schedule the home visit. |
| recurringDaysList | TypeStringDescriptionComma-delimited list of days to schedule recurring home visits. For example, Monday, Thursday, and Saturday. If recurrenceFrequencyType is set to Weekly, recurringDaysList is required. |
| recurrenceFrequencyType | TypeStringDescriptionType of recurring home visits. If Weekly is specified, recurringDaysList is required. Valid values are:DailyWeekly |
| resourceDetails | TypeApex definedDescriptionRequiredCollection of Apex heathcloudext__ResourceDetails records containing resources and schedule intervals for the visit. |
| schedulingPolicyId | TypeStringDescriptionRequiredID of the home health scheduling policy that's used to identify care resources available for the home visits. |
| serviceTerritoryId | TypeStringDescriptionRequiredID of the service territory record that contains the care resources to be assigned to the visits. Available in API version 66.0 and later. |
| skillIds | TypeStringDescriptionCollection of up to 20 record IDs of skills required for the home visits. |
| visitsRequired | TypeIntegerDescriptionNumber of recurring home visits to be scheduled. |
| visitSourceId | TypeStringDescriptionThe ID of the reference record to use as a source to schedule the home visit. Available in API version 64 and later. |
| visitType | TypeStringDescriptionRequiredType of home visit to be scheduled. Valid values are:Start of CareRecurring |
| workPlanTemplateIds | TypeStringDescriptionCollection of IDs of work plan template records that are assigned to the service appointment and specify the care instructions to be followed during the home visit. Available in API version 66.0 and later. |

## Outputs

| Output | Details |
| --- | --- |
| careServiceVisitPlanId | TypeStringDescriptionID of the care service visit plan record that’s associated with the service request for recurring home visits. |
| careServiceVisitId | TypeStringDescriptionID of the care service visit record that’s associated with the service request to start a care home visit. |

## Example

POST

This sample request is for the Schedule Home Visits Manually action when visitType is Start of Care.

```

```

This sample request is for the Schedule Home Visits Manually action when visitType is Recurring.

```

```

This sample response is for the Schedule Home Visits Manually action when visitType is Start of Care.

```

```

This sample response is for the Schedule Home Visits Manually action when visitType is Recurring.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "accountId": "001xx000003GYv7AAG",
            "visitType": "StartOfCare",
            "schedulingPolicyId": "a0cxx000000fzXpAAI",
            "clinicalServiceRequestId": "0jyxx0000000001AAA",
            "serviceTerritoryId": "0Hhxx0000004C93CAE",
            "firstVisitStartDateTime": "2026-02-18T05:30:00Z",
            "firstVisitEndDateTime": "2026-02-18T07:35:00Z",
            "visitsRequired": 1,
            "skillIds": [
              "0C5SG0000003O930AE"
            ],
            "resourceDetails": [
                
  
  {
    "sequence": 1,
    "scheduleStart": "2026-02-18T05:30:00Z",
    "scheduleEnd": "2026-02-18T06:30:00Z",
    "resourceId": "0Hnxx0000004C92CAE"
  }

      ]
        }
    ]
}
```

```
{
  "inputs": [
    {
      "accountId": "001xx000003GYv7AAG",
      "visitType": "Recurring",
      "schedulingPolicyId": "a0cxx000000fzXpAAI",
      "clinicalServiceRequestId": "0jyxx0000000001AAA",
      "recurrenceFrequencyType": "Weekly",
      "recurringDaysList": [
        "Monday",
        "Tuesday"
      ],
      "operatingHoursId": "0OHxx0000004C93GAE__USER",
      "serviceTerritoryId": "0Hhxx0000004C93CAE",
      "firstVisitStartDateTime": "2026-02-23T05:30:00Z",
      "firstVisitEndDateTime": "2026-02-23T07:35:00Z",
      "visitsRequired": 2,
      "skillIds": ["0C5SG0000003O930AE"],
      "resourceDetails": [
        {
          "sequence": 1,
          "scheduleStart": "2026-02-23T05:30:00Z",
          "scheduleEnd": "2026-02-23T06:30:00Z",
          "resourceId": "0Hnxx0000004C92CAE"
        },
        {
          "sequence": 2,
          "scheduleStart": "2026-02-24T05:30:00Z",
          "scheduleEnd": "2026-02-24T06:30:00Z",
          "resourceId": "0Hnxx0000004C92CAE"
        }
      ]
    }
  ]
}
```

```
[ {"careServiceVisitId":"0oxxx00000000WHAAY"} ]
```

```
[ {"careServiceVisitPlanId":"0qExx0000000001EAA"} ]
```
