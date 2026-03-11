---
title: "renameMetadata()"
domain: metadata-api
topic: renamemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.336Z
keywords: [renameMetadata, Syntax, Usage, Version, Permissions, Note, Basic, Steps, Renaming, Metadata, Components, Sample, Code—Java, Arguments, Response]
---

# renameMetadata()

# renameMetadata()

Renames a metadata component in your organization synchronously.

## Syntax

```

```

## Usage

Use the renameMetadata() call to rename one metadata component in your organization. This call executes synchronously, meaning the call returns only when the operation completes.

You can use this call to rename any of the objects that extend [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

## Version

Available in API version 30.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Basic Steps for Renaming Metadata Components

Use this process to rename a metadata component.

1.  Determine the metadata type of the component you want to rename, its current full name, and the new full name. See [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") for more details on the fullName field.
2.  Invoke the renameMetadata() call. For the first argument, pass in the name of the metadata type. Pass in the old full name as the second argument and the new full name as the last argument.
    
    A SaveResult object that contains information about whether the operation was successful is returned. If successful, the object contains the name of the renamed component, which is the new name. If it wasn’t successful, the object returns any errors.
    

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadataType | string | The metadata type of the components to rename. |
| oldFullName | string | The current component full name. |
| newFullName | string | The full name of the new component. |

## Response

[SaveResult](atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm "Contains result information for the createMetadata, updateMetadata, or renameMetadata call.")