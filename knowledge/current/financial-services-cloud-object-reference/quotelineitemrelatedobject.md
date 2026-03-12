---
title: "QuoteLineItemRelatedObject"
domain: financial-services-cloud-object-reference
topic: quotelineitemrelatedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.547Z
estimatedTokens: 828
keywords: [QuoteLineItemRelatedObject, junction, Quote, Line, Item, attributes, referenced, relevant, product, API, version, 63.0, later, Calls, Associated]
---

# QuoteLineItemRelatedObject

> Represents the junction between a Quote Line Item and a related object. The
         values of the attributes from the related object are referenced by the relevant product
         attributes on the Quote LIne Item This object is available in API version 63.0 and
      later.

# QuoteLineItemRelatedObject

Represents the junction between a Quote Line Item and a related object. The values of the attributes from the related object are referenced by the relevant product attributes on the Quote LIne Item This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the quote line item related object record. |
| QuoteLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe quote line item associated with the record of the related object.This field is a relationship field.Relationship NameQuoteLineItemRelationship TypeMaster-detailRefers ToQuoteLineItem (the master object) |
| RelatedRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the record that's used to get the details of the quote line item. |
| RelatedRecordObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the object associated with the related record. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of the object associated with the related record.Possible values are:ExtendedAttribute |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[QuoteLineItemRelatedObjectChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[QuoteLineItemRelatedObjectHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- QuoteLineItemRelatedObjectChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- QuoteLineItemRelatedObjectHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
