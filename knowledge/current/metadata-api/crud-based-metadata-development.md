---
title: "CRUD-Based Metadata Development"
domain: metadata-api
topic: crud-based-metadata-development
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:37.514Z
estimatedTokens: 1428
keywords: [CRUD-Based, Metadata, Development, CRUD-based, metadata, calls, create, update, delete, setup, configuration, components, organization, application., include, custom, objects, fields, metadata., mimic]
---

# CRUD-Based Metadata Development

> Use the CRUD-based metadata calls to create, update, or delete setup and
        configuration components for your organization or application. These configuration
        components include custom objects, custom fields, and other configuration metadata. The
        metadata calls mimic the behavior in the Salesforce user interface for creating, updating,
        or deleting components. Whatever rules apply there also apply to these calls.

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

## Code Examples

```apex
import com.sforce.soap.metadata.*;

/**
 * Sample that logs in and creates a custom object through the metadata API
 */
public class CRUDSampleCreate {
    private MetadataConnection metadataConnection;

    // one second in milliseconds
    private static final long ONE_SECOND = 1000;

    public CRUDSampleCreate() {
    }

    public static void main(String[] args) throws Exception {
        CRUDSampleCreate crudSample = new CRUDSampleCreate();
        crudSample.runCreate();
    }

    /**
     * Create a custom object. This method demonstrates usage of the
     * create() and checkStatus() calls.
     *
     * @param uniqueName Custom object name should be unique.
     */
    private void createCustomObjectSync(final String uniqueName) throws Exception {
        final String label = "My Custom Object";
        CustomObject co = new CustomObject();
        co.setFullName(uniqueName);
        co.setDeploymentStatus(DeploymentStatus.Deployed);
        co.setDescription("Created by the Metadata API Sample");
        co.setEnableActivities(true);
        co.setLabel(label);
        co.setPluralLabel(label + "s");
        co.setSharingModel(SharingModel.ReadWrite);

        // The name field appears in page layouts, related lists, and elsewhere.
        CustomField nf = new CustomField();
        nf.setType(FieldType.Text);
        nf.setDescription("The custom object identifier on page layouts, related lists etc");
        nf.setLabel(label);
        nf.setFullName(uniqueName);
        customObject.setNameField(nf);

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
    }

    private void runCreate() throws Exception {
        metadataConnection = MetadataLoginUtil.login();
        // Custom objects and fields must have __c suffix in the full name.
        final String uniqueObjectName = "MyCustomObject__c";
        createCustomObjectSync(uniqueObjectName);
    }
}
```

```apex
import com.sforce.soap.metadata.*;

/**
 * Sample that logs in and creates a custom object through the metadata api
 */
public class CRUDSample {
    private MetadataConnection metadataConnection;

    // one second in milliseconds
    private static final long ONE_SECOND = 1000;

    public CRUDSample() {
    }

    public static void main(String[] args) throws Exception {
        CRUDSample crudSample = new CRUDSample();
        crudSample.runCreate();
    }

    /**
     * Create a custom object. This method demonstrates usage of the
     * create() and checkStatus() calls.
     *
     * @param uniqueName Custom object name should be unique.
     */
    private void createCustomObject(final String uniqueName) throws Exception {
        final String label = "My Custom Object";
        CustomObject customObject = new CustomObject();
        customObject.setFullName(uniqueName);
        customObject.setDeploymentStatus(DeploymentStatus.Deployed);
        customObject.setDescription("Created by the Metadata API Sample");
        customObject.setLabel(label);
        customObject.setPluralLabel(label + "s");
        customObject.setSharingModel(SharingModel.ReadWrite);

        // The name field appears in page layouts, related lists, and elsewhere.
        CustomField nf = new CustomField();
        nf.setType(FieldType.Text);
        nf.setDescription("The custom object identifier on page layouts, related lists etc");
        nf.setLabel(label);
        nf.setFullName(uniqueName);
        customObject.setNameField(nf);

        AsyncResult[] asyncResults = metadataConnection.create(
            new CustomObject[]{customObject});
        if (asyncResults == null) {
            System.out.println("The object was not created successfully");
            return;
        }

        long waitTimeMilliSecs = ONE_SECOND;

        // After the create() call completes, we must poll the results of the checkStatus()
        // call until it indicates that the create operation has completed.
        do {
            printAsyncResultStatus(asyncResults);
            waitTimeMilliSecs *= 2;
            Thread.sleep(waitTimeMilliSecs);
            asyncResults = metadataConnection.checkStatus(new String[]{asyncResults[0].getId()});
        } while (!asyncResults[0].isDone());

        printAsyncResultStatus(asyncResults);
    }

    private void printAsyncResultStatus(AsyncResult[] asyncResults) throws Exception {
        if (asyncResults == null || asyncResults.length == 0 || asyncResults[0] == null) {
            throw new Exception("The object status cannot be retrieved");
        }

        AsyncResult asyncResult = asyncResults[0]; //we are creating only 1 metadata object

        if (asyncResult.getStatusCode() != null) {
            System.out.println("Error status code: " +
                    asyncResult.getStatusCode());
            System.out.println("Error message: " + asyncResult.getMessage());
        }

        System.out.println("Object with id:" + asyncResult.getId() + " is " +
            asyncResult.getState());
    }

    private void runCreate() throws Exception {
        metadataConnection = MetadataLoginUtil.login();
        // Custom objects and fields must have __c suffix in the full name.
        final String uniqueObjectName = "MyCustomObject__c";
        createCustomObject(uniqueObjectName);
    }
}
```

## Related Topics

- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- updateMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_updateMetadata.htm)
- deleteMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_deleteMetadata.htm)
- Deploying and Retrieving Metadata (atlas.en-us.api_meta.meta/api_meta/file_based.htm)
- Step 3: Walk Through the Java Sample Code (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
