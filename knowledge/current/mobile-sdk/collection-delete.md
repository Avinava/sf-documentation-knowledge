---
title: "Collection Delete"
domain: mobile-sdk
topic: collection-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.267Z
estimatedTokens: 272
keywords: [Android, Collection, Deletes, match, IDs, iOS, React, Native]
---

> Deletes the objects in a collection that match the given object IDs.

# Collection Delete

Deletes the objects in a collection that match the given object IDs.

Mobile SDK provides a custom response object for parsing Collection request results. See [Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm "Handles responses for all Mobile SDK Collection requests.").

## Parameters

For collections, you can disallow partial updates by specifying an all-or-none parameter. When you set this parameter to true, Mobile SDK rolls back the entire request if any record deletion fails.

-   API version (string)
-   All or none (Boolean)
-   Object Ids (array)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val request = RestRequest.getRequestForCollectionDelete(ApiVersionStrings.getVersionNumber(this), allOrNone, objectIds)

Java

```

```

## React Native

```

```

## See Also

-   [“SObject Collections” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "HTML (New Window)")

## Code Examples

```
let request = RestClient.shared.requestForDelete(allOrNone: allOrNone, 
    withObjects: objectIds, apiVersion: nil)
```

```
- (SFRestRequest*) 
requestForCollectionDelete:(BOOL)allOrNone 
                 objectIds:(NSArray<NSString*>*)objectIds 
                apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForCollectionDelete(String apiVersion, 
    boolean allOrNone, List<String> objectIds) 
    throws UnsupportedEncodingException
```

```
collectionDelete = <T>(
  ids: Array<string>,
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
): void
```

## Related Topics

- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
