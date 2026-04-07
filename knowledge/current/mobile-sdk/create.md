---
title: "Create"
domain: mobile-sdk
topic: create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.079Z
estimatedTokens: 153
keywords: [Creates, record, iOS, Android]
---

# Create

> Creates a record of the specified object type.

# Create

Creates a record of the specified object type.

## Parameters

-   API version (string)
-   Object type (string)
-   (Optional) Map of each field’s name (string) to an object containing its value

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForCreate(apiVersion: String?, objectType: String?, fields: Map<String?, Any?>?): RestRequest

Java

```

```

## See Also

-   [“sObject Basic Information” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_basic_info.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForCreate(withObjectType:fields:)
```

```
- (SFRestRequest *)requestForCreateWithObjectType:(NSString *)objectType 
	                                    fields:(nullable NSDictionary<NSString*, id> *)fields 
                                       apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForCreate(String apiVersion, 
    String objectType, Map<String, Object> fields)
```
