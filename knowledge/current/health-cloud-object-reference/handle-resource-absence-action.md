---
title: "Handle Resource Absence Action"
domain: health-cloud-object-reference
topic: handle-resource-absence-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.134Z
estimatedTokens: 340
keywords: [Handle, Resource, Absence, Action, Remove, service, resource’s, visit, assignments, period, optionally, status, affected, visits, Special]
---

# Handle Resource Absence Action

> Remove a service resource’s visit assignments for a specified period
			and optionally update the status of the affected visits to a specified
		value.

# Handle Resource Absence Action

Remove a service resource’s visit assignments for a specified period and optionally update the status of the affected visits to a specified value.

This action is available in API version 58.0 and later.

## Special Access Rules

The Remove Visit Assignments action is available in Enterprise and Unlimited Editions with Health Cloud enabled with the Home Health setting.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/handleResourceAbsence

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| endDateTime | TypedatetimeDescriptionRequired.End date and time of the period to remove service resource assignments from home visits. |
| newServiceAppointmentStatus | TypestringDescriptionStatus of affected service appointments after the service resource has been removed. |
| serviceResourceId | TypestringDescriptionRequired.ID of the service resource record to remove from home visits. |
| startDateTime | TypedatetimeDescriptionRequired.Start date and time of the period to remove service resource assignments from home visits. |

## Outputs

None.

## Example

POST

This sample request is for the Handle Resource Absence action.

```

```

This sample response is for the Handle Resource Absence action.

```

```

## Code Examples

```
{ 
  "inputs" : [
    {
      "endDateTime" : "2023-07-04T12:15:45.200-700",
      "newServiceAppointmentStatus" : "Resolved",
      "serviceResourceId" : "0Hnxx0000004C92CAE",
      "startDateTime" : "2023-07-04T11:00:56.235-700"
    }
  ]
}
```

```
[ {
  "actionName" : "handleResourceAbsence",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : null,
  "version" : 1
} ]
```
