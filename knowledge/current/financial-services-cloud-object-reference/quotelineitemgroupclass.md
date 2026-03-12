---
title: "QuoteLineItemGroupClass"
domain: financial-services-cloud-object-reference
topic: quotelineitemgroupclass
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.540Z
estimatedTokens: 834
keywords: [QuoteLineItemGroupClass, association, Quote, Line, Item, GroupClass, entity, large, group, quoting, process, multiple, classes, attributed, Child]
---

# QuoteLineItemGroupClass

> Represents the association of a Quote Line Item to GroupClass. Use this entity for large group quoting process when multiple group classes are attributed on a single quote line item. Child object of Quote. This object is available in API version 55.0 and later.

# QuoteLineItemGroupClass

Represents the association of a Quote Line Item to GroupClass. Use this entity for large group quoting process when multiple group classes are attributed on a single quote line item. Child object of Quote. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| GroupClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group class associated with the quote and quote line item.This is a relationship field.Relationship NameGroupClassRelationship TypeLookupRefers ToGroupClass |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the quote line item group class. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote line item associated with the quote line item group class.This is a relationship field.Relationship NameQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[QuoteLineItemGroupClassChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[QuoteLineItemGroupClassFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[QuoteLineItemGroupClassHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- QuoteLineItemGroupClassChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- QuoteLineItemGroupClassFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- QuoteLineItemGroupClassHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
