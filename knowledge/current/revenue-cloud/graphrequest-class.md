---
title: "GraphRequest Class"
domain: revenue-cloud
topic: graphrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.201Z
estimatedTokens: 733
namespace: RevSalesTrxn
keywords: [GraphRequest, Contains, set, graph, list, records, ingested., specified, key-value, map, format, contains, field, values., graphId, values, order., Example]
---

# GraphRequest Class

> Contains constructors and properties to set the graph ID and a list of records to be
    ingested. The list of records is specified in a key-value map format that contains the field
    values of an order.

**Namespace:** `RevSalesTrxn`

# GraphRequest Class

Contains constructors and properties to set the graph ID and a list of records to be ingested. The list of records is specified in a key-value map format that contains the field values of an order.

## Namespace

[CommerceOrders](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commerceorders.htm "The CommerceOrders namespace provides classes and methods to place orders with integrated pricing, configuration, and validation.")

## Example

Create the list of records to be ingested by using these steps.

-   Create the list of records by constructing the Map<String, Object\> map of field values of an order.

    ```

    ```

-   To create a record object from the field values, create an instance of the RecordResource class.

    ```

    ```

-   To associate the Record object with a reference identifier, create an instance of the RecordWithReferenceRequest class.

    ```

    ```

-   Invoke the Place Order Apex API.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

    #### Note

    The CatalogRatesPreferenceEnum enum is available when the Usage-Based Selling feature is enabled.

    ```

    ```

-   To contain all record objects, create an instance of the GraphRequest class.

    ```

    ```


-   **[GraphRequest Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm#apex_commerceorders_GraphRequest_constructors)**
    Learn more about the available constructors with the GraphRequest class.
-   **[GraphRequest Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm#apex_commerceorders_GraphRequest_properties)**
    Learn more about the available properties with the GraphRequest class.

## GraphRequest Constructors

Learn more about the available constructors with the GraphRequest class.

The GraphRequest class includes these constructors.

-   **[GraphRequest(graphId, records)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm#apex_commerceorders_GraphRequest_ctor)**
    Creates an instance of the GraphRequest class to assign the graph ID and a list of records to be ingested.

### GraphRequest(graphId, records)

Creates an instance of the GraphRequest class to assign the graph ID and a list of records to be ingested.

#### Signature

public GraphRequest(String graphId, List<commerceorders.RecordWithReferenceRequest> records)

#### Parameters

graphId

Type: String

ID of the graph.

records

Type: List<[commerceorders.RecordWithReferenceRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordWithReferenceRequest.htm#apex_class_commerceorders_RecordWithReferenceRequest "Contains constructors and properties to associate a record object with a reference identifier.")\>

List of records to be ingested.

## GraphRequest Properties

Learn more about the available properties with the GraphRequest class.

The GraphRequest class includes these properties.

-   **[graphId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm#apex_commerceorders_GraphRequest_graphId)**
    Set the graphId property to assign the ID value of the graph.

### graphId

Set the graphId property to assign the ID value of the graph.

#### Signature

public String graphId {get; set;}

#### Property Value

Type: String

## Code Examples

```apex
List<CommerceOrders.RecordWithReferenceRequest> recordNodes = new List<CommerceOrders.RecordWithReferenceRequest>();
    
// Prepare for the Order 
Map<String,Object> orderFieldValues = new Map<String,Object>();
orderFieldValues.put('Pricebook2Id', '01sDU0000000lEIYAY');
orderFieldValues.put('AccountId', '001DU000001nIPKYA2');
orderFieldValues.put('EffectiveDate', '2024-01-01');
```

```
CommerceOrders.RecordResource orderRecord = new CommerceOrders.RecordResource(Order.getSobjectType(), 'POST');
orderRecord.fieldValues = orderFieldValues;
```

```apex
CommerceOrders.RecordWithReferenceRequest orderRecordNode = new CommerceOrders.RecordWithReferenceRequest('refOrder', orderRecord);
recordNodes.add(orderRecordNode);

// Prepare for the App Usage Assignment
Map<String,Object> auaFieldValues = new Map<String,Object>();
auaFieldValues.put('AppUsageType', 'RevenueLifecycleManagement');
auaFieldValues.put('RecordId', '@{refOrder.id}');

CommerceOrders.RecordResource auaRecord = new CommerceOrders.RecordResource(AppUsageAssignment.getSobjectType(), 'POST');
auaRecord.fieldValues = auaFieldValues;

CommerceOrders.RecordWithReferenceRequest auaRecordNode = new CommerceOrders.RecordWithReferenceRequest('refAppTag', auaRecord);
recordNodes.add(auaRecordNode);

// Prepare for the Order Item
Map<String,Object> oiFieldValues = new Map<String,Object>();
oiFieldValues.put('OrderId', '@{refOrder.id}');
oiFieldValues.put('PricebookEntryId', '01uDU000000YPkIYAW');
oiFieldValues.put('Product2Id', '01tDU000000ESCSYA4');
oiFieldValues.put('Quantity', 2);
oiFieldValues.put('UnitPrice', 800);

CommerceOrders.RecordResource oiRecord = new CommerceOrders.RecordResource(OrderItem.getSobjectType(), 'POST');
oiRecord.fieldValues = oiFieldValues;

CommerceOrders.RecordWithReferenceRequest oiRecordNode = new CommerceOrders.RecordWithReferenceRequest('refOrderItem', oiRecord);
recordNodes.add(oiRecordNode);
```

```
// Invoke the Place Order Apex API
CommerceOrders.PricingPreferenceEnum pricingPreference = CommerceOrders.PricingPreferenceEnum.System;
CommerceOrders.CatalogRatesPreferenceEnum catalogRatesPreference = CommerceOrders.CatalogRatesPreferenceEnum.Fetch;
CommerceOrders.ConfigurationInputEnum configurationPreference = CommerceOrders.ConfigurationInputEnum.RunAndAllowErrors;
CommerceOrders.ConfigurationOptionsInput configurationInput = new CommerceOrders.ConfigurationOptionsInput();
configurationInput.validateProductCatalog = true;
configurationInput.validateAmendRenewCancel = true;
configurationInput.executeConfigurationRules = true;
configurationInput.addDefaultConfiguration = true;
```

```apex
CommerceOrders.GraphRequest graph = new CommerceOrders.GraphRequest('testGraph', recordNodes);
CommerceOrders.PlaceOrderResult result = CommerceOrders.PlaceOrderExecutor.execute(graph, pricingPreference, catalogRatesPreference, configurationPreference, configurationInput);

// Process any error, if exists
if (!result.success) {
  List<ConnectApi.PlaceOrderErrorResponse> errors = result.responseError;
  for (ConnectApi.PlaceOrderErrorResponse error : errors) {
    System.debug(error.errorCode + ': ' + error.message);
  }
}
```

## Related Topics

- RevSalesTrxn (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm)
- GraphRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm)
- GraphRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm)
- GraphRequest(graphId, records) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm)
- revsalestrxn.RecordWithReferenceRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- graphId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm)
- CommerceOrders (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commerceorders.htm)
- GraphRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm)
- GraphRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm)
- GraphRequest(graphId, records) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_GraphRequest.htm)
