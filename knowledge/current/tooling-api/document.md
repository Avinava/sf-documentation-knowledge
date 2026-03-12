---
title: "Document"
domain: tooling-api
topic: document
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.187Z
estimatedTokens: 1527
keywords: [Document, Represents, file, user, uploaded., Unlike, Attachment, records, documents, attached, parent, object., Tooling, API, version, 38.0, later., Supported, SOAP, Calls]
---

# Document

> Represents a file that a user has uploaded. Unlike Attachment
            records, documents are not attached to a parent object. Available in Tooling API
        version 38.0 and later.

# Document

Represents a file that a user has uploaded. Unlike Attachment records, documents are not attached to a parent object. Available in Tooling API version 38.0 and later.

## Supported SOAP Calls

getDeleted(), getUpdated(), query(), retrieve(), search()

## Supported REST HTTP Methods

GET

## Limitations

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| AuthorId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who is responsible for the document. |
| Body | Typebase64PropertiesNillableDescriptionRequired. Encoded file data. If specified, then do not specify a URL. |
| BodyLength | TypeintPropertiesFilter, Group, SortDescriptionSize of the file (in bytes). If specified, then do not specify a URL. |
| ContentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of content. Label is Mime Type. Limit: 120 characters.If the Don't allow HTML uploads as attachments or document records security setting is enabled for your organization, you cannot upload files with the following file extensions: .htm, .html, .htt, .htx, .mhtm, .mhtml, .shtm, .shtml, .acgi, .svg. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionText description of the document. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Document Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FolderId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. ID of the folder that contains the document. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsBodySearchable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the contents of the object can be searched using a SOSL FIND call. The ALL FIELDS search group includes the content as a searchable field. |
| IsInternalUseOnly | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the object is only available for internal use (true) or not (false). Label is Internal Use Only. |
| IsPublic | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the object is available for external use (true) or not (false). Label is Externally Available. |
| Keywords | TypestringPropertiesFilter, Group, Nillable, SortDescriptionKeywords. Limit: 255 characters. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe metadata for this object as defined in the Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Name of the document. Label is Document Name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile type of the document. In general, the values match the file extension for the type of document (such as pdf or jpg). Label is File Extension. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL reference to the file (used instead of storing it in the database). If specified, do not specify the Body or BodyLength. |

## Related Topics

- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
