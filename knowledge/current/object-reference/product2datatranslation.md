---
title: "Product2DataTranslation"
domain: object-reference
topic: product2datatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.274Z
estimatedTokens: 524
keywords: [Product2DataTranslation, translated, data, stored, Product2, record’s, API, version, 45.0, later, Calls, Special, Access, Rules, Usage]
---

# Product2DataTranslation

> Represents the translated values of the data stored within a Product2 record’s fields. This object is available in API version 45.0 and
    later.

# Product2DataTranslation

Represents the translated values of the data stored within a [Product2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm "Represents a product that your company sells.") record’s fields. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Performance, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe translated value for the Product2 description. |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent Product2 record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the Product2 record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record ID of the Product2 associated with the data that is being translated. |

## Usage

Use this object to translate the data stored in a Product2 record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the Product2 object, additional Product2DataTranslation fields exist for translating the data contained within those fields.

You can’t use a custom external id field in an upsert call for a Product2DataTranslation object.

## Related Topics

- Product2 (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm)
