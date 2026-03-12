---
title: "Document"
domain: sfFieldRef
topic: document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.371Z
estimatedTokens: 480
namespace: NamespacePrefix
keywords: [Document, file, user, uploaded, Unlike, Attachment, records, documents, attached, parent]
---

# Document

> Represents a file that a user has uploaded. Unlike Attachment records,
   documents are not attached to a parent object.

**Namespace:** `NamespacePrefix`

# Document

Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_document.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthorId | Author ID | reference |  | 18 |  |  |
| Body | Body | base64 |  |  |  |  |
| BodyLength | Body Length | int | 8 |  |  |  |
| ContentType | MIME Type | string |  | 120 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | Document Unique Name | string |  | 80 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| Id | Document ID | id |  | 18 |  |  |
| IsBodySearchable | Document Content Searchable | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInternalUseOnly | Internal Use Only | boolean |  |  |  |  |
| IsPublic | Externally Available | boolean |  |  |  |  |
| Keywords | Keywords | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Document Name | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | File Extension | string |  | 40 |  |  |
| Url | Url | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
