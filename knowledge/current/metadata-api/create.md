---
title: "create()"
domain: metadata-api
topic: create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.418Z
keywords: [create, Syntax, Usage, Version, Permissions, Note, Required, Fields, Valid, Data, Values, String, Basic, Steps, Creating, Metadata, Components, Sample, Code—Java, Arguments]
---

# create()

# create()

Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.

## Syntax

```

```

## Usage

Use this call to add one or more metadata components to your organization.

## Version

This call is available in API version 30.0 and earlier only. This call isn’t available in API version 31.0 and later. Use [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") instead.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Required Fields

The metadata components being created determine required fields. For more information about specific component types, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

## Valid Data Values

You must supply values that are valid for the field’s data type, such as integers for integer fields (not alphabetic characters). In your client application, follow the data formatting rules specified for your programming language and development tool. (Your development tool handles the appropriate mapping of data types in SOAP messages).

## String Values

When storing values in string fields, the API trims any leading and trailing whitespace. For example, if the value of a label field is entered as "MyObject ", the value is stored in the database as "MyObject".

## Basic Steps for Creating Metadata Components

Use the following process to create metadata components:

1.  Design an array, and populate it with the components you want to create. All components must be of the same type.
2.  Call [create()](# "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.") with the component array passed in as an argument.
3.  An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned for each component you try to create, and is updated with status information as the operation moves from a queue to completed or error state. Call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") in a loop until the status values in [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") indicate that all create operations are completed. Start with a wait time of 1 second between iterations of [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") calls, and double the wait time each time you make a subsequent call.

## Sample Code—Java

See [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm) for sample Java code using the create() call.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | Metadata[] | Array of one or more metadata components.Limit: 10.You must submit arrays of only one type of component. For example, you could submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")\[\]

#### See Also

-   [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.")
    
-   [update()](atlas.en-us.api_meta.meta/api_meta/meta_update.htm "Deprecated. Updates one or more components in your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata() or renameMetadata() instead.")
    
-   [delete()](atlas.en-us.api_meta.meta/api_meta/meta_delete.htm "Deprecated. Deletes one or more components from your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.")
    
-   [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.")