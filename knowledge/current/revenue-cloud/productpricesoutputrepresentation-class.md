---
title: "ProductPricesOutputRepresentation Class"
domain: revenue-cloud
topic: productpricesoutputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.952Z
estimatedTokens: 1489
keywords: [ProductPricesOutputRepresentation, price, product, currencyIsoCode, effectiveFrom, effectiveTo, isDefault, isDerived, isSelected, priceBookEntryId, priceBookId, pricingModel]
---

# ProductPricesOutputRepresentation Class

> Get the price details of a product.

# ProductPricesOutputRepresentation Class

Get the price details of a product.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[ProductPricesOutputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_properties)**
    Learn more about the properties available with the ProductPricesOutputRepresentation class.

## ProductPricesOutputRepresentation Properties

Learn more about the properties available with the ProductPricesOutputRepresentation class.

The following are properties for ProductPricesOutputRepresentation.

-   **[currencyIsoCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_currencyIsoCode)**
    Get or set the ISO currency code for the price.
-   **[effectiveFrom](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_effectiveFrom)**
    Get or set the date and time when this price becomes effective.
-   **[effectiveTo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_effectiveTo)**
    Get or set the date and time when this price expires.
-   **[isDefault](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_isDefault)**
    Indicates whether this is the default price for the product.
-   **[isDerived](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_isDerived)**
    Indicates whether this price is derived from another price.
-   **[isSelected](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_isSelected)**
    Indicates whether this price is currently selected.
-   **[price](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_price)**
    Get or set the price value for the product.
-   **[priceBookEntryId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_priceBookEntryId)**
    Get or set the ID of the price book entry.
-   **[priceBookId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_priceBookId)**
    Get or set the ID of the price book containing this price.
-   **[pricingModel](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_runtime_industries_cpq_ProductPricesOutputRepresentation_pricingModel)**
    Get or set the pricing model associated with this price.

### currencyIsoCode

Get or set the ISO currency code for the price.

#### Signature

public String currencyIsoCode {get; set;}

#### Property Value

Type: String

### effectiveFrom

Get or set the date and time when this price becomes effective.

#### Signature

public String effectiveFrom {get; set;}

#### Property Value

Type: String

### effectiveTo

Get or set the date and time when this price expires.

#### Signature

public String effectiveTo {get; set;}

#### Property Value

Type: String

### isDefault

Indicates whether this is the default price for the product.

#### Signature

public Boolean isDefault {get; set;}

#### Property Value

Type: Boolean

### isDerived

Indicates whether this price is derived from another price.

#### Signature

public Boolean isDerived {get; set;}

#### Property Value

Type: Boolean

### isSelected

Indicates whether this price is currently selected.

#### Signature

public Boolean isSelected {get; set;}

#### Property Value

Type: Boolean

### price

Get or set the price value for the product.

#### Signature

public Double price {get; set;}

#### Property Value

Type: Double

### priceBookEntryId

Get or set the ID of the price book entry.

#### Signature

public String priceBookEntryId {get; set;}

#### Property Value

Type: String

### priceBookId

Get or set the ID of the price book containing this price.

#### Signature

public String priceBookId {get; set;}

#### Property Value

Type: String

### pricingModel

Get or set the pricing model associated with this price.

#### Signature

public runtime\_industries\_cpq.PricingModelOutputRepresentation pricingModel {get; set;}

#### Property Value

Type: runtime\_industries\_cpq.PricingModelOutputRepresentation

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- ProductPricesOutputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- currencyIsoCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- effectiveFrom (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- effectiveTo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- isDefault (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- isDerived (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- isSelected (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- price (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
- priceBookEntryId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm)
