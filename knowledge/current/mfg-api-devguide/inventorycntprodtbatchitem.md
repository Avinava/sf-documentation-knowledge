---
title: "InventoryCntProdtBatchItem"
domain: mfg-api-devguide
topic: inventorycntprodtbatchitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.747Z
estimatedTokens: 903
keywords: [InventoryCntProdtBatchItem, inventory, count, batch, product, location, API, version, 55.0, later, Calls]
---

# InventoryCntProdtBatchItem

> Represents the inventory count of a batch of a product at a location.
      This object is available in API version 55.0 and later.

# InventoryCntProdtBatchItem

Represents the inventory count of a batch of a product at a location. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InventoryCountAssessment | TypereferencePropertiesCreate, Filter, Group, SortDescriptionInventory count assessment associated with the inventory count product batch item. |
| ProductBatchItem | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProduct batch item associated with the inventory count product batch item.Relationship TypeLookupRefers ToProductBatchItem |
| InventoryCountProductItem | TypereferencePropertiesCreate, Filter, Group, SortDescriptionInventory count product item associated with the inventory count product batch item.Relationship TypeLookupRefers ToInventoryCountProductItem |
| Assignee | TypereferencePropertiesCreate, Filter, Group, SortDescriptionPerson who counts the inventory.Relationship TypeLookupRefers ToUser, Contact |
| ActualStartDate | TypedateTimePropertiesCreate, Filter, Group, SortDescriptionActual start date and time for counting the batch's inventory. |
| ActualEndDate | TypedateTimePropertiesCreate, Filter, Group, SortDescriptionActual end date and time for counting the batch's inventory. |
| IsBlindCount | TypebooleanPropertiesCreate, Filter, Group, SortDescriptionIndicates whether the expected inventory quantity is visible to the assignee during inventory counting (true) or not (false). |
| ActualQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionActual quantity of the batch's inventory. |
| ExpectedQuantity | TypedoublePropertiesCreate, Filter, Group, SortDescriptionExpected quantity of the batch's inventory. |
| Status | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionStatus of inventory count product batch item. |
| DiscrepancyReasonType | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionSpecifies the type of reason for discrepancy between actual quantity and expected quantity. |
| Comment | TypestringPropertiesCreate, Filter, Group, SortDescriptionComment, note, or instruction that gives additional context for the count of the batch's inventory. |
| IsSerializedProduct | TypebooleanPropertiesCreate, Filter, Group, SortDescriptionIndicates whether the product being counted is serialized (true) or not (false). |
| ProductionBatch | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProduction batch associated with the inventory count product batch item.Relationship TypeLookupRefers ToProductionBatch |
| Product | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProduct associated with the inventory count product batch item.Relationship TypeLookupRefers Toproduct2 |
| ProductItem | TypereferencePropertiesCreate, Filter, Group, SortDescriptionProduct item associated with the inventory count product batch item.Relationship TypeLookupRefers ToProductItem |
| LocationOwner | TypereferencePropertiesCreate, Filter, Group, SortDescriptionOwner of the location associated with the inventory count product batch item.Relationship TypeLookupRefers ToUser, UserGroup |
| Location | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLocation associated with the inventory count product batch item.Relationship TypeLookupRefers ToLocation |
| DiscrepancyInQuantity | TypebooleanPropertiesCreate, Filter, Group, SortDescriptionIndicates whether there's a discrepancy between the actual quantity and the expected quantity (true) or not (false). |
