---
title: "Using Files in iOS Native Apps"
domain: mobile-sdk
topic: using-files-in-ios-native-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.555Z
estimatedTokens: 500
keywords: [Files, iOS, Native, Apps, handle, convenience, defined, SFRestAPI, category, parallel, API, Android, hybrid, They, send]
---

# Using Files in iOS Native Apps

> To handle files in native iOS apps, use convenience methods defined in the SFRestAPI (Files) category. These methods parallel the files
      API for Android native and hybrid apps. They send requests to the same list of REST APIs, but
      use different underpinnings.

# Using Files in iOS Native Apps

To handle files in native iOS apps, use convenience methods defined in the SFRestAPI (Files) category. These methods parallel the files API for Android native and hybrid apps. They send requests to the same list of REST APIs, but use different underpinnings.

For example, the following code snippet calls the requestForOwnedFilesList:page: method to retrieve a SFRestRequest object. It then sends the request object to the server, specifying its owning object as the delegate that receives the response.

```

```

This example passes nil to the first parameter (userId). This value tells the requestForOwnedFilesList:page: method to use the ID of the context, or logged in, user. Passing 0 to the pageNum parameter tells the method to fetch the first page.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Swift versions of SFRestAPI (Files) methods are not defined explicitly by Mobile SDK. To code these methods in Swift, use the autocomplete suggestions offered by the Xcode compiler. These suggested method and parameter names are determined by Swift compiler heuristics and can differ from their Objective-C equivalents.

## REST Responses and Multithreading

The SalesforceNetwork library always dispatches REST responses to the thread where your SFRestDelegate currently runs. This design accommodates your app no matter how your delegate intends to handle the server response. When you receive the response, you can do whatever you like with the returned data. For example, you can cache it, store it in a database, or immediately blast it to UI controls. If you send the response directly to the UI, however, remember that your delegate must dispatch its messages to the main thread.

-   **[Managing Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_ios_managing.htm)**


#### See Also

-   [Files API Reference](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_files.htm)

## Code Examples

```
SFRestRequest *request = [[SFRestAPI sharedInstance] requestForOwnedFilesList:nil page:0];
[[SFRestAPI sharedInstance] send:request delegate:self];
...
```

## Related Topics

- Managing Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_ios_managing.htm)
- Files API Reference (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_files.htm)
