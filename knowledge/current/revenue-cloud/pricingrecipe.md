---
title: "PricingRecipe"
domain: revenue-cloud
topic: pricingrecipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.813Z
estimatedTokens: 1281
keywords: [PricingRecipe, Represents, data, models, objects, particular, cloud, pricing, store, consumes, during, design, time, run, time., Parent, File, Suffix, Directory, Location]
---

# PricingRecipe

> Represents the data models or sets of objects of a particular
			cloud that the pricing data store consumes during design time and run time.

# PricingRecipe

Represents the data models or sets of objects of a particular cloud that the pricing data store consumes during design time and run time.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

PricingRecipe components have the suffix .pricingRecipe and are stored in the pricingRecipe folder.

## Version

PricingRecipe components are available in API version 60.0 and later.

## Special Access Rules

This metadata type is available with Salesforce Pricing.

## Fields

| Field Name | Description |
| --- | --- |
| defaultPricingProcedure | Field TypeExpressionSetDefinitionDescriptionExpression set definition that's associated with this pricing recipe setting. |
| defaultPricingProcedureDeveloperName | Field TypestringDescriptionFor internal use only. |
| defaultPricingProcedureId | Field TypestringDescriptionID of the pricing procedure of the pricing recipe. |
| developerName | Field TypestringDescriptionRequired.API name of the pricing recipe. |
| isActive | Field TypebooleanDescriptionIndicates whether the pricing recipe is active (true) or not (false).The default value is false |
| isInternal | Field TypebooleanDescriptionIndicates whether the price recipe record is created internally by the Salesforce platform (true) or not (false).The default value is false |
| masterLabel | Field TypestringDescriptionRequired.Name for pricing recipe that's defined when the pricing recipe is created. |
| pricingRecipeTableMapping | Field TypePricingRecipeTableMapping[]DescriptionMapping of the pricing components of a lookup table with the chosen pricing recipe. |

## PricingRecipeTableMapping

Represents the mapping of the lookup table with the chosen pricing recipe.

| Field Name | Description |
| --- | --- |
| isInternal | Field TypebooleanDescriptionIndicates whether the price recipe field mapping record is created internally by the Salesforce platform (true) or not (false).The default value is false. |
| lookupTable | Field TypeDecisionTableDecisionMatrixDefinitionDescriptionLookup table that's associated with either a decision matrix or decision table. |
| lookupTableDeveloperName | Field TypestringDescriptionFor internal use only. |
| pricingComponentType | Field TypestringDescriptionPricing component field data that the decision table is built on.Valid values are:AttributeDiscountBundleDiscountDerivedPricingListPricePriceAdjustmentMatrixPromotionsDiscountVolumeDiscountVolumeTierDiscountDiscountDistributionService. This value is available in API version 60.0 and later.MinimumPrice. Available in API version 62.0 and later. |
| pricingProcedureOutputMapList | Field TypePricingProcedureOutputMap[]DescriptionList of the mappings of the outputs of the pricing procedures to the associated lookup tables. Available in API version 60.0 and later. |
| pricingRecipe | Field TypestringDescriptionRequired.Pricing data store that's associated with this pricing recipe field mapping. |

## PricingProcedureOutputMap

Represents the mapping of the outputs of the pricing procedures to the associated lookup tables. Each record specifies the output mapping of the associated lookup table based on the pricing component type specified in the PricingRecipeTableMapping object.

| Field Name | Description |
| --- | --- |
| fieldName | Field TypestringDescriptionFor internal use only. |
| isPricingRecipeActive | Field TypebooleanDescriptionIndicates whether the associated pricing recipe is active (true) or not (false).The default value is false. |
| outputFieldName | Field TypestringDescriptionField name that contains the output type that's generated from the pricing element. |
| outputFieldNameString | Field TypestringDescriptionDerived field that references a specific column in a decision table or decision matrix. |
| outputType | Field TypestringDescriptionOutput type that's generated from a pricing element.Valid values are:AdjustmentTypeAdjustmentValueCustomOutputHashOutputUnitPrice |
| pricingElementType | Field TypePricingElementType (enumeration of type string)DescriptionType of pricing element, which is a derived field from PricingRecipeTableMapping.PricingComponentType.Valid values are:AssetDiscoveryAttributeDiscountBundleDiscountDerivedPricingDiscountDistributionServiceListPriceMinimumPricePriceAdjustmentMatrixPriceRevisionPromotionsDiscountRuleFetchVolumeDiscountVolumeTierDiscount |

## Declarative Metadata Sample Definition

The following is an example of a PricingRecipe component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<PricingRecipe xmlns="http://soap.sforce.com/2006/04/metadata">
    <defaultPricingProcedureId> </defaultPricingProcedureId>
    <developerName>CMEDefaultRecipe</developerName>
    <isActive>false</isActive>
    <isInternal>false</isInternal>
    <masterLabel>CMEDefaultRecipe</masterLabel>
    <pricingRecipeTableMapping>
        <isInternal>false</isInternal>
        <lookupTableDeveloperName>Bundle_Based_Adjustment_Decision_Table</lookupTableDeveloperName>
        <pricingComponentType>CUSTOMDISCOUNT</pricingComponentType>
        <fileBasedDecisionTableName>Bundle Based Adjustment Entries</fileBasedDecisionTableName>
        <pricingProcedureOutputMapList>
            <fieldName>AdjustmentValue</fieldName>
            <isPricingRecipeActive>false</isPricingRecipeActive>
            <outputFieldName>0lPxx000000000f</outputFieldName>
            <outputFieldNameString>false</outputFieldNameString>
            <outputType>AdjustmentValue</outputType>
	     <pricingElementType>BundleDiscount</pricingElementType>
        </pricingProcedureOutputMapList>
        <pricingProcedureOutputMapList>
            <fieldName>AdjustmentType</fieldName>
            <isPricingRecipeActive>false</isPricingRecipeActive>
            <outputFieldName>0lPxx000000000m</outputFieldName>
            <outputFieldNameString>false</outputFieldNameString>
            <outputType>AdjustmentType</outputType>
	     <pricingElementType>BundleDiscount</pricingElementType>
        </pricingProcedureOutputMapList>
        <pricingRecipe>CMEDefaultRecipe</pricingRecipe>
    </pricingRecipeTableMapping>
</PricingRecipe>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PricingRecipe</name>
    </types>
    <version>66.0</version>
</Package>
```
