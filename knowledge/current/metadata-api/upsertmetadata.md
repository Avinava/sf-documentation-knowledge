---
title: "upsertMetadata()"
domain: metadata-api
topic: upsertmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.024Z
keywords: [upsertMetadata, Syntax, Usage, Version, Permissions, Note, Required, Fields, Valid, Field, Values, String, Basic, Steps, Upserting, Metadata, Components, Sample, Code—Java, Arguments]
---

# upsertMetadata()

# upsertMetadata()

Creates or updates one or more metadata components in your organization synchronously.

## Syntax

```

```

## Usage

Use the upsertMetadata() call to create or update any component that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). All components must be of the same type in the same call. For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

If the specified components currently exist in your organization, the upsertMetadata() call updates them. Otherwise, upsertMetadata() creates these components. The fullname field matches the components. This call executes synchronously, which means that the call returns only after the operation is completed.

Starting in API version 34.0, this call supports the [AllOrNoneHeader](atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm "Indicates whether to roll back all metadata changes when some of the records in a call result in failures.") header. By default, if AllOrNoneHeader isn’t used in API version 34.0 and later, this call can save a partial set of records for records with no errors (equivalent to AllOrNoneHeader=false). In API version 33.0 and earlier, the default behavior is to only save all records when there are no failures in any record in the call (equivalent to AllOrNoneHeader=true).

## Version

Available in API version 31.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Required Fields

You must supply values for all the required fields in the component.

## Valid Field Values

You must supply values that are valid for the field’s data type, such as integers (not alphabetic characters) for integer fields. In your client application, follow the data formatting rules that are specified for your programming language and development tool. (Your development tool handles the appropriate mapping of data types in SOAP messages.)

## String Values

The API trims any leading and trailing white space when storing values in string fields. For example, if the value of a label field is entered as " MyObject ", the value is stored in the database as "MyObject".

## Basic Steps for Upserting Metadata Components

Use this process to upsert metadata components.

1.  Create an array of [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") objects that correspond to the components that you want to create or update. All components must be of the same type.
2.  Invoke upsertMetadata(), passing in the array of metadata components that you created in the previous step.
    
    The upsertMetadata() call returns an array of UpsertResult objects. Each returned UpsertResult corresponds to a component that you upserted and contains information about the upsert operation—whether the operation was successful, the name of the component that was upserted, a flag indicating whether the component was created, and any errors that were returned if the operation wasn’t successful.
    

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | Metadata[] | An array of one or more metadata components that you want to create or updateLimit: 10.You must submit arrays of only one type of component. For example, you can submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[UpsertResult](atlas.en-us.api_meta.meta/api_meta/meta_upsertResult.htm#meta_upsertResult "Contains information about the result of the associated upsertMetadata() call.")\[\]