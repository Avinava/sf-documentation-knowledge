---
title: "Managing the Request Queue"
domain: mobile-sdk
topic: managing-the-request-queue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.906Z
estimatedTokens: 375
keywords: [Managing, Queue, RestClient, internally, uses, instance, OkHttpClient, manage, REST, API, requests, underlying, OkHttp, directly, cancel, pending, specific, Call, RestClient.sendAsync, Mobile, SDK]
---

> The RestClient class internally uses an instance
        of the OkHttpClient class to manage REST API requests.
        You can access underlying OkHttp objects directly to cancel pending requests. To manage a
        specific request, you can use the OkHttp Call object
        returned by the RestClient.sendAsync()
        Mobile SDK method.

# Managing the Request Queue

The RestClient class internally uses an instance of the OkHttpClient class to manage REST API requests. You can access underlying OkHttp objects directly to cancel pending requests. To manage a specific request, you can use the OkHttp Call object returned by the RestClient.sendAsync() Mobile SDK method.

## Example

The following examples show how to perform some common network operations with OkHttpClient.

Common Imports

```

```

Obtain the Current OkHttp Client Handle

To get the handle of the OkHttpClient that the current RestClient instance is using:

Kotlin

```

```

Java

```

```

Obtain the OkHttp Dispatcher

Kotlin

```

```

Java

```

```

Cancel All Pending Calls

Kotlin

```

```

Java

```

```

Store the OkHttp Handle to a REST Request

Kotlin

```

```

Java

```

```

Cancel a Specific REST Request Using a Stored Handle

Kotlin

```

```

Java

```

```

For more information, see [square.github.io/okhttp/](http://square.github.io/okhttp/ "HTML (New Window)").

#### See Also

-   [OkHttp: The Underlying Network Library](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_native_classes_wrappedrestrequest.htm "Beginning with Mobile SDK 4.2, the Android REST request system uses OkHttp (v3.2.0), an open-source external library from Square Open Source, as its underlying architecture. This library replaces the Google Volley library from past releases. As a result, Mobile SDK no longer defines the WrappedRestRequest class.")

## Code Examples

```
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Call;
import okhttp3.Dispatcher;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
```

```
var okClient = restClient.getOkHttpClient()
```

```
OkHttpClient okClient = restClient.getOkHttpClient();
```

```
var dispatcher = restClient.getOkHttpClient().dispatcher()
```

```
Dispatcher dispatcher = restClient.getOkHttpClient().dispatcher();
```

## Related Topics

- OkHttp: The Underlying Network Library (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_native_classes_wrappedrestrequest.htm)
