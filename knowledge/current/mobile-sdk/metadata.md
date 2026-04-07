---
title: "Metadata"
domain: mobile-sdk
topic: metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.321Z
estimatedTokens: 143
keywords: [Metadata, Android, provided, sObject, basic, iOS]
---

> Describes metadata provided by sObject basic information for the specified object
        .

# Metadata

Describes metadata provided by sObject basic information for the specified object .

## Parameters

-   API version (string)
-   Object type (string)

## iOS

Swift

Delegate Method

```

```

Objective-C

Delegate Method

```

```

## Android

Kotlin

fun getRequestForMetadata(apiVersion: String?, objectType: String?): RestRequest

Java

```

```

## See Also

-   [“sObject Basic Information” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_basic_info.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForMetadata(withObjectType:apiVersion:)
```

```
- (SFRestRequest *)
    requestForMetadataWithObjectType:(NSString *)objectType 
                          apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForMetadata(String apiVersion, String objectType)
```
