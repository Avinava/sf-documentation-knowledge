---
title: "Pricebookentry"
domain: health-cloud-object-reference
topic: pricebookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.144Z
estimatedTokens: 909
keywords: [Pricebookentry, product, entry, association, price, book, Calls, Usage, Associated, Objects]
---

# Pricebookentry

> Represents a product entry (an association between a price book and
      product) in a price book.

# Pricebookentry

Represents a product entry (an association between a price book and product) in a price book.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this price book entry is active. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the price book entry has been archived (true) or not (false). This is set to true when the product record it’s associated with is archived, or when the price book record is archived. This field is read only. Available in API version 45.0 and later. Label is Archived. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of this price book entry record. This read-only field references the value in the Name field of the product record. Label is Product Name. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the price book record with which this record is associated. This field must be specified when creating price book records. It can’t be changed in an update. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the product record with which this record is associated. This field must be specified when creating product records. It can’t be changed in an update. |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProduct code for this record. This read-only field references the value in the ProductCode field of the associated product record. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Unit price for this price book entry. You can specify a value only if UseStandardPrice is set to false. Label is List Price. |
| UseStandardPrice | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this price book entry uses the standard price defined in the standard price book record. |

## Usage

Use this object to define the association between your organization’s products (product) and your organization’s standard price book or to other, custom-defined price books ( price book). Create one PricebookEntry record for each standard or custom price and currency combination for a product in a price book.

When creating these records, you must specify the IDs of the associated price book record and product record. Once created, your client application can’t update these IDs.

This object is defined only for those organizations that have products enabled as a feature.

If you delete a PriceBookEntry while a line item references it, the line item is unaffected, but the PriceBookEntry will be archived and unavailable from the API. Deleted PriceBookEntry records can’t be recovered.

You must load the standard price for a product before you are permitted to load its custom price(s).

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PricebookEntryHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PricebookEntryHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
