---
title: "Create Orders From Quote Action"
domain: revenue-cloud
topic: create-orders-from-quote-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.707Z
estimatedTokens: 800
keywords: [Create, Orders, Quote, Action, multiple, orders, single, quote, instead, order, ensuring, easier, management, fulfillment, operations., Special, Access, Rules, Supported, REST]
---

# Create Orders From Quote Action

> Create multiple orders from a single quote instead of a single
            order, ensuring easier order management and fulfillment operations.

# Create Orders From Quote Action

Create multiple orders from a single quote instead of a single order, ensuring easier order management and fulfillment operations.

You can split a quote to create orders in these ways.

-   You can create an order by selecting a subset of quote line items.
-   You can split a quote into multiple orders based on quote line group.
-   You can split a quote into multiple orders based on a quote line item field, such as Product2.

See [Considerations for Creating Multiple Orders from a Quote](https://help.salesforce.com/s/articleView?id=ind.qocal_split_quote_to_orders_important_considerations.htm&language=en_US "HTML (New Window)"). This action is available in API version 65.0 and later.

## Special Access Rules

Ensure the **Advanced Order Creation From Quote** toggle from Revenue Settings from Setup is enabled to access this action.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createOrdersFromQuote

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| orderCreationMethod | TypestringDescriptionIf specified, represents the method used to create orders. Valid values are:CreateSingleOrder—Creates a single order from a quote. This method creates the order header and order line items synchronously.CreateOrderByGroup—Create multiple orders based on a quote line group.CreateOrderByField—Create multiple orders based on a specified quote line item field.If you're creating multiple orders from a quote, the order header records are created synchronously and order line items are created asynchronously. If unspecified, the default value is CreateSingleOrder. |
| orderCreationParameters | TypeApex-definedDescriptionAn Apex ConnectApi.OrderCreationParametersInputRepresentation record that contains the additional parameters required by the specified order creation method. |
| quoteId | TypeidDescriptionRequired.The ID of the source quote tied to the orders created. |
| quoteLineItemIds | TypeidDescriptionList of quote line item IDs to create the orders from. If specified, the orders are created for the list of provided quote line items. If unspecified, orders are created for all quote line items. |

## Outputs

| Output | Details |
| --- | --- |
| orderIds | TypeidDescriptionList of the created order IDs. |
| requestId | TypestringDescriptionThe request ID used to query the async status. |
| statusUrl | TypestringDescriptionThe status URL that's used to track the async status. |

## Examples

Create a partial order from a quote

This example shows a sample request to create a partial order from a quote.

```

```

This example shows a sample successful response.

```

```

Create orders from a quote based on a quote line group

This example shows a sample request to create orders from a quote based on a quote line group.

```

```

This example shows a sample successful response.

```

```

Create orders from a quote based on a quote line item field

This example shows a sample request to create orders from a quote based on a quote line item field

```

```

This example shows a sample successful response.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "quoteId": "0Q0DU0000005tJc0AI",
      "quoteLineItemIds": [
        "0QLDU000000ay2G4AQ",
        "0QLDU000000ay2n4AA"
      ],
      "orderCreationMethod": "CreateSingleOrder"
    }
  ]
}
```

```
{
    "actionName": "createOrdersFromQuote",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "requestId": null,
      "statusUrl": null,
      "orderIds": [
        "801DU000000EYySYAW"
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
```

```
{
  "inputs": [
    {
      "quoteId": "0Q0DU0000005tJk0AI",
      "orderCreationMethod": "CreateOrderByGroup"
    }
  ]
}
```

```
{
  "actionName": "createOrdersFromQuote",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "requestId": "16PRM0000004DBq",
    "orderIds": [
      "801S70000001VKgIAM"
    ],
    "success": true,
    "errors": [],
    "statusURL": "/services/data/v66.0/sobjects/AsyncOperationTracker/16PRM0000004DBq"
  },
  "sortOrder": -1,
  "version": 1
}
```

```
{
  "inputs": [
    {
      "quoteId": "0Q0DU0000005tJW0AY",
      "orderCreationMethod": "CreateOrderByField",
      "orderCreationParameters": {
        "splitFieldName": "Product2Id"
      }
    }
  ]
}
```
