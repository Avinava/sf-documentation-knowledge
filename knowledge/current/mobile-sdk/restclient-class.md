---
title: "RestClient Class"
domain: mobile-sdk
topic: restclient-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.524Z
estimatedTokens: 448
keywords: [RestClient, implies, Android, app’s, liaison, Salesforce, REST, API, sendSync, sendAsync]
---

# RestClient Class

> As its name implies, the RestClient class is an Android
      app’s liaison to the Salesforce REST API.

# RestClient Class

As its name implies, the RestClient class is an Android app’s liaison to the Salesforce REST API.

You don’t explicitly create new instances of the RestClient class. Instead, you use the ClientManager factory class to obtain a RestClient instance. Once you get the RestClient instance, you can use it to send REST API calls to Salesforce. The method you call depends on whether you’re calling from a UI context. See [ClientManager Class](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_native_classes_clientmanager.htm).

Use the following RestClient methods to send REST requests:

-   sendAsync()—Call this method if you obtained your RestClient instance by calling ClientManager.getRestClient().
-   sendSync()—Call this method if you obtained your RestClient instance by calling ClientManager.peekRestClient().

## sendSync() Method

You can choose from three overloads of RestClient.sendSync(), depending on the degree of information you can provide for the request.

## sendAsync() Method

The RestClient.sendAsync() method wraps your RestRequest object in a new instance of the OkHttpClient Call class. It then adds the Call object to the request queue and returns that object.

Tocancel a request while it’s pending, call cancel() on the Call object. To access the underlying request queue object, use the OkHttpClient class. See examples at [Managing the Request Queue](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_android_managing.htm "The RestClient class internally uses an instance of the OkHttpClient class to manage REST API requests. You can access underlying OkHttp objects directly to cancel pending requests. To manage a specific request, you can use the OkHttp Call object returned by the RestClient.sendAsync() Mobile SDK method.").

## Related Topics

- ClientManager Class (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_native_classes_clientmanager.htm)
- Managing the Request Queue (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/files_android_managing.htm)
