---
title: "retrieve()"
domain: metadata-api
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.451Z
keywords: [retrieve, Syntax, Usage, Note, Permissions, Arguments, Response, Sample, Code—Java]
---

# retrieve()

# retrieve()

The retrieve() call retrieves XML file representations of components in an organization.

## Syntax

```

```

## Usage

Use this call to retrieve file representations of components in an organization.

Here are the deploy limits. Limits can change without notice.

| Feature | Limit |
| --- | --- |
| Maximum compressed .zip folder size1 | Approximately 39 MB |
| Maximum uncompressed folder size2 | Approximately 600 MB |
| Maximum number of files in AppExchange packages | 35,000 |
| Maximum number of files in packages | 10,000 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can perform a **retrieve()** call for a big object only if its index is defined. If a big object is created in Setup and doesn’t yet have an index defined, you can’t retrieve it.

1 Metadata API base-64 encodes components after they’re compressed. The resulting .zip file can't exceed 50 MB. Base-64 encoding increases the size of the payload by approximately 22%, so your compressed payload can't exceed approximately 39 MB before encoding.

2 When deploying an unzipped project, all files in the project are compressed first. The maximum size of uncompressed components in an uncompressed project is 600 MB or less, depending on the files’ compression ratio. If the files have a high compression ratio, you can migrate a total of approximately 600 MB because the compressed size would be under 39 MB. However, if the components can't be compressed much, like binary static resources, you can migrate less than 600 MB.

In API version 31.0 and later, the process of making a retrieve() call has been simplified. You no longer have to call [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") after a retrieve() call to obtain the status of the retrieve operation. Instead, make calls to [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") only. If the retrieve operation is in progress, call [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the retrieve operation is completed. The [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call is still supported in versions API version 30.0 or earlier, but isn’t available in API version 31.0 and later.

For API version 31.0 or later, retrieve packaged or unpackaged components by using the following steps.

1.  Issue a retrieve() call to start the asynchronous retrieval. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. Note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field, and use it for the next step.
2.  Issue a [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") call, and pass in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value from the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object from the first step. Check the value of the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field of the returned [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."). If it’s true, the call is completed, and you proceed to the next step. Otherwise, repeat this step to call [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") again until the [done](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveresult_done) field is true.
3.  Retrieve the zip file ([zipFile](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#retrieveResult_zipFile)) field and other desired fields from [RetrieveResult](atlas.en-us.api_meta.meta/api_meta/meta_retrieveresult.htm#meta_retrieveresult "The retrieve() call returns an array of RetrieveResult objects."), which the final call to [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") returned in the previous step.

For API version 30.0 or earlier, retrieve packaged or unpackaged components by using the following steps.

1.  Issue a retrieve() call to start the asynchronous retrieval. An [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object is returned. If the call is completed, the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. Most often, the call isn’t completed quickly enough to be noted in the result. If it’s completed, note the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field returned, and skip the next step.
2.  If the call isn’t completed, issue a [checkStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkstatus.htm "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call in a loop using the value in the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) field of the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object, returned by the retrieve() call in the previous step. Check the [AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.") object returned until the [done](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#done) field contains true. The time taken to complete a retrieve() call depends on the size of the zip file being deployed, so use a longer wait time between iterations as the size of the zip file increases.
3.  Issue a [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") call to obtain the results of the retrieve() call, using the [id](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm#async_result_id) value returned in the first step.

For examples of manifest files, see [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.").

## Permissions

Your client application must be logged in with the Modify Metadata Through Metadata API Functions or Modify All Data permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If a user requires access to metadata but not to data, enable the [Modify Metadata Through Metadata API Functions](atlas.en-us.api_meta.meta/api_meta/meta_metadata_perm.htm "To use Metadata API, a user must have these things.") permission. Otherwise, enable the Modify All Data permission.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| retrieveRequest | RetrieveRequest | Encapsulates options for determining which packages or files are retrieved. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")

## Sample Code—Java

This sample shows how to retrieve components into a zip file. See the [deploy() sample code](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#sample_java_deploy) for details on how to deploy a zip file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

This sample requires API version 34.0 or later.

```

```