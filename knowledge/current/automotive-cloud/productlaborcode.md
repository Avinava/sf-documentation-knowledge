---
title: "ProductLaborCode"
domain: automotive-cloud
topic: productlaborcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.453Z
estimatedTokens: 557
keywords: [ProductLaborCode, junction, labor, code, that's, applicable, product, family, standard, effort, API, version, 58.0, later, Calls]
---

# ProductLaborCode

> Represents a junction between the labor code that's applicable to a
         product or product family and the required standard effort. This object is available
      in API version 58.0 and later.

# ProductLaborCode

Represents a junction between the labor code that's applicable to a product or product family and the required standard effort. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| LaborCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe labor code associated with the product or product family.This field is a relationship field.Relationship NameLaborCodeRelationship TypeLookupRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number for the name of the product labor code. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family associated with the labor code.Possible value is:None |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductLaborCodeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProductLaborCodeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
