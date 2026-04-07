---
title: "Upsert"
domain: mobile-sdk
topic: upsert
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.232Z
estimatedTokens: 259
keywords: [Upsert, Updates, inserts, external, data, iOS, Android]
---

# Upsert

> Updates or inserts an object from external data.

# Upsert

Updates or inserts an object from external data.

Salesforce inserts or updates a record depending on whether the external ID currently exists in the external ID field. To force Salesforce to create a new record, set the name of the external ID field to “Id” and the external ID to null.

## Parameters

-   API version (string, optional)
-   Object type (string)
-   External ID field (string)
-   External ID (string, optional)
-   Fields (map, optional)—Maps each field name to an object containing its value

If fields is null, the upserted record is empty.

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForUpsert(apiVersion: String?, objectType: String?, externalIdField: String?, externalId: String?, fields: Map<String?, Any?>?): RestRequest

Java

```

```

## See Also

-   [“Insert or Update (Upsert) a Record Using an External ID” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_upsert.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForUpsert(withObjectType:externalIdField:externalId:fields:)
```

```
- (SFRestRequest *)requestForUpsertWithObjectType:(NSString *)objectType
	                           externalIdField:(NSString *)externalIdField
	                                externalId:(nullable NSString *)externalId
	                                    fields:(NSDictionary<NSString*, id> *)fields 
                                       apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForUpsert(String apiVersion, 
    String objectType, String externalIdField, String externalId, 
    Map<String, Object> fields)
```
