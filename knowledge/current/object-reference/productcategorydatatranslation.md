---
title: "ProductCategoryDataTranslation"
domain: object-reference
topic: productcategorydatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.313Z
estimatedTokens: 507
keywords: [ProductCategoryDataTranslation, translated, data, stored, ProductCategory, record’s, API, version, 46.0, later, Calls, Special, Access, Rules, Usage]
---

# ProductCategoryDataTranslation

> Represents the translated values for the data stored within a ProductCategory record’s fields. This object is available in API version 46.0 and
    later.

# ProductCategoryDataTranslation

Represents the translated values for the data stored within a [ProductCategory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm "Represents the category that products are organized in.This object is available in API version 49.0 and later.") record’s fields. This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe translated value for the Product Category description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent ProductCategory record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the Product Category name. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the category being translated. |

## Usage

Use this object to translate the data stored in a Product Category record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the ProductCategory object, additional ProductCategoryDataTranslation fields exist for translating the data contained within those fields.

## Related Topics

- ProductCategory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm)
