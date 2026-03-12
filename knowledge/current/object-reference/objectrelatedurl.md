---
title: "ObjectRelatedUrl"
domain: object-reference
topic: objectrelatedurl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.362Z
estimatedTokens: 904
keywords: [ObjectRelatedUrl, URL, slug, Product, Category, B2B, Commerce, D2C, LWR, site, custom, account, contact, enhanced, Experience]
---

# ObjectRelatedUrl

> Represents a URL slug for a Product or Category page on a B2B Commerce or D2C
         Commerce LWR site, or a custom object, account, or contact page on an enhanced LWR
         Experience Cloud site. This object is available in API version 57.0 and later.

# ObjectRelatedUrl

Represents a URL slug for a Product or Category page on a B2B Commerce or D2C Commerce LWR site, or a custom object, account, or contact page on an enhanced LWR Experience Cloud site. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), undelete(), update(), upsert()

## Special Access Rules

Your org must have B2B Commerce or D2C Commerce license enabled for commerce use cases. ObjectRelatedUrl is available for Product2 and ProductCategory records in Commerce, and on custom object, account and contact record pages in enhanced LWR sites.

## Fields

| Field | Details |
| --- | --- |
| LanguageCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The combined language and locale ISO code, which controls the language of the object-related URL. The maximum length is 8 characters. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the object-related URL. This field isn’t editable. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the parent record that the UrlName refers to. ParentId can point only to Product2, ProductCategory, and custom object, account, and contact record pages.This field is a polymorphic relationship field.Relationship NameParentRelationship TypeLookupRefers ToProduct2, ProductCategory, account, contact, and custom objectsAvailability in API versions:Product2 and ProductCategory in LWR Commerce stores (available in API version 58.0 and later)Custom object pages on enhanced LWR sites (available in API version 60.0 and later)Account and contact pages on enhanced LWR sites (available in API version 61.0 and later) |
| Scope | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Helps ensure uniqueness of the UrlName field across all records with the same Scope and LanguageCode values. The maximum length is 18 characters. |
| UniqueIndex | TypestringPropertiesFilter, idLookup, Nillable, SortDescriptionEnsures uniqueness for each record within your org and creates an index for lookup. This field isn’t editable.This field is a calculated field. |
| UrlName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The URL slug for the record. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

When creating a query, for example, SELECT UrlName From ObjectRelatedUrl WHERE Scope='01t', the WHERE condition must use Id, UniqueIndex, Scope, or ParentId.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ObjectRelatedUrlChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ObjectRelatedUrlChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
