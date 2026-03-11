---
title: "CRUD-Based Metadata Development"
domain: metadata-api
topic: crud-based-metadata-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.975Z
keywords: [CRUD-Based, Metadata, Development, Note, Java, Sample, Synchronous, Calls, Asynchronous, Important]
---

# CRUD-Based Metadata Development

# CRUD-Based Metadata Development

Use the CRUD-based metadata calls to create, update, or delete setup and configuration components for your organization or application. These configuration components include custom objects, custom fields, and other configuration metadata. The metadata calls mimic the behavior in the Salesforce user interface for creating, updating, or deleting components. Whatever rules apply there also apply to these calls.

Metadata calls are different from the core, synchronous API calls in these ways.

-   Metadata API calls are available in a separate WSDL. To download the WSDL, log into Salesforce, from Setup, enter API in the Quick Find box, then select **API** and click the Download Metadata WSDL link.
-   After logging in, you must send Metadata API calls to the Metadata API endpoint, which has a different URL than SOAP API. Retrieve the metadataServerUrl from the LoginResult returned by your SOAP API login() call. For more information about SOAP API, see the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)").
-   Metadata calls are either synchronous or asynchronous. CRUD calls are synchronous in API version 30.0 and later, and similar to the API core calls the results are returned in a single call. In earlier API versions, create, update, and delete are only asynchronous, which means that the results aren’t immediately returned in one call.
-   There are synchronous metadata calls that map to the corresponding core SOAP API synchronous calls.
    -   [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") maps to the create() SOAP API call.
    -   [updateMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm "Updates one or more metadata components in your organization synchronously.") maps to the update() SOAP API call.
    -   [deleteMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm "Deletes one or more metadata components from your organization synchronously.") maps to the delete() SOAP API call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Metadata API also supports retrieve() and deploy() calls for retrieving and deploying metadata components. For more information, see [Deploying and Retrieving Metadata](atlas.en-us.api_meta.meta/api_meta/file_based.htm).

## Java Sample for CRUD-Based Development with Synchronous Calls

This section guides you through a sample Java client application that uses CRUD-based calls. This sample application performs the following main tasks.

1.  Uses the MetadataLoginUtil.java class to create a Metadata connection. For more information, see [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm).
2.  Calls [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") to create a custom object. This call returns the result in one call.
3.  Inspects the returned SaveResult object to check if the operation succeeded, and if it didn’t, writes the component name, error message, and status code to the output.

```

```

## Java Sample for CRUD-Based Development with Asynchronous Calls

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

The sample in this section depends on the asynchronous create() CRUD call. Asynchronous CRUD calls are no longer available as of API version 31.0 and are available only in earlier API versions.

This section guides you through a sample Java client application that uses asynchronous CRUD-based calls. This sample application performs the following main tasks:

1.  Uses the MetadataLoginUtil.java class to create a Metadata connection. For more information, see [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm).
2.  Calls [create()](atlas.en-us.api_meta.meta/api_meta/meta_create.htm "Deprecated. Adds one or more new metadata components to your organization asynchronously. This call is removed as of API version 31.0 and is available in earlier versions only. Use createMetadata() instead.") to create a custom object.
    
    Salesforce returns an [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object for each component you tried to create. The [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is updated with status information as the operation moves from a queue to completed or error state.
    
3.  Calls [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") in a loop until the status value in [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") indicates that the create operation is completed.

Note the error handling code that follows each API call.

```

```