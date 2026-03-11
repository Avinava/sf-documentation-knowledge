---
title: "compositeCommerceVariationCreate(webstoreId, compositeCommerceVariationInputRepresentation)"
domain: apex-reference
topic: compositecommercevariationcreatewebstoreid-compositecommercevariationinputrepres
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.711Z
keywords: [compositeCommerceVariationCreate, webstoreId, compositeCommerceVariationInputRepresentation, Create, variation, product., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# compositeCommerceVariationCreate(webstoreId, compositeCommerceVariationInputRepresentation)

> Create a variation product.

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