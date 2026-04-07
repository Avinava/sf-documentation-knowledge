---
title: "Composite Request"
domain: mobile-sdk
topic: composite-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.296Z
estimatedTokens: 446
keywords: [Android, Composite, RestRequest, execute, iOS]
---

> Returns a RestRequest object that you then use to
        execute the composite request.

# Composite Request

Returns a RestRequest object that you then use to execute the composite request.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Regardless of the number of subrequests, each composite request counts as one API call.

## Parameters

-   apiVersion (string)
-   requests
    -   iOS

        -   requests (array)—Array of subrequests
        -   refIds (array)—Array of reference IDs for the requests. The number of elements should match the number of requests.

        Android

        refIdToRequests (map)— LinkedHashMap of reference IDs to RestRequest objects. Requests are played in the order in which they’re mapped.

-   allOrNone (Boolean)—Flag that indicates whether to treat all requests as a single transactional block in error conditions.

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

```

```

Java

```

```

## See Also

-   [Batch and Composite Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm "Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. In Swift, Mobile SDK extensions reduce the pain of building and configuring these complex requests.") (iOS)
-   [Batch and Composite Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_rest_apis_batch_composite.htm "Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. Mobile SDK classes take the pain out of building and configuring these complex requests.") (Android)
-   [“Composite” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.compositeRequest(requests:refIds:allOrNone:apiVersion:)
```

```
- (SFRestRequest *)compositeRequest:(NSArray<SFRestRequest *> *) requests 
                             refIds:(NSArray<NSString *> *)refIds 
                          allOrNone:(BOOL)allOrNone 
                         apiVersion:(nullable NSString *)apiVersion;
```

```
@Throws(JSONException::class)
fun getCompositeRequest(apiVersion: String?, allOrNone: Boolean, 
refIdToRequests: LinkedHashMap<String?, RestRequest?>): CompositeRequest
```

```apex
public static CompositeRequest getCompositeRequest(String apiVersion, 
    boolean allOrNone, LinkedHashMap<String, RestRequest> refIdToRequests) 
    throws JSONException
```

## Related Topics

- Batch and Composite Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm)
- Batch and Composite Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_rest_apis_batch_composite.htm)
