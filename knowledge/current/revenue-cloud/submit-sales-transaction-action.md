---
title: "Submit Sales Transaction Action"
domain: revenue-cloud
topic: submit-sales-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.184Z
estimatedTokens: 771
keywords: [Submit, Sales, Transaction, Action, Initiate, fulfillment, process, any, quote, order, summary, Special, Access, Rules, REST]
---

# Submit Sales Transaction Action

> Initiate the fulfillment process of any sales transaction, such as a
            quote, an order, or an order summary.

# Submit Sales Transaction Action

Initiate the fulfillment process of any sales transaction, such as a quote, an order, or an order summary.

Specify the ID of the sales transaction to be fulfilled. The fulfillment process includes these steps.

-   Intake process
-   Fulfillment orchestration

The intake process happens synchronously or asynchronously, which is specified by using the intakeRequestType input parameter. You can also specify the priority for the execution of the fulfillment process, which is specified by using the fulfillmentPriority parameter.

This action is available in API version 63.0 and later.

## Special Access Rules

The Submit Sales Transaction action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=ind.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&type=5&language=en_US) to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/submitSalesTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| allowOverrideOfPointOfNoReturn | TypebooleanDescriptionIndicates whether to override the point of no return setting for the fulfillment step (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| fulfillmentAdapter | TypestringDescriptionType of fulfillment adapter. Valid values are:StandardOrderGenericAdapter—Available in API version 64.0 and later. |
| fulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| hydratedContextId | TypestringDescriptionID of the hydrated context. |
| intakeRequestType | TypestringDescriptionType of request to process the intake. Valid values are:SynchronousAsynchronous |
| priorityLimitAction | TypestringDescriptionType of action to perform when the priority limit is reached. Valid values are:RejectDowngradeThis parameter is applicable only when you specify the fulfillmentPriority parameter. |
| salesTransactionId | TypeidDescriptionRequired. ID of the sales transaction to submit. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionCode indicating the type of error. |
| fulfillmentPlanId | TypeidDescriptionID of the composed fulfillment plan. |
| requestedFulfillmentPriority | TypestringDescriptionPriority to fulfill the sales transaction. Valid values are:HighBulkDefault |
| requestId | TypestringDescriptionRequest ID of the invocation. |
| resolvedFulfillmentPriority | TypestringDescriptionResolved priority to fulfill the sales transaction. |
| submitStatus | TypestringDescriptionSubmit status of the invocation. |
| usedContextId | TypestringDescriptionID of the used context that updates the decomposition process. |

## Example

POST

This sample request is for the Submit Sales Transaction action.

```

```

This sample response is for the Submit Sales Transaction action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "allowOverrideOfPointOfNoReturn": false,
      "salesTransactionId": "801DV000000CbIPYA0",
      "intakeRequestType": "Synchronous",
      "fulfillmentAdapter": "StandardOrder",
      "fulfillmentPriority": "Default",
      "priorityLimitAction": "Reject"
    }
  ]
}
```

```
[
  {
    "actionName": "submitSalesTransaction",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "submitStatus": "SUCCESS",
      "resolvedFulfillmentPriority": "Default",
      "requestedFulfillmentPriority": "Default",
      "usedContextId": "0abc8db32b30d09c5051e4561f0b39d938a3bd8db4ccb13e04d41019e427211d",
      "requestId": "927f72b7-85e0-4b5d-b92e-c265f41898f0",
      "fulfillmentPlanId": "13VDV00000008M92AI"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
