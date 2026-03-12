---
title: "ContentDocument"
domain: object-reference
topic: contentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.069Z
estimatedTokens: 3931
keywords: [ContentDocument, document, uploaded, library, Salesforce, Files, CRM, content, versions, 17.0, later, CRM.This, API, version, 21.0]
---

# ContentDocument

> Represents a document that was uploaded to a library in Salesforce
			Files or Salesforce CRM content. This object is available in versions 17.0 and later for
			Salesforce CRM.This object is available in API
			version 21.0 and later for Salesforce Files.

# ContentDocument

Represents a document that was uploaded to a library in Salesforce Files or Salesforce CRM content. This object is available in versions 17.0 and later for Salesforce CRM.This object is available in API version 21.0 and later for Salesforce Files.

The maximum number of documents that can be published is 30,000,000. Archived files count toward this limit and toward storage usage limits.

-   Contact Manager, Group, Professional, Enterprise, Unlimited, and Performance Edition customers can publish a maximum of 200,000 new versions per 24-hour period.
-   Developer Edition and trial users can publish a maximum of 2,500 new versions per 24-hour period.

## Supported Calls

delete(), describeLayout()describeSObjects(), query(), retrieve(), search(), undelete(), update()

## Special Access Rules

-   By default, users (including users with the View All Data permission) can only query files they have access to, including:

    -   Salesforce files in their personal library and in libraries they're a member of, regardless of library permissions (API version 17.0 and later).
    -   Salesforce files they own, shared directly with them, posted on their profile, or posted on groups they can see (API version 21.0 and later).

    Turn on the Query All Files permission to let your View All Data users bypass the restrictions on querying files.

    -   Query All Files returns all files, including files in non-member libraries and files in unlisted groups.
    -   Users can’t edit, upload new versions, or delete files they don’t have access to.
    -   View All Data permission is required to enable Query All Files.
-   For API version 62.0 and later, enable the Query Non Vetoed Files permission in Data Cloud orgs to let your integration or API users view and SOQL query only public and non-vetoed files in the org.
-   Customer and partner portal users must have the View Content in Portal permission to query content in libraries where they have access.
-   A Salesforce CRM content document can be deleted if any of these statements is true.
    -   The document is published into a personal library or is in the user's upload queue.
    -   The document is published into a public library, the user trying to delete the document is the file owner, and is a member of that library.
    -   The document is published into a public library and the user trying to delete the document isn’t the owner but has the Manage Library or Delete Content library permission enabled.

For API version 25.0 and later, you can change ownership of Salesforce Files and Salesforce CRM content documents.

-   A user can change ownership of a Salesforce CRM content document or Salesforce file if any of these statements is true.

    -   The user is the current owner.
    -   The user has the Modify All Data permission enabled.
    -   For a file in a Content Library, the user either has the Manage Salesforce CRM content permission enabled, or has the Manage Library permission enabled for the library containing the document.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    When the owner of a ContentDocument is changed, [ContentDocumentLink](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm "Represents the link between a Salesforce CRM Content document, Salesforce file, or ContentNote and where it's shared. A file can be shared with other users, groups, records, and Salesforce CRM Content libraries. This object is available in versions 21.0 and later for Salesforce CRM Content documents and Salesforce Files.") may be triggered. This action deletes the ContentDocumentLink to the old owner and inserts one to the new owner. When you change document ownership, keep these considerations in mind.

    -   The user who’s becoming the document owner must be a visible, active user. The original owner can be inactive.
    -   If the new document owner doesn’t have access to the library that contains the document, library administrators must give the new owner membership to the library.


## Fields

| Field | Details |
| --- | --- |
| ArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who archived the document.This field is available in API version 24.0 and later. |
| ArchivedDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the document was archived.This field is available in API version 24.0 and later. |
| ContentAssetId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionIf the ContentDocument is an asset file, this field points to the asset. For most entities, the value of this field is null.This field is available in API version 38.0 and later.This is a relationship field.Relationship NameContentAssetRelationship TypeLookupRefers ToContentAsset |
| ContentModifiedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the document was modified.ContentModifiedDate updates when, for example, the document is renamed or a new document version is uploaded. When you’re uploading the first version of a document, ContentModifiedDate can be set to the current time or anytime in the past.This field is available in API version 32.0 and later. |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes for documents smaller than 2 GB.This field is available in API version 31.0 and later. In API version 65.0 and later, we recommend that you use the ContentSizeLong field even for files smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes up to 10 GB.This field is available in API version 65.0 and later. |
| Description | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionA description of the document.This field is available in API version 31.0 and later. |
| Division | TypepicklistPropertiesDefaulted on Create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the document.This field is available in API version 31.0 and later. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of document, determined by the file extension.This field is available in API version 31.0 and later. |
| IsArchived | TypebooleanPropertiesDefaulted on Create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document was archived (true) or not (false). |
| IsInternalOnly | TypebooleanPropertiesDefaulted on Create, Filter, Group, Sort, UpdateDescriptionIndicates that a file is for internal use only. When true, prevents users with the Query Non Vetoed Files permission from viewing and performing SOQL query on public and non vetoed files in a Data Cloud org. Default value is false.This field is available in API version 62.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LatestPublishedVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the latest document version (ContentVersion).This is a relationship field.Relationship NameLatestPublishedVersionRelationship TypeLookupRefers ToContentVersion |
| MalwareScanDate (Beta) | TypedateTimePropertiesFilter, Group, Nillable, SortDescriptionThe date the document was scanned for malware. This field is available as a beta feature in API version 66.0 and later.NoteThe MalwareScanDate field is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| MalwareScanStatus (Beta) | TypepicklistPropertiesFilter, Group, SortDescriptionIndicates whether the document was scanned for malware and whether it’s safe or malicious. This field is available in API version 66.0 and later.NotScanned—The file hasn’t yet been scanned for malware. This is the default value.Scheduled—The file scan is in progress.Clean—The file was scanned and doesn’t contain malware.Malicious—The file was scanned and contains malware.Skipped—The file can’t be scanned because it’s either larger than 100 MB or it’s a Salesforce-generated file, such as a Content Note.Failed—The file wasn’t scanned because of an error.NoteThe MalwareScanStatus field is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the owner of this document.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the library that owns the document. Created automatically when inserting a ContentVersion via the API for the first time.This field is available in API version 24.0 and later when Salesforce CRM content is enabled. |
| PublishStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIndicates if and how the document is published. Valid values are:P—The document is published to a public library and is visible to other users. Label is Public.R—The document is published to a personal library and is not visible to other users. Label is Personal Library.U—The document is not published because publishing was interrupted. Label is Upload Interrupted. |
| SharingOption | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls whether sharing is frozen for a file. Only administrators and file owners with Collaborator access to the file can modify this field. Default is Allowed, which means that new shares are allowed. When set to Restricted, new shares are prevented without affecting existing shares.This field is available in API versions 35.0 and later. |
| SharingPrivacy | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls sharing privacy for a file. Only administrators and file owners with Collaborator access to the file can modify this field.Valid values are:N—Default. Label is Visible to Anyone With Record AccessP—The file is private on records but can be shared selectively with others. Label is Private on Records.This field is available in API versions 41.0 and later. |
| Title | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionThe title of a document. |

## Usage

-   Use this object to retrieve, query, update, and delete the latest version of a document in a library or a Salesforce file. Use the ContentVersion object to create, query, retrieve, search, edit, and update a specific version of a Salesforce CRM content document or Salesforce file.
-   A document record is a container for multiple version records. You create a version to add a document to the system. The new version contains the actual file data which allows the document to have multiple versions. The version stores the body of the uploaded document.
-   To create a document, create version via the ContentVersion object without setting the ContentDocumentId. This process automatically creates a parent document record. When adding a new version of the document, you must specify an existing ContentDocumentId which initiates the revision process for the document. When the latest version is published, the title, owner, and publish status fields are updated in the document.
-   You can’t add new versions of archived documents.
-   When you delete a document, all versions of that document are deleted, including ratings, comments, and tags.
-   A ContentDocument insert trigger executes when a file (ContentDocument) is added to the file library.
-   A ContentDocument delete trigger executes when a file is deleted, but the cascaded ContentDocumentLink delete does not trigger ContentDocumentLink triggers.

-   The query() call doesn’t return archived documents. The queryAll() call returns archived documents.
-   To query a file that is accessible only through a record share, you must specify the content ID of the file. When SOQL querying the ContentDocument object, the ContentDocumentId must be compounded by an AND operator.

    For example,

    ```

    ```

    ```

    ```

-   If you query versions in the API, versions with a PublishStatus of Upload Interrupted are not returned.
-   Assign topics to ContentDocument using TopicAssignment in API version 37.0 or later.

## Associated Objects

This object has the following associated objects. Unless noted, associated objects are available in the same API version as this object.

[ContentDocumentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 55.0)

Change events are available for the object.

[ContentDocumentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 20.0)

Feed tracking is available for the object.

[ContentDocumentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [ContentDocumentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumenthistory.htm "Represents the history of a document. This object is available in versions 17.0 and later.")

-   [ContentVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "Represents a specific version of a document in Salesforce CRM content or Salesforce Files. This object is available in versions 17.0 and later for Salesforce CRM content documents. This object is available in versions 20.0 and later for Salesforce Files.")

## Code Examples

```
SELECT Id, Title FROM ContentDocument 
WHERE (Id = '<ContentDocumentId>' and Title LIKE '%<title>%'
```

```
SELECT Id, Title, MyCustomField_c FROM ContentDocument 
WHERE (Id IN ('<Id1>', '<Id2>')) AND (Title LIKE '%<title1>%' OR (Title LIKE '%<title2>%')
```

## Related Topics

- ContentDocumentLink (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm)
- ContentDocumentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContentDocumentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ContentDocumentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContentDocumentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentdocumenthistory.htm)
- ContentVersion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm)
