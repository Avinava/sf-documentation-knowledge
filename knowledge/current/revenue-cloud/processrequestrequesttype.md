---
title: "processRequest(requestType)"
domain: revenue-cloud
topic: processrequestrequesttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.998Z
estimatedTokens: 211
keywords: [processRequest, requestType, takes, instance, TaxEngineContext, response, calculated, tax, details, through, TaxDetailsResponse, error, ErrorResponse, class.]
---

# processRequest(requestType)

> The processRequest method takes
      an instance of TaxEngineContext class and returns a
      response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

# processRequest(requestType)

The processRequest method takes an instance of TaxEngineContext class and returns a response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.

## Signature

global commercetax.TaxEngineResponse processRequest(commercetax.TaxEngineContext var1)

## Parameters

var1

Type: [TaxEngineContext](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxEngineContext.htm#apex_class_commercetax_TaxEngineContext "Wrapper class that stores details about the type of a tax calculation request.")

Wrapper class that stores information about the type of a tax calculation request.

## Return Value

Type: TaxEngineResponse

Generic interface representing a response from a tax engine.

## Related Topics

- TaxEngineContext (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxEngineContext.htm)
