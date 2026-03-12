---
title: "Get Point Of No Return Action"
domain: revenue-cloud
topic: get-point-of-no-return-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.835Z
estimatedTokens: 447
keywords: [Get, Point, Action, details, point, milestone, line, item, sales, transaction., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Get Point Of No Return Action

> Get details about the point of no return milestone for each line
            item in a sales transaction.

# Get Point Of No Return Action

Get details about the point of no return milestone for each line item in a sales transaction.

A line item can reach a milestone in the fulfillment process, which is known as a point of no return, where the line item can’t accept modifications. Get details about the point of no return for each line item of a sales transaction.

This action is available in API version 64.0 and later.

## Special Access Rules

The Get Point Of No Return action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=ind.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&type=5&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getPointOfNoReturn

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| salesTransactionId | TypeidDescriptionRequired. ID of the sales transaction to get the point of no return details for. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionCode indicating the type of error. |
| lineItems​PointOf​NoReturn​Info | TypestringDescriptionLine items with the point of no return details. |
| planId | TypeidDescriptionID of the composed fulfillment plan. |
| planState | TypestringDescriptionState of the fulfillment plan. |
| requestId | TypestringDescriptionRequest ID of the invocation. |
| salesTransaction​Id | TypestringDescriptionID of the submitted sales transaction. |

## Example

POST

This sample request is for the Get Point Of No Return action.

```

```

This sample response is for the Get Point Of No Return action.

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
    "actionName": "getPointOfNoReturn",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "planId": "13VSG00000229Z72AI",
      "requestId": "35c9388b-d30d-4d68-aae5-c109c8bff7ef",
      "lineItemsPointOfNoReturnInfo": "802SG000007D0B4YAK": {
amendAllowed: false,
anyChangesAllowed: true,
cancelAllowed: false
}, 
802SG000007D0B3YAK": {
amendAllowed: false,
anyChangesAllowed: true,
cancelAllowed: false
}",
      "salesTransactionId": "801SG00000jQO1ZYAW",
      "planState": "InProgress"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
