---
title: "Submit Order Action"
domain: revenue-cloud
topic: submit-order-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.174Z
estimatedTokens: 1024
keywords: [Submit, Order, Action, Dynamic, Revenue, Orchestrator, DRO, fulfillment, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Submit Order Action

> Submit an order to Dynamic Revenue Orchestrator (DRO) for
			fulfillment.

# Submit Order Action

Submit an order to Dynamic Revenue Orchestrator (DRO) for fulfillment.

By using the Submit Order action, you can perform:

-   Order decomposition
-   Fulfillment orchestration that’s driven through message queues
-   Dynamic plan composition that’s based on the incoming order

This action is available in API version 61.0 and later.

## Special Access Rules

The Submit Order action is available in Enterprise, Unlimited, and Developer Editions of Revenue Cloud. See the [required permissions](https://help.salesforce.com/s/articleView?id=ind.dro_permission_sets_in_dynamic_revenue_orchestrator.htm&type=5&language=en_US "HTML (New Window)") to access and call this invocable action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/submitOrder

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| orderId | TypestringDescriptionRequired.ID of the order to submit to DRO. |
| callType | TypestringDescriptionOptional.Mode that the order intake must be processed in. Valid values are:SynchronousAsynchronousThe default value is Asynchronous. |
| contextId | TypestringDescriptionOptional.ID of the hydrated context. See Context Service. |

## Outputs

| Output | Details |
| --- | --- |
| errorCode | TypestringDescriptionError code for the failed request, if any. |
| fulfillmentPlanId | TypestringDescriptionID of the orchestrated fulfillment plan that’s generated. Returned only if the callType value is Synchronous. |
| requestId | TypestringDescriptionUnique ID of the invocation request that helps identify a single request. |
| submitStatus | TypestringDescriptionSubmit status of the invocation request.Valid values are:SUCCESSERRORSUBMITTEDREJECTED |
| usedContextId | TypestringDescriptionHydrated context ID that’s used in this request, which can be different from the contextId input. |

## Example

POST

This example shows a sample request.

```

```

This example shows a sample response when the call type is synchronous.

```

```

This example shows a sample response when the call type is asynchronous or isn’t specified.

```

```

This example shows a sample response when a validation error occurs.

```

```

## Explainability Action Logs

To troubleshoot or debug errors, retrieve a list of explainability action logs. See [Action Logs](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/connect_resources_get_create_action_logs.htm "HTML (New Window)").

Get logs for order intake

This resource example includes sample query parameters to retrieve the action logs for an order intake.

```

```

This example shows the sample response. The actionLog property contains the action logs.

```

```

Get logs for decomposition scope

This resource example includes sample query parameters to retrieve the decomposition-related action logs.

```

```

This example shows the sample response. The actionLog property contains the action logs.

```

```

Get logs for decomposition enrichment

This resource example includes sample query parameters to retrieve the logs for decomposition enrichment tasks. For example, conversion of order items to fulfillment order line items.

```

```

The secondaryFilter property is optional. If this property is specified, the API returns the enrichment rule details for a decomposition rule. If this property is unspecified, the API returns all enrichment rule details for the order.

This example shows the sample response. The actionLog property contains the action logs.

```

```

Get logs for plan composition

This resource example includes sample query parameters to retrieve the logs for plan composition.

```

```

This example shows the sample response. The actionLog property contains the action logs.

```

```

Capture logs for an order

This resource example includes sample query parameters to retrieve the logs for an order.

```

```

This example shows the sample response. The actionLog property contains the action logs.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "orderId": "801RM0000007yGaYAI",
            "callType": "Synchronous"
        }
    ]
}
```

```
[
    {
   "actionName":"submitOrder"
   "errors":NULL
   "invocationId":NULL
   "isSuccess":true
   "outputValues":{
   "requestId":"a161cfda-868c-41d2-b589-7c7d7ff2d4c1"
   "submitStatus":"SUCCESS"
   "usedContextId":"e275e930923106ee7e39cbfa232e38252bd4d63f4ea2dd956b7301e243554134"
   "fulfillmentPlanId":"13VZM00000000062AA"
}
]
```

```
[
{
    "actionName": "submitOrder",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
    "submitStatus": "SUBMITTED"
    "requestId": "a161cfda-868c-41d2-b589-7c7d7ff2d4c1"
}
}
]
```

```
[
    {
    "actionName": "submitOrder",
    "errors": [
    {
        "statusCode": "UNKNOWN_EXCEPTION",
        "message": "Missing required input parameter: orderId",
        "fields": []
     }
  ],
        "invocationId": null,
        "isSuccess": false,
        "outputValues": {
          "requestId": "4c7d8ebb-6b0b-4852-a8a0-b67e0d36a73e",
          "errorCode": "DRO_INTERNAL_ERROR"
        },
    }
]
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/decision-explainer/action-logs?applicationSubType=DroSubmit&applicationType=7&processType=DroSubmit&primaryFilter=801xx000003GYzvAAG
```
