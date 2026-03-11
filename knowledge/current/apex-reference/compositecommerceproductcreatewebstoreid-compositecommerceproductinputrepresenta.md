---
title: "compositeCommerceProductCreate(webstoreId, compositeCommerceProductInputRepresentation)"
domain: apex-reference
topic: compositecommerceproductcreatewebstoreid-compositecommerceproductinputrepresenta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.711Z
keywords: [compositeCommerceProductCreate, webstoreId, compositeCommerceProductInputRepresentation, Create, composite, product., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# compositeCommerceProductCreate(webstoreId, compositeCommerceProductInputRepresentation)

> Create a composite product.

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