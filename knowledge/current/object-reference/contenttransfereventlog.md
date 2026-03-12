---
title: "ContentTransferEventLog"
domain: object-reference
topic: contenttransfereventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.180Z
estimatedTokens: 487
keywords: [ContentTransferEventLog, stores, content, transfer, events, downloads, uploads, previews, includes, performed, files, attachments, records, API, version]
---

# ContentTransferEventLog

> ContentTransferEventLog stores information about content transfer events,
         such as downloads, uploads, and previews. This information includes events performed on
         files and attachments to records. This object is available in API version 62.0 and
      later.

# ContentTransferEventLog

ContentTransferEventLog stores information about content transfer events, such as downloads, uploads, and previews. This information includes events performed on files and attachments to records. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| DocumentIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the document that’s being shared. |
| FilePreviewType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe content type of the file preview. |
| FileSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size of rendition being added (bytes). |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe content type of the file version. |
| OperationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operation that’s being performed.Possible Valuesmeta_deploymeta_listmeta_retrievemeta_synchronous_createmeta_synchronous_readmeta_synchronous_upsert |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 18-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943YAS |
| VersionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the content version. |
