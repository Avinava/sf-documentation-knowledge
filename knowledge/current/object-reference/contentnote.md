---
title: "ContentNote"
domain: object-reference
topic: contentnote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.140Z
estimatedTokens: 1556
keywords: [ContentNote, created, enhanced, note-taking, tool, released, Winter, ’16, API, version, 32.0, later, Calls, Special, Access]
---

# ContentNote

> Represents a note created with the enhanced note-taking tool, released in Winter ’16.
  This object is available in API version 32.0 and later.

# ContentNote

Represents a note created with the enhanced note-taking tool, released in Winter ’16. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update()

## Special Access Rules

-   Notes must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Content | Typebase64PropertiesCreate, Nillable, UpdateDescriptionThe content or body of the note, which can include properly formatted HTML or plain text. When a document is uploaded or downloaded via the API, it must be base64 encoded (for upload) or decoded (for download). Any special characters within plain text in the Content field must be escaped. You can escape special characters by calling content.escapeHtml4(). If the input contains unsafe HTML characters or new lines, we automatically strip them out before saving the content. |
| ContentModifiedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the document was modified. ContentModifiedDate updates when, for example, the document is renamed or a new document version is uploaded.This field is available in API version 48.0 and later. |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the note in bytes for notes smaller than 2 GB. In API version 66.0 and later, use the ContentSizeLong field. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the note in bytes, up to 10 GB.This field is available in API version 66.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the note. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of file for the note. All notes have a file type of SNOTE. |
| IsReadOnly | TypebooleanPropertiesDefaulted on create, Group, SortDescriptionIndicates whether the note is read only. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the note was last viewed. This field is available in API version 35.0 and later. |
| LatestContentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup to the note's ContentBody. This field is available in API version 52.0 and later.This is a relationship field.Relationship NameLatestContentRelationship TypeLookupRefers ToContentBody |
| LatestPublishedVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the ContentVersion for the latest published version of the note. |
| OwnerId | TypereferencePropertiesCreate (for users assigned the Set Audit Fields Upon Creation permission), Defaulted on create, Filter, Group, Sort, Update (for users assigned the Set Audit Fields Upon Creation permission)DescriptionID of the owner of the note. |
| SharingPrivacy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionControls sharing privacy for a file. Only Salesforce admins and file owners with Collaborator access to the file can modify this field. Default is Visible to Anyone With Record Access. When set to Private on Records, the file is private on records but can be shared selectively with others.This field is available in API versions 41.0 and later. |
| TextPreview | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA preview of the note’s content. This field is available in API version 35.0 and later. |
| Title | TypestringPropertiesCreate, Filter, Group, idLookup, Namefield, Sort, UpdateDescriptionTitle of the note. |

## Usage

-   Use ContentNote to create, query, retrieve, search, edit, and update notes.
-   ContentNote is built on ContentVersion, and so it has many of the same usages.
-   Not all fields can be set for notes. Only the Content and Title fields can be updated.
-   The maximum file size that you can upload via the SOAP API is 50 MB. When a document is uploaded or downloaded via the API, it’s converted to base64. This conversion increases the document size by approximately 37%. Account for the base64 conversion increase so that the file you plan to upload is less than 50 MB after conversion.
-   You can convert old Note records to Lightning Experience, so users can view and edit notes from the Notes & Attachments related list in Lightning Experience. Users can edit their converted notes, which are accessible from the Notes related list and Notes tab. Copy old Note records to newly created ContentNote records. Users assigned the Set Audit Fields Upon Creation permission can set the owner, created date, and last modified date on ContentNote records.
-   SOQL and SOSL queries on the ContentNote return only the most recent version of the note.
-   To relate a note to a record, use [ContentDocumentLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm "Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files."). Review the LinkedEntityID field in [ContentDocumentLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm "Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.") for a list of objects that notes can relate to.

For example, the following Apex code creates a note and escapes any special characters so they’re converted to their HTML equivalents.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Apex code doesn’t need to be encoded to base64 before it’s uploaded and downloaded.

```

```

In this example, the following code creates a note using text that is already formatted as HTML, so it doesn’t need to be escaped.

```

```

## Code Examples

```
ContentNote cn = new ContentNote();
cn.Title = 'test1';
String body = 'Hello World. Before insert/update, escape special characters such as ", ', &, and other standard escape characters.';
cn.Content = Blob.valueOf(body.escapeHTML4());
insert(cn);
```

```
ContentNote cn = new ContentNote();
cn.Title = 'test2';
String body = '<b>Hello World. Because this text is already formatted as HTML, it does not need to be escaped. 
Special characters such as &quot;, etc. must already use their HTML equivalents.</b>';
cn.Content = body;
insert(cn);
```

## Related Topics

- ContentDocumentLink (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm)
