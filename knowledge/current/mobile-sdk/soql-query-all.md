---
title: "SOQL Query All"
domain: mobile-sdk
topic: soql-query-all
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.212Z
estimatedTokens: 202
keywords: [SOQL, Query, Executes, result, includes, current, deleted, objects, satisfy, iOS, Android]
---

# SOQL Query All

> Executes the given SOQL string. The result includes all current and deleted objects
        that satisfy the query.

# SOQL Query All

Executes the given SOQL string. The result includes all current and deleted objects that satisfy the query.

The batchSize parameter can range from 200 to 2,000 (default value) and is not guaranteed to be the actual size at runtime. By default, returns up to 2,000 records at once. If you specify a batch size, this request returns records in batches up to that size. Specifying a batch size does not guarantee that the returned batch is the requested size.

## Parameters

-   API version (string, optional)
-   Query (string)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Not supported.

## See Also

-   [“QueryAll” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_queryall.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forQueryAll:apiVersion:)
```

```
- (SFRestRequest *)requestForQueryAll:(NSString *)soql 
                           apiVersion:(nullable NSString *)apiVersion;
```
