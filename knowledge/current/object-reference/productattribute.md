---
title: "ProductAttribute"
domain: object-reference
topic: productattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.279Z
estimatedTokens: 554
keywords: [ProductAttribute, attributes, associated, product, API, version, 50.0, later, Calls, Special, Access, Rules, Objects]
---

# ProductAttribute

> Represents the attributes that can be associated with a product.
      This object is available in API version 50.0 and later.

# ProductAttribute

Represents the attributes that can be associated with a product. This object is available in API version 50.0 and later.

## Supported Calls

create, delete, describeLayout(), describeSObjects(), getDeleted, getUpdated, query(), retrieve(), undelete, update, upsert

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access products.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the product attribute set. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product that the attribute is associated with. This field is unique within your organization. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order that product attributes appear in. |
| VariantParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the variation parent record associated with the product attribute. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductAttributeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

## Related Topics

- ProductAttributeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
