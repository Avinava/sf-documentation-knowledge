---
title: "ProductAttributeSetItem"
domain: object-reference
topic: productattributesetitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.290Z
estimatedTokens: 285
keywords: [ProductAttributeSetItem, attributes, associated, product, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# ProductAttributeSetItem

> Represents a set of attributes that can be associated with a
         product. This object is available in API version 50.0 and later.

# ProductAttributeSetItem

Represents a set of attributes that can be associated with a product. This object is available in API version 50.0 and later.

## Supported Calls

create, delete, describeSObjects(), query(), retrieve(), update, upsert

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access products.

## Fields

| Field | Details |
| --- | --- |
| Field | TypereferencePropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe field’s API name. |
| FieldApiName | TypestringPropertiesFilter, SortDescriptionA derived field whose values comes from CustomFieldDefinition object. |
| IsGroupedBy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if product variations are grouped by a specific attribute.This field is available in API version 64.0 and later. |
| ProductAttributeSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product attribute set. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order that product attributes appear in. |
