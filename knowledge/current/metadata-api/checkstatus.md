---
title: "checkStatus()"
domain: metadata-api
topic: checkstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.106Z
keywords: [checkStatus, Note, Syntax, Usage, Version, Sample, Code—Java, Arguments, Response]
---

# checkStatus()

# checkStatus()

Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Starting in API version 29.0, you no longer have to call [checkStatus()](#meta_checkstatus "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") after a [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm#meta_deploy "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call to get information about deployments. Similarly, starting in API version 31.0, you no longer have to call [checkStatus()](#meta_checkstatus "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") after a [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm#meta_retrieve "The retrieve() call retrieves XML file representations of components in an organization.") call. The [checkStatus()](#meta_checkstatus "Deprecated. Checks the status of asynchronous metadata calls create(), update(), or delete(), or the declarative metadata call retrieve(). This call is removed as of API version 31.0 and is available only in earlier versions.") call has been replaced by [checkDeployStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkdeploystatus.htm "Checks the status of declarative metadata call deploy().") and [checkRetrieveStatus()](atlas.en-us.api_meta.meta/api_meta/meta_checkretrievestatus.htm "Checks the status of the declarative metadata call checkRetrieveStatus() and returns the zip file contents.") for deploy and retrieve operations respectively.

## Syntax

```

```

## Usage

Use this call to check whether an asynchronous metadata call or declarative metadata call has completed.

## Version

This call is available only in API version 30.0 and earlier. This call isn’t available in API version 31.0 and later.

## Sample Code—Java

See [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm) for sample Java code using this call.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| ids | ID[] | Array of one or more IDs. Each ID is returned in an AsyncResult and corresponds to a component being created, updated, deleted, deployed, or retrieved. |

## Response

[AsyncResult](atlas.en-us.api_meta.meta/api_meta/meta_asyncresult.htm "Contains the ID of a deployment or retrieval. In API version 28.0 and earlier, contains status information of any asynchronous metadata call.")\[\]