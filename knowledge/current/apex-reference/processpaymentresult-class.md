---
title: "ProcessPaymentResult Class"
domain: apex-reference
topic: processpaymentresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.759Z
estimatedTokens: 935
namespace: RichMessaging
keywords: [ProcessPaymentResult, Represents, result, payment, processing, operation., resultStatus, errorMessage]
---

# ProcessPaymentResult Class

> Represents the result of a payment processing operation.

**Namespace:** `RichMessaging`

# ProcessPaymentResult Class

Represents the result of a payment processing operation.

## Namespace

[RichMessaging](atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm "Provides objects and methods for handling content in enhanced Messaging channels.")

-   **[ProcessPaymentResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_constructors)**

-   **[ProcessPaymentResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_properties)**


## ProcessPaymentResult Constructors

The following are constructors for ProcessPaymentResult.

-   **[ProcessPaymentResult(resultStatus, errorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_ctor)**
    Creates a new instance of the RichMessaging.ProcessPaymentResult class.
-   **[ProcessPaymentResult(resultStatus)](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_ctor_2)**
    Creates a new instance of the RichMessaging.ProcessPaymentResult class.

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

### ProcessPaymentResult(resultStatus)

Creates a new instance of the RichMessaging.ProcessPaymentResult class.

#### Signature

public ProcessPaymentResult(RichMessaging.ProcessPaymentResultStatus resultStatus)

#### Parameters

resultStatus

Type: [RichMessaging.ProcessPaymentResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm "Represents the status of a payment processing result.")

The status of the payment processing result.

## ProcessPaymentResult Properties

The following are properties for ProcessPaymentResult.

-   **[errorMessage](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_errorMessage)**
    The error message associated with the payment processing result, if any.
-   **[resultStatus](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_RichMessaging_ProcessPaymentResult_resultStatus)**
    The status of the payment processing result.

### errorMessage

The error message associated with the payment processing result, if any.

#### Signature

public String errorMessage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### resultStatus

The status of the payment processing result.

#### Signature

public RichMessaging.ProcessPaymentResultStatus resultStatus {get; set;}

#### Property Value

Type: [RichMessaging.ProcessPaymentResultStatus](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm "Represents the status of a payment processing result.")

## Related Topics

- RichMessaging (atlas.en-us.apexref.meta/apexref/apex_namespace_RichMessaging.htm)
- ProcessPaymentResult Constructors (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
- ProcessPaymentResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
- ProcessPaymentResult(resultStatus, errorMessage) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
- ProcessPaymentResult(resultStatus) (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
- RichMessaging.ProcessPaymentResultStatus (atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- errorMessage (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
- resultStatus (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm)
