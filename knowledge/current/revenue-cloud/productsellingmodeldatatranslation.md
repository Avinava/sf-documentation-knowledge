---
title: "ProductSellingModelDataTranslation"
domain: revenue-cloud
topic: productsellingmodeldatatranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:12.231Z
estimatedTokens: 502
keywords: [ProductSellingModelDataTranslation, translated, data, stored, ProductSellingModel, record’s, API, version, 61.0, later, Calls, Special, Access, Rules, Usage]
---

# ProductSellingModelDataTranslation

> Represents the translated values of the data stored within the
         ProductSellingModel record’s fields. This object is available in API version 61.0 and
      later.

# ProductSellingModelDataTranslation

Represents the translated values of the data stored within the ProductSellingModel record’s fields. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Your organization must be using Enterprise, Unlimited, or Developer edition.
-   Translation Workbench and data translation must be enabled in your org.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| IsOutOfDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the translation is out-of-date (true) or current (false). A translation is out-of-date if the parent Product2 record is updated after the last translation was filed. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe language for these translated values. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe translated value for the ProductSellingModel record name. This field is required to translate the text in other fields. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the ProductSellingModel record associated with the data that’s being translated.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToProductSellingModel |

## Usage

Use this object to translate the data stored in a ProductSellingModel record into the different languages supported by Salesforce. If data translation is enabled for custom fields on the ProductSellingModel object, additional ProductSellingModelDataTranslation fields exist for translating the data contained within those fields.

You can’t use a custom external id field in an upsert call for a ProductSellingModelDataTranslation object.
