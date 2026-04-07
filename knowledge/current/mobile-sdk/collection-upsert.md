---
title: "Collection Upsert"
domain: mobile-sdk
topic: collection-upsert
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.067Z
estimatedTokens: 359
keywords: [Collection, Upsert, Updates, inserts, objects, external, data, iOS, Android, React, Native]
---

# Collection Upsert

> Updates or inserts a collection of objects from external data.

# Collection Upsert

Updates or inserts a collection of objects from external data.

Mobile SDK provides a custom response object for parsing Collection request results. See [Collection Response](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm "Handles responses for all Mobile SDK Collection requests.").

## Parameters

Salesforce inserts or updates a record depending on whether an external ID currently exists in the external ID field. To force Salesforce to create a new record, set the name of the external ID field to “Id” and the external ID value to null.

For collections, you can disallow partial upserts by specifying an all-or-none parameter. When you set this parameter to true, Mobile SDK rolls back the entire request if any record upsert fails.

-   API version (string, optional)
-   "All or none" preference (Boolean)
-   Object type (string)
-   External ID field name (string)
-   Records (array)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val request = RestRequest.getRequestForCollectionUpsert(ApiVersionStrings.getVersionNumber(this), allOrNone, objectType, externalIdFieldName, records)

Java

```

```

## React Native

```

```

## See Also

-   [“sObject Collections” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "HTML (New Window)")

## Code Examples

```
let request = RestClient.shared.requestForCollectionUpsert(allOrNone: allOrNone, 
    withObjectType: objectType, externalIdField: externalIdFieldName!,
    records: records!, apiVersion: nil)
```

```
- (SFRestRequest*) 
requestForCollectionUpsert:(BOOL)allOrNone 
                objectType:(NSString*)objectType 
           externalIdField:(NSString*)externalIdField 
                   records:(NSArray<NSDictionary*>*)records 
                apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForCollectionUpsert(
    String apiVersion, boolean allOrNone, String objectType, String externalIdField, 
    JSONArray records) 
    throws JSONException
```

```
collectionUpsert = <T>(
  allOrNone: boolean,
  objectType: string,
  externalIdField: string,
  records: Array<Record<string, unknown>>,
  successCB: ExecSuccessCallback<T>,
  errorCB: ExecErrorCallback,
): void
```

## Related Topics

- Collection Response (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_apis_collection_response.htm)
