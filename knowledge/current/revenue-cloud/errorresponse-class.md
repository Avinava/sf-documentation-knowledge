---
title: "ErrorResponse Class"
domain: revenue-cloud
topic: errorresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.430Z
estimatedTokens: 722
namespace: CommerceTax
keywords: [ErrorResponse, respond, error, after, receiving, errors, PaymentGatewayAdapter, CommercePayments, such, request-forbidden, responses, custom, validation, expired, API, tokens., Example, resultCode, errorCode, errorMessage]
---

# ErrorResponse Class

> Use to respond with an error after receiving errors from the
            PaymentGatewayAdapter
            methods of the CommercePayments
            namespace, such as request-forbidden responses, custom validation errors, or expired API
            tokens.

**Namespace:** `CommerceTax`

# ErrorResponse Class

Use to respond with an error after receiving errors from the PaymentGatewayAdapter methods of the [CommercePayments](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_commercepayments.htm "HTML (New Window)") namespace, such as request-forbidden responses, custom validation errors, or expired API tokens.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Example

This example snippet of a mock tax adapter shows a hypothetical scenario to demo an error response. The adapter receives request information from TaxEngineContext and stores it in an instance of CalculateTaxRequest. If the request's documentCode property is null or indicates an error, the adapter returns an error response with information about the error.

```

```

-   **[ErrorResponse Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_ErrorResponse.htm#apex_commercetax_ErrorResponse_constructors)**
    Learn more about the available constructors with the ErrorResponse class.

## ErrorResponse Constructors

Learn more about the available constructors with the ErrorResponse class.

The ErrorResponse class includes these constructors.

-   **[ErrorResponse(resultCode, errorCode, errorMessage)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_ErrorResponse.htm#apex_commercetax_ErrorResponse_ctor)**
    Constructor to initialize an ErrorResponse object from the result code, error code, and error message sent from the tax engine.

### ErrorResponse(resultCode, errorCode, errorMessage)

Constructor to initialize an ErrorResponse object from the result code, error code, and error message sent from the tax engine.

#### Signature

global ErrorResponse(commercetax.ResultCode resultCode, String errorCode, String errorMessage)

#### Parameters

resultCode

Type: [ResultCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_ResultCode.htm "Code that represents the results of a tax request made to the tax engine.")

Code for the type of result sent by the tax engine.

errorCode

Type: String

Code for the type of error sent by the tax engine.

Codes must match the HTTP status codes to be returned to the user. Here are a few examples:

-   If the status code is for a bad request, set errorCode to 400.
-   If the status code is for a forbidden request, set errorCode to 403.
-   If errorCode isn't a valid HTTP status code, a 500 internal server error is returned.

errorMessage

Type: String

The error message sent by the tax engine.

## Code Examples

```apex
global virtual class MockAdapter implements commercetax.TaxEngineAdapter {
 
     global commercetax.TaxEngineResponse processRequest(commercetax.TaxEngineContext taxEngineContext) {
         commercetax.RequestType requestType = taxEngineContext.getRequestType();
         commercetax.CalculateTaxRequest request = (commercetax.CalculateTaxRequest)taxEngineContext.getRequest();

if(request.documentCode == null) {
             return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, '404', 'documentCode  is mandatory');
         }
         if(request.documentCode == 'TaxEngineError') {
             return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, '504', 'documentCode  - not supported');
         }
         if(request.documentCode == 'simulateValidationFailureInAdapter') {
             return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, '400', 'validations for documentCode failed in adapter');
         }
         if(request.documentCode == 'simulateMalformedErrorInAdapter') {
                     return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, null, 'malformed adapter error response');
         }
         if(request.documentCode == 'simulateTaxEngineProcessFailure') {
             return new commercetax.ErrorResponse(commercetax.resultcode.TaxEngineError, '500', 'Tax Engine couldnt process your request');
         }
```

## Related Topics

- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- ErrorResponse Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_ErrorResponse.htm)
- ErrorResponse(resultCode, errorCode, errorMessage) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_ErrorResponse.htm)
- ResultCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_commercetax_ResultCode.htm)
