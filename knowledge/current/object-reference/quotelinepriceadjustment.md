---
title: "QuoteLinePriceAdjustment"
domain: object-reference
topic: quotelinepriceadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.963Z
estimatedTokens: 1067
keywords: [QuoteLinePriceAdjustment, calculated, price, adjustment, applied, quote, line, volume, discount, prorated, manual, inform, potential, customers, total]
---

# QuoteLinePriceAdjustment

> Indicates the calculated price adjustment that is applied to the quote line,
         for example, a calculated volume discount or the prorated value of a manual discount. Use
         the quote line price adjustment to inform potential customers about the type, value, and
         total amount of their discounts. This object is available in API version 56.0 and
      later.

# QuoteLinePriceAdjustment

Indicates the calculated price adjustment that is applied to the quote line, for example, a calculated volume discount or the prorated value of a manual discount. Use the quote line price adjustment to inform potential customers about the type, value, and total amount of their discounts. This object is available in API version 56.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

This object is available with Subscription Management.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmountScope | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUsed with AdjustmentValue to determine the amount of the adjustment.Possible values are:Total—The adjustment applies to the line item's total and isn’t multiplied by the quantity. The adjustment amount is prorated for the duration of the subscription.Unit—The adjustment is multiplied by the line item’s quantity, prorated for the duration of the subscription.UnproratedTotal—The adjustment applies to the line item's total and isn’t multiplied by the quantity. The adjustment amount isn’t prorated for the duration of the subscription. |
| AdjustmentSource | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe source of the adjustment.Possible values are:Discretionary—The adjustment is entered manually; for example, by a sales rep.Promotion—Reserved for future use.Rule—The adjustment results from a system rule, such as a price rule or product rule.System—The adjustment is determined by the pricing configuration for the product; for example, as part of a discount schedule. |
| AdjustmentType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of adjustment to apply to a quote line.Possible values are:AdjustmentAmount—The adjustment is a numerical amount, for example, a cash discount of 20.AdjustmentPercentage—The adjustment is a percentage amount, for example, a 10% discount.OverrideAmount—The adjustment is a manual price override. Available in API version 59.0 and later. |
| AdjustmentValue | TypedoublePropertiesFilter, SortDescriptionThe value of the adjustment. Used together with AdjustmentAmountScope to determine the amount of the adjustment. |
| AppliedPromotionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which the promotion was applied to the asset. |
| CouponCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the coupon code that was applied. |
| Description | TypetextareaPropertiesNillableDescriptionThe system-entered description of the quote line price adjustment. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-entered name of the quote line price adjustment. |
| PriceAdjustmentCauseId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that caused the adjustment. Null if AdjustmentSource is Discretionary, indicating a manual adjustment.For example, if the price adjustment is due to a price adjustment tier, this field contains the ID of the PriceAdjustmentTier record.This field is a polymorphic relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPriceAdjustmentTier |
| Priority | TypeintPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| QuoteAdjustmentGroupId | referenceintPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the quote adjustment group, which totals all price adjustments for the quote.This field is a relationship field.Relationship NameQuoteAdjustmentGroupRelationship TypeLookupRefers ToQuoteAdjustmentGroup |
| QuoteLineItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the quote line item that this price adjustment applies to.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |
| TotalAmount | TypecurrencyPropertiesFilter, SortDescriptionThe total amount of the adjustment that applies to the quote line item, inclusive of quantity, prorated for the duration of the subscription. |
