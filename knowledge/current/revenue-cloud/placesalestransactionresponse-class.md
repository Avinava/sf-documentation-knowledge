---
title: "PlaceSalesTransactionResponse Class"
domain: revenue-cloud
topic: placesalestransactionresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:06.338Z
estimatedTokens: 1096
namespace: RevSalesTrxn
keywords: [PlaceSalesTransactionResponse, hold, place, sales, transaction, contextDetails, errorResponse, isSuccess, salesTransactionId, statusUrl, trackerId]
---

# PlaceSalesTransactionResponse Class

> Contains properties to hold the response to the place sales transaction
    request.

**Namespace:** `RevSalesTrxn`

# PlaceSalesTransactionResponse Class

Contains properties to hold the response to the place sales transaction request.

## Namespace

[RevSalesTrxn](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm "Create a sales transaction, such as a quote or an order, with integrated pricing and configuration. Additionally, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax.")

## Example

```

```

-   **[PlaceSalesTransactionResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_properties)**
    Learn more about the available properties with the PlaceSalesTransactionResponse class.

## PlaceSalesTransactionResponse Properties

Learn more about the available properties with the PlaceSalesTransactionResponse class.

The PlaceSalesTransactionResponse class includes these properties.

-   **[contextDetails](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_contextDetails)**
    Get the details of the context that’s created for the sales transaction.
-   **[errorResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_errorResponse)**
    Get the list of errors encountered during the synchronous processing of the API request.
-   **[isSuccess](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_isSuccess)**
    Get the request status of the synchronous part of the processing.
-   **[salesTransactionId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_salesTransactionId)**
    Get the ID of the sales transaction, such as a quote or an order.
-   **[statusUrl](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_statusUrl)**
    Get the asynchronous status URL of the request, if available.
-   **[trackerId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_RevSalesTrxn_PlaceSalesTransactionResponse_trackerId)**
    Get the unique identifier assigned to a specific operation or request that's used for tracking and referencing the operation.

### contextDetails

Get the details of the context that’s created for the sales transaction.

#### Signature

public ConnectApi.ContextDetails contextDetails {get; set;}

#### Property Value

Type: ConnectApi.ContextDetails

### errorResponse

Get the list of errors encountered during the synchronous processing of the API request.

#### Signature

public List<ConnectApi.PlaceSalesTransactionErrorResponse> errorResponse {get; set;}

#### Property Value

Type: List<ConnectApi.PlaceSalesTransactionErrorResponse>

### isSuccess

Get the request status of the synchronous part of the processing.

#### Signature

public Boolean isSuccess {get; set;}

#### Property Value

Type: Boolean

Indicates whether the synchronous part of the processing is successful (true) or not (false).

### salesTransactionId

Get the ID of the sales transaction, such as a quote or an order.

#### Signature

public String salesTransactionId {get; set;}

#### Property Value

Type: String

### statusUrl

Get the asynchronous status URL of the request, if available.

#### Signature

public String statusUrl {get; set;}

#### Property Value

Type: String

### trackerId

Get the unique identifier assigned to a specific operation or request that's used for tracking and referencing the operation.

#### Signature

public String trackerId {get; set;}

#### Property Value

Type: String

## Code Examples

```
RevSalesTrxn.PlaceSalesTransactionResponse resp = RevSalesTrxn.PlaceSalesTransactionExecutor.execute(graph, pricingPrefEnum, configurationExecutionEnum, new RevSalesTrxn.ConfigurationOptionsInput(), null);
```

## Related Topics

- RevSalesTrxn (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm)
- PlaceSalesTransactionResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- contextDetails (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- errorResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- isSuccess (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- salesTransactionId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- statusUrl (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- trackerId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
