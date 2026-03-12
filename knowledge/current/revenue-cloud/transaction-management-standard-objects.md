---
title: "Transaction Management Standard Objects"
domain: revenue-cloud
topic: transaction-management-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:10.601Z
estimatedTokens: 3363
keywords: [Transaction, Management, Standard, Objects, data, model, manage, transactions]
---

# Transaction Management Standard Objects

> The Transaction Management data model provides objects and fields to manage
    transactions.

# Transaction Management Standard Objects

The Transaction Management data model provides objects and fields to manage transactions.

-   **[Asset](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_asset.htm)**
    Represents an item of commercial value, such as a product sold by your company or a competitor, that a customer has purchased.
-   **[AssetAction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetaction.htm)**
    Represents a change made to a lifecycle-managed asset. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetActionSource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetactionsource.htm)**
    Represents an optional way to record what transactions caused changes to lifecycle-managed assets. Use it to trace financial and other information about asset actions. This object supports Salesforce order products and work order line items, and transaction IDs from other systems. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetActionSrcPriceAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetactionsrcpriceadjustment.htm)**
    Each row represents a junction between an asset and the calculated price adjustment that's applied to an asset. This object is available in API version 66.0 and later.
-   **[AssetContractRelationship](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetcontractrelationship.htm)**
    Represents a relationship between an asset and a contract. This object is available in API version 60.0 and later.
-   **[AssetDowntimePeriod](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetdowntimeperiod.htm)**
    Represents a period during which an asset is not able to perform as expected. Downtime periods include planned activities, such as maintenance, and unplanned events, such as mechanical breakdown. This object is available in API version 49.0 and later.
-   **[AssetOwnerSharingRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetownersharingrule.htm)**
    Represents the rules for sharing an Asset with users other than the owner. This object is available in API version 33.0 and later.
-   **[AssetRateAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetrateadjustment.htm)**
    Stores the tier rate adjustments for the asset rate card entries. This object is available in API version 62.0 and later.
-   **[AssetRateCardEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetratecardentry.htm)**
    Stores the negotiated rate card entries that are associated with an asset in Revenue Cloud. This object is available in API version 62.0 and later.
-   **[AssetRelationship](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetrelationship.htm)**
    Represents a non-hierarchical relationship between assets due to an asset modification; for example, a replacement, upgrade, or other circumstance. In Revenue Lifecycle Management, this object represents an asset or assets grouped in a bundle or set. This object is available in API version 41.0 and later.
-   **[AssetShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetshare.htm)**
    Represents a sharing entry on an Asset. This object is available in API version 33.0 and later.
-   **[AssetStatePeriod](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetstateperiod.htm)**
    Represents a time span when an asset has the same quantity, amount, and monthly recurring revenue (MRR). An asset has as many asset state periods as there are changes to it (asset actions) during its lifecycle. The dashboard and related pages show the current asset state period. The fields can’t be edited. This object is available in API version 50.0 and later.
-   **[AssetStatePeriodAttribute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetstateperiodattribute.htm)**
    Represents a virtual object that holds the key-value pair of the asset attribute in a specified asset state period. This object is a child object of AssetStatePeriod. This object is available in API version 60.0 and later.
-   **[AssetTag](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assettag.htm)**
    Associates a word or short phrase with an Asset.
-   **[AssetTokenEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assettokenevent.htm)**
    The documentation has moved to [AssetTokenEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_assettokenevent.htm "HTML (New Window)") in the Platform Events Developer Guide.
-   **[AssetWarranty](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetwarranty.htm)**
    Defines the warranty terms applicable to an asset along with any exclusions and extensions. This object is available in API version 50.0 and later.
-   **[BindingObjUsageRsrcPlcy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_bindingobjusagersrcplcy.htm)**
    Represents the policies that are used for the usage resource that's associated with an asset or a binding object. This object is available in API version 65.0 and later.
-   **[ContractItemPrice](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_contractitemprice.htm)**
    Represents an object that’s used to capture a price for a product on a contract. This object is available in API version 61.0 and later.
-   **[ContractItemPriceAdjTier](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_contractitempriceadjtier.htm)**
    Represents the tiers of a price adjustment to a product on a contract. This object is available in API version 63.0 and later.
-   **[ContractItemPriceHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_contractitempricehistory.htm)**
    Represents the history of changes to the values in the fields of a ContractItemPrice object. This object is available in API version 61.0 and later.
-   **[OrderDeliveryMethod](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderdeliverymethod.htm)**
    Shows the customizations and options that a buyer selected for their delivery method. This object is available in API version 48.0 and later.
-   **[OrderItemAttribute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemattribute.htm)**
    Represents a virtual object that stores an attribute specified for an order item.This object is available in API version 60.0 and later.
-   **[OrderItemDetail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemdetail.htm)**
    Represents the breakdown details of an order product. Revenue Cloud generates these records to capture pricing and quantity changes, such as negative quantity reductions, early renewals, derived pricing or repricing during an amendment, and bundle or product attribute reconfigurations. This object is available in API version 60.0 and later.
-   **[OrderItemRateAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemrateadjustment.htm)**
    Represents the negotiated rate adjustment for an order product. This object is available in API version 62.0 and later.
-   **[OrderItemRateCardEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemratecardentry.htm)**
    Represents the catalog and negotiated rates of a usage metric associated with an order item that's used to charge overage consumption. This object is available in API version 62.0 and later.
-   **[OrderItemUsageRsrcGrant](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemusagersrcgrant.htm)**
    Represents the negotiated grants for the usage resource that's associated with the usage product added in the order item. This object is available in API version 65.0 and later.
-   **[OrderItemUsageRsrcPlcy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_orderitemusagersrcplcy.htm)**
    Represents the policies that are used for the usage resource that's associated with the usage product added in the order item. This object is available in API version 65.0 and later.
-   **[SalesTransactionType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_salestransactiontype.htm)**
    Represents the type of the sales transaction. This object is available in API version 61.0 and later.
-   **[QuoteAction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quoteaction.htm)**
    Indicates the type of sales transaction that’s being quoted; for example, a renewal sale. This object is available in API version 59.0 and later.
-   **[QuoteLineDetail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotelinedetail.htm)**
    Represents the breakdown details of a quote line item. Revenue Cloud generates these records to capture pricing and quantity changes, such as negative quantity reductions, early renewals, derived pricing or repricing during an amendment, and bundle or product attribute reconfigurations. This object is available in API version 60.0 and later.
-   **[QuoteLineGroup](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotelinegroup.htm)**
    Stores the group information for line items in a quote. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to quote. This object is available in API version 61.0 and later.
-   **[QuoteLineItemAttribute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotelineitemattribute.htm)**
    Represents a virtual object that stores an attribute specified for a quote line item. This object is available in API version 59.0 and later.
-   **[QuotLineItmUseRsrcGrant](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotlineitmusersrcgrant.htm)**
    Represents the negotiated grants for the usage resource that's associated with the usage product added in the quote line item. This object is available in API version 65.0 and later.
-   **[QuotLineItmUsageRsrcPlcy](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotlineitmusagersrcplcy.htm)**
    Represents the policies that are used for the usage resource that's associated with the usage product added in the quote line item. This object is available in API version 65.0 and later.
-   **[QuoteLineRateAdjustment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotelinerateadjustment.htm)**
    Represents the negotiated rate adjustment for a quote line item. This object is available in API version 62.0 and later.
-   **[QuoteLineRateCardEntry](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotelineratecardentry.htm)**
    Represents the catalog and negotiated rates of a usage resource associated with a quote line item that's used to charge overage consumption. This object is available in API version 62.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- Asset (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_asset.htm)
- AssetAction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetaction.htm)
- AssetActionSource (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetactionsource.htm)
- AssetActionSrcPriceAdjustment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetactionsrcpriceadjustment.htm)
- AssetContractRelationship (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetcontractrelationship.htm)
- AssetDowntimePeriod (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetdowntimeperiod.htm)
- AssetOwnerSharingRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetownersharingrule.htm)
- AssetRateAdjustment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetrateadjustment.htm)
- AssetRateCardEntry (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetratecardentry.htm)
- AssetRelationship (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetrelationship.htm)
