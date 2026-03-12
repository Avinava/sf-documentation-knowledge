---
title: "PriceAdjustmentItem"
domain: object-reference
topic: priceadjustmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.361Z
estimatedTokens: 1425
keywords: [PriceAdjustmentItem, business, logic, item-level, price, adjustment, discount, order, item, API, version, 55.0, later, Calls, Special]
---

# PriceAdjustmentItem

> Defines the business logic for an item-level price adjustment, for example, a
         discount on an order item. This object interface is available in API version 55.0 and
      later.

# PriceAdjustmentItem

Defines the business logic for an item-level price adjustment, for example, a discount on an order item. This object interface is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object interface is available with Subscription Management or B2B Commerce.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmountScope | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUsed with AdjustmentValue to determine the amount of the adjustment.Possible values are:Total—The adjustment applies to the line item's total and isn’t multiplied by the quantity, prorated for the duration of the subscription.For example, let's say a sales transaction item quantity is 10 and the TotalLineAmount is 1000. If the price adjustment item has an AdjustmentValue of -10, an AdjustmentType of AdjustmentAmount, and an AdjustmentAmountScope of Total, the $10 discount is applied to the total line amount. The TotalAmount of the price adjustment item is $1000 + (-$10) = $990.Unit—The adjustment is multiplied by the line item’s quantity.For example, let's say a sales transaction item quantity is 5 and the TotalLineAmount is 1000. If the price adjustment item has an AdjustmentValue of -10, an AdjustmentType of AdjustmentAmount, and an AdjustmentAmountScope of Unit, the $10 discount is applied to each line amount. The TotalAmount of the price adjustment item is $1000 + (-$10 x 5) = $950. |
| AdjustmentSource | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the source of the adjustment.Possible values are:Discretionary—The adjustment is entered manually; for example, by a sales rep.Promotion—The adjustment is a promotion.Rule—Reserved for future use.System—The adjustment is determined by the pricing configuration for the product; for example, as part of a discount schedule. |
| AdjustmentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the adjustment is a percentage, an amount, or an override.Possible values are:AdjustmentAmountAdjustmentPercentageOverrideAmount |
| AdjustmentValue | TypedoublePropertiesFilter, SortDescriptionThe value of the adjustment. Used together with AdjustmentAmountScope to determine the amount of the adjustment. |
| Description | TypetextareaPropertiesNillableDescriptionThe user-entered description of the price adjustment item. Available in API version 55.0 to 57.0. |
| ImplementorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object that is implementing this object interface, for example, a CartItemPriceAdjustment object. |
| PriceAdjustmentCauseId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that caused the adjustment. For example, if the price adjustment is due to a promotion, this field contains the ID of the Promotion record. If the price adjustment is due to a price adjustment tier, this field contains the ID of the PriceAdjustmentTier record.This field is a relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPriceAdjCauseInterface |
| PriceAdjustmentGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA reference to the object interface or object that summarizes the values from multiple price adjustment items. If the related entity is an object, the object must implement the PriceAdjustmentGroup object interface.Relationship NamePriceAdjustmentGroupRelationship TypeLookupRefers ToPriceAdjustmentGroup |
| Priority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA positive integer indicating the order in which this price adjustment item is applied, relative to other price adjustment items. A Priority of 1 indicates this price adjustment item is applied first.Price adjustments with a null priority are applied after price adjustments with a specified priority. If two or more price adjustments have a null priority, percentage adjustments are applied before amount adjustments. Applying a percentage adjustment before an amount adjustment results in a larger total adjustment.NoteThe value of Priority must be unique among price adjustment items related to the same price adjustment group. For example, you can’t have two price adjustment items with a priority of 1.For example, let’s say that two price adjustment items apply to the same item to be priced. The first price adjustment, Spring_Promotion, defines a 10% discount and has Priority of 1. The second price adjustment, Early_Renewal_Discount, defines a $2,000 discount and has a Priority of 2. In this case, the Spring_Promotion price adjustment is applied before the Early_Renewal_Discount price adjustment. |
| SalesTransactionItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the sales transaction item that the price adjustment item applies to.This field is a relationship field.Relationship NameSalesTransactionItemRelationship TypeLookupRefers ToSalesTransactionItem |
| TotalAmount | TypecurrencyPropertiesFilter, SortDescriptionThe total amount of the adjustment that applies to the item to be priced, inclusive of quantity, prorated for the duration of the subscription.For example, let’s say the price adjustment item has an AdjustmentAmountScope of Unit, an AdjustmentType of AdjustmentAmount, and an AdjustmentValue of -10. This configuration indicates a $10 per-unit discount. If the subscription is priced for 12 months and the pricing term is 1, the PricingTermCount on the sales transaction item is 12. If the quantity is 5, the value of TotalAmount is 5 x 12 x -10 = -600 |
