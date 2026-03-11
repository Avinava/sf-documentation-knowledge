---
title: "GatewayNotificationResponse Methods"
domain: apex-reference
topic: gatewaynotificationresponse-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.028Z
keywords: [GatewayNotificationResponse, Methods, Sets, body, response, gateway., gateways, expect, payments, platform, acknowledge, notification, regardless, whether, accepted., setResponseBody, responseBody, Signature, Parameters, Return]
---

# GatewayNotificationResponse Methods

> Sets the body of the response to the gateway. Some gateways expect the
      payments platform to acknowledge the notification with a response regardless of whether the
      notification was accepted.

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