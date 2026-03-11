---
title: "ErrorResponse(resultCode, errorCode,
    errorMessage)"
domain: apex-reference
topic: errorresponseresultcode-errorcode-errormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.236Z
keywords: [ErrorResponse, resultCode, errorCode, errorMessage, Constructor, initialize, object, result, code, error, message, sent, tax, engine., Signature, Parameters]
---

# ErrorResponse(resultCode, errorCode,
    errorMessage)

> Constructor to initialize an ErrorResponse object from the result code, error code, and error message sent from
      the tax engine.

### ErrorResponse(resultCode, errorCode, errorMessage)

Constructor to initialize an ErrorResponse object from the result code, error code, and error message sent from the tax engine.

#### Signature

global ErrorResponse(commercetax.ResultCode resultCode, String errorCode, String errorMessage)

#### Parameters

resultCode

Type: [ResultCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_ResultCode.htm "Code that represents the results of a tax request made to the tax engine.")

Code for the type of result sent by the tax engine.

errorCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code for the type of error sent by the tax engine.

Codes must match the HTTP status codes to be returned to the user. Here are a few examples:

-   If the status code is for a bad request, set errorCode to 400.
-   If the status code is for a forbidden request, set errorCode to 403.
-   If errorCode isn't a valid HTTP status code, a 500 internal server error is returned.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message sent by the tax engine.