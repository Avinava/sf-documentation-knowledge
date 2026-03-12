---
title: "PricebookEntry"
domain: object-reference
topic: pricebookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.035Z
estimatedTokens: 1780
keywords: [PricebookEntry, product, entry, association, Pricebook2, Product2, price, book, Calls, Usage, Associated, Objects]
---

# PricebookEntry

> Represents a product entry (an association between a Pricebook2 and Product2) in a price book.

# PricebookEntry

Represents a product entry (an association between a Pricebook2 and Product2) in a price book.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Salesforce Object Search Language (SOSL) allows you to search records across standard and custom objects. When filtering records in the PriceBookEntry object using SOSL, you can only sort by fields related to Product2.

| Field | Details |
| --- | --- |
| ActivePriceAdjustmentQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe count of active price adjustment schedules associated with the price book entry. This field is available in API version 49.0 and later. This field is available with a B2B or D2C Commerce license. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this price book entry is active (true) or not (false). Although you can never delete PricebookEntry records, your client application can set this flag to false. Inactive PricebookEntry records are hidden in many areas in the user interface. You can change this flag on a PricebookEntry record as often as necessary. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the PricebookEntry has been archived (true) or not (false). This field is set to true when the Product2 record it’s associated with is archived, or when the Pricebook2 record is archived. This field is read only. Available in API version 45.0 and later. Label is Archived. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of this PricebookEntry record. This read-only field references the value in the Name field of the Product2 record. Label is Product Name. |
| Pricebook2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Pricebook2 record with which this record is associated. This field must be specified when creating Pricebook2 records. It can’t be changed in an update.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Product2 record with which this record is associated. This field must be specified when creating Product2 records. It can’t be changed in an update.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProduct code for this record. This read-only field references the value in the ProductCode field of the associated Product2 record. |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related product selling model. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Unit price for this price book entry. You can specify a value only if UseStandardPrice is set to false. Label is List Price. |
| UseStandardPrice | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this price book entry uses the standard price defined in the standard Pricebook2 record (true) or not (false). If set to true, then the UnitPrice field is read-only, and the value is the same as the UnitPrice value in the corresponding PricebookEntry in the standard price book (that is, the PricebookEntry record whose Pricebook2Id refers to the standard price book and whose Product2Id and CurrencyIsoCode are the same as this record). For PricebookEntry records associated with the standard Pricebook2 record, this field must be set to true. |

## Usage

Use this object to define the association between your organization’s products (Product2) and your organization’s standard price book or to custom price books ( Pricebook2). Create one PricebookEntry record for each standard or custom price and currency combination for a product in a Pricebook2.

When creating these records, you must specify the IDs of the associated Pricebook2 record and Product2 record. Once these records are created, your client application can’t update these IDs.

This object is defined only for those organizations that have products enabled as a feature. If the organization doesn’t have the products feature enabled, then the PricebookEntry object doesn’t appear in the describeGlobal call, and you can’t access it.

If you delete a PriceBookEntry that is referenced by a line item, the line item is unaffected, but the PriceBookEntry is archived and unavailable from the API. Deleted PriceBookEntry records can’t be recovered.

You must load the standard price for a product before you’re permitted to load its custom prices.

## Associated Objects

This object has the following associated objects. Unless otherwise noted, they’re available in the same API version as this object.

[PricebookEntryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")(API version 57.0)

Change events are available for the object.

[PricebookEntryHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- PricebookEntryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- PricebookEntryHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
