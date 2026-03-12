---
title: "OrderItemAdjustmentLineItem"
domain: object-reference
topic: orderitemadjustmentlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.838Z
estimatedTokens: 1483
keywords: [OrderItemAdjustmentLineItem, adjustment, made, order, item, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# OrderItemAdjustmentLineItem

> An adjustment that has been made to an order item. This object is
    available in API version 48.0 and later.

# OrderItemAdjustmentLineItem

An adjustment that has been made to an order item. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Orders entities, your org must have a Salesforce Order Management license. Commerce Orders entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmountScope | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUsed with AdjustmentValue to determine the amount of the adjustment.Possible values are:Total—The adjustment scope is the total price.Unit—The adjustment scope is the unit price.UnproratedTotal—The adjustment scope is the unprorated total price. |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific coupon applied.This is a polymorphic relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCouponThis field is available in API version 54.0 and later. |
| AdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific promotions applied.This is a polymorphic relationship field.Relationship NameAdjustmentCauseRelationship TypeLookupRefers ToPromotionThis field is available in API version 52.0 and later. |
| AdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the origin of the adjustment.Possible values are:Discretionary—The adjustment originates from a decision made by an individual, for example, a manager’s discount granted to a client.Promotion—The adjustment originates from a promotion, for example, a holiday sale discount.Rule—Reserved for future use.System—The adjustment originates from the system, for example, a volume discount after the amount of items reaches a specific number.This field is available in API version 57.0 and later. |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of mathematical adjustment to be applied to the order.Possible values are:AdjustmentAmount—The adjustment is a numerical amount, for example, a cash discount of 20.AdjustmentPercentage—The adjustment is a percentage amount, for example, a 10% discount.OverrideAmount—The adjustment is a manual price override.This field is available in API version 57.0 and later. |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe specified AdjustmentType’s amount to be applied to the order item.For example, when the AdjustmentType value is AdjustmentAmount, the AdjustmentValue is expected to equal the value of the Amount field.When the AdjustmentType value is AdjustmentPercentage, the AdjustmentValue represents the percentage number, and the Amount field’s value will show the calculated adjustment amount.This field is available in API version 57.0 and later. |
| Amount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe net total value of the adjustment line. The value is rounded to the nearest possible amount associated with the currency of the order item. |
| AppliedPromotionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which the promotion was applied to the asset. |
| CouponCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the coupon code that was applied. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. Default value is USD.Possible values are:USD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUsers can add a custom description to the record to provide additional detail. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the adjustment line. |
| OrderAdjustmentGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order adjustment group that contains the order item adjustment line item. |
| OrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent order of the order item related to the adjustment line. |
| OrderItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order item that the adjustment line applies to. |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionA numeric value that represents the order of precedence of the order adjustment group.It can also represent the order of precedence when applying the AdjustmentType values. For example, an order can have two adjustments: a $100 discount and a 10% discount. This field will tell the pricing engine which adjustment needs to be applied first.This field is available in API version 57.0 and later. |
| RelatedAdjustmentLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe original order item adjustment line. Useful for reference in change order scenarios. |
| TotalAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionEquals the order item’s price plus TotalTaxAmount for the order item adjustment line item.This is a gross tax field.To access Commerce Orders fields, your org must have a Salesforce Order Management license. Commerce Orders fields are available only in Lightning Experience.This field is available in API v49.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of tax applied to the adjustment line. |
