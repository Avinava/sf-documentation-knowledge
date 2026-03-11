---
title: "ProcessPaymentResult(resultStatus, errorMessage)"
domain: apex-reference
topic: processpaymentresultresultstatus-errormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.178Z
keywords: [ProcessPaymentResult, resultStatus, errorMessage, Creates, new, instance, RichMessaging.ProcessPaymentResult, class., Signature, Parameters]
---

# ProcessPaymentResult(resultStatus, errorMessage)

> Creates a new instance of the RichMessaging.ProcessPaymentResult class.

### ProcessPaymentResult(resultStatus, errorMessage)

Creates a new instance of the RichMessaging.ProcessPaymentResult class.

#### Signature

public ProcessPaymentResult(RichMessaging.ProcessPaymentResultStatus resultStatus, String errorMessage)

#### Parameters

resultStatus

Type: [RichMessaging.ProcessPaymentResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm "Represents the status of a payment processing result.")

The status of the payment processing result.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message associated with the payment processing result, if any.