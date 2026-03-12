---
title: "InputParameter Class"
domain: blng-dev
topic: inputparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.042Z
estimatedTokens: 378
keywords: [InputParameter, Captures, retrieves, additional, sent, capture, payment, transaction, setAdditionalParameters, additionalParams, getAdditionalParameters]
---

# InputParameter Class

> Captures and retrieves additional parameters to be sent during the
      capture payment transaction.

# InputParameter Class

Captures and retrieves additional parameters to be sent during the capture payment transaction.

## Namespace

blng

-   **[InputParameter Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm#apex_System_InputParameter_methods)**


## InputParameter Methods

The following are methods for InputParameter.

-   **[setAdditionalParameters(additionalParams)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm#apex_System_InputParameter_setAdditionalParameters)**
    Creates a map of any additional parameters that the user sent with the payment capture request. This method and its parameters are optional.
-   **[getAdditionalParameters()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm#apex_System_InputParameter_getAdditionalParameters)**
    Returns additional parameters sent during the capture payment request.

### setAdditionalParameters(additionalParams)

Creates a map of any additional parameters that the user sent with the payment capture request. This method and its parameters are optional.

#### Signature

global static void setAdditionalParameters(Map<String,String\> additionalParams)

#### Parameters

additionalParams

Type: Map<String,String>

#### Return Value

Type: void

### getAdditionalParameters()

Returns additional parameters sent during the capture payment request.

#### Signature

global static Map<string, string> getAdditionalParameters()

#### Return Value

Type: Map<String, String>

## Related Topics

- InputParameter Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm)
- setAdditionalParameters(additionalParams) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm)
- getAdditionalParameters() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm)
