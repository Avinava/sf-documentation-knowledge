---
title: "productField Annotation"
domain: revenue-cloud
topic: productfield-annotation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:49.252Z
estimatedTokens: 383
keywords: [productField, Annotation, CML, Product2, variable, loads, Product, Catalog, Management, PCM, constraint, model, activation]
---

> productField is a CML annotation that defines the Product2 field on a variable.
  productField loads the value from Product Catalog Management (PCM) during constraint model
  activation.

# productField Annotation

productField is a CML annotation that defines the Product2 field on a variable. productField loads the value from Product Catalog Management (PCM) during constraint model activation.

| Annotation | productfield |
| --- | --- |
| Applicable to | Variable |
| Value Type/Values | Literal (case sensitive) |
| Description | Used to load the value from the corresponding Product2 field defined in Product Catalog Management(PCM).Defined under either a type or supertype. If defined under a supertype, the types, which inherit from the supertype, load the Product2 field value for the corresponding product.Supports a maximum of 50 Product2 fields. Loads product field values for a maximum of 20,000 products.Read-only. Doesn’t support a null value. |

## Example 1

In this example, “TestNumber\_\_c“ is a custom field defined on the Product2 object. The constraint rules engine loads the value of ”TestNumber\_\_c“ for the Laptop product during constraint model activation.

```

```

## Example 2

In this example, the product field variable “productName” is defined under a supertype “LineItem”. Any type that inherits the supertype loads the value of “Name” for the corresponding product during constraint model activation.

```

```

## Example 3

In this example, the product field variable “productName” is defined under the parent type “LaptopProBundle”. “Laptop” is a child of “LaptopProBundle”, and it can access the “productCode” variable from its parent by using the parent() function.

```

```

## Code Examples

```
type Laptop {
    @(productField = "TestNumber__c")
    int TestNumber;
}
```

```
type LineItem {
    @(productField = "Name")
    string productName;
}

type Laptop : LineItem;
type Mouse : LineItem;
}
```

```
type LaptopProBundle {
    @(productField = "ProductCode")
    string productCode;
    
    relation laptop : Laptop;
}

type Laptop {
    string parentProductCode = parent(productCode);
}
```
