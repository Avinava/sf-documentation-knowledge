---
title: "OutputResult Class"
domain: blng-dev
topic: outputresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.053Z
estimatedTokens: 611
keywords: [OutputResult, Stores, results, capture, payment, made, gateway, setIsSuccess, isSuccess, setErrorMessage, errorMessage, getErrorMessage]
---

# OutputResult Class

> Stores and shows the results of the capture payment request made to
      the payment gateway.

# OutputResult Class

Stores and shows the results of the capture payment request made to the payment gateway.

## Namespace

blng

-   **[OutputResult Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_System_OutputResult_methods)**


## OutputResult Methods

The following are methods for OutputResult.

-   **[setIsSuccess(isSuccess)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_System_OutputResult_setIsSuccess)**
    Sets the results of the capture request gateway communication as either truetrue (successful) or falsefalse (failed).
-   **[isSuccess(isSuccess)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_System_OutputResult_isSuccess)**
    Shows whether the capture payment request was successful in the payment gateway.
-   **[setErrorMessage(errorMessage)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_System_OutputResult_setErrorMessage)**
    Sets the error message following a failed payment capture request made to the payment gateway.
-   **[getErrorMessage()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_System_OutputResult_getErrorMessage)**
    Returns the error message that the payment gateway sent following a failed capture payment request.

### setIsSuccess(isSuccess)

Sets the results of the capture request gateway communication as either truetrue (successful) or falsefalse (failed).

#### Signature

global static void setIsSuccess(boolean isSuccess)

#### Parameters

isSuccess

Type: boolean

#### Return Value

Type: Void

### isSuccess(isSuccess)

Shows whether the capture payment request was successful in the payment gateway.

#### Signature

global static Boolean isSuccess

#### Return Value

Type: Boolean

### setErrorMessage(errorMessage)

Sets the error message following a failed payment capture request made to the payment gateway.

#### Signature

global static void setErrorMessage(String errorMessage)

#### Parameters

errorMessage

Type: String

Error message containing information about the failed gateway communication. For information about the error message, see the documentation for your gateway.

#### Return Value

Type: void

### getErrorMessage()

Returns the error message that the payment gateway sent following a failed capture payment request.

#### Signature

global static String getErrorMessage()

#### Return Value

Type: String

## Related Topics

- OutputResult Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
- setIsSuccess(isSuccess) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
- isSuccess(isSuccess) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
- setErrorMessage(errorMessage) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
- getErrorMessage() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
