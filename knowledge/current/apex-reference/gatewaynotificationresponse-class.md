---
title: "GatewayNotificationResponse Class"
domain: apex-reference
topic: gatewaynotificationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.952Z
estimatedTokens: 856
namespace: CommercePayments
keywords: [GatewayNotificationResponse, payment, gateway, sends, notification, payments, platform, responds, indicating, whether, succeeded, failed, receiving, notification., Usage, Example, setResponseBody, responseBody, setStatusCode, statusCode]
---

# GatewayNotificationResponse Class

> When the payment gateway sends a notification to the payments
            platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or
            failed at receiving the notification.

**Namespace:** `CommercePayments`

# GatewayNotificationResponse Class

When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

You must specify the CommercePayments namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

CommercePayments.GatewayNotificationResponse gnr = new CommercePayments.GatewayNotificationResponse();

When an asynchronous payment gateway sends a notification, the gateway requires the platform to acknowledge that it has either succeeded or failed in receiving the notification. Payment gateway adapters use this class to construct the acknowledgment response, which gateways expect for a notification. GatewayNotificationResponse is the return type of the processNotification method.

## Example

```

```

-   **[GatewayNotificationResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_commercepayments_GatewayNotificationResponse_methods)**


## GatewayNotificationResponse Methods

The following are methods for GatewayNotificationResponse.

-   **[setResponseBody(responseBody)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_commercepayments_GatewayNotificationResponse_setResponseBody)**
    Sets the body of the response to the gateway. Some gateways expect the payments platform to acknowledge the notification with a response regardless of whether the notification was accepted.
-   **[setStatusCode(statusCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_commercepayments_GatewayNotificationResponse_setStatusCode)**
    Sets the HTTP status code sent to the gateway as part of the payments platform’s response notification.

### setResponseBody(responseBody)

Sets the body of the response to the gateway. Some gateways expect the payments platform to acknowledge the notification with a response regardless of whether the notification was accepted.

#### Signature

global void setResponseBody(Blob responseBody)

#### Parameters

responseBody

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Common response values include accepted for successfully receiving the response. For example:

```

```

#### Return Value

Type: void

### setStatusCode(statusCode)

Sets the HTTP status code sent to the gateway as part of the payments platform’s response notification.

#### Signature

global void setStatusCode(Integer statusCode)

#### Parameters

statusCode

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The status code will vary based on the type of payments platform response. Users should configure their GatewayNotificationResponse class to account for all values that their payments platform can possibly return. For example:

```

```

#### Return Value

Type: void

## Code Examples

```
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

```
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

```
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
- GatewayNotificationResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm)
- setResponseBody(responseBody) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm)
- setStatusCode(statusCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm)
- Blob (atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
