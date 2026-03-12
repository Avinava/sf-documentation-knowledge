---
title: "SalesTransactionItem"
domain: object-reference
topic: salestransactionitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.390Z
estimatedTokens: 3055
keywords: [SalesTransactionItem, business, logic, sales, transaction, item, order, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# SalesTransactionItem

> Defines the business logic for a sales transaction item, for example, an item
         in an order. This object interface is available in API version 55.0 and later.

# SalesTransactionItem

Defines the business logic for a sales transaction item, for example, an item in an order. This object interface is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object interface is available with Subscription Management or B2B Commerce.

## Fields

| Field | Details |
| --- | --- |
| BasisTransactionItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the transaction item to use as a reference when pricing this transaction.For example, let’s say an order item is renewed. In this case, a renewal order item is created from the new sale order item, and the BasisTransactionItemId on the new sale order item is updated to contain the ID of the renewal order item.This field is a polymorphic relationship field.Relationship NameBasisTransactionItemRelationship TypeLookupRefers ToSalesTransactionItem |
| BillingFrequency | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time period that indicates how often the sales transaction item is billed.Possible values are:AnnualMonthly |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe last day the sales transaction item is available. For example, the last day that the service purchased in the order item is available. |
| ImplementorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object that is implementing this entity interface, for example, an OrderProduct object. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe list price for the sales transaction item. This value is inherited from the related price book entry. |
| ListPriceTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe list price, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to ListPrice times Quantity times PricingTermCount. |
| NetUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe unit price after all adjustments are applied. |
| ObligatedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionIn a subscription, the amount a subscriber is billed for products used during the subscription period that the subscriber returns before the subscription end date. This field's value is the price for use of the product.This field is available in version 57.0 and later. This field is available when Subscription Management is enabled.NoteA subscriber must submit a quantity amendment in order to change the subscription's product quantity. A quantity amendment request is only valid until the subscription end date.A subscriber is eligible for a refund only for the periods when the products weren’t used.The subscription's proration policy indicates whether the obligated amount and the refund are prorated for partial periods. |
| ParentSalesTransactionItem | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent transaction of BasisTransactionItemId. This field is available in API version 58.0 and later. This field is a polymorphic relationship field.Relationship NameParentSalesTransactionItemRelationship TypeLookupRefers ToSalesTransactionItem |
| PeriodBoundary | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe period boundary helps determine the start and end date of the billing periods.Possible values are:AlignToCalendar—The period starts on the first day of the term unit, for example, the first day of the month.Anniversary—The start date determines the boundary. For example, if a monthly subscription starts on September 13, the subscription starts on the 13th day of each month.DayOfPeriod—The period starts on the day indicated by PeriodBoundaryDay.LastDayOfPeriod—The period starts on the last day of the pricing term unit; for example, the last day of the month. |
| PeriodBoundaryDay | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRequired when PeriodBoundary is DayOfPeriod. Indicates day of the week or month that marks the period boundary. Must be an integer from 1 through 31. |
| PeriodBoundaryStartMonth | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionField is populated based on input in the StartDate, PeriodBoundary, and PeriodBoundaryDay when BillingFrequency is Annual or by manual user entry. Possible values are:1-January2-February3-March4-April5-May6-June7-July8-August9-September10-October11-November12-December |
| PricebookEntryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the related price book entry.This field is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntryInterface |
| PricingTermCount | TypedoublePropertiesFilter, Nillable, SortDescriptionA calculated field indicating the number of pricing terms in the subscription. |
| PricingTransactionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of pricing transaction, for example, a new sale, a cancellation, an amendment, or a renewal.Possible values are:AmendmentAtLastNegotiatedPrice—calculate the price of the amended sales transaction item using the same price book and price adjustments as the new sale item. For example, an order item that is amended using a pricing transaction type of AmendmentAtLastNegotiatedPrice is priced using the same price book information and price adjustments as the new sale item. The amended order item has the same price as the new sale order item. This value is available in version 57.0 and later.AmendmentStartingFromListPrice—calculate the price of the amended sales transaction item using current price book information, disregarding any pricing information or adjustments that were applied to the new sale item. Typically, an amended transaction item has a different price than the new sale transaction item. This value is available in version 57.0 and later.Cancellation—calculate the price of the canceled transaction. For example, let’s say that a 1-year subscription was purchased on January 1, then canceled on July 31. The price of the canceled products and services from August 1 through Dec 31 is calculated.NewSale—the price of a new transaction is calculated.RenewalAtLastNegotiatedPrice—calculate the price of the renewal transaction item using the same price book and price adjustments as the new sale item. For example, an order item that is renewed using a pricing transaction type of RenewalAtLastNegotiatedPrice is priced using the same price book information and price adjustments as the new sale item. The renewal order item has the same price as the new sale order item.RenewalAtListPrice—calculate the price of the renewal transaction item using current price book information, disregarding any pricing information or adjustments that were applied to the new sale item. Typically, a renewal transaction item has a different price than the new sale transaction item. |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the related product.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProductInterface |
| ProductSellingModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related product selling model. The product selling model defines one method by which a product can be sold, for example, as a one-time sale, an evergreen subscription, or a termed subscription.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| ProrationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related proration policy. The proration policy defines how the price is calculated for each subscription period, for example, whether partial periods are allowed, and how remainder amounts are handled.This field is a relationship field.Relationship NameProrationPolicyRelationship TypeLookupRefers ToProrationPolicy |
| Quantity | TypedoublePropertiesFilter, SortDescriptionRequired. Number of units in the sales transaction item. |
| SalesItemType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The type of sale.Possible values are:ChargeProduct |
| SalesTransactionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related sales transaction.This field is a polymorphic relationship field.Relationship NameSalesTransactionRelationship TypeLookupRefers ToSalesTransaction |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe start date of the service or charge. |
| StartingPriceTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe starting unit price, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to StartingUnitPrice times Quantity times PricingTermCount. |
| StartingUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe unit price before any adjustments. |
| StartingUnitPriceSource | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Indicates whether the starting unit price was inherited, entered manually, or calculated.Possible values are:Inherited—The starting unit price is copied from a previous transaction, for example, from the order item being renewed.Manual—The starting unit price is entered manually, for example, by a sales rep.System—The starting unit price is calculated using pricing information that was configured by an administrator, for example, a pricing tier. |
| StockKeepingUnit | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe SKU assigned to the related product. |
| SubscriptionTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of terms in the subscription. You can indicate a subscription’s length using either the start and end dates, or by using the start date and the subscription term. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the adjustments applied to the sales transaction item, inclusive of quantity, prorated for the duration of the subscription. Includes distributed price adjustment items and price adjustment items applied directly. |
| TotalAdjustmentDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the distributed price adjustment items applied to the sales transaction item, prorated for the duration of the subscription. Doesn’t include price adjustment items that are applied directly.A distributed price adjustment is automatically created to apply a transaction-level adjustment to the transaction items. For example, let’s say that you have an order with two order items: one for a file storage service and another for a video streaming service. A 10% volume discount and a 15% manual discount are applied to the entire order. An additional 20% discount is applied to the file storage service. To distribute the order-level discounts, the system creates a 10% price adjustment item and a 15% price adjustment item for each order item.In this example, the file storage service’s sales transaction item has the following field values:TotalAdjustmentAmount the sum of all item-level adjustments, including the 10% price adjustment item, the 15% price adjustment item, and the 20% price adjustment item.TotalAdjustmentDistAmount the sum of the distributed item-level adjustments, including the 10% price adjustment item and the 15% price adjustment item. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price of the sales transaction item, before price adjustments, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to TotalPrice times Quantity times PricingTermCount. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe price after all adjustments, inclusive of quantity, prorated for the duration of the subscription. This calculated field is equal to TotalAdjustmentAmount plus TotalLineAmount. |
