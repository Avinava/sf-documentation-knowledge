---
title: "deleteMetadata()"
domain: metadata-api
topic: deletemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.816Z
keywords: [deleteMetadata, Syntax, Usage, Version, Permissions, Note, Rules, Guidelines, Basic, Steps, Deleting, Metadata, Components, Sample, Code—Java, Arguments, Response]
---

# deleteMetadata()

# deleteMetadata()

Deletes one or more metadata components from your organization synchronously.

## Syntax

```

```

## Usage

Use the deleteMetadata() call to delete any component that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). All components must be of the same type in the same call. For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

This call executes synchronously, which means that the call returns only when the operation completes.

Starting in API version 34.0, this call supports the [AllOrNoneHeader](atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm "Indicates whether to roll back all metadata changes when some of the records in a call result in failures.") header. By default, if the AllOrNoneHeader isn’t used in any API version, this call can delete a partial set of records for records with no errors (equivalent to AllOrNoneHeader=false). If AllOrNoneHeader is set to true, no records are deleted if one or more records cause a failure.

## Version

Available in API version 30.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Rules and Guidelines

When deleting components, consider the following rules and guidelines:

-   Your client application must be logged in with sufficient access rights to delete individual components within the specified component. For more information, see [Factors that Affect Data Access](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/obj_ref_data_access.htm "HTML (New Window)") in the Salesforce Object Reference.
-   In addition, sometimes you also need permission to access this component’s parent component.
-   To ensure referential integrity, this call supports cascading deletions. If you delete a parent component, you delete its children automatically, as long as each child component can be deleted.

## Basic Steps for Deleting Metadata Components

Use the following process to delete metadata components:

1.  Determine the metadata type of the components you want to delete and the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) of each component to delete. You can delete only components of the same type in a single call. The full names must match one or more full names returned by the listMetadata() call, which includes namespace prefixes. If you obtain the fullName from a package manifest file, and the component has a namespace prefix, prepend the namespace prefix to the fullName. Use this syntax: namespacePrefix\_\_ComponentName. For example, for the custom object component MyCustomObject\_\_c and the namespace MyNS, the fullName is MyNS\_\_MyCustomObject\_\_c. See [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") for more details on the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) field.
2.  Invoke the deleteMetadata() call. For the first argument, pass in the name of the metadata type. For the second argument, pass in an array of full names corresponding to the components you wish to delete.
    
    A DeleteResult object is returned for each component you try to delete. It contains information about whether the operation was successful, the name of the deleted component, and any errors returned if the operation wasn’t successful.
    

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadataType | string | The metadata type of the components to delete. |
| fullNames | string[] | Array of full names of the components to delete.Limit: 10. (For CustomMetadata and CustomApplication only, the limit is 200.)Submit arrays of only one type of component. For example, you can submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[DeleteResult](atlas.en-us.api_meta.meta/api_meta/meta_deleteResult.htm#meta_deleteResult "Contains result information for the deleteMetadata call.")\[\]