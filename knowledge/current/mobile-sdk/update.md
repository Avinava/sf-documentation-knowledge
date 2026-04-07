---
title: "Update"
domain: mobile-sdk
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.225Z
estimatedTokens: 260
keywords: [Updates, requested, record, prevent, occurring, modified, since, date, iOS, Android]
---

# Update

> Updates specified fields of the requested record with the given values. Can also
        prevent the update from occurring if the record has been modified since a given
        date.

# Update

Updates specified fields of the requested record with the given values. Can also prevent the update from occurring if the record has been modified since a given date.

## Parameters

-   API version (string, optional)
-   Object type (string)
-   Object ID (string)
-   Fields (map, optional)—Maps fields to be updated to their new values
-   “If unmodified since” date (date, optional)—Fulfills the request only if the record hasn’t been modified since the given date

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForUpdate(apiVersion: String?, objectType: String?, objectId: String?, fields: Map<String?, Any?>?): RestRequest fun getRequestForUpdate(apiVersion: String?, objectType: String?, objectId: String?, fields: Map<String?, Any?>?, ifUnmodifiedSinceDate: Date?): RestRequest

Java

```

```

## See Also

-   [“Update a Record” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_update_fields.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForUpdate(withObjectType:objectId:fields:)

RestClient.shared.requestForUpdate(withObjectType:objectId:fields:ifUnmodifiedSince:)
```

```
- (SFRestRequest *)requestForUpdateWithObjectType:(NSString *)objectType 
	                                  objectId:(NSString *)objectId
	                                    fields:(nullable NSDictionary<NSString*, id> *)fields 
                                       apiVersion:(nullable NSString *)apiVersion;

- (SFRestRequest *)requestForUpdateWithObjectType:(NSString *)objectType
	                                  objectId:(NSString *)objectId
	                                    fields:(nullable NSDictionary<NSString*, id> *)fields
	                     ifUnmodifiedSinceDate:(nullable NSDate *) ifUnmodifiedSinceDate 
                                       apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForUpdate(String apiVersion, 
    String objectType, String objectId, Map<String, Object> fields)

public static RestRequest getRequestForUpdate(String apiVersion, 
    String objectType, String objectId, Map<String, Object> fields, 
    Date ifUnmodifiedSinceDate)
```
