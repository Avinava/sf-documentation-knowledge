---
title: "ExternalDataSrcDescriptor"
domain: tooling-api
topic: externaldatasrcdescriptor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.886Z
keywords: [ExternalDataSrcDescriptor, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ExternalDataSrcDescriptor

# ExternalDataSrcDescriptor

Contains the metadata information for the external schema of an external data source. Use the metadata to map attributes from an AWS data source, such as Amazon DynamoDB and Amazon Athena, to Salesforce external object fields. Also, use the metadata to customize the data retrieval queries to an AWS data source. This object is available in API version 55.0 and later for Amazon DynamoDB and in API version 56.0 and later for Amazon Athena.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CustomObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf set, the ID of the external object associated with the descriptor.This is a relationship field.Relationship NameCustomObjectRelationship TypeLookupRefers ToCustomObject |
| Descriptor | Typebase64PropertiesNillableDescriptionThe descriptor document that contains the metadata information. |
| DescriptorVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the external system supports schema versioning for the data source, the optional descriptor document version tracks the external system's schema version. Several descriptors with different document versions may be active. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the child-level setup entity. |
| ExternalDataSourceId | TypereferencePropertiesFilter, Group, SortDescriptionSalesforce ID of the external data source that defines the external system.This is a relationship field.Relationship NameExternalDataSourceRelationship TypeLookupRefers ToExternalDataSource |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated type in Tooling API. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the descriptor document. |
|  |  |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe manageable state of the descriptor that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe external data source descriptor's metadata. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. |
| Subtype | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe subtype of the descriptor.Possible values are:SchemaTableDDL—Used to store the metadata for the external data source.SchemaTableMetadata—Used to cache information about the external system.SchemaTableQualifiers—Used to customize the data retrieval query to the external system. |
| SystemVersion | TypeintPropertiesFilter, Group, SortDescriptionThe version that defines the descriptor format and allows compatibility with descriptor formats between Salesforce releases. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the descriptor.Possible value:Schema |