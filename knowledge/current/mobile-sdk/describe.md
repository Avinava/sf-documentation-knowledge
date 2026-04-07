---
title: "Describe"
domain: mobile-sdk
topic: describe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.311Z
estimatedTokens: 158
keywords: [Describe, Android, Completely, object’s, metadata, levels, including, URLs, child, relationships, iOS]
---

> Completely describes the object’s metadata at all levels, including fields, URLs, and
        child relationships.

# Describe

Completely describes the object’s metadata at all levels, including fields, URLs, and child relationships.

## Parameters

-   API version (string)
-   Object type (string)

## iOS

Swift

Delegate Method

```

```

Block Method

```

```

Objective-C

Delegate Method

```

```

Block Method

```

```

## Android

Kotlin

fun getRequestForDescribe(apiVersion: String?, objectType: String?): RestRequest

Java

```

```

## See Also

-   [“sObject Describe” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_describe.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForDescribe(withObjectType:)
```

```
describe(_:onFailure:onSuccess:)
```

```
- (SFRestRequest *)
    requestForDescribeWithObjectType:(NSString *)objectType 
                          apiVersion:(nullable NSString *)apiVersion;
```

```
- (SFRestRequest *) performDescribeWithObjectType:(NSString *)objectType 
	                                 failBlock:(SFRestFailBlock)failBlock 
	                             completeBlock:(SFRestDictionaryResponseBlock)completeBlock;
```

```apex
public static RestRequest getRequestForDescribe(String apiVersion, String objectType)
```
