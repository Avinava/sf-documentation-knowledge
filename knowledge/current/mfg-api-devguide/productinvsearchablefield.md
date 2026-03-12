---
title: "ProductInvSearchableField"
domain: mfg-api-devguide
topic: productinvsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.964Z
estimatedTokens: 2263
keywords: [ProductInvSearchableField, dataset, inventory, that's, basis, searching, product, multiple, Item, objects, API, version, 62.0, later, Calls]
---

# ProductInvSearchableField

> Represents a dataset on inventory information that's the basis for searching
         product inventory. Contains multiple fields from Product Item and related objects.
      This object is available in API version 62.0 and later.

# ProductInvSearchableField

Represents a dataset on inventory information that's the basis for searching product inventory. Contains multiple fields from Product Item and related objects. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the record.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AccountName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the account related to a product item. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business brand record associated with the record.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| BusinessBrandName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business brand of a product item. |
| ExcessQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe excess quantity for the product item. Calculated as the difference between the quantity on hand and the maximum inventory quantity. If the quantity on hand is less than the maximum, this value is 0. |
| HarmonizedSystemCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe harmonized system code that's assigned to the product item. |
| InvLocationCoord | TypelocationPropertiesNillableDescriptionThe location record associated with the record. |
| InvLocationCoordLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the inventory location. |
| InvLocationCoordLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the inventory location. |
| InventoryLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location record associated with the record.This field is a relationship field.Relationship NameInventoryLocationRefers ToLocation |
| InventoryLocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name inventory location for a product item. |
| InventoryLocationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of an inventory location for a product item. |
| InvReplenishmentPolicy | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe replenishment policy record associated with the product item. This field identifies the inventory replenishment rules that apply to the product item.Relationship NameInvReplenishmentPolicyRefers ToInvReplenishmentPolicy |
| InvReplenishmentPolicyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the replenishment policy applicable to the product item. |
| IsEnvrPrtcRegCompliant | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product item is compliant with environment protection regulations (true) or not (false).The default value is false. |
| IsProductSerialized | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product related to a product item is a serialized product (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of a product item. |
| ManufacturerPartNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique number assigned by the manufacturer to identify a product item. |
| MinimumInventoryQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum inventory quantity specified in the replenishment policy. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of a product item. |
| ModelYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of a product item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product related to a product item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentInventoryLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent inventory location associated with the record.This field is a relationship field.Relationship NameParentInventoryLocationRefers ToLocation |
| ParentInventoryLocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the parent inventory location for a product item. |
| ParentInventoryLocationType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the parent inventory location for a product item. |
| ProductCategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product category code of a product item. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product code for identifying a product item. |
| ProductDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of a product item. |
| ProductFamily | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the product family to which a product item belongs. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product record associated with the record.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item record associated with the record.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| ProductLineCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product line category of a product item. |
| ProductManufacturerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the manufacturer that manufactured a product item. |
| ProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product related to a product item. |
| ProductVersionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version name of a product item. |
| ReplenishmentLocation | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory location from which replenishment should be sourced, based on the criteria defined in the replenishment policy.Relationship NameReplenishmentLocationRefers ToLocation |
| ReplenishmentLocationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the replenishment source location derived from the replenishment policy criteria. |
| ReplenishmentQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe suggested replenishment quantity for the product item, calculated based on the formula defined in the associated replenishment policy. |
| ShortageQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity shortage for the product item. Calculated as the difference between the minimum inventory quantity and the quantity on hand. If the quantity on hand is greater than the minimum, this value is 0. |
| StockStatus | TypepicklistPropertiesFilter, Nillable, SortDescriptionIndicates the stock status of the product item. |
| TotalQuantityAtLocation | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total quantity of a product item at an inventory location. |
| TotalQuantityUnitOfMeasure | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the unit of measure for the total quantity at location. |
| UniversalProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe universal product code that's used to track the product item. |
