---
title: "Order Summaries"
domain: chatterapi
topic: order-summaries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.515Z
estimatedTokens: 797
keywords: [Order, Summaries, OrderSummary, considered, original, Subsequent, change, orders, apply, represented, specify, whether, managed, Salesforce, Management]
---

# Order Summaries

> Create an OrderSummary based on an order. That order is considered
      the original order for the OrderSummary. Subsequent change orders that apply to the
      OrderSummary are also represented as orders. You can specify whether the order is managed in
      Salesforce Order Management or by an external system. Most Salesforce Order Management APIs
      can run only on orders that it manages.

# Order Summaries

Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Order Summary Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_input.htm "An order from which to create an OrderSummary. Optionally, you can specify OrderSummary-specific information such as its Status and whether it is managed in Salesforce Order Management.")

Root XML tag

<orderSummaryInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessModel | String | The order’s business model. It can have one of these values:B2BB2C | Optional | 53.0 |
| externalReferenceIdentifier | String | Used internally to prevent duplicate records. This value is case-sensitive. | Optional | 56.0 |
| name | String | Specifies an OrderNumber to assign to the order summary. | Optional | 50.0 |
| orderId | String | ID of the original order. | Required | 48.0 |
| orderLifeCycleType | String | Specifies whether the order is managed in Salesforce Order Management or by an external system. It can have one of these values:MANAGED—Managed in Salesforce Order Management.UNMANAGED—Managed by an external system.If no value is specified, the default is MANAGED. | Optional | 49.0 |
| sourceProcess | String | Describes the order process creating the OrderSummary. It can have one of these values:Exchange—An Exchange process.OrderOnBehalf—An Order on Behalf Of process.Standard—Any process other than Exchange or Order on Behalf Of.If no value is specified, the default is Standard. | Optional | 57.0 |
| status | String | Specifies a status to assign to the order summary. The value must match one of the picklist values on the Status field of the OrderSummary object. | Optional | 50.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is an [Order Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_output.htm "ID of the created Order Summary."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is an [Order Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_output.htm "ID of the created Order Summary."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/order-management/order-summaries
```

```
{
  "orderId": "801xx000003GbTgAAK"
}
```

## Related Topics

- Order Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_input.htm)
- Order Summary Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
