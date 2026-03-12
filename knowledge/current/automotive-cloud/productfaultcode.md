---
title: "ProductFaultCode"
domain: automotive-cloud
topic: productfaultcode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.447Z
estimatedTokens: 602
keywords: [ProductFaultCode, relationship, product, family, fault, code, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# ProductFaultCode

> Represents a relationship between a product or product family and the
         fault code. This object is available in API version 58.0 and later.

# ProductFaultCode

Represents a relationship between a product or product family and the fault code. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Warranty Lifecycle Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| FaultCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe fault code associated with the product or product family.This field is a relationship field.Relationship NameFaultCodeRelationship TypeLookupRefers ToCodeSet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number for the name of the product fault code. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family associated with the fault code.Possible value is:None |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product associated with the fault code.This field is a relationship field.Relationship NameProductRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductFaultCodeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ProductFaultCodeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
