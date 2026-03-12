---
title: "updateMetadata()"
domain: metadata-api
topic: updatemetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.410Z
estimatedTokens: 984
keywords: [updateMetadata, Updates, metadata, components, organization, synchronously., Syntax, Usage, Version, Permissions, Note, Required, Fields, Valid, Field, Values, Basic, Steps, Updating, Metadata]
---

# updateMetadata()

> Updates one or more metadata components in your
            organization synchronously.

# updateMetadata()

Updates one or more metadata components in your organization synchronously.

## Syntax

```

```

## Usage

Use the updateMetadata() call to update any component that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). All components must be of the same type in the same call. For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

This call executes synchronously, which means that the call returns only when the operation completes.

Starting in API version 34.0, this call supports the [AllOrNoneHeader](atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm "Indicates whether to roll back all metadata changes when some of the records in a call result in failures.") header. By default, if AllOrNoneHeader isn’t used in API version 34.0 and later, this call can save a partial set of records for records with no errors (equivalent to AllOrNoneHeader=false). In API version 33.0 and earlier, the default behavior is to only save all records when there are no failures in any record in the call (equivalent to AllOrNoneHeader=true).

## Version

Available in API version 30.0 and later.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Required Fields

You must supply values for all the required fields in the component.

## Valid Field Values

You must supply values that are valid for the field’s data type, such as integers for integer fields (not alphabetic characters). In your client application, follow the data formatting rules specified for your programming language and development tool. (Your development tool handles the appropriate mapping of data types in SOAP messages.)

## String Values

When storing values in string fields, the API trims any leading and trailing white space. For example, if the value of a label field is entered as "MyObject ", the value is stored in the database as "MyObject".

## Basic Steps for Updating Metadata Components

Use this process to update metadata components.

1.  Create an array of the components you want to update. All components must be of the same type.
2.  Invoke the updateMetadata() call, passing in the array of metadata components to update.

    A SaveResult object is returned for each component you try to update. It contains information about whether the operation was successful, the name of the component updated, and any errors returned if the operation wasn’t successful.


## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | Metadata[] | Array of one or more metadata components you wish to update.Limit: 10. (For CustomMetadata and CustomApplication only, the limit is 200.)You must submit arrays of only one type of component. For example, you can submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[SaveResult](atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm#meta_saveResult "Contains result information for the createMetadata, updateMetadata, or renameMetadata call.")\[\]

## Code Examples

```
SaveResult[] = metadataConnection.updateMetadata(Metadata[] metadata);
```

```apex
public void updateCustomObjectSync() {
    try {
        CustomObject co = new CustomObject();
        String name = "MyCustomObject1";
        co.setFullName(name + "__c");
        co.setDeploymentStatus(DeploymentStatus.Deployed);
        co.setDescription("Updated description");
        co.setLabel(name + " Object Update");
        co.setPluralLabel(co.getLabel() + "s");
        co.setSharingModel(SharingModel.ReadWrite);

        // Name field with a type and label is required
        CustomField cf = new CustomField();
        cf.setType(FieldType.Text);
        cf.setLabel(co.getFullName() + " Name");
        co.setNameField(cf);

        SaveResult[] results = metadataConnection
                .updateMetadata(new Metadata[] { co });

        for (SaveResult r : results) {
            if (r.isSuccess()) {
                System.out.println("Updated component: " + r.getFullName());
            } else {
                System.out
                        .println("Errors were encountered while updating "
                                + r.getFullName());
                for (Error e : r.getErrors()) {
                    System.out.println("Error message: " + e.getMessage());
                    System.out.println("Status code: " + e.getStatusCode());
                }
            }
        }
    } catch (ConnectionException ce) {
        ce.printStackTrace();
    }
}
```

## Related Topics

- SaveResult (atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Metadata Components and Types (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- AllOrNoneHeader (atlas.en-us.api_meta.meta/api_meta/meta_allornoneheader.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- CustomMetadata (atlas.en-us.api_meta.meta/api_meta/meta_custommetadata.htm)
- CustomApplication (atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm)
