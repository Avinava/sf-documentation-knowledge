---
title: "RenewalOpptyDetail Class"
domain: revenue-cloud
topic: renewalopptydetail-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:01:56.073Z
estimatedTokens: 2745
keywords: [RenewalOpptyDetail, asset, renewal, pricing, creating, opportunities, assetId, startDate, endDate, productId, account, priceBookId, priceBookEntryId, lastAssetActionSubtype, renewalPriceDetails]
---

# RenewalOpptyDetail Class

> Contains asset details and renewal pricing information for creating renewal opportunities.

# RenewalOpptyDetail Class

Contains asset details and renewal pricing information for creating renewal opportunities.

## Namespace

[renew\_assets\_summary](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_renew_assets_summary.htm "Retrieve details about renewable assets to create renewal opportunities.")

-   **[RenewalOpptyDetail Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_constructors)**
    Learn more about the constructors available with the RenewalOpptyDetail class.
-   **[RenewalOpptyDetail Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_properties)**
    Learn more about the properties available with the RenewalOpptyDetail class.

## RenewalOpptyDetail Constructors

Learn more about the constructors available with the RenewalOpptyDetail class.

The RenewalOpptyDetail class includes these constructors.

-   **[RenewalOpptyDetail(assetId, startDate, endDate, productId, account, priceBookId, priceBookEntryId, lastAssetActionSubtype, renewalPriceDetails, opportunityProductId, orderItem, rootAssetOpportunity, lastAssetAction, totalLineAmount)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_ctor)**
    Initializes the RenewalOpptyDetail class that contains asset details and renewal pricing information.

### RenewalOpptyDetail(assetId, startDate, endDate, productId, account, priceBookId, priceBookEntryId, lastAssetActionSubtype, renewalPriceDetails, opportunityProductId, orderItem, rootAssetOpportunity, lastAssetAction, totalLineAmount)

Initializes the RenewalOpptyDetail class that contains asset details and renewal pricing information.

#### Signature

public RenewalOpptyDetail(String assetId, Date startDate, Date endDate, String productId, String account, String priceBookId, String priceBookEntryId, String lastAssetActionSubtype, List<renew\_assets\_summary.RenewalPriceDetail> renewalPriceDetails, String opportunityProductId, String orderItem, String rootAssetOpportunity, String lastAssetAction, Decimal totalLineAmount)

```

```

#### Parameters

assetId

Type: String

The ID of the asset.

startDate

Type: Date

The start date of the asset.

endDate

Type: Date

The end date of the asset.

productId

Type: String

The ID of the product associated with the asset.

account

Type: String

The ID of the account.

priceBookId

Type: String

The ID of the price book.

priceBookEntryId

Type: String

The ID of the price book entry.

lastAssetActionSubtype

Type: String

The subtype of the last action performed on the asset. Valid value is Start Date Adjustment.

renewalPriceDetails

Type: List<[renew\_assets\_summary.RenewalPriceDetail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_class_renew_assets_summary_RenewalPriceDetail "Contains net unit price and quantity details for an asset to set as sales price for renewal opportunities.")\>

List of renewal price details for the asset.

opportunityProductId

Type: String

The ID of the associated opportunity product.

orderItem

Type: String

The ID of the associated order item.

rootAssetOpportunity

Type: String

The ID of the root asset opportunity.

lastAssetAction

Type: String

The last action performed on the asset.

-   Initial Sale
-   Upsell
-   Downsell
-   Renewal
-   Cancellation

totalLineAmount

Type: Decimal

The total line amount for the asset.

## RenewalOpptyDetail Properties

Learn more about the properties available with the RenewalOpptyDetail class.

The RenewalOpptyDetail class includes these properties.

-   **[account](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_account)**
    Get or set the ID of the account.
-   **[assetId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_assetId)**
    Get or set the ID of the asset.
-   **[endDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_endDate)**
    Get or set the end date of the asset.
-   **[lastAssetAction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_lastAssetAction)**
    Get or set the last action performed on the asset.
-   **[lastAssetActionSubtype](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_lastAssetActionSubtype)**
    Get or set the subtype of the last action performed on the asset.
-   **[opportunityProductId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_opportunityProductId)**
    Get or set the ID of the associated opportunity product.
-   **[orderItem](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_orderItem)**
    Get or set the ID of the associated order item.
-   **[priceBookEntryId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_priceBookEntryId)**
    Get or set the ID of the price book entry.
-   **[priceBookId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_priceBookId)**
    Get or set the ID of the price book.
-   **[productId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_productId)**
    Get or set the ID of the product associated with the asset.
-   **[renewalPriceDetails](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_renewalPriceDetails)**
    Get or set the list of renewal price details for the asset.
-   **[rootAssetOpportunity](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_rootAssetOpportunity)**
    Get or set the ID of the root asset opportunity.
-   **[startDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_startDate)**
    Get or set the start date of the asset.
-   **[totalLineAmount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm#apex_renew_assets_summary_RenewalOpptyDetail_totalLineAmount)**
    Get or set the total line amount for the asset.

### account

Get or set the ID of the account.

#### Signature

public String account {get; set;}

```

```

#### Property Value

Type: String

### assetId

Get or set the ID of the asset.

#### Signature

public String assetId {get; set;}

```

```

#### Property Value

Type: String

### endDate

Get or set the end date of the asset.

#### Signature

public Date endDate {get; set;}

```

```

#### Property Value

Type: Date

### lastAssetAction

Get or set the last action performed on the asset.

#### Signature

public String lastAssetAction {get; set;}

```

```

#### Property Value

Type: String

Valid values are:

-   Initial Sale
-   Upsell
-   Downsell
-   Renewal
-   Cancellation

### lastAssetActionSubtype

Get or set the subtype of the last action performed on the asset.

#### Signature

public String lastAssetActionSubtype {get; set;}

```

```

#### Property Value

Type: String

Valid value is Start Date Adjustment.

### opportunityProductId

Get or set the ID of the associated opportunity product.

#### Signature

public String opportunityProductId {get; set;}

```

```

#### Property Value

Type: String

### orderItem

Get or set the ID of the associated order item.

#### Signature

public String orderItem {get; set;}

```

```

#### Property Value

Type: String

### priceBookEntryId

Get or set the ID of the price book entry.

#### Signature

public String priceBookEntryId {get; set;}

```

```

#### Property Value

Type: String

### priceBookId

Get or set the ID of the price book.

#### Signature

public String priceBookId {get; set;}

```

```

#### Property Value

Type: String

### productId

Get or set the ID of the product associated with the asset.

#### Signature

public String productId {get; set;}

```

```

#### Property Value

Type: String

### renewalPriceDetails

Get or set the list of renewal price details for the asset.

#### Signature

public List<renew\_assets\_summary.RenewalPriceDetail> renewalPriceDetails {get; set;}

```

```

#### Property Value

Type: List<[renew\_assets\_summary.RenewalPriceDetail](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_class_renew_assets_summary_RenewalPriceDetail "Contains net unit price and quantity details for an asset to set as sales price for renewal opportunities.")\>

### rootAssetOpportunity

Get or set the ID of the root asset opportunity.

#### Signature

public String rootAssetOpportunity {get; set;}

```

```

#### Property Value

Type: String

### startDate

Get or set the start date of the asset.

#### Signature

public Date startDate {get; set;}

```

```

#### Property Value

Type: Date

### totalLineAmount

Get or set the total line amount for the asset.

#### Signature

public Decimal totalLineAmount {get; set;}

```

```

#### Property Value

Type: Decimal

## Code Examples

```apex
renew_assets_summary.RenewalOpptyDetail, newinstance, [String, Date, Date, String, String, String, String, String, List<renew_assets_summary.RenewalPriceDetail>, String, String, String, String, Decimal], renew_assets_summary.RenewalOpptyDetail
```

```
renew_assets_summary.RenewalOpptyDetail, account
```

```
renew_assets_summary.RenewalOpptyDetail, assetId
```

```
renew_assets_summary.RenewalOpptyDetail, endDate
```

```
renew_assets_summary.RenewalOpptyDetail, lastAssetAction
```

## Related Topics

- renew_assets_summary (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_renew_assets_summary.htm)
- RenewalOpptyDetail Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- RenewalOpptyDetail Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- RenewalOpptyDetail(assetId, startDate, endDate, productId, account, priceBookId, priceBookEntryId, lastAssetActionSubtype, renewalPriceDetails, opportunityProductId, orderItem, rootAssetOpportunity, lastAssetAction, totalLineAmount) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- renew_assets_summary.RenewalPriceDetail (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
- account (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- assetId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- endDate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- lastAssetAction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
- lastAssetActionSubtype (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalOpptyDetail.htm)
