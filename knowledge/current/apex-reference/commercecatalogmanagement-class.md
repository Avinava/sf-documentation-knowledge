---
title: "CommerceCatalogManagement Class"
domain: apex-reference
topic: commercecatalogmanagement-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.323Z
estimatedTokens: 991
namespace: ConnectApi
keywords: [CommerceCatalogManagement, composite, product, variation, compositeCommerceProductCreate, webstoreId, API, Version, Requires, Chatter, compositeCommerceProductUpdate, productId, compositeCommerceVariationCreate]
---

# CommerceCatalogManagement Class

> Create or update a composite product. Create a variation product.

**Namespace:** `ConnectApi`

# CommerceCatalogManagement Class

Create or update a composite product. Create a variation product.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceCatalogManagement Methods

These methods are for CommerceCatalogManagement. All methods are static.

### compositeCommerceProductCreate(webstoreId, compositeCommerceProductInputRepresentation)

Create a composite product.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CompositeCommerceProductOutputRepresentation compositeCommerceProductCreate(String webstoreId, ConnectApi.CompositeCommerceProductInputRepresentation compositeCommerceProductInputRepresentation)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

compositeCommerceProductInputRepresentation

Type: [ConnectApi.CompositeCommerceProductInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_product.htm "Composite product input.")

Details used to create the composite product.

#### Return Value

Type: [ConnectApi.CompositeCommerceProductOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_product_output.htm "Details of a composite product.")

### compositeCommerceProductUpdate(webstoreId, productId, compositeCommerceProductInputRepresentation)

Update a composite product.

#### API Version

61.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CompositeCommerceProductOutputRepresentation compositeCommerceProductUpdate(String webstoreId, String productId, ConnectApi.CompositeCommerceProductInputRepresentation compositeCommerceProductInputRepresentation)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

productId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the composite product.

compositeCommerceProductInputRepresentation

Type: [ConnectApi.CompositeCommerceProductInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_product.htm "Composite product input.")

Details used to update the composite product.

#### Return Value

Type: [ConnectApi.CompositeCommerceProductOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_product_output.htm "Details of a composite product.")

### compositeCommerceVariationCreate(webstoreId, compositeCommerceVariationInputRepresentation)

Create a variation product.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CompositeCommerceVariationOutputRepresentation compositeCommerceVariationCreate(String webstoreId, ConnectApi.CompositeCommerceVariationInputRepresentation compositeCommerceVariationInputRepresentation)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

compositeCommerceVariationInputRepresentation

Type: ConnectApi.CompositeCommerceVariationInputRepresentation

Details used to create the variation product.

#### Return Value

Type: [ConnectApi.CompositeCommerceVariationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_variation_output.htm "Details of composite product variations.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CompositeCommerceProductInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_composite_commerce_product.htm)
- ConnectApi.CompositeCommerceProductOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_product_output.htm)
- ConnectApi.CompositeCommerceVariationOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_composite_commerce_variation_output.htm)
