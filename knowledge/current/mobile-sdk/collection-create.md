---
title: "Collection Create"
domain: mobile-sdk
topic: collection-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.032Z
estimatedTokens: 272
keywords: [Collection, Creates, records, iOS, Android, React, Native]
---

# Collection Create

> Creates a collection of records of the specified object type.

# Collection Create

Creates a collection of records of the specified object type.

Mobile SDK provides a custom response object for parsing Collection request results. See [Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm "Handles responses for all Mobile SDK Collection requests.").

## Parameters

For collections, you can disallow partially successful results by specifying an all-or-none parameter. When you set this parameter to true, Mobile SDK rolls back the entire request if any record creation fails.

-   API version (string)
-   All or None (Boolean)
-   Fields (array)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val request = RestRequest.getRequestForCollectionCreate(ApiVersionStrings.getVersionNumber(this), allOrNone, records)

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
let request = RestClient.shared.requestForCreate(allOrNone: allOrNone, records: records, 
    apiVersion: nil)
```

```
- (SFRestRequest*) requestForCollectionCreate:(BOOL)allOrNone 
                                      records:(NSArray<NSDictionary*>*)records 
                                   apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForCollectionCreate(String apiVersion, 
    boolean allOrNone, JSONArray records)
```

```
collectionCreate = <T>(
  allOrNone: boolean,
  records: Array<Record<string, unknown>>,
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
): void
```

## Related Topics

- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
