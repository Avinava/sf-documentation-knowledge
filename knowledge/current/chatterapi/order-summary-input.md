---
title: "Order Summary Input"
domain: chatterapi
topic: order-summary-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.324Z
estimatedTokens: 531
keywords: [Order, Summary, Input, OrderSummary, Optionally, specify, OrderSummary-specific, Status, whether, managed, Salesforce, Management]
---

# Order Summary Input

> An order from which to create an OrderSummary. Optionally, you can
      specify OrderSummary-specific information such as its Status and whether it is managed in
      Salesforce Order Management.

# Order Summary Input

An order from which to create an OrderSummary. Optionally, you can specify OrderSummary-specific information such as its Status and whether it is managed in Salesforce Order Management.

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

#### See Also

-   [Order Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries.htm "Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages.")

## Code Examples

```
{
  "orderId": "801xx000003GbTgAAK"
}
```

## Related Topics

- Order Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries.htm)
