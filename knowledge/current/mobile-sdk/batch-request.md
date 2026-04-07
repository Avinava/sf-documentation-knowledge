---
title: "Batch Request"
domain: mobile-sdk
topic: batch-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.235Z
estimatedTokens: 310
keywords: [Android, Batch, Executes, subrequests, iOS]
---

> Executes a batch of subrequests.

# Batch Request

Executes a batch of subrequests.

Returns a RestRequest object containing a batch of up to 25 subrequests specified in a list of RestRequest objects. Each subrequest counts against rate limits.

## Parameters

-   requests (array/list)
-   haltOnError (Boolean)
-   apiVersion (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Java

```

```

## See Also

-   [Batch and Composite Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm "Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. In Swift, Mobile SDK extensions reduce the pain of building and configuring these complex requests.") (iOS)
-   [Batch and Composite Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_rest_apis_batch_composite.htm "Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. Mobile SDK classes take the pain out of building and configuring these complex requests.") (Android)
-   [“Composite Batch” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_batch.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.batchRequest(requests:haltOnError:apiVersion:)
```

```
- (SFRestRequest *) batchRequest:(NSArray<SFRestRequest *> *)requests 
                     haltOnError:(BOOL)haltOnError 
                      apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static BatchRequest getBatchRequest(String apiVersion, boolean haltOnError, List<RestRequest> requests) throws JSONException
```

## Related Topics

- Batch and Composite Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm)
- Batch and Composite Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/android_rest_apis_batch_composite.htm)
