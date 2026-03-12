---
title: "ProductFilter Class"
domain: retail-api
topic: productfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.553Z
estimatedTokens: 1751
keywords: [ProductFilter, APEX, programmatic, access, TPM, Promotion, Product, Filter, Products, included, _ProductFilter, toJSON, API, Version, List<ManualProduct>]
---

# ProductFilter Class

> This APEX class provides programmatic access to the TPM Promotion Product Filter used in
  the Promotion. This Product Filter defines the Products that are included in the
  Promotion.

# ProductFilter Class

This APEX class provides programmatic access to the TPM Promotion Product Filter used in the Promotion. This Product Filter defines the Products that are included in the Promotion.

## Namespace

```

```

-   **[TPM\_ProductFilter Methods](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#tpm_product_filter_method)**


## TPM\_ProductFilter Methods

The following are methods for TPM\_ProductFilter.

-   **[global String toJSON](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#globalStringtoJSON)**
    Serializes the product filter information into a String used for storage.
-   **[global List<ManualProduct> getManualProducts](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#globallist)**
    Returns a list of all the Manual Products included in the Product filter.
-   **[global List<String> getCriteriaValues](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#unique_1286909883)**
    Returns the selected criteria values for the given criteria field. The Criteria field must be a Product2 SObject field. If the criteria field is not part of the Product Filter Criteria, an empty array is returned.
-   **[global ManualProduct addManualProduct](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#addManualProduct)**
    Adds a Manual Product to the Product Filter. The parameters are the product id to manually included and a flag to include or exclude it.
-   **[global Object toGenericObject](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#global_TPM_ProductFilter)**
    Serializes the product filter information into a generic object. Useful for usage on remote calls.
-   **[global Set<SObjectField> getCriteriaFields](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#unique_645897140)**
    Returns all Product2 SObject fields used in the Product Filter criteria.
-   **[global TPM\_ProductFilter](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#unique_1012479825)**
    Creates an empty product filter.
-   **[global TPM\_ProductFilter load](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#unique_1174207366)**
    Loads the Product Filter information from the parameter generic object. The current instance will be cleared and the product filter represented by the payload will be loaded.
-   **[global TPM\_ProductFilter load](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#unique_664310660)**
    Loads the serialized Product Filter information into the current instance. The current instance will be cleared and the product filter represented by the payload will be loaded.
-   **[global void clear](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#global_TPM_ProductFilter_void_clear)**
    Removes all information from the Product Filter and makes it empty.
-   **[global void clearCriteria](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#clearCriteria)**
    Removes all Criteria filters from the ProductFilter instance.
-   **[global void removeCriteria](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#ObjectField_criteria)**
    Removes the Criteria filter for the given criteria field. The Criteria field must be a Product2 SObject field.
-   **[global void removeManualProduct](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#globalvoidremoveManualProduct)**
    Removes the manual product passed as a parameter. If the manual product is not part of the product filter manual products, the parameter will not be removed.
-   **[global void setCriteriaValues](atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm#setCriteriaValues)**
    Sets the values for the given criteria field. The Criteria field must be a Product2 SObject field.

### global String toJSON

Serializes the product filter information into a String used for storage.

#### API Version

55

#### Signature

global String toJSON()

### global List<ManualProduct> getManualProducts

Returns a list of all the Manual Products included in the Product filter.

#### API Version

55

#### Signature

global List<ManualProduct> getManualProducts

### global List<String> getCriteriaValues

Returns the selected criteria values for the given criteria field. The Criteria field must be a Product2 SObject field. If the criteria field is not part of the Product Filter Criteria, an empty array is returned.

#### API Version

55

#### Signature

global List<String\> getCriteriaValues(SObjectField criteria)

### global ManualProduct addManualProduct

Adds a Manual Product to the Product Filter. The parameters are the product id to manually included and a flag to include or exclude it.

#### API Version

55

#### Signature

global Object toGenericObject(Id productId, Boolean included)

### global Object toGenericObject

Serializes the product filter information into a generic object. Useful for usage on remote calls.

#### API Version

55

#### Signature

global Object toGenericObject()

### global Set<SObjectField> getCriteriaFields

Returns all Product2 SObject fields used in the Product Filter criteria.

#### API Version

55

#### Signature

global Set<SObjectField> getCriteriaFields()

### global TPM\_ProductFilter

Creates an empty product filter.

#### API Version

55

#### Signature

global TPM\_ProductFilter()

### global TPM\_ProductFilter load

Loads the Product Filter information from the parameter generic object. The current instance will be cleared and the product filter represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_ProductFilter load(Object data)

### global TPM\_ProductFilter load

Loads the serialized Product Filter information into the current instance. The current instance will be cleared and the product filter represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_ProductFilter load(String payload)

### global void clear

Removes all information from the Product Filter and makes it empty.

#### API Version

55

#### Signature

global void clear()

### global void clearCriteria

Removes all Criteria filters from the ProductFilter instance.

#### API Version

55

#### Signature

global void clearCriteria()

### global void removeCriteria

Removes the Criteria filter for the given criteria field. The Criteria field must be a Product2 SObject field.

#### API Version

55

#### Signature

global void removeCriteria(SObjectField criteria)

### global void removeManualProduct

Removes the manual product passed as a parameter. If the manual product is not part of the product filter manual products, the parameter will not be removed.

#### API Version

55

#### Signature

global void removeManualProduct(ManualProduct mp)

### global void setCriteriaValues

Sets the values for the given criteria field. The Criteria field must be a Product2 SObject field.

#### API Version

55

#### Signature

global void setCriteriaValues(SObjectField criteria, List<String\> values)

## Related Topics

- TPM_ProductFilter Methods (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global String toJSON (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global List<ManualProduct> getManualProducts (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global List<String> getCriteriaValues (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global ManualProduct addManualProduct (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global Object toGenericObject (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global Set<SObjectField> getCriteriaFields (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global TPM_ProductFilter (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global TPM_ProductFilter load (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
- global void clear (atlas.en-us.retail_api.meta/retail_api/TPM_ProductFilter.htm)
