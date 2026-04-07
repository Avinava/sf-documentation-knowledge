---
title: "SOSL Search"
domain: mobile-sdk
topic: sosl-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.373Z
estimatedTokens: 238
keywords: [Android, SOSL, Search, Performs, iOS]
---

> Performs the given SOSL search.

# SOSL Search

Performs the given SOSL search.

Executes the given SOQL query and returns the requested fields of records that satisfy the query.

The batchSize parameter can range from 200 to 2,000 (default value) and is not guaranteed to be the actual size at runtime. By default, returns up to 2,000 records at once. If you specify a batch size, this request returns records in batches up to that size. Specifying a batch size does not guarantee that the returned batch is the requested size.

## Parameters

-   API version (string, optional)
-   SOSL query (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

@Throws(UnsupportedEncodingException::class) fun getRequestForSearch(apiVersion: String?, q: String?): RestRequest

Java

```

```

## See Also

-   [“Search” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_search.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forSearch:apiVersion:)
```

```
- (SFRestRequest *)requestForSearch:(NSString *)sosl 
                         apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForSearch(String apiVersion, String q) 
    throws UnsupportedEncodingException
```
