---
title: "AssetActionSource"
domain: revenue-cloud
topic: assetactionsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:46.059Z
estimatedTokens: 2005
keywords: [AssetActionSource, way, record, transactions, caused, changes, lifecycle-managed, assets, trace, financial, asset, actions, supports, Salesforce, order, products, work, line, items, transaction, IDs, systems, can’t, edited, API, 50.0]
---

> Represents an optional way to record what transactions caused changes to
         lifecycle-managed assets. Use it to trace financial and other information about asset
         actions. This object supports Salesforce order products and work order line items, and
         transaction IDs from other systems. The fields can’t be edited. This object is
      available in API version 50.0 and later.

# AssetActionSource

Represents an optional way to record what transactions caused changes to lifecycle-managed assets. Use it to trace financial and other information about asset actions. This object supports Salesforce order products and work order line items, and transaction IDs from other systems. The fields can’t be edited. This object is available in API version 50.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search().

## Special Access Rules

To use Customer Asset Lifecycle Management APIs, you must have the Access Customer Asset Lifecycle Management APIs permission and Read access to the Asset, Asset Action, Asset Action Source, and Asset State Period objects.

## Fields

| Field | Details |
| --- | --- |
| ActualTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe region-specific tax amount determined at time of the order.This field is not used for price and tax calculations. |
| AdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionAn adjustment to the product amount, such as a discount. |
| AssetActionId | TypereferencePropertiesFilter, Group, SortDescriptionThe related asset action, that is, the change caused by an asset action source transaction.This field is a relationship field.Relationship NameAssetActionRelationship TypeLookupRefers ToAssetAction |
| AssetActionSourceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the asset action source. Label is Name. |
| BillingReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the OrderItem or OrderItemDetail record that this AssetActionSource record is created for. |
| Discount | TypepercentPropertiesFilter, Nillable, SortDescriptionThe discount, expressed as a percentage, that's applied to the asset.This field is available in API version 62.0 and later. |
| DiscountAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe discount, expressed as currency, that's applied to the asset.This field is available in API version 62.0 and later. |
| EffectiveGrantDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resources associated with the asset were granted.This field is available in orgs that have Revenue Cloud when Rate Management is enabled.This field is available in API version 62.0 and later. |
| EndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe end date of the service or change. |
| EstimatedTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe estimate of the region-specific tax amount made at time of the transaction. |
| ExternalReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of an asset action source transaction originating in a system outside of Salesforce. |
| ExternalReferenceDataSource | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA system outside of Salesforce that contains asset action source transactions. |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the legal entity record associated with the asset action source transaction.This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameLegalEntityRelationship TypeLookupRefers ToLegalEntity |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionList price for the order product. Value is inherited from the associated PriceBookEntry upon order product creation. |
| NetUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe final adjusted unit price, inclusive of all adjustments, but exclusive of tax. The unit price after all price adjustments are applied. |
| ObligatedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionWhen a line amount is prorated, this amount shows the service amount that’s been consumed. |
| OriginalLineNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of the original order item detail line. Salesforce uses this information to create a record to amend, renew, or cancel an order. This field is available in API version 64.0 and later.Relationship NameOrderItemDetailRelationship TypeLookupRefers ToLineNumber |
| PeriodBoundary | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionBoundary delimiters for periods. It determines when a period starts and/or ends.Valid values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod |
| PeriodBoundaryDay | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number specifying the day number when Period Boundary is a specific day in a week/month/year. It only applies when PeriodBoundary is set to "day of period.” |
| PeriodBoundaryStartMonth | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionField is populated based on input in the StartDate, PeriodBoundary, and PeriodBoundaryDay when BillingFrequency2 is Annual or by manual user entry. Possible values are:1-January2-February3-March4-April5-May6-June7-July8-August9-September10-October11-November12-December |
| PricebookEntryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPricebookEntry is used as a lookup for price information in order to pre-populate OrderItem's ListPrice and UnitPrice. |
| PricingTermCount | TypedoublePropertiesFilter, Nillable, SortDescriptionNumber of pricing terms is this subscription product. |
| ProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe product amount after the asset action source transaction. |
| ProductSellingModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the product selling model type. Foreignkey to ProductSellingModel entity. |
| ProrationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ProrationPolicy used for pricing. |
| Quantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe product quantity or the change in product quantity after the asset action source transaction. |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of an asset action source transaction originating in Salesforce. The transaction can be an order product or a work order line item.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRelationship TypeLookupRefers ToOrderItem, WorkOrderLineItem |
| SegmentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ramp segment associated with the asset action source transaction.The maximum supported length is 255 characters from API version 67.0 and later.This field is available in API version 62.0 and later. |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start date of the service or change. |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the product amount and the adjustment amount.This field is a calculated field. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup to Tax Treatment entity. It's used to calculate tax. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe price of the line before any price adjustments were applied. SalesTransactionItem: ProratedStartingTotal / StartingPriceTotal. Note: TotalPrice is computed using the UnitPrice, which includes discounts (price adjustments), while TotalLineAmount doesn’t include price adjustments. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionCalculated by the pricing engine for ARC. Summation of TotalAdjustmentAmount plus TotalLineAmount for this item. |
| TransactionDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date of a source transaction, such as an order date. |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe unit price of the item before any discounts or tax calculation. |
