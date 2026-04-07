---
title: "Collection Retrieve"
domain: mobile-sdk
topic: collection-retrieve
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.279Z
estimatedTokens: 274
keywords: [Android, Collection, Retrieve, Retrieves, match, IDs, iOS, React, Native]
---

> Retrieves a collection of objects of the given object type that match the given
        object IDs.

# Collection Retrieve

Retrieves a collection of objects of the given object type that match the given object IDs.

Mobile SDK provides a custom response object for parsing Collection request results. See [Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm "Handles responses for all Mobile SDK Collection requests.").

## Parameters

If you provide a field list, Mobile SDK retrieves only those fields. Otherwise, it returns all accessible standard and custom fields.

-   API version (string, optional)
-   Object type (string)
-   Object IDs (array)
-   Field list (array)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val request = RestRequest.getRequestForCollectionRetrieve(ApiVersionStrings.getVersionNumber(this), objectType, objectIds, fieldList)

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
let request = RestClient.shared.requestForRetrieve(withObjectType: objectType, 
    objectIds: objectIds!, fieldList: fieldList!, apiVersion: nil)
```

```
- (SFRestRequest*) requestForCollectionRetrieve:(NSString*)objectType 
                                      objectIds:(NSArray<NSString*>*)objectIds 
                                      fieldList:(NSArray<NSString*>*)fieldList 
                                     apiVersion:(nullable NSString *)apiVersion;
```

```apex
RestRequest getRequestForCollectionRetrieve(String apiVersion, String objectType, 
    List<String> objectIds, List<String> fieldList)
```

```
collectionRetrieve = <T>(
  objectType: string,
  ids: Array<string>,
  fields: Array<string>,
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
): void
```

## Related Topics

- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
