---
title: "Error Handling"
domain: metadata-api
topic: error-handling
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:25.501Z
estimatedTokens: 642
keywords: [Error, Handling, Metadata, API, client, application, identify, resolve, runtime, errors]
---

> Metadata API calls return error information that your client application
  can use to identify and resolve runtime errors.

# Error Handling

Metadata API calls return error information that your client application can use to identify and resolve runtime errors.

Metadata API provides these types of error handling.

-   Since the Metadata API uses the enterprise or partner WSDLs to authenticate, it uses SOAP fault messages defined in those WSDLs for errors resulting from badly formed messages, failed authentication, or similar problems. Each SOAP fault has an associated ExceptionCode. For more details, see Error Handling in the SOAP API Developer Guide.
-   For errors with the asynchronous create(), update(), and delete() calls, see the error status code in the statusCode field in the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object for the associated component.
-   For errors with the synchronous CRUD calls, see the error status code in the statusCode field of the [Error](atlas.en-us.api_meta.meta/api_meta/meta_error.htm "Represents an error that occurred during a synchronous CRUD (createMetadata(), updateMetadata(), or deleteMetadata()) operation.") object corresponding to each error in the array returned by the errors field of the appropriate result object. For example, the result object of [createMetadata()](atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm "Adds one or more new metadata components to your organization synchronously.") is [SaveResult](atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm "Contains result information for the createMetadata, updateMetadata, or renameMetadata call.").
-   For errors with [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org."), see the problem and success fields in the [DeployMessage](atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm#deploymessage) object for the associated component.
-   For errors with [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization."), see the problem field in the [RetrieveMessage](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_retrievemessage) object for the associated component.

For sample code, see [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm#meta_quickstart_java_sample).

## Related Topics

- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- Error (atlas.en-us.api_meta.meta/api_meta/meta_error.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- SaveResult (atlas.en-us.api_meta.meta/api_meta/meta_saveResult.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- DeployMessage (atlas.en-us.api_meta.meta/api_meta/meta_deployresult.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- RetrieveMessage (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- Step 3: Walk Through the Java Sample Code (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm)
