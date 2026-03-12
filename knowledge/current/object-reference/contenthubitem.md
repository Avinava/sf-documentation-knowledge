---
title: "ContentHubItem"
domain: object-reference
topic: contenthubitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.125Z
estimatedTokens: 1118
keywords: [ContentHubItem, file, folder, Files, Connect, external, data, source, Microsoft, SharePoint, OneDrive, Business, API, version, 33.0]
---

# ContentHubItem

> Represents a file or folder in a Files Connect external data source,
			such as Microsoft SharePoint or OneDrive for Business. This object is available in
		API version 33.0 and later.

# ContentHubItem

Represents a file or folder in a Files Connect external data source, such as Microsoft SharePoint or OneDrive for Business. This object is available in API version 33.0 and later.

## Special Access Rules

Chatter and Files Connect must be enabled for the organization.

## Supported Calls

describeSObjects(), query(), search()

## Fields

| Field Name | Details |
| --- | --- |
| ContentHubRepositoryId | TypereferencePropertiesFilter, Group, NillableDescriptionThe ID for the related external data source described by the ContentHubRepository object. |
| ContentItemSize | TypelongPropertiesGroup, NillableDescriptionThe size of the file or folder. Available in API version 65.0 and later. |
| ContentModifiedDate | TypedateTimePropertiesNillableDescriptionDate the file or folder content last changed. |
| ContentSize | TypeintPropertiesGroup, NillableDescriptionThe size of the file or folder that's less than 2 GB. |
| Description | TypestringPropertiesFilter, Group, NillableDescriptionExplanation of item in external data source. |
| ExternalContentUrl | TypeurlPropertiesGroup, NillableDescriptionThe URL of the document content in the external data source. |
| ExternalDocumentUrl | TypeurlPropertiesGroup, NillableDescriptionThe URL of the detail page in the external data source. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID for the file or folder in the external data source. |
| FileExtension | TypestringPropertiesGroup, NillableDescriptionFile format extension, such as .doc or .pdf |
| FileType | TypestringPropertiesGroup, NillableDescriptionComplete file type, such as “Microsoft Word Document.” |
| IsFolder | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether item is a folder or file. |
| MimeType | TypestringPropertiesFilter, Group, NillableDescriptionMIME type of the content. |
| Name | TypestringPropertiesFilter, Nillable, SortDescriptionName of the file or folder in the external data source. |
| Owner | TypestringPropertiesFilter, Group, NillableDescriptionUsername of the content owner in the external data source. |
| ParentId | TypestringPropertiesFilter, Group, NillableDescriptionThe ID of the parent folder for the record.This field isn’t returned in queries or searches of the ContentHubItem object. It supports only WHERE clauses, such as the following:WHERE ContentHubRepositoryId = <ID of external source> and ParentId = <ID of parent folder or record>.Or specify WHERE ParentId = <name of root folder> to return the children of the root folder.TipThe ParentId field supports both Salesforce IDs (in the format “0CHxxx”) and external IDs. |
| Title | TypestringPropertiesGroup, NillableDescriptionThe title that appears in the content, which often differs from the Name of the containing file or folder. |
| UpdatedBy | TypestringPropertiesGroup, NillableDescriptionUsername for the person who last updated the file. |

## Usage

The following SOQL query examples show how to retrieve files and folders from a Files Connect external data source. These examples use placeholders for ID values for the repository ID and folder IDs. Before running these queries, replace the placeholders with valid ID values for your external data source and folders.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

You must filter queries and searches on ContentHubItem with the ContentHubRepositoryId field; for example, SELECT Id FROM ContentHubItem WHERE ContentHubRepositoryId = <ID of external data source>.

**Example 1:** Get the ID and name of the root folder in an external file source.

```

```

**Example 2:** List all folders and files under the specified root folder.

```

```

**Example 3:** List all external file data sources by querying ContentHubRepository.

```

```

**Example 4:** List all files and folders in a given folder and external file source.

```

```

**Example 5:** To return only folders in the result set, add IsFolder = true in the WHERE clause to a query that returns files and folders. For example, the following query lists all folders under the root folder.

```

```

**Example 6:** Retrieve a link that is used to open the specified document in an external source.

```

```

**SOSL Example:** Retrieve the ID and name of all documents that contain the search string. The result set is limited to the first 10 documents.

```

```

## Code Examples

```
SELECT Id, Name
FROM ContentHubItem
WHERE ContentHubRepositoryId = '<repository ID>' AND ParentId = NULL
```

```
SELECT Id, Name
FROM ContentHubItem 
WHERE ContentHubRepositoryId = '<repository ID>' AND ParentId = '<root folder ID>'
```

```
SELECT DeveloperName 
FROM ContentHubRepository
```

```
SELECT Id, Name 
FROM ContentHubItem 
WHERE ContentHubRepositoryId = '<repository ID>' AND ParentId = '<parent folder ID>'
```

```
SELECT Id, Name 
FROM ContentHubItem 
WHERE ContentHubRepositoryId = '<repository ID>' AND ParentId = '<root folder ID>'
      AND IsFolder = true
```

## Related Topics

- ContentHubRepository (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contenthubrepository.htm)
