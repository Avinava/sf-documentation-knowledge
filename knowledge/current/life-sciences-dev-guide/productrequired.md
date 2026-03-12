---
title: "productrequired"
domain: life-sciences-dev-guide
topic: productrequired
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.954Z
estimatedTokens: 786
keywords: [productrequired, product, needed, visit, Calls, Usage, Associated, Objects]
---

# productrequired

> Represents a product that is needed to complete a
    visit.

# productrequired

Represents a product that is needed to complete a visit.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product required was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product required was last viewed. |
| ParentRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order or work order line item that the product is required for. |
| ParentRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIndicates whether the parent record is a work order or a work order line item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe required product. |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product required. |
| ProductRequiredNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) Auto-generated number identifying the product required. |
| QuantityRequired | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity required of the product. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the required product |

## Usage

Required products can be added to work types, work orders, and work order line items to ensure that the assigned service resource arrives with the right equipment.

Adding required products to work types saves you time and keeps your business processes consistent. Work orders and work order line items inherit their work type’s required products. For example, if all light bulb replacement jobs require a ladder and a light bulb, add the ladder and light bulb as required products to your Light Bulb Replacement work type. When it’s time to create a work order for a customer’s light bulb replacement, applying that work type to the work order adds the required products.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProductRequiredFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductRequiredHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProductRequiredFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductRequiredHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
