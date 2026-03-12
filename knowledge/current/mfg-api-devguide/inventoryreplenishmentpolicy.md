---
title: "InventoryReplenishmentPolicy"
domain: mfg-api-devguide
topic: inventoryreplenishmentpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.798Z
estimatedTokens: 1018
keywords: [InventoryReplenishmentPolicy, policy, replenishing, inventory, quantity, reaches, minimum, level, API, version, 63.0, later, Calls, Special, Access]
---

# InventoryReplenishmentPolicy

> Represents a policy for replenishing inventory when the inventory quantity
         reaches a minimum level. This object is available in API version 63.0 and
      later.

# InventoryReplenishmentPolicy

Represents a policy for replenishing inventory when the inventory quantity reaches a minimum level. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Replenishment must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the inventory replenishment policy. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the inventory replenishment policy is no longer effective. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the inventory replenishment policy becomes effective. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LocationReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location associated with the inventory replenishment policy.This field is a polymorphic relationship field.Relationship NameLocationReferenceRecordRefers ToLocation |
| MaximumInventoryQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe maximum quantity for the inventory. |
| MinimumInventoryQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum quantity of the inventory at which the inventory is replenished. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the inventory replenishment policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product or the product classification associated with the inventory replenishment policy.This field is a polymorphic relationship field.Relationship NameProductReferenceRecordRefers ToProduct2, ProductCategory |
| ReplenishmentAction | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the action taken to replenish inventory.Possible values are:ProductRequest—Product RequestThe default value is ProductRequest. |
| ReplenishmentQuantityFormula | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe formula to calculate the replenishment quantity. For example, MaximumQuantity - ProductItem.QuantityOnHand. |
| ReplenishmentSourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location from which the product is replenished.This field is a relationship field.Relationship NameReplenishmentSourceLocationRefers ToLocation |
| ReplenishmentSrcLocCriterion | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the criterion of determining the replenishment source locationPossible values are:ProductFulfillmentLocation—Product Fulfillment LocationReplenishmentSourceLocation—Replenishment Source LocationThe default value is ReplenishmentSourceLocation. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the inventory replenishment policy.Possible values are:ActiveDraftInactiveThe default value is Draft. |
