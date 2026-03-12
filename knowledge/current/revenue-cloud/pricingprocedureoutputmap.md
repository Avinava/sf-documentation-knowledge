---
title: "PricingProcedureOutputMap"
domain: revenue-cloud
topic: pricingprocedureoutputmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.991Z
estimatedTokens: 636
keywords: [PricingProcedureOutputMap, mapping, outputs, pricing, procedures, associated, lookup, tables, record, output, component, Recipe, API, version, 60.0]
---

# PricingProcedureOutputMap

> Represents the mapping of the outputs of the pricing procedures to the
         associated lookup tables. Each record specifies the output mapping of the associated lookup
         table based on the pricing component type specified in the Pricing Recipe Table Mapping
         object. This object is available in API version 60.0 and later.

# PricingProcedureOutputMap

Represents the mapping of the outputs of the pricing procedures to the associated lookup tables. Each record specifies the output mapping of the associated lookup table based on the pricing component type specified in the Pricing Recipe Table Mapping object. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsPricingRecipeActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the pricing recipe is active (true) or not (false).The default value is false. |
| LookupField | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionDefinition of the fields that are used for this lookup. |
| OutputFieldNameId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe field name containing the output type generated from the pricing element.This field is a polymorphic relationship field.Relationship NameOutputFieldNameRelationship TypeLookupRefers ToCalculationMatrixColumn, DecisionTableParameter |
| OutputFieldNameString | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis is a derived field that references a specific column in a decision table or decision matrix. |
| OutputType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe output type generated from a pricing element.Possible values are:AdjustmentType—Adjustment TypeAdjustmentValue—Adjustment ValueCustomOutput—Custom OutputHashOutput—Hash OutputUnitPrice—Unit PriceUpperBound—Unit PriceLowerBound—Unit PriceTierValue—Unit PriceTierType—Unit Price |
| PricingComponentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe pricing component field data on which the decision table is built.Possible values are:AttributeDiscount—Attribute Based DiscountBundleDiscount—Bundle Based DiscountDerivedPricingDiscountDistributionService—Discount Distribution ServiceListPrice—List PricePriceAdjustmentMatrixPromotionsDiscountVolumeDiscount—Volume Based DiscountVolumeTierDiscount—Tier DiscountRuleFetchAssetDiscovery |
| PricingRecipeTableMappingId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe mapping of pricing components of a lookup table with the chosen pricing recipe.This field is a relationship field.Relationship NamePricingRecipeTableMappingRelationship TypeLookupRefers ToPricingRecipeTableMapping |
