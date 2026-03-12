---
title: "PlaceOrderResult Class"
domain: revenue-cloud
topic: placeorderresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.421Z
estimatedTokens: 859
namespace: CommerceOrders
keywords: [PlaceOrderResult, hold, place, order, orderId, requestIdentifier, responseError, statusURL, success]
---

# PlaceOrderResult Class

> Contains properties to hold the response to the place order request.

**Namespace:** `CommerceOrders`

# PlaceOrderResult Class

Contains properties to hold the response to the place order request.

## Namespace

[CommerceOrders](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commerceorders.htm "The CommerceOrders namespace provides classes and methods to place orders with integrated pricing, configuration, and validation.")

## Example

```

```

-   **[PlaceOrderResult Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_properties)**
    Learn more about the available properties with the PlaceOrderResult class.

## PlaceOrderResult Properties

Learn more about the available properties with the PlaceOrderResult class.

The PlaceOrderResult class includes these properties.

-   **[orderId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_orderId)**
    Get the ID of the order that’s created after a successful request.
-   **[requestIdentifier](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_requestIdentifier)**
    Get the request ID of the process to query the asynchronous status of the Place Order Apex API.
-   **[responseError](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_responseError)**
    Get the list of errors encountered during the synchronous processing of the API request.
-   **[statusURL](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_statusURL)**
    Get the asynchronous status URL of the request, if available.
-   **[success](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm#apex_commerceorders_PlaceOrderResult_success)**
    Get the request status of the synchronous part of the processing.

### orderId

Get the ID of the order that’s created after a successful request.

#### Signature

public String orderId {get; set;}

#### Property Value

Type: String

### requestIdentifier

Get the request ID of the process to query the asynchronous status of the Place Order Apex API.

#### Signature

public String requestIdentifier {get; set;}

#### Property Value

Type: String

### responseError

Get the list of errors encountered during the synchronous processing of the API request.

#### Signature

public List<commerceorders.PlaceOrderErrorResponse> responseError {get; set;}

#### Property Value

Type: List<ConnectApi.PlaceOrderErrorResponse>

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
CommerceOrders.PlaceOrderResult resp = CommerceOrders.PlaceOrderExecutor.execute(graph,internalEnum,cEnum,cInput,catalogRatesPreference);
```

## Related Topics

- CommerceOrders (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commerceorders.htm)
- PlaceOrderResult Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- orderId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- requestIdentifier (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- responseError (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- statusURL (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
- success (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderResult.htm)
