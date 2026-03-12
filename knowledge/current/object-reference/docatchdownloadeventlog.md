---
title: "DocAtchDownloadEventLog"
domain: object-reference
topic: docatchdownloadeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.194Z
estimatedTokens: 302
keywords: [DocAtchDownloadEventLog, Document, Attachment, Downloads, events, contain, API, version, 65.0, later, Calls, Special, Access, Rules]
---

# DocAtchDownloadEventLog

> Document Attachment Downloads events contain details of document and
         attachment downloads. This object is available in API version 65.0 and later.

# DocAtchDownloadEventLog

Document Attachment Downloads events contain details of document and attachment downloads. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of the file or attachment. |
| ObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the object that’s associated with the document or attachment. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
