---
title: "ManagedContentType"
domain: tooling-api
topic: managedcontenttype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.200Z
keywords: [ManagedContentType, Supported, SOAP, Calls, REST, HTTP, Methods, Note]
---

# ManagedContentType

# ManagedContentType

Represents standard and custom content types created for use with your org. Available in API version 47.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET, POST, DELETE

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

You can delete a content type only if no content has been created based on that content type.

## ManagedContentType

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionDescribes the custom content type defined in this ManagedContentType declaration. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnique name for the custom content type. For example: OurSpecialContent_c |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the content type in Metadata API.A unique name for the content type that contains only underscores and alphanumeric characters. The name must be unique across the org, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Group, Nillable, Restricted picklist, SortDescriptionThe language of the content type. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionDeclares the name of the content type as it appears in the UI. |
| Metadata | Typemns: ManagedContentTypeDescriptionThe content type definition’s metadata object, containing information about which version is active and the content type definition’s description.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |