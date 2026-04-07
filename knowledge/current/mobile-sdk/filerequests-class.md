---
title: "FileRequests Class"
domain: mobile-sdk
topic: filerequests-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.666Z
estimatedTokens: 383
keywords: [FileRequests, file, operation, requests, new, RestRequest, Applications, send, Salesforce, service, process, code, snippet, calls, ownedFilesList]
---

# FileRequests Class

> The FileRequests class
provides methods that create file operation requests. Each method
returns a new RestRequest object.
Applications send this object to the Salesforce service to process
the request. For example, the following code snippet calls the ownedFilesList() method to retrieve a RestReque

# FileRequests Class

The FileRequests class provides methods that create file operation requests. Each method returns a new RestRequest object. Applications send this object to the Salesforce service to process the request. For example, the following code snippet calls the ownedFilesList() method to retrieve a RestRequest object. It then sends the RestRequest object to the server using RestClient.sendAsync():

Kotlin

```

```

Java

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

This example passes null to the first parameter (userId). This value tells the ownedFilesList() method to use the ID of the context, or logged in, user. The second null, for the pageNum parameter, tells the method to fetch the first page of results.

See [Files and Networking](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_intro.htm) for a full description of FileRequests methods.

## Methods

For a full reference of FileRequests methods, see [Package com.salesforce.androidsdk.rest.files](https://forcedotcom.github.io/SalesforceMobileSDK-Android/com/salesforce/androidsdk/rest/files/package-summary.html "HTML (New Window)"). For a full description of the REST request and response bodies, go to **Connect REST API Developer Guide** | **Resources** | **Files Resources** at [http://www.salesforce.com/us/developer/docs/connectapi](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_files.htm "HTML (New Window)").

## Code Examples

```
val ownedFilesRequest = FileRequests.ownedFilesList(null, null)
val client = this.client
client?.sendAsync(ownedFilesRequest, object : AsyncRequestCallback {
    // Do something with the response
})
```

```
RestRequest ownedFilesRequest = FileRequests.ownedFilesList(null, null);
RestClient client = this.client;
client.sendAsync(ownedFilesRequest, new AsyncRequestCallback() {
    // Do something with the response
});
```

## Related Topics

- Files and Networking (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_intro.htm)
