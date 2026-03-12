---
title: "Fields on ProductTransfer"
domain: life-sciences-dev-guide
topic: fields-on-producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.734Z
estimatedTokens: 371
keywords: [ProductTransfer, Life, Sciences, Cloud, extend, standard, capture, specific, inventory, batch]
---

# Fields on ProductTransfer

> Life Sciences Cloud fields extend the standard ProductTransfer object to capture
    specific inventory and batch information.

# Fields on ProductTransfer

Life Sciences Cloud fields extend the standard ProductTransfer object to capture specific inventory and batch information.

## Fields

| Field | Details |
| --- | --- |
| InventoryCountReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory count record where the product transfer is recorded.This field is a relationship field.Relationship NameInventoryCountReferenceRefers ToInventoryCntProdtBatchItem |
| InventoryOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory operation associated with the product transfer.This field is a relationship field.Relationship NameInventoryOperationRefers ToInventoryOperation |
| ProductionBatchId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production batch associated with the transferred products.This field is a relationship field.Relationship NameProductionBatchRefers ToProductionBatch |
| ReceivedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the transferred product is received at the destination location. |
| TransferCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the cause of the product transfer. |
| WarningMessage | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe warning message displayed to the end user during product transfer. |
