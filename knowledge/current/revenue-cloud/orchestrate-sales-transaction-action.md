---
title: "Orchestrate Sales Transaction Action"
domain: revenue-cloud
topic: orchestrate-sales-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.054Z
estimatedTokens: 824
keywords: [Orchestrate, Sales, Transaction, Action, Initiate, orchestration, process, executes, plan, composition, phases, performing, decomposition, Special, Access]
---

# Orchestrate Sales Transaction Action

> Initiate the orchestration process for a sales
            transaction. This action executes only the plan composition and orchestration
        phases, without performing decomposition.

# Orchestrate Sales Transaction Action

Initiate the orchestration process for a sales transaction. This action executes only the plan composition and orchestration phases, without performing decomposition.

Specify the ID of the sales transaction to orchestrate. The decomposition process includes these steps.

-   Intake process
-   Fulfillment orchestration

The intake process occurs synchronously or asynchronously, as specified with the intakeRequestType input parameter. You can also specify the orchestration priority using the fulfillmentPriority parameter.

Use this action when the sales transaction is decomposed either by a previous decomposition action or by custom logic before orchestrating the fulfillment plan.

This action is available in API version 66.0 and later.

## Special Access Rules

The Orchestrate Sales Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=sf.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/orchestrateSalesTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| allowOverride​OfPointOfNoReturn | TypebooleanDescriptionIndicates whether to override the point-of-no-return setting for the fulfillment step (true) or not (false). The default value is false. |
| fulfillmentAdapter | TypestringDescriptionRequired. Type of fulfillment adapter. Valid values are:StandardOrderGenericAdapter |
| fulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| hydratedContextId | TypestringDescriptionID of the hydrated context. |
| intakeRequestType | TypestringDescriptionType of request to process the intake. Valid values are:SynchronousAsynchronous |
| priorityLimit​Action | TypestringDescriptionType of action to perform when the priority limit is reached. Valid values are:RejectDowngradeThis parameter is applicable only when you specify the fulfillmentPriority parameter. |
| salesTransactionId | TypeidDescriptionRequired. ID of the sales transaction to submit. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionCode indicating the type of error. |
| fulfillmentPlanId | TypeidDescriptionID of the composed fulfillment plan. |
| requested​FulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| requestId | TypestringDescriptionRequest ID of the invocation. |
| resolved​FulfillmentPriority | TypestringDescriptionResolved priority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| submitStatus | TypestringDescriptionSubmission status of the sales transaction for orchestration. Valid values are:SUCCESSERRORSUBMITTEDREJECTED |
| usedContextId | TypestringDescriptionID of the context that updates the orchestration process. |

## Example

POST

This sample request is for the Orchestrate Sales Transaction action.

```

```

This sample response is for the Orchestrate Sales Transaction action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "fulfillmentAdapter": "StandardOrder",
            "intakeRequestType": "Synchronous",
            "salesTransactionId": "801xx000003GYgZAAW"
        }
    ]
}
```

```
[
  {
    "actionName": "orchestrateSalesTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "usedContextId": "0000000s21to18g00091764134566956e2100424de0d4af8869669df515e24cb",
      "requestId": "ac2a9d18-c702-43ee-bc08-1c03061b549c",
      "fulfillmentPlanId": "13Vxx0000004CFUEA2",
      "submitStatus": "SUCCESS",
      "resolvedFulfillmentPriority": "Default",
      "requestedFulfillmentPriority": "Default"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
