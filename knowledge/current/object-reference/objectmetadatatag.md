---
title: "ObjectMetadataTag"
domain: object-reference
topic: objectmetadatatag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.346Z
estimatedTokens: 470
keywords: [ObjectMetadataTag, meta, tag, store, tags, HTML, documents, provide, structured, data, search, engines, ranking, show, content]
---

# ObjectMetadataTag

> Represents a meta tag for a store page. Meta tags in HTML documents provide
         structured data used by search engines for ranking and to show content in search
         results. This object is available in API version 60.0 and later.

# ObjectMetadataTag

Represents a meta tag for a store page. Meta tags in HTML documents provide structured data used by search engines for ranking and to show content in search results. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:USD—U.S. DollarThe default value is USD. |
| Language | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe language of the page meta tag. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the page meta tag. |
| RecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product or product category with which this record is associated.This is a polymorphic relationship field.Relationship NameRecordRelationship TypeLookupRefers ToProduct2, ProductCategoryAvailability in API versions:Product2 is available in API versions 60.0 and laterProductCategory is available in API versions 63.0 and later |
| TagType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the page meta tag.Possible values are:Description—Meta DescriptionTitle—Title Tag |
| Value | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value of the page meta tag. This value populates the HTML tag. For example, a meta tag with a Type of Title and a Value of GoBrew Espresso renders the HTML <title>GoBrew Espresso</title> for the page. |
