---
title: "ResultCode Enum"
domain: apex-reference
topic: resultcode-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.640Z
estimatedTokens: 202
keywords: [ResultCode, Code, represents, results, tax, request, made, engine., Usage, Values]
---

# ResultCode Enum

> Code that represents the results of a tax request made to the tax
      engine.

# ResultCode Enum

Code that represents the results of a tax request made to the tax engine.

## Usage

Used by the [ErrorResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ErrorResponse.htm#apex_class_commercetax_ErrorResponse "Use to respond with an error after receiving errors from the PaymentGatewayAdapter methods of the CommercePayments namespace, such as request-forbidden responses, custom validation errors, or expired API tokens.") class method.

## Enum Values

The commercetax.ResultCode enum includes these values.

| Value | Description |
| --- | --- |
| TaxEngineError | Represents an error that occurred during the tax request process. |
| ReferenceDocumentCodeMissing | Specifies if the document mentioned as a referenceDocumentCode value isn't available in the tax engine. |

## Related Topics

- ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_ErrorResponse.htm)
