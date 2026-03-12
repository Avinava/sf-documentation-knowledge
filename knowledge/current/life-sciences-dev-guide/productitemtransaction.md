---
title: "ProductItemTransaction"
domain: life-sciences-dev-guide
topic: productitemtransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.091Z
estimatedTokens: 230
keywords: [ProductItemTransaction, Standard, custom, extend, Product, Item, Transaction, represent, action, taken, API, version, 65.0, later, Calls]
---

# ProductItemTransaction

> Standard and custom fields extend the standard Product Item Transaction
         object to represent information about an action taken on a product item. This object
      is available in API version 65.0 and later.

# ProductItemTransaction

Standard and custom fields extend the standard Product Item Transaction object to represent information about an action taken on a product item. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProductionBatchId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe production batch associated with transacted products.This field is a relationship field.Relationship NameProductionBatchRefers ToProductionBatch |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ProductItemTransaction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productitemtransaction.htm)
