---
title: "OkHttp: The Underlying Network Library"
domain: mobile-sdk
topic: okhttp-the-underlying-network-library
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:24.971Z
estimatedTokens: 262
keywords: [OkHttp, Underlying, Network, Library, Beginning, Mobile, SDK, 4.2, Android, REST, system, uses, v3.2.0, open-source, external, Square, Open, Source, architecture, replaces, Google, Volley, past, releases, result, longer, WrappedRestRequest]
---

> Beginning with Mobile SDK 4.2, the Android REST request system
   uses OkHttp (v3.2.0), an open-source external library from Square Open Source, as its underlying
   architecture. This library replaces the Google Volley library from past releases. As a result,
   Mobile SDK no longer defines the WrappedRestRequest
   class.

# OkHttp: The Underlying Network Library

Beginning with Mobile SDK 4.2, the Android REST request system uses OkHttp (v3.2.0), an open-source external library from Square Open Source, as its underlying architecture. This library replaces the Google Volley library from past releases. As a result, Mobile SDK no longer defines the WrappedRestRequest class.

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
