---
title: "OrderAdjustmentGroup"
domain: object-reference
topic: orderadjustmentgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.707Z
estimatedTokens: 1951
keywords: [OrderAdjustmentGroup, Group, containing, adjustments, applied, order, API, version, 48.0, later, Calls, Special, Access, Rules, Associated]
---

# OrderAdjustmentGroup

> Group containing a set of adjustments applied to an order. This object is
    available in API version 48.0 and later.

# OrderAdjustmentGroup

Group containing a set of adjustments applied to an order. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access Commerce Orders entities, your org must have a Salesforce Order Management license. Commerce Orders entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific coupon applied.This is a polymorphic relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCouponThis field is available in API version 54.0 and later.This field can only refer to Coupon when B2B Commerce is enabled. |
| AdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific promotions applied.This field is a polymorphic relationship field.Relationship NameAdjustmentCauseRelationship TypeLookupRefers ToPriceAdjustmentTier, PromotionThis field is available in API version 52.0 and later.This field can only refer to Promotion when B2B Commerce is enabled. |
| AdjustmentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the origin of the adjustment.Possible values are:Discretionary—The adjustment originates from a decision made by an individual, for example, a manager’s discount granted to a client.Promotion—The adjustment originates from a promotion, for example, a holiday sale discount.Rule—Reserved for future use.System—The adjustment originates from the system, for example, a volume discount after the amount of items reaches a specific number.This field is available in API version 57.0 and later. |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of mathematical adjustment to be applied to the order.Possible values are:AdjustmentAmount—The adjustment is a numerical amount, for example, a cash discount of 20.AdjustmentPercentage—The adjustment is a percentage amount, for example, a 10% discount.OverrideAmount—The adjustment is a manual price override.This field is available in API version 57.0 and later. |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe specified AdjustmentType’s amount to be applied to the order.For example, when the AdjustmentType value is AdjustmentAmount, the AdjustmentValue is expected to equal the value of the TotalAmount field.When the AdjustmentType value is AdjustmentPercentage, the AdjustmentValue represents the percentage number, and the TotalAmount field’s value will show the calculated adjustment amount.This field is available in API version 57.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe currency used for the checkout session. Default value is USD.Possible values are:USD—U.S. Dollar |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUser-entered information about the order adjustment group. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all total amounts of all adjustments in this group, including tax. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-defined name of the order adjustment group. |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique identifier of the order related to the adjustments in this order adjustment group.This field is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionA numeric value that represents the order of precedence of the order adjustment group.It can also represent the order of precedence when applying the AdjustmentType values. For example, an order can have two adjustments: a $100 discount and a 10% discount. This field will tell the pricing engine which adjustment needs to be applied first.This field is available in API version 57.0 and later. |
| RelatedAdjustmentGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the original order’s adjustment group. This field is a useful reference in change order scenarios.This field is a relationship field.Relationship NameRelatedAdjustmentGroupRelationship TypeLookupRefers ToOrderAdjustmentGroup |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total of all order adjustments in this order adjustment group, excluding tax. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total tax for all order adjustments in this order adjustment group. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how the adjustment was applied to the order.Possible values are:Header: — The adjustment was applied to the order’s balance, and then distributed among the order products in the adjustment group.SplitLine— The adjustment was applied to order product balances for the order products in the adjustment group. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderAdjustmentGroupChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[OrderAdjustmentGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderAdjustmentGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OrderAdjustmentGroupOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrderAdjustmentGroupShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OrderAdjustmentGroupChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderAdjustmentGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderAdjustmentGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- OrderAdjustmentGroupOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrderAdjustmentGroupShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
