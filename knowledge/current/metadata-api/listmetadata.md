---
title: "listMetadata()"
domain: metadata-api
topic: listmetadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.344Z
keywords: [listMetadata, Syntax, Usage, Permissions, Note, Sample, Code—Java, Arguments, Response]
---

# listMetadata()

# listMetadata()

This call retrieves property information about metadata components in your organization. Data is returned for the components that match the criteria specified in the queries parameter. The queries array can contain up to three ListMetadataQuery queries for each call. This call supports every metadata type: both top-level, such as CustomObject and ApexClass, and child types, such as CustomField and RecordType.

## Syntax

```

```

## Usage

This call is useful when you want to identify individual components in package.xml for a [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") call or if you want a high-level view of particular metadata types in your organization. For example, you can use this call to return a list of names of all the [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") or [Layout](atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm#meta_layouts "Represents the metadata associated with a page layout. For more information, see Page Layouts in Salesforce Help.") components in your organization. You can use this information to make a subsequent [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") call to return a subset of these components. For more information about working with package.xml, see [Deploying and Retrieving Metadata](atlas.en-us.api_meta.meta/api_meta/file_based.htm).

This call is synchronous, so the results are returned in one call. This call differs from asynchronous calls, such as [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization."), where at least one subsequent call is required to get the results.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Sample Code—Java

This sample code lists information about your custom objects. The code assumes that the SOAP binding has already been established.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| queries | ListMetadataQuery[] | A list of objects that specify which components you’re interested in. |
| asOfVersion | double | The API version for the metadata listing request. If you don't specify a value in this field, it defaults to the API version specified when you logged in. This field allows you to override the default and set another API version. For example, you can list the metadata for a metadata type that was added in a later version than the API version specified when you logged in. This field is available in API version 18.0 and later. |

## Response

[FileProperties](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_fileproperties)