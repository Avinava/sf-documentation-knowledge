---
title: "PricingRecipeTableMapping"
domain: revenue-cloud
topic: pricingrecipetablemapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.009Z
estimatedTokens: 505
keywords: [PricingRecipeTableMapping, Represents, mapping, pricing, components, lookup, table, chosen, recipe., API, version, 60.0, later., Supported, Calls, Fields]
---

# PricingRecipeTableMapping

> Represents the mapping of pricing components of a lookup table with the
         chosen pricing recipe. This object is available in API version 60.0 and later.

# PricingRecipeTableMapping

Represents the mapping of pricing components of a lookup table with the chosen pricing recipe. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FileBasedDecisionTableName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the file-based decision table. |
| IsInternal | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the price recipe field mapping record is created internally by the Salesforce platform (true) or not (false).The default value is false. |
| LookupTableId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup table associated with the mapped fields.This field is a polymorphic relationship field.Relationship NameLookupTableRelationship TypeLookupRefers ToDecisionMatrixDefinition, DecisionTable |
| PricingComponentType | TypePricing Element Type enumerated listPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe pricing component field data on which the decision table is built.Possible values are:AttributeDiscount—Attribute Based DiscountBundleDiscount—Bundle Based DiscountDerivedPricingListPrice—List PricePriceAdjustmentMatrixPromotionsDiscountVolumeDiscount—Volume Based DiscountVolumeTierDiscount—Tier DiscountDiscountDistributionService. This value is available in API version 60.0 and later.MinimumPrice. This value is available in API version 62.0 and later.RuleFetch. This value is available in API version 64.0 and later.AssetDiscovery. This value is available in API version 64.0 and later. |
| PricingRecipeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe pricing data store associated with this pricing recipe field mappings.This field is a relationship field.Relationship NamePricingRecipeRelationship TypeLookupRefers ToPricingRecipe |
