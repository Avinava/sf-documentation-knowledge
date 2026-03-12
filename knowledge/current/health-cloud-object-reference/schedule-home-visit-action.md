---
title: "Schedule Home Visit Action"
domain: health-cloud-object-reference
topic: schedule-home-visit-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.187Z
estimatedTokens: 276
keywords: [Schedule, Home, Visit, Action, patient, assess, condition, scheduling, recurring, visits, care, Special, Access, Rules, REST]
---

# Schedule Home Visit Action

> Schedule a home visit for the patient to assess the condition before
			scheduling the recurring visits for the patient care.

# Schedule Home Visit Action

Schedule a home visit for the patient to assess the condition before scheduling the recurring visits for the patient care.

This action is available in API version 58.0 and later.

## Special Access Rules

The Schedule Home Visit action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/scheduleHomeVisit

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| schedulingPolicyId | TypeStringDescriptionRequired.ID of the scheduling policy that determines the service resource and the visit time to assign to the specified service appointment. |
| serviceAppointmentId | TypeStringDescriptionRequired.ID of the service appointment that’s assigned a service resource for the home visit. |

## Outputs

None.

## Example

POST

This sample request is for the Schedule Home Visit action.

```

```

This sample response is for the Schedule Home Visit action.

```

```

## Code Examples

```
{ 
  "inputs" : [
    {
      "schedulingPolicyId" : "7sTSG00000001H32AI",
      "serviceAppointmentId" : "08pSG0000000QSLYA2"
    }
  ]
}
```

```
[ {
  "actionName" : "scheduleHomeVisit",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : null,
  "version" : 1
} ]
```
