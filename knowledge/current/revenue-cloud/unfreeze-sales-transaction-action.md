---
title: "Unfreeze Sales Transaction Action"
domain: revenue-cloud
topic: unfreeze-sales-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.195Z
estimatedTokens: 464
keywords: [Unfreeze, Sales, Transaction, Action, enable, modification, line, item, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Unfreeze Sales Transaction Action

> Unfreeze a sales transaction to enable the modification of a line
            item.

# Unfreeze Sales Transaction Action

Unfreeze a sales transaction to enable the modification of a line item.

A line item can reach a milestone in the fulfillment process, which is known as a point of no return, where the line item can’t accept modifications. Get details about the point of no return for each line item of a sales transaction.

This action is available in API version 64.0 and later.

## Special Access Rules

The Unfreeze Sales Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=ind.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&type=5&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/unfreezeSalesTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| salesTransactionId | TypeidDescriptionRequired. ID of the sales transaction that's submitted to the Dynamic Revenue Orchestrator. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionCode indicating the type of error. |
| orchestrationPlanId | TypeidDescriptionID of the created orchestration plan. |
| planState | TypestringDescriptionStatus of the created orchestration plan. Valid values are:FAILURENOTSTARTEDPENDINGCOMPLETEDFROZENINPROGRESS |
| requestId | TypestringDescriptionID of the request to get the point of no return details. |
| salesTransaction​Id | TypestringDescriptionID of the sales transaction that's submitted to the Dynamic Revenue Orchestrator. |

## Example

POST

This sample request is for the Unfreeze Sales Transaction action.

```

```

This sample response is for the Unfreeze Sales Transaction action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "salesTransactionId": "801SG00000jQO1ZYAW"
    }
  ]
}
```

```
[
  {
    "actionName": "unfreezeSalesTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "orchestrationPlanId": "13VSG00000229Z72AI",
      "salesTransactionId": "801SG00000jQO1ZYAW",
      "planState": "InProgress",
      "requestId": "e9f2d961-b218-4911-8fee-8de31937850d"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
