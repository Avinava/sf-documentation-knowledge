---
title: "ProductInventoryBatchSearchableField"
domain: mfg-api-devguide
topic: productinventorybatchsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.943Z
estimatedTokens: 2026
keywords: [ProductInventoryBatchSearchableField, production, batch, data, inventory, search, including, item, specific, location, serves, basis, Criteria-Based, Filter, combines]
---

# ProductInventoryBatchSearchableField

> Represents production batch data used for inventory search, including batch
      item details for a specific location. This data serves as the basis for Criteria-Based and
      Filter Search, which combines batch details with standard inventory dimensions. This
    object is available in API version 47.0 and later.

# ProductInventoryBatchSearchableField

Represents production batch data used for inventory search, including batch item details for a specific location. This data serves as the basis for Criteria-Based and Filter Search, which combines batch details with standard inventory dimensions. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Product2 | TypereferencePropertiesFilter, Group, SortDescriptionThe product record associated with the record. |
| ProductName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the product related to a product item. |
| TotalQuantityUnitOfMeasure | TypetextPropertiesCreate, Nillable, UpdateDescriptionSpecifies the unit of measure for the total quantity at location. |
| ProductItem | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product item record associated with the record. |
| BusinessBrand | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe business brand record associated with the record. |
| BusinessBrandName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the business brand of a product item. |
| MakeName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe make name of a product item. |
| ModelName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe model name of a product item. |
| ModelYear | TypeindPropertiesFilter, Group, SortDescriptionThe model year of a product item. |
| ProductCode | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe product code for identifying a product item. |
| IsProductSerialized | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the product related to a product item is a serialized product (true) or not (false). |
| UniversalProductCode | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe universal product code that's used to track the product item. |
| ManufacturerPartNumber | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe unique number assigned by the manufacturer to identify a product item. |
| ProductName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the product related to a product item. |
| ProductDescription | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe description of a product item. |
| ProductFamily | TypetextPropertiesCreate, Nillable, UpdateDescriptionSpecifies the product family to which a product item belongs. |
| ProductLineCode | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe product line category of a product item. |
| ProductCategoryCode | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe product category code of a product item. |
| ProductManufacturerName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the manufacturer that manufactured a product item. |
| ProductVersionName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe version name of a product item. |
| HarmonizedSystemCode | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe harmonized system code that's assigned to the product item. |
| IsEnvrPrtcRegCompliant | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the product item is compliant with environment protection regulations (true) or not (false). |
| InventoryLocation | TypereferencePropertiesFilter, Group, SortDescriptionThe location record associated with the record. |
| InventoryLocationName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name inventory location for a product item. |
| InvLocationCoord | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe latitude and longitude coordinates of an inventory location for a product item. |
| InventoryLocationType | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe type of an inventory location for a product item. |
| ParentInventoryLocation | TypereferencePropertiesFilter, Group, SortDescriptionThe parent inventory location associated with the record. |
| ParentInventoryLocationName | TypereferencePropertiesFilter, Group, SortDescriptionThe name of the parent inventory location for a product item. |
| ParentInventoryLocationType | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe type of the parent inventory location for a product item. |
| Account | TypereferencePropertiesFilter, Group, SortDescriptionThe account associated with the record. |
| AccountName Batch | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the account related to a product item. |
| ProductionBatch | TypereferencePropertiesFilter, Group, SortDescriptionThe batch associated with the product item record. |
| BatchName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of batch related to a product item. |
| BatchIdentificationNumber | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe unique identification number of the batch. |
| BatchCreatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the batch is created. |
| BatchManufacturedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe manufactured date and time for the batch. |
| BatchExpirationDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the batch expires. . |
| BatchCreationLocation | TypereferencePropertiesFilter, Group, SortDescriptionThe batch creation location associated with the batch. |
| BatchCreationLocationName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the location where the batch is created. |
| BatchManufacturingLocation | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe manufacturing location record associated with the batch. |
| BatchManufacturingLocationName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe manufacturing location of the batch. |
| IsBatchActive | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the batch status is active(true) or not (false). |
| BatchOriginType | TypetextPropertiesCreate, Nillable, UpdateDescriptionSpecifies the orgin type of the batch. |
| ProductBatchItem | TypereferencePropertiesFilter, Group, SortDescriptionThe product item associated with the batch. |
| ProductBatchItemName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the product item associated with the batch. |
| ProductBatchItemQuantity | TypedoublePropertiesFilter, Group, SortDescriptionThe quantity of the product items in the batch. |
| IsProductBatchItemActive | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the product batch item status is active(true) or not (false). |
| ProductBatchItemAssignee | TypereferencePropertiesFilter, Group, SortDescriptionThe assignee associated with the product batch item. |
| ProductBatchItemAssigneeName | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe name of the assignee associated with the product batch item. |

## Associated Object

This object has the following associated object. Unless noted, it is available in the same API version as this object.

[AccountForecastChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

## Related Topics

- AccountForecastChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
