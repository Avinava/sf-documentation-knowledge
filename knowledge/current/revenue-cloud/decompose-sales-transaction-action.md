---
title: "Decompose Sales Transaction Action"
domain: revenue-cloud
topic: decompose-sales-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.882Z
estimatedTokens: 788
keywords: [Decompose, Sales, Transaction, Action, quote, order, summary, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Decompose Sales Transaction Action

> Decompose a sales transaction, such as a quote, order, or
            order summary.

# Decompose Sales Transaction Action

Decompose a sales transaction, such as a quote, order, or order summary.

Specify the ID of the sales transaction to decompose. The decomposition process includes these steps.

-   Intake process
-   Sales transaction decomposition

The intake process occurs synchronously or asynchronously, as specified with the intakeRequestType input parameter. You can also specify the decomposition priority using the fulfillmentPriority parameter.

This action executes only the decomposition process and stops before orchestration. You can execute custom logic in between the decomposition and orchestration processes.

This action is available in API version 66.0 and later.

## Special Access Rules

The Decompose Sales Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=sf.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/decomposeSalesTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| allowOverride​OfPointOfNoReturn | TypebooleanDescriptionIndicates whether to override the point of no return setting for the fulfillment step (true) or not (false). The default value is false. |
| fulfillmentAdapter | TypestringDescriptionRequired.Type of fulfillment adapter. Valid values are:StandardOrderGenericAdapter |
| fulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| hydratedContextId | TypestringDescriptionID of the hydrated context. |
| intakeRequestType | TypestringDescriptionType of request to process the intake. Valid values are:SynchronousAsynchronous |
| priorityLimit​Action | TypestringDescriptionType of action to perform when the priority limit is reached. Valid values are:RejectDowngradeThis parameter is applicable only when you specify the fulfillmentPriority parameter. |
| sales​TransactionId | TypeidDescriptionRequired. ID of the sales transaction to submit. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionCode that corresponds to the type of error encountered. |
| requested​FulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| requestId | TypestringDescriptionRequest ID of the invocation. |
| resolved​FulfillmentPriority | TypestringDescriptionResolved priority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| submitStatus | TypestringDescriptionSubmission status of the sales transaction for decomposition. Valid values are:SuccessErrorSubmittedRejected |
| usedContextId | TypestringDescriptionID of the used context that updates the decomposition process. |

## Example

POST

This sample request is for the Decompose Sales Transaction action.

```

```

This sample response is for the Decompose Sales Transaction action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "fulfillmentAdapter": "StandardOrder",
      "intakeRequestType": "Synchronous",
      "salesTransactionId": "801xx000003GYexAAG"
    }
  ]
}
```

```
[
  {
    "actionName": "decomposeSalesTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "requestId": "ee3ded2e-fe43-401b-a54d-9124d48a0b72",
      "requestedFulfillmentPriority": "Default",
      "submitStatus": "SUCCESS",
      "usedContextId": "0000000s21to18g0009176412796953180a8259def914e1abbd863dde076b71f",
      "resolvedFulfillmentPriority": "Default"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
