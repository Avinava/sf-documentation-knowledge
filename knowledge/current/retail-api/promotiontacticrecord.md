---
title: "Promotion.TacticRecord"
domain: retail-api
topic: promotiontacticrecord
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.577Z
estimatedTokens: 444
keywords: [Promotion.TacticRecord, APEX, wrapper, Promotion, Tactic, SObject, Records, instance, wraps, Record, parent, TPM_Promotion, provide, manipulate, order]
---

# Promotion.TacticRecord

> This APEX class provides a wrapper to Promotion Tactic SObject Records. Each instance
  wraps an SObject Record related to the parent TPM_Promotion and provide methods to manipulate them
  in order to flag them for insertion or deletion. It also provides methods to extract the
  underlying SObject records so updates can be made.

# Promotion.TacticRecord

This APEX class provides a wrapper to Promotion Tactic SObject Records. Each instance wraps an SObject Record related to the parent TPM\_Promotion and provide methods to manipulate them in order to flag them for insertion or deletion. It also provides methods to extract the underlying SObject records so updates can be made.

## Namespace

cgcloud

-   **[TPM\_Promotion.TacticRecord Methods](atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm#tpm_promotion_tactic_method.xml)**


## TPM\_Promotion.TacticRecord Methods

The following are methods for TPM\_Promotion.TacticRecord.

-   **[global Set<Id> getEffectiveBrands](atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm#method_TPM_Promotion.TacticRecord)**
    Returns the read only list of effective brands of the tactic.
-   **[global Set<Id> getEffectiveCategories](atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm#unique_2146249290)**
    Returns the read only list of effective categories of the tactic.
-   **[global TPM\_ProductFilter getProductFilter](atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm#unique_1983150672)**
    Returns the Product filter of the tactic.

### global Set<Id> getEffectiveBrands

Returns the read only list of effective brands of the tactic.

#### API Version

55

#### Signature

global Set<Id> getEffectiveBrands()

### global Set<Id> getEffectiveCategories

Returns the read only list of effective categories of the tactic.

#### API Version

55

#### Signature

global Set<Id> getEffectiveCategories()

### global TPM\_ProductFilter getProductFilter

Returns the Product filter of the tactic.

#### API Version

55

#### Signature

global TPM\_ProductFilter getProductFilter()

## Related Topics

- TPM_Promotion.TacticRecord Methods (atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm)
- global Set<Id> getEffectiveBrands (atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm)
- global Set<Id> getEffectiveCategories (atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm)
- global TPM_ProductFilter getProductFilter (atlas.en-us.retail_api.meta/retail_api/TPM_PromotionTacticRecord.htm)
