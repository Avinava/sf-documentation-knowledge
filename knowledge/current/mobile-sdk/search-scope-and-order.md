---
title: "Search Scope and Order"
domain: mobile-sdk
topic: search-scope-and-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.383Z
estimatedTokens: 131
keywords: [Android, Search, Scope, Order, ordered, current, user’s, iOS]
---

> Gets an ordered list of objects in the current user’s default global search
        scope.

# Search Scope and Order

Gets an ordered list of objects in the current user’s default global search scope.

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

fun getRequestForSearchScopeAndOrder(apiVersion: String?): RestRequest

Java

```

```

## See Also

-   [“Search Scope and Order” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_search_scope_order.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForSearchScopeAndOrder(apiVersion:)
```

```
- (SFRestRequest *)requestForSearchScopeAndOrder 
    apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForSearchScopeAndOrder(String apiVersion)
```
