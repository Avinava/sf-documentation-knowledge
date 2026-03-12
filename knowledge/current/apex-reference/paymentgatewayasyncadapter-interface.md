---
title: "PaymentGatewayAsyncAdapter Interface"
domain: apex-reference
topic: paymentgatewayasyncadapter-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.994Z
estimatedTokens: 796
namespace: CommercePayments
keywords: [PaymentGatewayAsyncAdapter, Implement, allow, customers, process, payments, asynchronously., Usage, Example, processNotification, paymentGatewayNotificationContext, Implementation]
---

# PaymentGatewayAsyncAdapter Interface

> Implement the interface to allow customers to process payments
      asynchronously.

**Namespace:** `CommercePayments`

# PaymentGatewayAsyncAdapter Interface

Implement the interface to allow customers to process payments asynchronously.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Implementing an asynchronous adapter also requires the processNotification method from the [GatewayNotificationResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_class_commercepayments_GatewayNotificationResponse "When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.") class.

## Example

```

```

-   **[PaymentGatewayAsyncAdapter Methods](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm#apex_commercepayments_PaymentGatewayAsyncAdapter_methods)**

-   **[PaymentGatewayAsyncAdapter Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm#apex_interface_commercepayments_PaymentGatewayAsyncAdapter_Example)**


## PaymentGatewayAsyncAdapter Methods

The following are methods for PaymentGatewayAsyncAdapter.

-   **[processNotification(paymentGatewayNotificationContext)](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm#apex_commercepayments_PaymentGatewayAsyncAdapter_processNotification)**
    Entry point for processing notifications from payment gateways.

### processNotification(paymentGatewayNotificationContext)

Entry point for processing notifications from payment gateways.

#### Signature

global commercepayments.GatewayNotificationResponse processNotification(commercepayments.PaymentGatewayNotificationContext var1)

#### Parameters

paymentGatewayNotificationContext

Type: [PaymentGatewayNotificationContext](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationContext.htm#apex_class_commercepayments_PaymentGatewayNotificationContext "Wraps the information related to a gateway notification.")

The PaymentGatewayNotificationContext object wraps all the information related to a gateway notification.

#### Return Value

Type: [GatewayNotificationResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_class_commercepayments_GatewayNotificationResponse "When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.")

When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.

## PaymentGatewayAsyncAdapter Example Implementation

This is a sample implementation of the commercepayments.PaymentGatewayAsyncAdapter interface.

```

```

## Code Examples

```apex
global with sharing class SampleAsyncAdapter 
        implements commercepayments.PaymentGatewayAsyncAdapter, 
        commercepayments.PaymentGatewayAdapter {
        
        global SampleAsyncAdapter() {
        }
        
        global commercepayments.GatewayResponse processRequest(
        commercepayments.paymentGatewayContext gatewayContext) {
        }
        
        global commercepayments.GatewayNotificationResponse processNotification(
        commercepayments.PaymentGatewayNotificationContext gatewayNotificationContext) {
        }
        }
```

```apex
global with sharing class AdyenAdapter implements commercepayments.PaymentGatewayAsyncAdapter, commercepayments.PaymentGatewayAdapter {
    global AdyenAdapter() {}
    
    global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
    }
    
    global commercepayments.GatewayNotificationResponse processNotification(commercepayments.PaymentGatewayNotificationContext gatewayNotificationContext) {
    }
}

commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
if (requestType == commercepayments.RequestType.Capture) {
    req.setEndpoint('/pal/servlet/Payment/v52/capture');
    body = buildCaptureRequest((commercepayments.CaptureRequest)gatewayContext.getPaymentRequest());
} else if (requestType == commercepayments.RequestType.ReferencedRefund) {
    req.setEndpoint('/pal/servlet/Payment/v52/refund');
    body = buildRefundRequest((commercepayments.ReferencedRefundRequest)gatewayContext.getPaymentRequest());
}

req.setBody(body);
req.setMethod('POST');
commercepayments.PaymentsHttp http = new commercepayments.PaymentsHttp();
HttpResponse res = null;
try {
    res = http.send(req);
} catch(CalloutException ce) {
    commercepayments.GatewayErrorResponse error = new commercepayments.GatewayErrorResponse('500', ce.getMessage());
    return error;
}

if ( requestType == commercepayments.RequestType.Capture) {
    response =  createCaptureResponse(res);
} else if ( requestType == commercepayments.RequestType.ReferencedRefund) {
    response =  createRefundResponse(res);
}
return response;

commercepayments.PaymentGatewayNotificationRequest notificationRequest = gatewayNotificationContext.getPaymentGatewayNotificationRequest();
Blob request = notificationRequest.getRequestBody();
Map<String, Object> jsonReq = (Map<String, Object>)JSON.deserializeUntyped(request.toString());
List<Object> notificationItems = (List<Object>)jsonReq.get('notificationItems');
Map<String, Object> notificationRequestItem =
    (Map<String, Object>)((Map<String, Object>)notificationItems[0]).get('NotificationRequestItem');
Boolean success = Boolean.valueOf(notificationRequestItem.get('success'));
String pspReference = (String)notificationRequestItem.get('pspReference');
String eventCode = (String)notificationRequestItem.get('eventCode');
Double amount = (Double)((Map<String, Object>)notificationRequestItem.get('amount')).get('value');

commercepayments.NotificationStatus notificationStatus = null;
if (success) {
    notificationStatus = commercepayments.NotificationStatus.Success;
} else {
    notificationStatus = commercepayments.NotificationStatus.Failed;
}
commercepayments.BaseNotification notification = null;
if ('CAPTURE'.equals(eventCode)) {
    notification = new commercepayments.CaptureNotification();
} else if ('REFUND'.equals(eventCode)) {
    notification = new commercepayments.ReferencedRefundNotification();
}
notification.setStatus(notificationStatus);
notification.setGatewayReferenceNumber(pspReference);
notification.setAmount(amount);

commercepayments.NotificationSaveResult saveResult = commercepayments.NotificationClient.record(notification);

commercepayments.GatewayNotificationResponse gnr = new commercepayments.GatewayNotificationResponse();
if (saveResult.isSuccess()) {
    system.debug('Notification accepted by platform');
} else {
    system.debug('Errors in the result '+ Blob.valueOf(saveResult.getErrorMessage()));
}
gnr.setStatusCode(200);
gnr.setResponseBody(Blob.valueOf('[accepted]'));
return gnr;
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- GatewayNotificationResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm)
- PaymentGatewayAsyncAdapter Methods (atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm)
- PaymentGatewayAsyncAdapter Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm)
- processNotification(paymentGatewayNotificationContext) (atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm)
- PaymentGatewayNotificationContext (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationContext.htm)
