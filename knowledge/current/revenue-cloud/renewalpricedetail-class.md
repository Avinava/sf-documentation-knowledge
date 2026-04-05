---
title: "RenewalPriceDetail Class"
domain: revenue-cloud
topic: renewalpricedetail-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:13.631Z
estimatedTokens: 746
keywords: [RenewalPriceDetail, net, unit, price, quantity, asset, sales, renewal, opportunities, netUnitPrice]
---

# RenewalPriceDetail Class

> Contains net unit price and quantity details for an asset to set as sales price for renewal opportunities.

# RenewalPriceDetail Class

Contains net unit price and quantity details for an asset to set as sales price for renewal opportunities.

## Namespace

[renew\_assets\_summary](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_renew_assets_summary.htm "Retrieve details about renewable assets to create renewal opportunities.")

-   **[RenewalPriceDetail Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_renew_assets_summary_RenewalPriceDetail_constructors)**
    Learn more about the constructors available with the RenewalPriceDetail class.
-   **[RenewalPriceDetail Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_renew_assets_summary_RenewalPriceDetail_properties)**
    Learn more about the properties available with the RenewalPriceDetail class.

## RenewalPriceDetail Constructors

Learn more about the constructors available with the RenewalPriceDetail class.

The RenewalPriceDetail class includes these constructors.

-   **[RenewalPriceDetail(netUnitPrice, quantity)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_renew_assets_summary_RenewalPriceDetail_ctor)**
    Initializes the RenewalPriceDetail class that contains net unit price and quantity information.

### RenewalPriceDetail(netUnitPrice, quantity)

Initializes the RenewalPriceDetail class that contains net unit price and quantity information.

#### Signature

public RenewalPriceDetail(Decimal netUnitPrice, Decimal quantity)

```

```

#### Parameters

netUnitPrice

Type: Decimal

The net unit price of the asset.

quantity

Type: Decimal

The quantity of the asset.

## RenewalPriceDetail Properties

Learn more about the properties available with the RenewalPriceDetail class.

The RenewalPriceDetail class includes these properties.

-   **[netUnitPrice](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_renew_assets_summary_RenewalPriceDetail_netUnitPrice)**
    Get or set the net unit price of the asset.
-   **[quantity](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm#apex_renew_assets_summary_RenewalPriceDetail_quantity)**
    Get or set the quantity of the asset.

### netUnitPrice

Get or set the net unit price of the asset.

#### Signature

public Decimal netUnitPrice {get; set;}

```

```

#### Property Value

Type: Decimal

### quantity

Get or set the quantity of the asset.

#### Signature

public Decimal quantity {get; set;}

```

```

#### Property Value

Type: Decimal

## Code Examples

```
renew_assets_summary.RenewalPriceDetail, newinstance, [Decimal, Decimal], renew_assets_summary.RenewalPriceDetail
```

```
renew_assets_summary.RenewalPriceDetail, netUnitPrice
```

```
renew_assets_summary.RenewalPriceDetail, quantity
```

## Related Topics

- renew_assets_summary (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_renew_assets_summary.htm)
- RenewalPriceDetail Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
- RenewalPriceDetail Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
- RenewalPriceDetail(netUnitPrice, quantity) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
- netUnitPrice (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
- quantity (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_renew_assets_summary_RenewalPriceDetail.htm)
