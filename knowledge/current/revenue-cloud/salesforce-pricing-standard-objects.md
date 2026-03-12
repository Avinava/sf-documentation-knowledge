---
title: "Salesforce Pricing Standard Objects"
domain: revenue-cloud
topic: salesforce-pricing-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.352Z
estimatedTokens: 2648
keywords: [Salesforce, Pricing, Standard, Objects, data, model, manage, processes, product, management, calculation, application, discounts]
---

# Salesforce Pricing Standard Objects

> The Salesforce Pricing data model provides objects and fields to manage pricing
  processes, such as product management and calculation and application of discounts.

# Salesforce Pricing Standard Objects

The Salesforce Pricing data model provides objects and fields to manage pricing processes, such as product management and calculation and application of discounts.

-   **[AttributeAdjustmentCondition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributeadjustmentcondition.htm)**
    Represents the condition applied to an attribute that determines the price of a product or service being sold. This object is available in API version 60.0 and later.
-   **[AttributeBasedAdjRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributebasedadjrule.htm)**
    Represents the attribute conditions in a rule associated with the attribute based adjustment made for a product or service being sold. This object is available in API version 60.0 and later.
-   **[AttributeBasedAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributebasedadjustment.htm)**
    Represents the association between the product selling model and the price adjustment for product or service being sold based on its attributes. This object stores information about the attributes that define the price of the product or service, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.
-   **[AttributeDefinition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributedefinition.htm)**
    Represents a product, asset, or object attribute, for example, a hardware specification or software detail. This object is available in API version 60.0 and later.
-   **[BundleBasedAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_bundlebasedadjustment.htm)**
    Represents the association between the product selling model and the price adjustment for a product or service being sold as a bundle. This object stores information of the product or service's price, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.
-   **[CostBook](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_costbook.htm)**
    Represents the cost book that contains multiple cost book entries. This object is available in API version 61.0 and later.
-   **[ContractItemPrice](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricing_contractitemprice.htm)**
    Represents the price of a product on the contract. This object is available in API version 61.0 and later.
-   **[CostBookEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_costbookentry.htm)**
    Represents the total cost of a product or service that’s determined based on various factors that affect a product's price. For example, when a product is manufactured, the weight of the raw material can be a cost factor based on the amount of material required and its shipping cost. This object is available in API version 61.0 and later.
-   **[PriceAdjustmentSchedule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_priceadjustmentschedule.htm)**
    Represents a series of tiered discounts based on the number of items purchased.  This object is available in API version 60.0 and later.
-   **[PriceAdjustmentTier](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_priceadjustmenttier.htm)**
    Represents a discount tier in a price adjustment schedule.  This object is available in API version 60.0 and later.
-   **[PriceBook2](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricebook2.htm)**
    Represents a price book that contains the list of products that your org sells. This object is available in API version 60.0 and later.
-   **[PriceBookEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricebookentry.htm)**
    Represents a product entry (an association between a Pricebook2 and Product2) in a price book. This object is available in API version 60.0 and later.
-   **[PriceBookEntryDerivedPrice](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricebookentryderivedprice.htm)**
    Represents the price of a product that’s derived from another source such as a product or an asset. This object is available in API version 61.0 and later.
-   **[PriceRevisionPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricerevisionpolicy.htm)**
    Represents the guidelines and methods used to modify product or service prices, often incorporating formulas based on price revision entries and various adjustments. For example, a policy might dictate that prices are revised based on a formula that considers the regional Consumer Price Index (CPI) with a specific adjustment percentage, effective from a defined date, and categorized as either a flat adjustment or one directly based on the price revision entry data. This object is available in API version 65.0 and later.
-   **[PricingAdjBatchJob](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingadjbatchjob.htm)**
    Represents the collective update of multiple records on their prices and other adjustments. This object is available in API version 62.0 and later.
-   **[PricingAdjBatchJobLog](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingadjbatchjoblog.htm)**
    Represents the report that contains a list of failed adjustment requests along with an error message that describes the reason for failure. This object is available in API version 62.0 and later.
-   **[PricingAPIExecution](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingapiexecution.htm)**
    Represents the pricing resolution for an pricing element determined using strategy name and formula. This object is available in API version 63.0 and later.
-   **[PricingProcedureResolution](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingprocedureresolution.htm)**
    Represents a selection for a pricing procedure to execute a pricing process from a list of pricing procedures available. This object is available in API version 60.0 and later.
-   **[PricingProcessExecution](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingprocessexecution.htm)**
    Represents a record generated during the execution of a discovery or pricing procedure. Multiple procedures may be performed within a single API call, with each recorded in a Pricing API Execution record. This object is available in API version 63.0 and later.
-   **[ProductPriceHistoryLog](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productpricehistorylog.htm)**
    Stores historical pricing data based on the product's price range. This object is available in API version 62.0 and later.
-   **[ProductPriceRange](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productpricerange.htm)**
    Represents the price range of a product determined by using a product selling model that’s stored in the relevant price book. This object is available in API version 62.0 and later.
-   **[ProductSellingModel](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productsellingmodel.htm)**
    Defines one method by which a product can be sold; for example, as a one-time sale, an evergreen subscription, or a termed subscription. If the product is sold on subscription, this object defines the subscription’s term. A product can have multiple product selling models.  This object is available in API version 60.0 and later.
-   **[ProductSellingModelDataTranslation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productsellingmodeldatatranslation.htm)**
    Represents the translated values of the data stored within the ProductSellingModel record’s fields. This object is available in API version 61.0 and later.
-   **[ProductSellingModelOption](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productsellingmodeloption.htm)**
    A junction object between Product Selling Model and Product2. This object is available in API version 60.0 and later.
-   **[ProcedurePlanCriterion](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_procedureplancriterion.htm)**
    The procedure plan option associated with the procedure plan criterion record. This object is available in API version 67.0 and later.
-   **[ProrationPolicy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_prorationpolicy.htm)**
    Represents the proration policy associated with a Product Selling Model Option that determines how a product's price is calculated based on subscription duration or billing periods. This object is available in API version 67.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- AttributeAdjustmentCondition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributeadjustmentcondition.htm)
- AttributeBasedAdjRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributebasedadjrule.htm)
- AttributeBasedAdjustment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributebasedadjustment.htm)
- AttributeDefinition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_attributedefinition.htm)
- BundleBasedAdjustment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_bundlebasedadjustment.htm)
- CostBook (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_costbook.htm)
- ContractItemPrice (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricing_contractitemprice.htm)
- CostBookEntry (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_costbookentry.htm)
- PriceAdjustmentSchedule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_priceadjustmentschedule.htm)
- PriceAdjustmentTier (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_priceadjustmenttier.htm)
