---
title: "Run Integration Plan"
domain: financial-services-cloud-object-reference
topic: run-integration-plan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.733Z
estimatedTokens: 274
keywords: [Run, Integration, Plan, Triggers, Dynamic, Fulfillment, Orchestration, ensures, callout, happens, right, time, queuing, alongside, dependent]
---

# Run Integration Plan

> Triggers an integration plan using Dynamic Fulfillment Orchestration, which ensures each
  callout happens at the right time by queuing it alongside its dependent steps.

# Run Integration Plan

Triggers an integration plan using Dynamic Fulfillment Orchestration, which ensures each callout happens at the right time by queuing it alongside its dependent steps.

This action is available in API version 60.0 and later for users with a Financial Services Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/runIntegrationPlan

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| contextId | TypeIDDescriptionID of the Context Service which references the record ID that supplies expression set input parameters. Recommended record objects are Applicant, ApplicationForm, and PartyProfile. |
| integrationPlanId | TypeIDDescriptionID of the integration plan, which includes each callout step and step dependency. |

## Outputs

| Input | Details |
| --- | --- |
| status | TypeIDDescriptionStatus of the integration plan’s progress. Valid values are Running, Not Started, Failed. |

## Example

JSON Request Body

```

```

JSON Response Body

```

```

## Code Examples

```
{
  "inputs": {
    "integrationPlanId" : "13VSB000000IsYD2A0"
  }
}
```

```
{
  "actionName": "runIntegrationPlan",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "status": "SUCCESS"
  },
  "version": 1
}
```
