---
title: "Search Result Layout"
domain: mobile-sdk
topic: search-result-layout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.378Z
estimatedTokens: 176
keywords: [Android, Search, Result, Layout, query, iOS]
---

> Gets the search result layout for up to 100 objects with a single query.

# Search Result Layout

Gets the search result layout for up to 100 objects with a single query.

## Parameters

-   API version (string, optional)
-   Object list (list of strings)

## iOS

Swift

For the object list, set forSearchResultLayout to a string of comma-separated object names.

```

```

Objective-C

```

```

## Android

Kotlin

@Throws(UnsupportedEncodingException::class) fun getRequestForSearchResultLayout(apiVersion: String?, objectList: List<String>): RestRequest

Java

```

```

## See Also

-   [“Search Result Layouts” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_search_layouts.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forSearchResultLayout:apiVersion:)
```

```
- (SFRestRequest *) 
requestForSearchResultLayout:(NSString*)objectList
                  apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForSearchResultLayout(String apiVersion, List<String> objectList) throws UnsupportedEncodingException
```
