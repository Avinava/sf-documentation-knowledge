---
title: "ContentDocLinkEventLog"
domain: object-reference
topic: contentdoclinkeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.049Z
estimatedTokens: 478
keywords: [ContentDocLinkEventLog, Content, Document, Link, events, contain, sharing, documents, API, version, 65.0, later, Calls, Special, Access]
---

# ContentDocLinkEventLog

> Content Document Link events contain sharing information for content
         documents. This object is available in API version 65.0 and later.

# ContentDocLinkEventLog

Content Document Link events contain sharing information for content documents. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| DocumentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the document that’s being shared. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SharedWithObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWho the document was shared with. |
| SharingOperation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of sharing operation on the document.Possible ValuesINSERTUPDATEDELETE |
| SharingPermission | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhat permissions the document was shared with.Possible ValuesV: ViewerC: CollaboratorI: Inferred—that is, the sharing permissions were inferred from a relationship between the viewer and document. For example, a document’s owner has a sharing permission to the document itself. Or, a document can be a part of a content collection, and the viewer has sharing permissions to the collection rather than explicit permissions to the document directly. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
