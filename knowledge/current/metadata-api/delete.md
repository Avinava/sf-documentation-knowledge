---
title: "delete()"
domain: metadata-api
topic: delete
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:38.348Z
estimatedTokens: 1596
keywords: [Deprecated, Deletes, components, organization, asynchronously, call, removed, API, version, 31.0, earlier, versions, deleteMetadata, instead, Usage]
---

# delete()

> Deprecated. Deletes one or more components from your organization asynchronously. This
    call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.

# delete()

Deprecated. Deletes one or more components from your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use deleteMetadata() instead.

You can use this call to delete any of the objects that extend [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type."). For more details, see [Metadata Components and Types](atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm "Metadata components are not based on sObjects, like objects in the API. Instead, they are based on metadata types, such as ApexClass and CustomObject, which extend Metadata, the base class for all metadata types. A component is an instance of a metadata type.").

## Syntax

```

```

## Usage

Use this call to delete one or more components from your organization.

## Version

This call is available in API version 30.0 and earlier only. This call isn’t available in API version 31.0 and later. Use [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.") instead.

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

1.  Determine the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) of each component you want to delete. See [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") for more details on the [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) field. You can only delete components of the same type in a single call.
2.  Invoke the delete() call, passing in the array of metadata components with [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) specified.
3.  An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned for each component you try to delete, and is updated with status information as the operation moves from a queue to completed or error state. Call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") in a loop until the status values in [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") indicate that all the delete operations are completed. Start with a wait time of 1 second between iterations of [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") calls, and double the wait time each time you make a subsequent call.

## Sample Code—Java

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| metadata | Metadata[] | Array of one or more metadata components. Only set the fullName field in the Metadata object.Limit: 10.You must submit arrays of only one type of component. For example, you could submit an array of 10 custom objects or 10 profiles, but not a mix of both types. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")\[\]

#### See Also

-   [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.")

-   [create()](atlas.en-us.api_meta.meta/api_meta/meta_create.htm "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.")

-   [update()](atlas.en-us.api_meta.meta/api_meta/meta_update.htm "Deprecated. Updates one or more components in your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use updateMetadata() or renameMetadata() instead.")

-   [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.")

## Code Examples

```
AsyncResult[] = metadataConnection.delete(Metadata[] metadata);
```

```apex
public void deleteCustomObject() {
  try {
    CustomObject co = new CustomObject();
    co.setFullName("MyCustomObject__c");
    AsyncResult[] ars = metadataConnection.create(new Metadata[]
       {co});
    AsyncResult asyncResult = ars[0];
    long waitTimeMilliSecs = 1000;
    while (!asyncResult.isDone()) {
      Thread.sleep(waitTimeMilliSecs);
      // double the wait time for the next iteration
      waitTimeMilliSecs *= 2;
      asyncResult = mdConnection.checkStatus(
        new String[] {asyncResult.getId()})[0];
      System.out.println("Status is: " + asyncResult.getState());
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  } catch (InterruptedException ie) {
    ie.printStackTrace();
  }
}
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Metadata Components and Types (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- Modify
                    Metadata Through Metadata API Functions (atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm)
- fullName (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- update() (atlas.en-us.api_meta.meta/api_meta/meta_update.htm)
