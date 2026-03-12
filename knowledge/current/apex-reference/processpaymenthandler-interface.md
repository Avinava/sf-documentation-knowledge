---
title: "ProcessPaymentHandler Interface"
domain: apex-reference
topic: processpaymenthandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.967Z
estimatedTokens: 453
namespace: RichMessaging
keywords: [ProcessPaymentHandler, process, payment, requests, processPaymentRequest, var1, Implementation]
---

# ProcessPaymentHandler Interface

> Interface used to process payment requests.

**Namespace:** `RichMessaging`

# ProcessPaymentHandler Interface

Interface used to process payment requests.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[ProcessPaymentHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm#apex_RichMessaging_ProcessPaymentHandler_methods)**

-   **[ProcessPaymentHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm#apex_interface_RichMessaging_ProcessPaymentHandler_Example)**


## ProcessPaymentHandler Methods

The following are methods for ProcessPaymentHandler.

-   **[processPaymentRequest(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm#apex_RichMessaging_ProcessPaymentHandler_processPaymentRequest)**
    Processes a payment request.

### processPaymentRequest(var1)

Processes a payment request.

#### Signature

public RichMessaging.ProcessPaymentResult processPaymentRequest(RichMessaging.ProcessPaymentRequest var1)

#### Parameters

var1

Type: [RichMessaging.ProcessPaymentRequest](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_class_RichMessaging_ProcessPaymentRequest "Represents a request to process a payment.")

The payment request.

#### Return Value

Type: [RichMessaging.ProcessPaymentResult](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_class_RichMessaging_ProcessPaymentResult "Represents the result of a payment processing operation.")

## ProcessPaymentHandler Example Implementation

This is an example implementation of the RichMessaging.ProcessPaymentHandler interface.

```

```

## Code Examples

```apex
global class MyProcessPaymentHandler implements Richmessaging.ProcessPaymentHandler {

   global RichMessaging.ProcessPaymentResult processPaymentRequest(RichMessaging.ProcessPaymentRequest paymentRequest) {

       // TODO: Reach out to your payment processor here and return success or failure based on the result of that request

       return new RichMessaging.ProcessPaymentResult(RichMessaging.ProcessPaymentResultStatus.SUCCESS);
   }
}
```

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- ProcessPaymentHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm)
- ProcessPaymentHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm)
- processPaymentRequest(var1) (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm)
- RichMessaging.ProcessPaymentRequest (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm)
- RichMessaging.ProcessPaymentResult (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
