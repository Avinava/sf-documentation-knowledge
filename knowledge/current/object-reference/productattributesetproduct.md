---
title: "ProductAttributeSetProduct"
domain: object-reference
topic: productattributesetproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.294Z
estimatedTokens: 271
keywords: [ProductAttributeSetProduct, product, associated, attributes, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# ProductAttributeSetProduct

> Represents the product associated with a set of attributes. This
      object is available in API version 50.0 and later.

# ProductAttributeSetProduct

Represents the product associated with a set of attributes. This object is available in API version 50.0 and later.

## Supported Calls

create, delete, describeLayout(), describeSObjects(), getDeleted, getUpdated, query(), retrieve(), undelete, update, upsert

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access products.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product associated with the product attribute set. |
| ProductAttributeSetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product attribute set. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product associated with the product attribute set. |
