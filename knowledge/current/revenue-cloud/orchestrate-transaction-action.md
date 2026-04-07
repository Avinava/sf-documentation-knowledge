---
title: "Orchestrate Transaction Action"
domain: revenue-cloud
topic: orchestrate-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:01:55.193Z
estimatedTokens: 484
keywords: [Orchestrate, Transaction, Action, any, domain-specific, collection, plan, Revenue, billing, requires, composition, execution, fulfillment, Special, Access]
---

# Orchestrate Transaction Action

> Orchestrate a transaction for any
            domain-specific object, such as a collection plan for Revenue billing, that requires the
            composition and execution of a fulfillment plan.

# Orchestrate Transaction Action

Orchestrate a transaction for any domain-specific object, such as a collection plan for Revenue billing, that requires the composition and execution of a fulfillment plan.

Specify the ID of the transaction to orchestrate and the orchestration type. The orchestration process includes:

-   Composition of the orchestration plan
-   Execution of the fulfillment plan

This action is available in API version 66.0 and later.

## Special Access Rules

The Orchestrate Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=sf.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&language=en_US "HTML (New Window)") to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/orchestrateTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| transactionId | TypestringDescriptionRequired. ID of the business object or domain object to be orchestrated, such as a Collection Plan ID. |
| orchestration​Type | TypestringDescriptionRequired. Type of orchestration that’s used to orchestrate the transaction. Valid values are:GenericFulfillmentBilling |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionRequest ID of the invocation. |
| errorCode | TypestringDescriptionCode that corresponds to the type of encountered error. |
| fulfillment​PlanId | TypestringDescriptionID of the composed fulfillment plan. |
| submitStatus | TypestringDescriptionSubmission status of the transaction that’s orchestrated. Valid values are:SuccessError |

## Example

POST

This sample request is for the Orchestrate Transaction action.

```

```

This sample response is for the Orchestrate Transaction action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "transactionId": "801xx000003GYexAAG",
      "orchestrationType": "Fulfillment"
    }
  ]
}
```

```
[
  {
    "actionName": "orchestrateTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "requestId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "fulfillmentPlanId": "0000000s21to18g0009176412796953180a8259def914e1abbd863dde076b71f",
      "submitStatus": "SUCCESS"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
