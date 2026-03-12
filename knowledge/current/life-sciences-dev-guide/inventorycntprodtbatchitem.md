---
title: "InventoryCntProdtBatchItem"
domain: life-sciences-dev-guide
topic: inventorycntprodtbatchitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.194Z
estimatedTokens: 1345
keywords: [InventoryCntProdtBatchItem, inventory, count, product, batch, location, item, child, assessment, API, version, 65.0, later, Calls]
---

# InventoryCntProdtBatchItem

> Represents the inventory count of a product batch at a location. The
         inventory count product batch item is a child object of inventory count assessment.
      This object is available in API version 65.0 and later.

# InventoryCntProdtBatchItem

Represents the inventory count of a product batch at a location. The inventory count product batch item is a child object of inventory count assessment. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual end date and time for counting the batch's inventory. |
| ActualQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual quantity of the batch's inventory. |
| ActualStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual start date and time for counting the batch's inventory. |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person who counts the inventory.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToContact, User |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA comment, note, or instruction that gives additional context for the count of the batch's inventory. |
| DiscrepancyReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of reason for the discrepancy between the actual quantity and the expected quantity. |
| ExpectedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected quantity of the batch's inventory. |
| InventoryCountAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe inventory count assessment associated with the inventory count product batch item.This field is a relationship field.Relationship NameInventoryCountAssessmentRelationship TypeMaster-detailRefers ToInventoryCountAssessment (the master object) |
| InventoryCountProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory count product item associated with the inventory count product batch item.This field is a relationship field.Relationship NameInventoryCountProductItemRefers ToInventoryCountProductItem |
| IsBlindCount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the expected inventory quantity is visible to the assignee during inventory counting (true) or not (false).The default value is false. |
| IsDiscrepancyInQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether there's a discrepancy between the actual quantity and the expected quantity (true) or not (false).The default value is false.This field is a calculated field. |
| IsSerializedProduct | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product being counted is serialized (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LocationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the location associated with the inventory count product batch item.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| LocationPrimaryUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the primary user of the location associated with the inventory count product batch item.This field is a relationship field.Relationship NameLocationPrimaryUserRefers ToUser |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the inventory count product batch item record. |
| ProductBatchItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product batch item associated with the inventory count product batch item.This field is a relationship field.Relationship NameProductBatchItemRefers ToProductBatchItem |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the inventory count product batch item.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the product item associated with the inventory count product batch item.This field is a relationship field.Relationship NameProductItemRefers ToProductItem |
| ProductionBatchId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the production batch associated with the inventory count product batch item.This field is a relationship field.Relationship NameProductionBatchRefers ToProductionBatch |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of inventory count product batch item.Possible values are:CompletedInProgress—In ProgressNotStarted—Not Started |
