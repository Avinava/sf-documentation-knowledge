---
title: "Freeze Sales Transaction Action"
domain: revenue-cloud
topic: freeze-sales-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.914Z
estimatedTokens: 514
keywords: [Freeze, Sales, Transaction, Action, disable, modification, line, item, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Freeze Sales Transaction Action

> Freeze a sales transaction to disable the modification of a line
            item.

# Freeze Sales Transaction Action

Freeze a sales transaction to disable the modification of a line item.

A line item can reach a milestone in the fulfillment process, which is known as a point of no return, where the line item can’t accept modifications. Get details about the point of no return for each line item of a sales transaction.

This action is available in API version 64.0 and later.

## Special Access Rules

The Freeze Sales Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=ind.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&type=5&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/freezeSalesTransaction

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
| orchestration​PlanId | TypeidDescriptionID of the created orchestration plan. |
| planState | TypestringDescriptionStatus of the created orchestration plan. Valid values are:FAILURENOTSTARTEDPENDINGCOMPLETEDFROZENINPROGRESS |
| pointOf​NoReturn​DetailFor​LineItems​List | TypestringDescriptionCollection of sales transaction line items, where each item includes a boolean value indicating whether it has reached the point of no return. |
| requestId | TypestringDescriptionID of the request to get the point of no return details. |
| salesTransaction​Id | TypestringDescriptionID of the sales transaction that's submitted to the Dynamic Revenue Orchestrator. |

## Example

POST

This sample request is for the Freeze Sales Transaction action.

```

```

This sample response is for the Freeze Sales Transaction action.

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
    "actionName": "freezeSalesTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "salesTransactionId": "801SG00000jQO1ZYAW",
      "orchestrationPlanId": "13VSG00000229Z72AI",
      "requestId": "452789a6-f2ab-4079-8aca-a11dbfef6a45",
      "pointOfNoReturnDetailForLineItemsList": "802SG000007D0B4YAK": {
amendAllowed: false,
anyChangesAllowed: true,
cancelAllowed: false
}, 
802SG000007D0B3YAK": {
amendAllowed: false,
anyChangesAllowed: true,
cancelAllowed: false
}",
      "planState": "Frozen"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
