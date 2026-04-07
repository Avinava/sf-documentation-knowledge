---
title: "Describe Global"
domain: mobile-sdk
topic: describe-global
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.095Z
estimatedTokens: 120
keywords: [Describe, objects, org, their, metadata, iOS, Android]
---

# Describe Global

> Returns a list of all available objects in your org and their metadata.

# Describe Global

Returns a list of all available objects in your org and their metadata.

## Parameters

-   API version (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForDescribeGlobal(apiVersion: String?): RestRequest

Java

```

```

## See Also

-   [“Describe Global” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_describeGlobal.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForDescribeGlobal()
```

```
- (SFRestRequest *)requestForDescribeGlobal 
    apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForDescribeGlobal(String apiVersion)
```
