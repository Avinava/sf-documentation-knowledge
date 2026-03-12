---
title: "PlaceQuoteResponse Class"
domain: revenue-cloud
topic: placequoteresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.627Z
estimatedTokens: 854
namespace: PlaceQuote
keywords: [PlaceQuoteResponse, Contains, hold, response, place, quote, request., Example, quoteId, requestIdentifier, responseError, statusURL, success]
---

# PlaceQuoteResponse Class

> Contains properties to hold the response to the place quote request.

**Namespace:** `PlaceQuote`

# PlaceQuoteResponse Class

Contains properties to hold the response to the place quote request.

## Namespace

[PlaceQuote](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_placequote.htm "The PlaceQuote namespace provides classes and methods to create or update quotes with pricing preferences and configuration options.")

## Example

```

```

-   **[PlaceQuoteResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_properties)**
    Learn more about the available properties with the PlaceQuoteResponse class.

## PlaceQuoteResponse Properties

Learn more about the available properties with the PlaceQuoteResponse class.

The PlaceQuoteResponse class includes these properties.

-   **[quoteId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_quoteId)**
    Get the ID of the quote that’s created after a successful request.
-   **[requestIdentifier](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_requestIdentifier)**
    Get the request ID of the process to query the asynchronous status of the Place Quote Apex API.
-   **[responseError](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_responseError)**
    Get the list of errors encountered during the synchronous processing of the API request.
-   **[statusURL](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_statusURL)**
    Get the asynchronous status URL of the request, if available.
-   **[success](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm#apex_placequote_PlaceQuoteResponse_success)**
    Get the request status of the synchronous part of the processing.

### quoteId

Get the ID of the quote that’s created after a successful request.

#### Signature

public String quoteId {get; set;}

#### Property Value

Type: String

### requestIdentifier

Get the request ID of the process to query the asynchronous status of the Place Quote Apex API.

#### Signature

public String requestIdentifier {get; set;}

#### Property Value

Type: String

### responseError

Get the list of errors encountered during the synchronous processing of the API request.

#### Signature

public List<ConnectApi.PlaceQuoteErrorResponse> responseError {get; set;}

#### Property Value

Type: List<ConnectApi.PlaceQuoteErrorResponse>

### statusURL

Get the asynchronous status URL of the request, if available.

#### Signature

public String statusURL {get; set;}

#### Property Value

Type: String

### success

Get the request status of the synchronous part of the processing.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: Boolean

Indicates whether the synchronous part of the processing is successful (true) or not (false).

## Code Examples

```
PlaceQuote.PlaceQuoteResponse resp = PlaceQuote.PlaceQuoteExecutor.execute(internalEnum,graph);
```

## Related Topics

- PlaceQuote (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_placequote.htm)
- PlaceQuoteResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- quoteId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- requestIdentifier (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- responseError (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- statusURL (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
- success (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteResponse.htm)
