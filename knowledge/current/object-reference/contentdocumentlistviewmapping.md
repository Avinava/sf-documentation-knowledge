---
title: "ContentDocumentListViewMapping"
domain: object-reference
topic: contentdocumentlistviewmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.091Z
estimatedTokens: 404
keywords: [ContentDocumentListViewMapping, association, ListView, Quip, ContentDocument, file, Maintains, mapping, view, document, exported, newly, created, API, version]
---

# ContentDocumentListViewMapping

> Represents an association between a ListView and a Quip
         ContentDocument. Applies to Quip file types only. Maintains the mapping between a list view
         and Quip document when the list view is exported to a newly created Quip document. This object is available in API version 44.0
            and later.

# ContentDocumentListViewMapping

Represents an association between a ListView and a Quip ContentDocument. Applies to Quip file types only. Maintains the mapping between a list view and Quip document when the list view is exported to a newly created Quip document. This object is available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To use this object, the Files Connect and Quip permissions must be enabled in the org.

To insert and update this object through the API, the QuipMassAction gater permission must also be enabled.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the document. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this document. |
| ListViewId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the list view associated with the document. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the document. |

## Usage

ContentDocumentListViewMapping is used primarily by the Quip list view integration feature. Only Quip file types (Quip sheets and docs) are supported. The ContentDocumentId field must point to a Quip file.
