---
title: "ProductFilter.ManualProduct Class"
domain: retail-api
topic: productfiltermanualproduct-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.543Z
estimatedTokens: 459
keywords: [ProductFilter.ManualProduct, APEX, programmatic, access, Manual, Products, associated, instance, TPM_ProductFilter, TPM, _ProductFilter.ManualProduct, isIncluded, API, Version, getProductId]
---

# ProductFilter.ManualProduct Class

> This APEX class provides programmatic access to a Manual Products associated to an
  instance of TPM_ProductFilter.

# ProductFilter.ManualProduct Class

This APEX class provides programmatic access to a Manual Products associated to an instance of TPM\_ProductFilter.

## Namespace

```

```

-   **[TPM\_ProductFilter.ManualProduct Methods](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#tpm_product_filter_manualproduct_method)**


## TPM\_ProductFilter.ManualProduct Methods

The following are methods for TPM\_ProductFilter.ManualProduct.

-   **[global Boolean isIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#global_manual_product)**
    Returns true if the manual product is included, false otherwise.
-   **[global Id getProductId](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#unique_203051162)**
    Returns the Product ID of the Manual Product.
-   **[global ManualProduct setIncluded](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#unique_1916824412)**
    Sets the Manual Product as included or excluded.
-   **[global ManualProduct setProductId](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm#unique_1351275329)**
    Sets the Manual Product ID value.

### global Boolean isIncluded

Returns true if the manual product is included, false otherwise.

#### API Version

55

#### Signature

global Boolean isIncluded()

### global Id getProductId

Returns the Product ID of the Manual Product.

#### API Version

55

#### Signature

global Id getProductId()

### global ManualProduct setIncluded

Sets the Manual Product as included or excluded.

#### API Version

55

#### Signature

global ManualProduct setIncluded(Boolean value)

### global ManualProduct setProductId

Sets the Manual Product ID value.

#### API Version

55

#### Signature

global ManualProduct setProductId(Id value)

## Related Topics

- TPM_ProductFilter.ManualProduct Methods (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm)
- global Boolean isIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm)
- global Id getProductId (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm)
- global ManualProduct setIncluded (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm)
- global ManualProduct setProductId (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.ManualProduct.htm)
