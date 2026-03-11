---
title: "DataSourceObject"
domain: metadata-api
topic: datasourceobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.737Z
keywords: [DataSourceObject, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields]
---

# DataSourceObject

# DataSourceObject

Represents the object from where the data was sourced.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataSourceObject components have the suffix dataSourceObject and are stored in the mktDataSourceObjects folder.

## Version

DataSourceObject components are available in API version 50.0 and later.

## Special Access Rules

You need the Salesforce Customize Application permission to access this metadata type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accelerationEnabled | AccelerationEnabled (enumeration of type string) | Acceleration of data stream processing. Available in API version 63.0 and later. Possible values are:YesNo |
| additionalDLOInfoJson | string | Additional information about the Directory Table data lake object (DLO), such as the directory path and file pattern. |
| creationType | string | Indicates whether this object was added by the user or as part of a standard taxonomy. |
| dataConnection | string | The source data connector for the Directory Table DLO. |
| dataSource | string | Required. The system where the data was sourced. |
| dataSourceFields | DataSourceField[] | An array of data source fields. |
| dmoDeveloperName | string | The developer name of the Directory Table data model object (DMO). |
| dmoLabel | string | The UI name of the Directory Table DMO. |
| externalDatabaseName | string | The name of the external database for the data source object. Available in API version 63.0 and later. |
| externalObjectName | string | The external data source object. Available in API version 63.0 and later. |
| externalRecordIdentifier | string | The identifier for the data source. |
| externalSchemaName | string | The name of the schema within the external database. Available in API version 63.0 and later. |
| masterLabel | string | Required. The UI name for the data source object. |
| objectCategory | string | The category of the data source object. |
| objectType | DataObjectType (enumeration of type string) | The object type. Possible values are:APIObjectTable |
| sourceObject | string | The developer name of the source object for the data source object. |
| storageType | StorageType (enumeration of type string) | The type of storage used for data source object. Available in API version 63.0 and later. Possible values are:ExternalLocal |
| templateVersion | int | The version number of the data source object. |