---
title: "GatewayNotificationResponse Class"
domain: apex-reference
topic: gatewaynotificationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.028Z
keywords: [GatewayNotificationResponse, Class, Sets, HTTP, status, code, sent, gateway, part, payments, platform’s, response, notification., setStatusCode, statusCode, Signature, Parameters, Return, Value]
---

# GatewayNotificationResponse Class

> Sets the HTTP status code sent to the gateway as part of the payments
            platform’s response notification.

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