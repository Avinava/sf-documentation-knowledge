---
title: "GatewayErrorResponse Constructors"
domain: apex-reference
topic: gatewayerrorresponse-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.023Z
keywords: [GatewayErrorResponse, Constructors, Constructor, create, object, accepts, errorCode, errorMessage., errorMessage, Signature, Parameters, Note]
---

# GatewayErrorResponse Constructors

> Constructor to create a GatewayErrorResponse object that accepts
        errorCode and errorMessage.

## GatewayErrorResponse Constructors

The following are constructors for GatewayErrorResponse.

-   **[GatewayErrorResponse(errorCode, errorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm#apex_commerce_payments_GatewayErrorResponse_ctor)**  
    Constructor to create a GatewayErrorResponse object that accepts errorCode and errorMessage.

### GatewayErrorResponse(errorCode, errorMessage)

Constructor to create a GatewayErrorResponse object that accepts errorCode and errorMessage.

#### Signature

global GatewayErrorResponse(String errorCode, String errorMessage)

#### Parameters

errorCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Should match with the HTTP status code to be returned to the user. Here are a few examples.

-   If the status code is for a bad request, the errorCode should be 400.
-   If the status code is for a forbidden request, errorCode should be 403.
-   If errorCode isn’t a valid HTTP status code, a 500 internal server error is returned.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

errorCode must have a value, otherwise the platform throws an error.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message response to users following an error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

errorMessage must have a value, otherwise the platform throws an error.