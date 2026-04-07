---
title: "Using Files in Android Apps"
domain: mobile-sdk
topic: using-files-in-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.518Z
estimatedTokens: 327
keywords: [Files, Android, Apps, passes, userId, tells, ownedFilesList, context, logged-in, user, second, pageNum, fetch, results]
---

# Using Files in Android Apps

> This example passes null to the first parameter (userId). This value tells the ownedFilesList() method to use the ID
of the context, or logged-in, user. The second null, for the pageNum parameter, tells the method to
fetch the first page of results.

# Using Files in Android Apps

The FileRequests class provides static methods for creating RestRequest objects that perform file operations. Each method returns the new RestRequest object. Applications then call the ownedFilesList() method to retrieve a RestRequest object. It passes this object as a parameter to a function that uses the RestRequest object to send requests to the server:

```

```

This example passes null to the first parameter (userId). This value tells the ownedFilesList() method to use the ID of the context, or logged-in, user. The second null, for the pageNum parameter, tells the method to fetch the first page of results.

For native Android apps, file management classes and methods live in the com.salesforce.androidsdk.rest.files package.

-   **[Managing the Request Queue](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_android_managing.htm)**
    The RestClient class internally uses an instance of the OkHttpClient class to manage REST API requests. You can access underlying OkHttp objects directly to cancel pending requests. To manage a specific request, you can use the OkHttp Call object returned by the RestClient.sendAsync() Mobile SDK method.

#### See Also

-   [Files API Reference](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_files.htm)

## Code Examples

```
performRequest(FileRequests.ownedFilesList(null, null));
```

## Related Topics

- Managing the Request Queue (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_android_managing.htm)
- Files API Reference (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/reference_files.htm)
