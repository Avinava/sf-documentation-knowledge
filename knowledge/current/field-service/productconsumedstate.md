---
title: "ProductConsumedState"
domain: field-service
topic: productconsumedstate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.502Z
estimatedTokens: 590
keywords: [ProductConsumedState, status, item, inventory, work, order, line, Service, API, version, 57.0, later, Calls, Special, Access]
---

# ProductConsumedState

> Represents the status of an item from your inventory that was used to
         complete a work order or work order line item in Field Service. This object is
      available in API version 57.0 and later.

# ProductConsumedState

Represents the status of an item from your inventory that was used to complete a work order or work order line item in Field Service. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

To create products consumed, you need Read permission on product items.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

To delete products consumed, you need Edit, Create, and Read permission on product items.

## Fields

| Field | Details |
| --- | --- |
| ConsumedState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe new state of the serialized product after it’s consumed |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product consumed record is locked or not.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product consumed record can be edited or not.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the product. |
| ProductConsumedId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe Product Consumed that is used for consuming the serialized productsRelationship NameOwnerRelationship TypeLookup |
| SerializedProductId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe serialized product being consumed.Relationship NameOwnerRelationship TypeLookup |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as ProductConsumedState.

[Product Consumed State History](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
