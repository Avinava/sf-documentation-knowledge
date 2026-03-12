---
title: "OrderAction"
domain: object-reference
topic: orderaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.695Z
estimatedTokens: 505
keywords: [OrderAction, order, new, sale, cancellation, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# OrderAction

> Indicates the type of order, such as a new sale or a cancellation. This
      object is available in API version 55.0 and later.

# OrderAction

Indicates the type of order, such as a new sale or a cancellation. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available if Subscription Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name given to the order action. |
| OffsetOrderItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the previous order item that is being modified by the business action. For example, the order that is being canceled.This is a relationship field.Relationship NameOffsetOrderItemRelationship TypeLookupRefers ToOrderItem |
| OrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe order containing the order item that implements the business action.This is a relationship field.Relationship NameOrderRelationship TypeLookupRefers ToOrder |
| SourceAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset that is changed as a result of the business action. For example, the asset that is being canceled.This is a relationship field.Relationship NameSourceAssetRelationship TypeLookupRefers ToAsset |
| Subtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe subtype of the action on the order line item.Valid values are:FieldAmendmentRollbackStartDateAdjustmentTransferFromTransferToThis field is available with Revenue Cloud in API version 64.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe business action that created the order product.Valid values are:AddAmendCancelNo ChangeRenewTransfer—Available with Revenue Cloud in API version 65.0 and later. |
