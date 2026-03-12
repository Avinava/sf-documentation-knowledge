---
title: "Document"
domain: object-reference
topic: document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.207Z
estimatedTokens: 1632
keywords: [Document, file, user, uploaded, Unlike, Attachment, records, documents, attached, parent, Calls, Special, Access, Rules, Usage]
---

# Document

> Represents a file that a user has uploaded. Unlike Attachment records,
   documents are not attached to a parent object.

# Document

Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You must have the “Edit” permission on documents and the appropriate access to the Folder that contains a document in order to create or update a document in that Folder.

## Fields

| Field | Details |
| --- | --- |
| AuthorId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who is responsible for the Document.This is a relationship field.Relationship NameAuthorRelationship TypeLookupRefers ToUser |
| Body | Typebase64PropertiesCreate, Nillable, UpdateDescriptionRequired. Encoded file data. If specified, then do not specify a URL. |
| BodyLength | TypeintPropertiesFilter, Group, SortDescriptionSize of the file (in bytes). |
| ContentType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of content. Label is Mime Type. Limit: 120 characters.If the Don't allow HTML uploads as attachments or document records security setting is enabled for your organization, you cannot upload files with the following file extensions: .htm, .html, .htt, .htx, .mhtm, .mhtml, .shtm, .shtml, .acgi, .svg. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the Document. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Document Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FolderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID of the Folder that contains the document.This is a relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder, User |
| IsBodySearchable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the contents of the object can be searched using a SOSL FIND call. The ALL FIELDS search group includes the content as a searchable field. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsInternalUseOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the object is only available for internal use (true) or not (false). Label is Internal Use Only. |
| IsPublic | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the object is available for external use (true) or not (false). Label is Externally Available. |
| Keywords | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKeywords. Limit: 255 characters. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of the document. Label is Document Name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Sort, NillableDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Type | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFile type of the Document. In general, the values match the file extension for the type of Document (such as pdf or jpg). Label is File Extension. |
| Url | TypestringPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionURL reference to the file (instead of storing it in the database). If specified, do not specify the Body or BodyLength. |

## Usage

When creating or updating a document, you can specify a value in either the Body or Url fields, but not both.

## Encoded Data

The API sends and receives the binary file data encoded as a base64 data type. Prior to creating a record, clients must encode the binary file data as base64. Upon receiving an API response, clients must decode the base64 data to binary (this conversion is usually handled for you by the SOAP client).

## Maximum Document Size

You can only create or update documents to a maximum size of 5 MB.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
