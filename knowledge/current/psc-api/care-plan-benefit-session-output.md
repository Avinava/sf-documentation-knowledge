---
title: "Care Plan Benefit Session Output"
domain: psc-api
topic: care-plan-benefit-session-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.736Z
estimatedTokens: 136
keywords: [Care, Plan, Benefit, Session, Output, representation, benefits, their, associated, sessions, JSON]
---

# Care Plan Benefit Session Output

> Output representation of benefits and their associated benefit
         sessions in a care plan.

# Care Plan Benefit Session Output

Output representation of benefits and their associated benefit sessions in a care plan.

## JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| benefitSessionInfo | Care Plan Benefit Session Info List | List of benefits and their associated benefit sessions in a care plan. | Small, 58.0 | 58.0 |
| carePlanId | String | ID of the care plan to get details of its associated benefit sessions. | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "carePlanId":"1spxx0000000001AAA",
   "benefitSessionInfo":{
      "records":[
         {
            "assignmentCount":2,
            "benefitId":"0jixx0000000001AAA",
            "benefitName":"LIHEAP Assistance",
            "sessionEnrolleeInfo":{
               "records":[
                  {
                     "benefitAssignmentId":"0nDxx0000000001EAA",
                     "benefitEndDate":"2023-06-30T19:00:00.000Z",
                     "enrolleeId":"001xx000003GYp9AAG",
                     "enrolleeName":"acc1",
                     "sessionsEnrolled":10
                  },
                  {
                     "benefitAssignmentId":"0nDxx000000003FEAQ",
                     "benefitEndDate":"2023-05-30T19:00:00.000Z",
                     "enrolleeId":"001xx000003GYp9AAG",
                     "enrolleeName":"acc1",
                     "sessionsEnrolled":1
                  }
               ]
            }
         },
         {
            "assignmentCount":2,
            "benefitId":"0jixx0000000001AAA",
            "benefitName":"Child Education",
            "sessionEnrolleeInfo":{
               "records":[
                  {
                     "benefitAssignmentId":"0nDxx0000000001EAA",
                     "benefitEndDate":"2023-06-30T19:00:00.000Z",
                     "enrolleeId":"001xx000003GYp9AAG",
                     "enrolleeName":"acc2",
                     "sessionsEnrolled":1
                  },
                  {
                     "benefitAssignmentId":"0nDxx000000001dEAA",
                     "benefitEndDate":"2022-12-23T20:00:00.000Z",
                     "enrolleeId":"001xx000003GYp9AAG",
                     "enrolleeName":"acc2",
                     "sessionsEnrolled":2
                  }
               ]
            }
         }
      ]
   }
}
```

## Related Topics

- Care Plan Benefit Session Info List (atlas.en-us.psc_api.meta/psc_api/connect_responses_care_plan_benefit_session_info_list.htm)
