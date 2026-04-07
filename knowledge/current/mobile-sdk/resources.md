---
title: "Resources"
domain: mobile-sdk
topic: resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.145Z
estimatedTokens: 126
keywords: [Resources, API, version, including, resource, URI, iOS, Android]
---

# Resources

> Gets available resources for the specified API version, including resource name and
        URI.

# Resources

Gets available resources for the specified API version, including resource name and URI.

## Parameters

-   API version (string, optional)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForResources(apiVersion: String?): RestRequest

Java

```

```

## See Also

-   [“Resources by Version” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_discoveryresource.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForResources()
```

```
- (SFRestRequest *)requestForResources 
    apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForResources(String apiVersion)
```
