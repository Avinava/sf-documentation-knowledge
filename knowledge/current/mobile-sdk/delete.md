---
title: "Delete"
domain: mobile-sdk
topic: delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.084Z
estimatedTokens: 133
keywords: [Deletes, iOS, Android]
---

# Delete

> Deletes the object of the given type and the given ID

# Delete

Deletes the object of the given type and the given ID

## Parameters

-   API version (string)
-   Object type (string)
-   Object ID (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForDelete(apiVersion: String?, objectType: String?, objectId: String?): RestRequest

Java

```

```

## See Also

-   [“SObject Rows” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_retrieve.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForDelete(withObjectType:objectId:)
```

```
- (SFRestRequest *)requestForDeleteWithObjectType:(NSString *)objectType 
	                                  objectId:(NSString *)objectId 
                                       apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForDelete(String apiVersion, String objectType, String objectId)
```
