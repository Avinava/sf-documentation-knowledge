---
title: "ReceivedDocumentType"
domain: life-sciences-dev-guide
topic: receiveddocumenttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.235Z
estimatedTokens: 615
keywords: [ReceivedDocumentType, junction, Received, Document, API, version, 58.0, later, Calls, Associated, Objects]
---

# ReceivedDocumentType

> Represents a junction object between Received Document and Document
         Type. This object is available in API version 58.0 and later.

# ReceivedDocumentType

Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DocumentTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the document type for the document checklist item.This field is a relationship field.Relationship NameDocumentTypeRelationship TypeLookupRefers ToDocumentType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the received document type. |
| PageNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPage number of the received document. |
| ReceivedDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the received document for the received document type.This field is a relationship field.Relationship NameReceivedDocumentRelationship TypeLookupRefers ToReceivedDocument |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ReceivedDocumentTypeChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

## Related Topics

- ReceivedDocumentTypeChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
