---
title: "PriceAdjustmentGroupShape"
domain: object-reference
topic: priceadjustmentgroupshape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.985Z
estimatedTokens: 918
keywords: [PriceAdjustmentGroupShape, business, logic, top-level, price, adjustment, discount, applied, entire, order, API, version, 57.0, later, Calls]
---

# PriceAdjustmentGroupShape

> Defines the business logic for a top-level price adjustment, for example, a
			discount applied to an entire order. This object is available in API version 57.0
		and later.

# PriceAdjustmentGroupShape

Defines the business logic for a top-level price adjustment, for example, a discount applied to an entire order. This object is available in API version 57.0 and later.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated()query(), retrieve()

## Special Access Rules

This object is available with Subscription Management, B2B Commerce, or B2C Commerce.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the source of the adjustment. This field is available with B2B Commerce.Possible values are:Discretionary—The adjustment is entered manually, for example, by a sales rep.Promotion—The adjustment is part of a promotion.Rule—Reserved for future use.System—The adjustment is configured by the system data, for example, as part of a pricing rule or discount schedule. |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the adjustment is a percentage, an amount, or an override.Possible values are:AdjustmentAmount—Reserved for future use. The adjustment value is a numerical amount.AdjustmentPercentage— The adjustment value is a percentage.OverrideAmount— The override value is a numerical amount. |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe value of the adjustment. To indicate a discount, use a negative number. |
| Description | TypetextareaPropertiesCreate, NillableDescriptionUser-entered description of the price adjustment group. Available in API versions 57.0. |
| PriceAdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the record that is the source of the adjustment. For example, if the price adjustment is due to a promotion, this field contains the ID of the promotion record. If the price adjustment is due to a price adjustment tier, this field contains the ID of the price adjustment tier record.This field is a polymorphic relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPriceAdjustmentTier |
| PriceAdjustmentGroupShapeName | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionName of the price adjustment group shape. |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionA positive integer indicating the order in which this price adjustment group is applied, relative to other price adjustment groups. A Priority of 1 indicates this price adjustment group is applied first.Price adjustments with a null priority are applied after price adjustments with a specified priority. If two or more price adjustments have a null priority, percentage adjustments are applied before amount adjustments. Applying a percentage adjustment before an amount adjustment results in a larger total adjustment.NoteThe value of Priority must be unique among price adjustment groups in the same sales transaction. |
| SalesTransactionShapeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the sales transaction that the price adjustment group belongs to.This field is a relationship field.Relationship NameSalesTransactionShapeRelationship TypeLookupRefers ToSalesTransactionShape |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe total amount of adjustments of all related price adjustment items, inclusive of quantity, prorated for the duration of the subscription. This field is a calculated field equal to the sum of the TotalAmount fields in the related price adjustment items. |
