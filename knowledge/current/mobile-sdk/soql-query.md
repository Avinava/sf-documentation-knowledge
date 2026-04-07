---
title: "SOQL Query"
domain: mobile-sdk
topic: soql-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.394Z
estimatedTokens: 234
keywords: [Android, SOQL, Query, Executes, requested, records, satisfy, iOS]
---

> Executes the given SOQL query and returns the requested fields of records that satisfy
            the query.

# SOQL Query

Executes the given SOQL query and returns the requested fields of records that satisfy the query.

The batchSize parameter can range from 200 to 2,000 (default value) and is not guaranteed to be the actual size at runtime. By default, returns up to 2,000 records at once. If you specify a batch size, this request returns records in batches up to that size. Specifying a batch size does not guarantee that the returned batch is the requested size.

## Parameters

-   API version (string, optional)
-   Query (string)
-   Batch size (integer)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

@Throws(UnsupportedEncodingException::class) fun getRequestForQuery(apiVersion: String?, q: String?): RestRequest

Java

```

```

## See Also

-   [“Query” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forQuery:apiVersion:batchSize:)
```

```
- (SFRestRequest *)requestForQuery:(NSString *)soql 
                        apiVersion:(nullable NSString *)apiVersion
                         batchSize:(NSInteger)batchSize;
```

```apex
public static RestRequest 
    getRequestForQuery(String apiVersion, String q) 
    throws UnsupportedEncodingException

public static RestRequest 
    getRequestForQuery(String apiVersion, String q, int batchSize) 
    throws UnsupportedEncodingException
```
