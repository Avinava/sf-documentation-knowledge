---
title: "Collection Update"
domain: mobile-sdk
topic: collection-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.060Z
estimatedTokens: 276
keywords: [Collection, Updates, requested, records, iOS, Android, React, Native]
---

# Collection Update

> Updates the requested collection with the given
        records.

# Collection Update

Updates the requested collection with the given records.

For collections, you can disallow partial updates by specifying an all-or-none parameter. When you set this parameter to true, Mobile SDK rolls back the entire request if any record update fails.

Mobile SDK provides a custom response object for parsing Collection request results. See [Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm "Handles responses for all Mobile SDK Collection requests.").

## Parameters

-   API version (string, optional)
-   "All or none" preference (Boolean)
-   Records (array of sObjects)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val request = RestRequest.getRequestForCollectionUpdate(ApiVersionStrings.getVersionNumber(this), allOrNone, records)

Java

```

```

## React Native

```

```

## See Also

-   [“sObject Collections” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "HTML (New Window)")

## Code Examples

```
let request = RestClient.shared.requestForCollectionUpdate(allOrNone, 
    records:records, apiVersion: apiVersion)
```

```
- (SFRestRequest*) requestForCollectionUpdate:(BOOL)allOrNone 
                                      records:(NSArray<NSDictionary*>*)records 
                                   apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForCollectionUpdate(String apiVersion, 
    boolean allOrNone, JSONArray records) throws JSONException
```

```
collectionUpdate= <T>(
  allOrNone: boolean,
  records: Array<Record<string, unknown>>,
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
): void
```

## Related Topics

- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
