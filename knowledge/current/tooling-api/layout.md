---
title: "Layout"
domain: tooling-api
topic: layout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.072Z
estimatedTokens: 635
keywords: [Layout, SOAP, Calls, REST, HTTP]
---

# Layout

> Represents a page layout.

# Layout

Represents a page layout.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe Id of the EntityDefinition object associated with this object. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name of the layout used as the identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| LayoutType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates the type of the layout. Valid values are:GlobalQuickActionListProcessDefinitionStandard |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | Typemns:LayoutPropertiesCreate, Nillable, UpdateDescriptionLayout metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe layout name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this layout from any others. For example, if this layout is being using by a flow, use the NamespacePrefix to uniquely identify the layouts in multiple flow instances. |
| ShowSubmitAndAttachButton | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionOnly allowed on Case layout. If true, Submit & Add Attachment displays on case edit pages to portal users in the Customer Portal. |
| TableEnumOrId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe enum (for example, Account) or ID of the object this layout is on. |
