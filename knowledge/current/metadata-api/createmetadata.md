---
title: "createMetadata()"
domain: metadata-api
topic: createmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.132Z
estimatedTokens: 1080
keywords: [createMetadata, Adds, new, metadata, components, organization, synchronously., Syntax, Usage, Version, Permissions, Note, Required, Fields, Valid, Data, Values, Basic, Steps, Creating]
---

# createMetadata()

> Adds one or more new metadata components to your
            organization synchronously.

# createMetadata()

Adds one or more new metadata components to your organization synchronously.

## Syntax

```

```

## Usage

Use the createMetadata() call to create any component that extends [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). All components must be of the same type in the same call. For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

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

The metadata components being created determine required fields. For more information about specific component types, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

## Valid Data Values

You must supply values that are valid for the field’s data type, such as integers for integer fields (not alphabetic characters). In your client application, follow the data formatting rules specified for your programming language and development tool. (Your development tool handles the appropriate mapping of data types in SOAP messages.)

## String Values

When storing values in string fields, the API trims any leading and trailing whitespace. For example, if the value of a label field is entered as "MyObject ", the value is stored in the database as "MyObject".

## Basic Steps for Creating Metadata Components

Follow this process to create metadata components.

1.  Design an array, and populate it with the components that you want to create. All components must be of the same type.
2.  Call createMetadata() with the component array passed in as an argument.
3.  A SaveResult object is returned for each component you tried to create. It contains information about whether the operation was successful, the name of the component created, and any errors returned if the operation wasn’t successful.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | Metadata[] | Array of one or more metadata components.Limit: 10. (For CustomMetadata and CustomApplication only, the limit is 200.)You must submit arrays of only one type of component. For example, you can submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[SaveResult](atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm "Contains result information for the createMetadata, updateMetadata, or renameMetadata call.")\[\]

## Code Examples

```
SaveResult[] = metadatabinding.createMetadata(
                Metadata[] metadata);
```

```apex
public void createCustomObjectSync() {
    try {
        CustomObject co = new CustomObject();
        String name = "MyCustomObject1";
        co.setFullName(name + "__c");
        co.setDeploymentStatus(DeploymentStatus.Deployed);
        co.setDescription("Created by the Metadata API");
        co.setEnableActivities(true);
        co.setLabel(name + " Object");
        co.setPluralLabel(co.getLabel() + "s");
        co.setSharingModel(SharingModel.ReadWrite);

        CustomField nf = new CustomField();
        nf.setType(FieldType.Text);
        nf.setLabel(co.getFullName() + " Name");
        co.setNameField(nf);

        SaveResult[] results = metadataConnection
                .createMetadata(new Metadata[] { co });

        for (SaveResult r : results) {
            if (r.isSuccess()) {
                System.out.println("Created component: " + r.getFullName());
            } else {
                System.out
                        .println("Errors were encountered while creating "
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
