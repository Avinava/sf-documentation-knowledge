---
title: "OwnedContentDocument"
domain: object-reference
topic: ownedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.217Z
estimatedTokens: 577
keywords: [OwnedContentDocument, file, owned, user, version, 30.0, later, Calls]
---

# OwnedContentDocument

> Represents a file owned by a user. This object is available in version 30.0 and
  later.

# OwnedContentDocument

Represents a file owned by a user. This object is available in version 30.0 and later.

## Supported Calls

describeSObjects()

## Fields

| Field Name | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the document.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes for documents smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for documents smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| ContentUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionURL for links and Google Docs. This field is set only for links and Google Docs, and is one of the fields that determine the FileType.This field is available in API version 31.0 and later. |
| ExternalDataSourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in API version 32.0 and later. |
| ExternalDataSourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of external data source in which the document is stored. This field is set only for external documents that are connected to Salesforce.This field is available in API version 35.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the document.This field is available in API version 31.0 and later. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of document, which is determined by the file extension. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the owner of the document.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Title | TypestringPropertiesFilter, Group, idLookup, SortDescriptionTitle of the document. |
