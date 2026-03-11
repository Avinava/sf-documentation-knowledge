---
title: "Building a Synchronous Gateway Adapter"
domain: apex-guide
topic: building-a-synchronous-gateway-adapter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.726Z
keywords: [Building, Synchronous, Gateway, Adapter, Note, PaymentGatewayAdapter, Processing, Initial, Payment, Request, Custom, Data]
---

# Building a Synchronous Gateway Adapter

# Building a Synchronous Gateway Adapter

In synchronous payment configurations, the Salesforce payment platform sends transaction information to the gateway, and then waits for a gateway response that contains the final transaction status. Salesforce creates a transaction only if the transaction is successful in the gateway.

A synchronous gateway adapter implements the [PaymentGatewayAdapter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAdapter.htm#apex_interface_commerce_payments_PaymentGatewayAdapter). In this topic, we examine a sample synchronous adapter by looking at PaymentGatewayAdapter, and then the processRequest method, which drives most of the communication between the payment platform and the payment gateway.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Payment gateway adapters can’t make future calls, external callouts using System.Http, asynchronous calls, queueable calls, or execute DMLs using SOQL.

## PaymentGatewayAdapter

All synchronous gateways must implement the PaymentGatewayAdapter interface. All PaymentGatewayAdapters are required to implement the processRequest method.

```

```

## Processing an Initial Payment Request

When the payments platform receives a payments API request, it passes the request to your gateway adapter for further evaluation. The adapter begins the request evaluation process by calling the processRequest method, which represents the first step in a synchronous payment flow. We can break the processRequest implementation into three parts.

First, it builds a payment request object that the gateway can understand.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

We don't recommend encoding the request body, which contains the merge fields, including the card number and CVV. This can cause the request to fail to read the encoded request body and to fail to replace the merge field values.

Then, the adapter sends the request to the payment gateway.

```

```

Finally, the adapter creates a response object to store data from the gateway’s response. The type of response object varies based on whether you originally made a payment capture request or a refund request.

```

```

## Using Custom Data

To transfer additional, custom data from the frontend to your payment gateway adapter, use the [Checkout Payments Connect API](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_payments.htm). Sending custom data to the adapter supports use cases like implementing conditional logic based on specific data or mapping asynchronous webhook events to a cart by passing an identifier.

To send custom data to your payment gateway adapter, use the paymentsData parameter in the [Checkout Payments Connect API](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_payments.htm) input payload. This parameter is a serialized map of type <String, String> that supports up to four key-value pairs. Each key and each value can contain up to 255 characters. paymentsData is only applicable to Auth and PostAuth payment requests. Simple purchase orders don’t support paymentsData.

Similarly, the [Post Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_payment_post_auth.htm) input payload has an additionalData property, which is also a map of type<String, String>. The paymentsData property is accepted for Auth and PostAuth requests and is transferred to the Payment APIs through the additionalData property.