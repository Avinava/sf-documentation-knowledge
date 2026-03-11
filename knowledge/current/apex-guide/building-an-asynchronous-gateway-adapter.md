---
title: "Building an Asynchronous Gateway Adapter"
domain: apex-guide
topic: building-an-asynchronous-gateway-adapter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.698Z
keywords: [Building, Asynchronous, Gateway, Adapter, Note, Payment, Definition, Processing, Initial, Request, Notification, Custom, Data, Debugging]
---

# Building an Asynchronous Gateway Adapter

# Building an Asynchronous Gateway Adapter

In an asynchronous payments configuration, the payments platform first sends transaction information to the gateway. The gateway responds with an acknowledgment that it received the transaction, and then the platform creates a pending transaction. The gateway sends a notification, which contains the final transaction status. The platform then updates the transaction’s status accordingly.

The asynchronous process differs from synchronous transactions, where the platform does not create a pending transaction after the initial gateway request. Instead, the platform creates a transaction only after the gateway sends a response containing the final transaction status. For information on building a synchronous adapter, review [Building a Synchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_concept.htm "In synchronous payment configurations, the Salesforce payment platform sends transaction information to the gateway, and then waits for a gateway response that contains the final transaction status. Salesforce creates a transaction only if the transaction is successful in the gateway.").

An asynchronous configuration requires both a synchronous gateway adapter and an asynchronous adapter. In this topic, we’ll break down a sample asynchronous adapter by looking at several important areas.

-   Defining an asynchronous payment gateway adapter
-   Processing the initial payment request
-   Processing a notification from the payment gateway
-   Debugging gateway responses using system debug logs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Payment gateway adapters can’t make future calls, external callouts using System.Http, asynchronous calls, queueable calls, or execute DMLs using SOQL.

## Asynchronous Payment Gateway Adapter Definition

An asynchronous gateway adapter class must implement both the [PaymentGatewayAdapter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAdapter.htm#apex_interface_commerce_payments_PaymentGatewayAdapter) and the [PaymentGatewayAsyncAdapter Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm#apex_interface_commercepayments_PaymentGatewayAsyncAdapter). The adapter class must also implement the processRequest method for PaymentGatewayAdapter and the processNotification method for PaymentGatewayAsyncAdapter.

```

```

## Processing an Initial Payment Request

When the payments platform receives a payments API request, it passes the request to your gateway adapter for further evaluation. The adapter begins the request evaluation process by calling the **processRequest** method, which represents the first step in an asynchronous payment flow. We can break the processRequest implementation into three parts.

First, it builds a payment request object that the gateway can understand.

```

```

Then, the adapter sends the request to the payment gateway.

```

```

Finally, the adapter creates a response object to store data from the gateway’s response. The type of response object will vary based on whether you originally made a payment capture request or a refund request.

```

```

## Processing a Notification from the Payment Gateway

After the customer bank processes the transaction and sends the results to the gateway, the gateway sends the adapter a notification indicating that it’s ready to provide the final transaction status. For this part of an asynchronous transaction flow, the adapter needs to call the processNotification class. We can split the processNotification implementation into four parts.

First, the adapter verifies the signature in the notification request. For more information on verifying signatures, review [Encryption and Signature Techniques in Apex](https://developer.salesforce.com/blogs/2023/12/encryption-and-signature-techniques-in-apex).

```

```

Next, the adapter parses the gateway’s notification request and builds a notification object. The getPaymentGatewayNotificationRequest method evaluates data from the gateway’s notification request items, which include status, referenceNumber, event, and amount. The notificationStatus object is set to Success or Failed based on whether the platform successfully received the notification. If the notification’s event code indicates that the gateway processed a payment capture transaction, the adapter builds a notification object using the CaptureNotification class. If the event code indicates that the gateway processed a refund transaction, the adapter builds a notification object using the ReferencedRefundNotification class.

```

```

The adapter then requests that the payments platform records the results of the notification.

```

```

All asynchronous gateways require that the platform acknowledges that it received the notification, regardless of whether the platform successfully saved the notification’s data. The platform calls the GatewayNotificationResponse class to send the acknowledgment.

```

```

## Using Custom Data

To transfer additional, custom data from the frontend to your payment gateway adapter, use the [Checkout Payments Connect API](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_payments.htm). Sending custom data to the adapter supports use cases like implementing conditional logic based on specific data or mapping asynchronous webhook events to a cart by passing an identifier.

To send custom data to your payment gateway adapter, use the paymentsData parameter in the [Checkout Payments Connect API](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_checkouts_payments.htm) input payload. This parameter is a serialized map of type <String, String> that supports up to four key-value pairs. Each key and each value can contain up to 255 characters. paymentsData is only applicable to Auth and PostAuth payment requests. Simple purchase orders don’t support paymentsData.

Similarly, the [Post Authorization](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_payment_post_auth.htm) input payload has an additionalData property, which is also a map of type<String, String>. The paymentsData property is accepted for Auth and PostAuth requests and is transferred to the Payment APIs through the additionalData property.

## Debugging

Usually, Apex debug logs are available in the developer console. However, Salesforce doesn’t store debug logs from the processNotification method in the developer console. To view this part of the method flow using system.debug, review the Collect Debug Logs for Guest Users section of [Set Up Debug Logging](https://help.salesforce.com/articleView?id=code_add_users_debug_log.htm&type=5&language=en_US).