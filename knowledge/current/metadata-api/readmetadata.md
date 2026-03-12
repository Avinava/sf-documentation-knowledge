---
title: "readMetadata()"
domain: metadata-api
topic: readmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.119Z
estimatedTokens: 925
namespace: MyNS
keywords: [readMetadata, metadata, components, organization, synchronously., Syntax, Usage, Version, Permissions, Note, Basic, Steps, Reading, Metadata, Components, Sample, Code—Java, Arguments, Response]
---

# readMetadata()

> Returns one or more metadata
components from your organization synchronously.

**Namespace:** `MyNS`

# readMetadata()

Returns one or more metadata components from your organization synchronously.

## Syntax

```

```

## Usage

Use the readMetadata() call to retrieve any component that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). All components must be of the same type in the same call. For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

This call executes synchronously, which means that the call returns only when the operation completes.

## Version

Available in API version 30.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Basic Steps for Reading Metadata Components

Use the following process to read metadata components:

1.  Determine the metadata type of the components you want to read and the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) of each component to read.

    The full names must match one or more full names returned by the listMetadata() call, which includes namespace prefixes. If you obtain the fullName from a package manifest file, and the component has a namespace prefix, prepend the namespace prefix to the fullName. Use this syntax: namespacePrefix\_\_ComponentName. For example, for the custom object component MyCustomObject\_\_c and the namespace MyNS, the fullName is MyNS\_\_MyCustomObject\_\_c. For more information about the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) field, see [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.").

    You can read only components of the same type in a single call.

2.  Invoke the readMetadata() call. For the first argument, pass in the name of the metadata type. The metadata type must match one of the values returned by the describeMetadata() call. For the second argument, pass in an array of full names corresponding to the components you wish to get.
3.  A ReadResult is returned that contains an array of Metadata components. Cast each returned Metadata object to the metadata type you specified in the call to get the component’s properties.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadataType | string | The metadata type of the components to read. |
| fullNames | string[] | Array of full names of the components to read.Limit: 10. (For CustomMetadata and CustomApplication only, the limit is 200.)You must submit arrays of only one type of component. For example, you can submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[ReadResult](atlas.en-us.api_meta.meta/api_meta/meta_readResult.htm "Contains result information for the readMetadata call.")

## Code Examples

```
ReadResult = metadataConnection.readMetadata(string metadataType, string[] fullNames);
```

```apex
public void readCustomObjectSync() {
    try {
        ReadResult readResult = metadataConnection
                .readMetadata("CustomObject", new String[] {
                        "MyCustomObject1__c", "MyCustomObject2__c" });
        Metadata[] mdInfo = readResult.getRecords();
        System.out.println("Number of component info returned: "
                + mdInfo.length);
        for (Metadata md : mdInfo) {
            if (md != null) {
                CustomObject obj = (CustomObject) md;
                System.out.println("Custom object full name: "
                        + obj.getFullName());
                System.out.println("Label: " + obj.getLabel());
                System.out.println("Number of custom fields: "
                        + obj.getFields().length);
                System.out.println("Sharing model: "
                        + obj.getSharingModel());
            } else {
                System.out.println("Empty metadata.");
            }
        }
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

## Related Topics

- ReadResult (atlas.en-us.api_meta.meta/api_meta/meta_readResult.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Metadata Components and Types (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- fullName (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- CustomMetadata (atlas.en-us.api_meta.meta/api_meta/meta_custommetadata.htm)
- CustomApplication (atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm)
