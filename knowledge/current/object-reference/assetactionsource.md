---
title: "AssetActionSource"
domain: object-reference
topic: assetactionsource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.979Z
estimatedTokens: 2167
keywords: [AssetActionSource, way, record, transactions, caused, changes, lifecycle-managed, assets, trace, financial, asset, actions, supports, Salesforce, order]
---

# AssetActionSource

> Represents an optional way to record what transactions caused changes to
         lifecycle-managed assets. Use it to trace financial and other information about asset
         actions. This object supports Salesforce order products and work order line items, and
         transaction IDs from other systems. The fields can’t be edited. This object is
      available in API version 50.0 and later.

# AssetActionSource

Represents an optional way to record what transactions caused changes to lifecycle-managed assets. Use it to trace financial and other information about asset actions. This object supports Salesforce order products and work order line items, and transaction IDs from other systems. The fields can’t be edited. This object is available in API version 50.0 and later.

## Supported Calls

createable(), deletable(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undeletable(), updateable().

## Special Access Rules

To use Customer Asset Lifecycle Management APIs, you must have the Access Customer Asset Lifecycle Management APIs permission and Read access to the Asset, Asset Action, Asset Action Source, and Asset State Period objects.

## Fields

| Field | Details |
| --- | --- |
| ActualTax | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe region-specific tax amount determined at time of the order.This field is not used for price and tax calculations. |
| AdjustmentAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionAn adjustment to the product amount, such as a discount. |
| AssetActionId | TypereferencePropertiesCreateable, Filter, Group, SortDescriptionThe related asset action, that is, the change caused by an asset action source transaction.This field is a relationship field.Relationship NameAssetActionRelationship TypeLookupRefers ToAssetAction |
| AssetActionSourceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the asset action source. Label is Name. |
| BillingReference | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the OrderItem or OrderItemDetail record that this AssetActionSource record is created for. |
| Discount | TypepercentPropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe discount, expressed as a percentage, that's applied to the asset.This field is available in API version 62.0 and later. |
| DiscountAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe discount, expressed as currency, that's applied to the asset.This field is available in API version 62.0 and later. |
| EffectiveGrantDate | TypedateTimePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe date when the resources associated with the asset were granted.This field is available in orgs that have Revenue Cloud when Rate Management is enabled.This field is available in API version 62.0 and later. |
| EndDate | TypedateTimePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe end date of the service or change. |
| EstimatedTax | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe estimate of the region-specific tax amount made at time of the transaction. |
| ExternalReference | TypestringPropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of an asset action source transaction originating in a system outside of Salesforce. |
| ExternalReferenceDataSource | TypestringPropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionA system outside of Salesforce that contains asset action source transactions. |
| LegalEntityId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of the legal entity record associated with the asset action source transaction.This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameLegalEntityRelationship TypeLookupRefers ToLegalEntity |
| ListPrice | TypecurrencyPropertiesCreatable, Filter, Nillable, Sort, UpdateableDescriptionList price for the order product. Value is inherited from the associated PriceBookEntry upon order product creation. |
| NetUnitPrice | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe final adjusted unit price, inclusive of all adjustments, but exclusive of tax. The unit price after all price adjustments are applied. |
| ObligatedAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionWhen a line amount is prorated, this amount shows the service amount that’s been consumed. |
| OriginalLineNumber | TypeintPropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe number of the original order item detail line. Salesforce uses this information to create a record to amend, renew, or cancel an order. This field is available in API version 64.0 and later.Relationship NameOrderItemDetailRelationship TypeLookupRefers ToLineNumber |
| PeriodBoundary | TypepicklistPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionBoundary delimiters for periods. It determines when a period starts and/or ends.Valid values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod |
| PeriodBoundaryDay | TypeintPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe number specifying the day number when Period Boundary is a specific day in a week/month/year. It only applies when PeriodBoundary is set to "day of period.” |
| PeriodBoundaryStartMonth | TypepicklistPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionField is populated based on input in the StartDate, PeriodBoundary, and PeriodBoundaryDay when BillingFrequency2 is Annual or by manual user entry. Possible values are:1-January2-February3-March4-April5-May6-June7-July8-August9-September10-October11-November12-December |
| PricebookEntryId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionPricebookEntry is used as a lookup for price information in order to pre-populate OrderItem's ListPrice and UnitPrice. |
| PricingTermCount | TypedoublePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionNumber of pricing terms is this subscription product. |
| ProductAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe product amount after the asset action source transaction. |
| ProductSellingModelId | TypereferencePropertiesCreatable, Filter, Group, Nillable, Sort, UpdateableDescriptionSpecifies the product selling model type. Foreignkey to ProductSellingModel entity. |
| ProrationPolicyId | TypereferencePropertiesCreatable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of the ProrationPolicy used for pricing. |
| Quantity | TypedoublePropertiesCreatable, Filter, Nillable, Sort, UpdateableDescriptionThe product quantity or the change in product quantity after the asset action source transaction. |
| ReferenceEntityItemId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionThe ID of an asset action source transaction originating in Salesforce. The transaction can be an order product or a work order line item.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRelationship TypeLookupRefers ToOrderItem, WorkOrderLineItem |
| SegmentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ramp segment associated with the asset action source transaction.This field is available in API version 62.0 and later. |
| StartDate | TypedateTimePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe start date of the service or change. |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the product amount and the adjustment amount.This field is a calculated field. |
| TaxTreatmentId | TypereferencePropertiesCreateable, Filter, Group, Nillable, Sort, UpdateableDescriptionLookup to Tax Treatment entity. It's used to calculate tax. |
| TotalLineAmount | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe price of the line before any price adjustments were applied. SalesTransactionItem: ProratedStartingTotal / StartingPriceTotal. Note: TotalPrice is computed using the UnitPrice, which includes discounts (price adjustments), while TotalLineAmount doesn’t include price adjustments. |
| TotalPrice | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionCalculated by the pricing engine for ARC. Summation of TotalAdjustmentAmount plus TotalLineAmount for this item. |
| TransactionDate | TypedateTimePropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe date of a source transaction, such as an order date. |
| UnitPrice | TypecurrencyPropertiesCreateable, Filter, Nillable, Sort, UpdateableDescriptionThe unit price of the item before any discounts or tax calculation. |
