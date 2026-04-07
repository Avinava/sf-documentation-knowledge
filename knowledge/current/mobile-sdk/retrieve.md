---
title: "Retrieve"
domain: mobile-sdk
topic: retrieve
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.367Z
estimatedTokens: 229
keywords: [Retrieve, Android, Retrieves, sObject, record, iOS]
---

> Retrieves a single sObject record by object ID.

# Retrieve

Retrieves a single sObject record by object ID.

If you provide a list of fields, Mobile SDK retrieves only those fields. Otherwise, it returns all accessible standard and custom fields.

## Parameters

-   API version (string, optional)
-   Object type (string)
-   Object ID (string)
-   Field list (list of strings, optional)

## iOS

In iOS, the fieldList parameter expects a comma-separated list of field names, or nil.

Swift

```

```

Objective-C

```

```

## Android

Kotlin

fun getRequestForRetrieve(apiVersion: String?, objectType: String?, objectId: String?, fieldList: List<String>?): RestRequest

Java

```

```

## See Also

-   For conditions governing field data retrieval, see [“Get Field Values from a Standard Object Record” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_get_field_values.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForRetrieve(withObjectType:objectId:fieldList:apiVersion:)
```

```
- (SFRestRequest *)requestForRetrieveWithObjectType:(NSString *)objectType
	                                    objectId:(NSString *)objectId 
	                                   fieldList:(nullable NSString *)fieldList 
                                         apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForRetrieve(String apiVersion, String objectType, String objectId, List<String> fieldList) throws UnsupportedEncodingException
```
