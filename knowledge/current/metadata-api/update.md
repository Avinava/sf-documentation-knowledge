---
title: "update()"
domain: metadata-api
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.720Z
estimatedTokens: 1834
keywords: [Deprecated, Updates, components, organization, asynchronously, call, removed, API, version, 31.0, earlier, versions, updateMetadata, renameMetadata, instead]
---

# update()

> Deprecated. Updates one or more components in your organization asynchronously. This
    call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata()  or renameMetadata()  instead.

# update()

Deprecated. Updates one or more components in your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata() or renameMetadata() instead.

This call can be used to update any of the objects that extend [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

## Syntax

```

```

## Usage

Use this call to update one or more components. This call is analogous to the ALTER TABLE statement in SQL.

## Version

This call is available in API version 30.0 and earlier only. This call isn’t available in API version 31.0 and later. Use [updateMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm "Updates one or more metadata components in your organization synchronously.") instead to update metadata components or [renameMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_renameMetadata.htm "Renames a metadata component in your organization synchronously.") to rename a metadata component.

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Required Fields

You must supply values for all the required fields in the component.

## Valid Field Values

You must supply values that are valid for the field’s data type, such as integers for integer fields (not alphabetic characters). In your client application, follow the data formatting rules specified for your programming language and development tool. (Your development tool handles the appropriate mapping of data types in SOAP messages).

## String Values

When storing values in string fields, the API trims any leading and trailing white space. For example, if the value of a label field is entered as "MyObject ", the value is stored in the database as "MyObject".

## Basic Steps for Updating Metadata Components

Use this process to update metadata components:

1.  Create an array of UpdateMetadata components, and populate it with the components you want to update. All components must be of the same type.
2.  Invoke the update() call, passing in the array of metadata components to update.
3.  An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned for each component you try to update, and is updated with status information as the operation moves from a queue to completed or error state. In a loop, call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") until the status values in [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") indicate that all the update operations are completed. Start with a wait time of 1 second between iterations of [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") calls, and double the wait time each time you make a subsequent call.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | UpdateMetadata[] | Array of one or more UpdateMetadata data structures that represent the components you wish to update.Limit: 10.You must submit arrays of only one type of component. For example, you could submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## UpdateMetadata

One or more UpdateMetadata objects are defined in the metadata argument. This object can be used to update any of the objects that extend [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type."). Each UpdateMetadata object has the following fields:

| Field | Field Type | Description |
| --- | --- | --- |
| currentName | string | The API name of the component or field before the update. For example, if you wanted to update a CustomObject named Foo, the value of this field would be Foo__c. This value is supplied because this call can change the name, and the value here provides mapping. |
| metadata | Metadata | Full specification of the component or field you want to update. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")\[\]

#### See Also

-   [updateMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm "Updates one or more metadata components in your organization synchronously.")

-   [create()](atlas.en-us.api_meta.meta/api_meta/meta_create.htm "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.")

-   [delete()](atlas.en-us.api_meta.meta/api_meta/meta_delete.htm "Deprecated. Deletes one or more components from your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.")

-   [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.")

## Code Examples

```
AsyncResult[] = metadataConnection.update(UpdateMetadata[] metadata);
```

```apex
public void updateCustomObject() {
  try {
    CustomObject co = new CustomObject();
    String name = "MyCustomObject";
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
    
    UpdateMetadata updateMetadata = new UpdateMetadata();
    updateMetadata.setMetadata(co);
    updateMetadata.setCurrentName("TheCurrentName");
    
    AsyncResult[] ars = metadataConnection.update(new UpdateMetadata[] 
        { updateMetadata });
    AsyncResult asyncResult = ars[0];
    // set initial wait time to one second in milliseconds
    long waitTimeMilliSecs = 1000;
    while (!asyncResult.isDone()) {
      Thread.sleep(waitTimeMilliSecs);
      // double the wait time for the next iteration
      waitTimeMilliSecs *= 2;
      asyncResult = metadataConnection.checkStatus(
        new String[] {asyncResult.getId()})[0];
      System.out.println("Status is: " + asyncResult.getState());
    }
    
    if (asyncResult.getState() != AsyncRequestState.Completed) {
      System.out.println(asyncResult.getStatusCode() + " msg: " +
          asyncResult.getMessage());
    }
  } catch (InterruptedException ie) {
    ie.printStackTrace();
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Metadata Components and Types (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- updateMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm)
- renameMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_renameMetadata.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- CustomObject (atlas.en-us.api_meta.meta/api_meta/customobject.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- delete() (atlas.en-us.api_meta.meta/api_meta/meta_delete.htm)
