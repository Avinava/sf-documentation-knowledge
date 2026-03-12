---
title: "checkRetrieveStatus()"
domain: metadata-api
topic: checkretrievestatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:37.442Z
estimatedTokens: 1595
keywords: [checkRetrieveStatus, Checks, status, declarative, metadata, call, zip, file, contents, Usage, Retrieving, Second, Process, Sample, Code—Java]
---

# checkRetrieveStatus()

> Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.

# checkRetrieveStatus()

Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.

## Syntax

In API version 34.0 and later:

```

```

In API version 33.0 and earlier:

```

```

## Usage

Use checkRetrieveStatus() to check the progress of the metadata [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#meta_retrieve "The retrieve() call retrieves XML file representations of components in an organization.") operation. The RetrieveResult object that this method returns indicates when the asynchronous retrieve() call is completed. If the retrieval is completed, RetrieveResult contains the zip file contents by default. Use the following process to retrieve metadata components with the retrieve() call.

1.  Issue a retrieve() call to start the asynchronous retrieval. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. Note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field, and use it for the next step.
2.  Issue a [checkRetrieveStatus()](# "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") call, and pass in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object from the first step. Check the value of the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field of the returned [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."). If it’s true, the call is completed, and you proceed to the next step. Otherwise, repeat this step to call [checkRetrieveStatus()](# "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field is true.
3.  Retrieve the zip file ([zipFile](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveResult_zipFile)) field and other desired fields from [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."), which the final call to [checkRetrieveStatus()](# "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") returned in the previous step.

In API version 31.0 and later, the process of making a retrieve() call has been simplified. You no longer have to call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") after a retrieve() call to obtain the status of the retrieve operation. Instead, make calls to [checkRetrieveStatus()](# "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") only. If the retrieve operation is in progress, call [checkRetrieveStatus()](# "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the retrieve operation is completed. The [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call is still supported in versions API version 30.0 or earlier, but isn’t available in API version 31.0 and later.

## Retrieving the Zip File in a Second Process

By default, checkRetrieveStatus() returns the zip file on the last call to this operation when the retrieval is completed (RetrieveResult.isDone() == true) and then deletes the zip file from the server. Subsequent calls to checkRetrieveStatus() for the same retrieve operation can’t retrieve the zip file after it has been deleted. Starting with API version 34.0, pass a boolean value for the includeZip argument of checkRetrieveStatus() to indicate whether to retrieve the zip file. The includeZip argument gives you the option to retrieve the file in a separate process after the retrieval operation is completed. For example, a service polls the retrieval status by calling checkRetrieveStatus(id, false) in a loop. This call returns the status of the retrieval operation, but doesn’t retrieve the zip file. After the retrieval operation is completed, another process, such as a background file transfer service, calls checkRetrieveStatus(id, true) to retrieve the zip file. This last call causes the zip file to be deleted from the server.

```

```

## Sample Code—Java

See the [retrieve() sample code](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#sample_java_retrieve) for sample usage of this call.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | ID | ID obtained from an AsyncResult object returned by a retrieve() call or a subsequent RetrieveResult object returned by a checkRetrieveStatus() call. |
| includeZip | boolean | Set to true to retrieve the zip file. You can retrieve the zip file only after the retrieval operation is completed. After the zip file is retrieved, it’s deleted from the server. Set to false to check the status of the retrieval without attempting to retrieve the zip file. If set to null, this argument defaults to true, which means that the zip file is retrieved on the last call to checkRetrieveStatus() when the retrieval has finished.This argument is available in API version 34.0 and later. |

## Response

[RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm "The retrieve() call returns an array of RetrieveResult objects.")

## Code Examples

```
RetrieveResult = metadatabinding.checkRetrieveStatus(ID id, boolean includeZip);
```

```
RetrieveResult = metadatabinding.checkRetrieveStatus(ID id);
```

```
// First process: Poll the retrieval but don’t retrieve the zip file.
AsyncResult asyncResult = metadataConnection.retrieve(retrieveRequest);
String asyncResultId = asyncResult.getId();
// Wait for the retrieve to complete
int poll = 0;
long waitTimeMilliSecs = ONE_SECOND;
RetrieveResult result = null;
do {
    Thread.sleep(waitTimeMilliSecs);
    // Check the status but don’t retrieve zip file.
    result = metadataConnection.checkRetrieveStatus(asyncResultId, false);
} while (!result.isDone());

// Second process: Retrieve the zip file.
// For example, this process can be a background file transfer service.
// Retrieve the zip file.
result = metadataConnection.checkRetrieveStatus(asyncResultId, true);
// Get the zip file from the RetrieveResult (result) variable
if (result.getStatus() == RetrieveStatus.Succeeded) {
    ByteArrayInputStream bais = new ByteArrayInputStream(result.getZipFile());
    // ...
}
```

## Related Topics

- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- AsyncResult (atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm)
- done (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- RetrieveResult (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- zipFile (atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm)
- checkStatus() (atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm)
- retrieve() sample code (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
